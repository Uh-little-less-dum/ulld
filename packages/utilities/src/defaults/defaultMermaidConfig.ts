// import { MermaidConfig } from "mermaid"

export interface MermaidConfigType {
    output: "svg" | "ast"
    theme?: {
        dark?: string
        light?: string
    }
    mermaid: any
}


export const mermaidTheme = {
    light: {
        darkMode: false,
        background: "#fff",
        primaryColor: "#7c3aed",
        primaryTextColor: "#f9fafb",
        secondaryColor: "#2563eb",
        secondaryTextColor: "#111827",
        primaryBorderColor: "#e5e7eb",
        secondaryBorderColor: "#e5e7eb",
        noteBorderColor: "#e5e7eb",
        tertiaryBorderColor: "#e5e7eb",
        tertiaryColor: "#c026d3",
        tertiaryTextColor: "#6b7280",
        lineColor: "#6b7280",
        noteBkgColor: "#f4f4f5",
        noteTextColor: "#000000",
    },
    dark: {
        darkMode: true,
        background: "#000",
        primaryColor: "#6d28d9",
        primaryTextColor: "#f9fafb",
        secondaryColor: "#1d4ed8",
        secondaryTextColor: "#f9fafb",
        primaryBorderColor: "#1f2937",
        tertiaryBorderColor: "#1f2937",
        secondaryBorderColor: "#1f2937",
        tertiaryColor: "#a21caf",
        tertiaryTextColor: "#9ca3af",
        lineColor: "#9ca3af",
        noteBkgColor: "#1b1917",
        noteTextColor: "#000000",
    }
}
