import { publicProcedure, router } from "../trpc";
import * as z from 'zod'
import { autoSetting } from "@ulld/database/internalDatabaseTypes";
import { AutoSettingType } from "./sync";
import { prisma } from "@ulld/database/db";
import { AutoPropertyFormSchema } from "../../schemas/formTrpcRelationships/autoPropertyFormSchema";
import {syncAutoSettings} from "../../trpcInternalMethods/settings/autoSettings/syncAutoSettings"
import {getAutoSettingsWithRegex, getConfigAutoSettings} from "../../trpcInternalMethods/settings/autoSettings/getAutosettingWithRegex"
import {getDbAutoSettings } from "../../trpcInternalMethods/settings/autoSettings/getDbAutosetting"



export const autoSettingRouter = router({
    setAutoSettingsFromConfig: publicProcedure.mutation(async () => {
        return await syncAutoSettings()
    }),
    getAutoSettings: publicProcedure.input(z.object({
        type: z.nativeEnum(autoSetting).optional(),
        withRegex: z.boolean().default(true)
    })).query(async (opts) => {

        const autoSettingIsSame = (a: AutoSettingType, b: AutoSettingType) => {
            return a.type === b.type && a.glob === b.glob && a.value === b.value
        }
        if (opts.input.withRegex) {
            return await getAutoSettingsWithRegex(opts.input.type)
        }
        if (!opts.input.withRegex) {
            let d: { id?: number, glob: string, value: string, type: autoSetting }[] = getConfigAutoSettings()
            const pushIfNotIncluded = (a: AutoSettingType) => {
                if (!d.some((l) => autoSettingIsSame(l, a))) {
                    d.push(a)
                }
            }
            let db = await getDbAutoSettings(opts.input.type)
            db.forEach((k) => pushIfNotIncluded(k))
            return d
        }
    }),
    deleteAutoSettingById: publicProcedure.input(z.number().int()).mutation(async ({ input }) => {
        return await prisma.autoSetting.delete({
            where: {
                id: input
            }
        })
    }),
    addAutoSetting: publicProcedure.input(AutoPropertyFormSchema).mutation(async ({ input }) => {
        if (input.id) {
            return await prisma.autoSetting.upsert({
                where: {
                    id: input.id
                },
                create: {
                    glob: input.glob,
                    type: input.type,
                    value: input.value
                },
                update: {
                    glob: input.glob,
                    type: input.type,
                    value: input.value
                }
            })
        } else {
            return await prisma.autoSetting.create({
                data: {
                    glob: input.glob,
                    type: input.type,
                    value: input.value
                }
            })
        }
    })
})
