import { z } from "zod";
export declare const featuresConfigSchema: z.ZodOptional<z.ZodObject<{
    enabled: z.ZodDefault<z.ZodObject<{
        commandPalette: z.ZodDefault<z.ZodBoolean>;
        tikz: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        commandPalette: boolean;
        tikz: boolean;
    }, {
        commandPalette?: boolean | undefined;
        tikz?: boolean | undefined;
    }>>;
    pages: z.ZodObject<{
        equations: z.ZodDefault<z.ZodBoolean>;
        snippets: z.ZodDefault<z.ZodBoolean>;
        calendar: z.ZodDefault<z.ZodBoolean>;
        bibliography: z.ZodDefault<z.ZodBoolean>;
        taskManager: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        bibliography: boolean;
        calendar: boolean;
        equations: boolean;
        snippets: boolean;
        taskManager: boolean;
    }, {
        equations?: boolean | undefined;
        snippets?: boolean | undefined;
        calendar?: boolean | undefined;
        bibliography?: boolean | undefined;
        taskManager?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    enabled: {
        commandPalette: boolean;
        tikz: boolean;
    };
    pages: {
        bibliography: boolean;
        calendar: boolean;
        equations: boolean;
        snippets: boolean;
        taskManager: boolean;
    };
}, {
    pages: {
        equations?: boolean | undefined;
        snippets?: boolean | undefined;
        calendar?: boolean | undefined;
        bibliography?: boolean | undefined;
        taskManager?: boolean | undefined;
    };
    enabled?: {
        commandPalette?: boolean | undefined;
        tikz?: boolean | undefined;
    } | undefined;
}>>;
//# sourceMappingURL=main.d.ts.map