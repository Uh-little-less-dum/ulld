import { z, ZodTypeAny } from "zod";
import { SlotMap } from "./slotMapRootType";
export declare const configPluginSchema: z.ZodObject<{
    name: z.ZodString;
    version: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    version: string;
}, {
    name: string;
    version?: string | undefined;
}>;
export declare const slotFields: Record<keyof SlotMap, ZodTypeAny>;
export declare const pluginSlotSchema: z.ZodObject<Record<keyof SlotMap, z.ZodTypeAny>, "strip", z.ZodTypeAny, {
    bibliography?: any;
    math?: any;
    navigation?: any;
    UI?: any;
    snippets?: any;
    editor?: any;
    pdf?: any;
    commandPalette?: any;
    taskManager?: any;
    dashboard?: any;
}, {
    bibliography?: any;
    math?: any;
    navigation?: any;
    UI?: any;
    snippets?: any;
    editor?: any;
    pdf?: any;
    commandPalette?: any;
    taskManager?: any;
    dashboard?: any;
}>;
export declare const ulldSlots: string[];
//# sourceMappingURL=slotsSchema.d.ts.map