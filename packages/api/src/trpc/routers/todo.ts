import { Subject, Tag, Topic, Prisma } from "@prisma/client";
import { publicProcedure, router } from "../trpc";
import { z } from 'zod'
import {  TaskListIds } from "@ulld/utilities/types/todos";
import { ArrayUtilities } from "@ulld/utilities/utils/arrayUtilities";
import { addTodoListSchema, todoListAddTaskSchemaTrpc } from "../../plugins/native/todo/zod/general";
import { prisma } from "@ulld/database/db";
import { getToDoSearchParams, getParsedToDoSearchParams, todoStatusChangeSchema, todoStatusDueAtSchema, todoListNameSchema, zodArrayUnion, todoPriorityChangeSchema, parseTodoLists, taskIdItemSchema } from "@ulld/parsers/plugins/todos";



const getToDoLists = async <T extends number | undefined>(id?: T): Promise<T extends number ? TaskListIds : TaskListIds[]> => {
    return await prisma.toDoList[id ? "findFirst" : "findMany"]({
        ...(id && {
            where: {
                id: id
            }
        }),
        select: { label: true, id: true },
        orderBy: {
            lastUpdate: "desc"
        },
    }) as T extends number ? TaskListIds : TaskListIds[]
}

export const todoPageTaskSelect: Prisma.ToDoListSelect = {
    label: true,
    id: true,
    tasks: {
        include: {
            tags: true,
            topics: true,
            subjects: true,
            ToDoList: {
                select: {
                    label: true
                }
            }
        }
    },
    _count: true,
    createdAt: true,
    lastUpdate: true
}

const getToDoPageData = async (input: z.infer<typeof getToDoSearchParams>, listIds: number[]) => {
    return await prisma.toDoList.findMany({
        where: getParsedToDoSearchParams(input, listIds),
        select: todoPageTaskSelect,
    })
}


export const toDoRouter = router({
    getToDoLists: publicProcedure.input(z.number().optional()).query(async ({ input }) => {
        return await getToDoLists<typeof input>(input)
    }),
    getToDos: publicProcedure.input(getToDoSearchParams.omit({
        listNames: true
    })).query(async ({ input }) => {
        let lists = await getToDoLists<undefined>()
        const listIds = (input.listIds && input.listIds.length) ? input.listIds : (lists && lists.length) ? [lists[0].id] : []
        let res = await getToDoPageData(input, listIds)
        const parsedTodos = await parseTodoLists(res)
        return {
            todos: parsedTodos,
            lists: taskIdItemSchema.array().parse(lists.map((a) => ({
                ...a,
                active: listIds.includes(a.id)
            }))),
        }
    }),
    setToDoStatus: publicProcedure.input(todoStatusChangeSchema).mutation(async ({ input }) => {
        return await prisma.toDo.updateMany({
            where: {
                id: {
                    in: input.taskIds
                }
            },
            data: {
                status: input.status
            }
        })
    }),
    setToDoDueDate: publicProcedure.input(todoStatusDueAtSchema).mutation(async ({ input }) => {
        console.log("input: ", input)
        return await prisma.toDo.updateMany({
            where: {
                id: {
                    in: input.taskIds
                }
            },
            data: {
                dueAt: input.dueAt
            }
        })
    }),
    setToDoList: publicProcedure.input(todoListNameSchema).mutation(async ({ input }) => {
        return await prisma.toDo.updateMany({
            where: {
                id: input.taskId
            },
            data: {
                toDoListId: input.listId
            }
        })
    }),
    deleteTaskByIds: publicProcedure.input(zodArrayUnion<number>(z.number())).mutation(async ({ input }) => {
        return await prisma.toDo.deleteMany({
            where: {
                id: {
                    in: input
                }
            },
        })
    }),
    toggleToDoBookmark: publicProcedure.input(z.object({
        taskId: z.coerce.number(),
        shouldBookmark: z.boolean().optional()
    })).mutation(async ({ input }) => {
        let shouldBm = input.shouldBookmark
        if (typeof input.shouldBookmark !== "boolean") {
            let res = await prisma.toDo.findFirst({
                where: {
                    id: input.taskId
                },
                select: {
                    bookmarked: true
                }
            })
            if (res) {
                shouldBm = res.bookmarked
            }
        }
        return await prisma.toDo.updateMany({
            where: {
                id: input.taskId
            },
            data: {
                bookmarked: typeof shouldBm === "boolean" ? shouldBm : false
            }
        })
    }),
    setToDoPriority: publicProcedure.input(todoPriorityChangeSchema).mutation(async ({ input }) => {
        return await prisma.toDo.updateMany({
            where: {
                id: {
                    in: input.taskIds
                }
            },
            data: {
                priority: input.priority
            }
        })
    }),
    getToDoDetails: publicProcedure.input(z.object({
        toDoId: z.number()
    })).query(async ({ input }) => {
        return await prisma.toDo.findFirst({
            where: {
                id: input.toDoId
            },
            include: {
                tags: true,
                topics: true
            }
        })
    }),
    createNewTodoList: publicProcedure.input(addTodoListSchema).mutation(async ({ input }) => {
        return await prisma.toDoList.create({
            data: {
                label: input.label,
                topics: {
                    connectOrCreate: ArrayUtilities.stringArrayToTagSubjectOrTopicConnectOrCreate<Topic>(input.topics)
                },
                tags: {
                    connectOrCreate: ArrayUtilities.stringArrayToTagSubjectOrTopicConnectOrCreate<Tag>(input.tags) as Prisma.TagCreateOrConnectWithoutToDoInput[]
                },
                subjects: {
                    connectOrCreate: ArrayUtilities.stringArrayToTagSubjectOrTopicConnectOrCreate<Subject>(input.subjects)
                },
            }
        })
    }),
    createNewToDo: publicProcedure.input(todoListAddTaskSchemaTrpc).mutation(async ({ input }) => {
        const { listId } = input
        const data = todoListAddTaskSchemaTrpc.parse(input)
        return await prisma.toDoList.update({
            where: {
                id: listId
            },
            data: {
                tasks: {
                    create: {
                        ...data,
                        dueAt: data.dueAt ? new Date(data.dueAt) : undefined
                    }
                }
            }
        })
    }),
    deleteToDos: publicProcedure.input(z.number().array()).mutation(async ({ input }) => {
        return await prisma.toDo.deleteMany({
            where: {
                id: {
                    in: input
                }
            }
        })
    }),
    editTaskNote: publicProcedure.input(z.object({
        taskId: z.number().int(),
        note: z.string().nullable()
    })).mutation(async ({ input }) => {
        return await prisma.toDo.update({
            where: {
                id: input.taskId
            },
            data: {
                details: input.note
            }
        })
    }),
getMostRecentToDoListId: publicProcedure.query(async () => {
    return await prisma.toDoList.findMany({
        select: {
            id: true
        },
        orderBy: {
            lastUpdate: "desc"
        },
        take: 1
    })
    })
})
