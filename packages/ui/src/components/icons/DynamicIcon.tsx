import dynamic from 'next/dynamic'
import React from 'react'
import type { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { AdmonitionType } from '../../types/general';



export type IconNameList = "bibliography" | "bookmarks" | "bug" | "code" | "data" | "download" | "fitness" | "focus" | "idea" | "important" | "journal" | "latex" | "math" | "paperPdf" | "physics" | "physicsData" | "quicknote" | "readingList" | "recipe" | "researchPapers" | "schedule" | "settings" | "shoppingList" | "snippet" | "tags" | "tech" | "todolist" | "images" | "avatar" | "darktoggle" | AdmonitionType



export type LogoIconNames = "css" | "github" | "kotlin" | "markdown" | "node" | "npm" | "python" | "react" | "swift" | "vercel" | "youtube"



/// NOTE: AdmonitionType, LocoIconNames & IconNameList
export enum AllDynamicIconNames {
    bibliography = "bibliography",
    bookmarks = "bookmarks",
    bug = "bug",
    code = "code",
    data = "data",
    download = "download",
    fitness = "fitness",
    focus = "focus",
    idea = "idea",
    important = "important",
    journal = "journal",
    latex = "latex",
    math = "math",
    paperPdf = "paperPdf",
    physics = "physics",
    physicsData = "physicsData",
    quicknote = "quicknote",
    readingList = "readingList",
    recipe = "recipe",
    researchPapers = "researchPapers",
    schedule = "schedule",
    settings = "settings",
    shoppingList = "shoppingList",
    snippet = "snippet",
    tags = "tags",
    tech = "tech",
    todolist = "todolist",
    images = "images",
    avatar = "avatar",
    darktoggle = "darktoggle",
    css = "css",
    github = "github",
    kotlin = "kotlin",
    markdown = "markdown",
    node = "node",
    npm = "npm",
    python = "python",
    react = "react",
    swift = "swift",
    vercel = "vercel",
    youtube = "youtube",
    info = "info",
    note = "note",
    tip = "tip",
    faq = "faq",
    abstract = "abstract",
    todo = "todo",
    success = "success",
    warn = "warn",
    fail = "fail",
    example = "example",
    quote = "quote",
    cite = "cite",
    plain = "plain",
}


const logoIconNames = [
    "css",
    "github",
    "kotlin",
    "markdown",
    "node",
    "npm",
    "python",
    "react",
    "swift",
    "vercel",
    "youtube",
]

const iconNames = [
    "bibliography",
    "bookmarks",
    "bug",
    "code",
    "data",
    "download",
    "fitness",
    "focus",
    "idea",
    "important",
    "journal",
    "latex",
    "math",
    "paperPdf",
    "physics",
    "physicsData",
    "quicknote",
    "readingList",
    "recipe",
    "researchPapers",
    "schedule",
    "settings",
    "shoppingList",
    "snippet",
    "tags",
    "tech",
    "todolist",
    "images",
    "avatar",
    "darktoggle",
]




const iconNameMap: { [k in IconNameList]: keyof typeof dynamicIconImports | false } = {
    plain: false,
    bibliography: "library",
    bookmarks: "bookmark",
    bug: "bug",
    code: "code",
    data: "database",
    download: "folder-down",
    fitness: "dumbbell",
    focus: "glasses",
    idea: "lightbulb",
    important: "alert-circle",
    journal: "pencil-line",
    latex: "function-square",
    math: "sigma",
    paperPdf: "file-text",
    physics: "atom",
    physicsData: "bar-chart-big",
    quicknote: "sticky-note",
    readingList: "book-open-check",
    recipe: "utensils",
    researchPapers: "microscope",
    schedule: "calendar-check",
    settings: "settings",
    shoppingList: "shopping-basket",
    snippet: "terminal",
    tags: "hash",
    tech: "cpu",
    todolist: "list-todo",
    darktoggle: "moon-star",
    images: "image",
    avatar: "circle-user-round",
    info: "info",
    note: "pen",
    tip: "hand",
    faq: "help-circle",
    abstract: "scroll-text",
    todo: "list-todo",
    success: "thumbs-up",
    warn: "alert-triangle",
    fail: "thumbs-down",
    example: "microscope",
    quote: "quote",
    cite: "book-marked",
    equation: "variable",
    definition: "book",
    practice: "line-chart"
}

export type ValidIconName = IconNameList | AdmonitionType | keyof typeof dynamicIconImports;


interface IconProps extends LucideProps {
    name: ValidIconName
}

export const DynamicIcon = ({ name, ...props }: IconProps) => {
    if (logoIconNames.includes(name)) {
        let Icon = dynamic(() => import(`../../components/icons/logoIcons/${name}`))
        return <Icon {...props} />
    }
    let _name = name in iconNameMap ? iconNameMap[name as keyof typeof iconNameMap] : name
    const LucideIcon = dynamic(dynamicIconImports[_name as keyof typeof dynamicIconImports])
    return <LucideIcon {...props} />;
};
