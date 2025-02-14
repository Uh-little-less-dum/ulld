import { z } from "zod";
export declare const logLevelSchema: z.ZodUnion<[z.ZodLiteral<"debug">, z.ZodLiteral<"verbose">, z.ZodLiteral<"info">, z.ZodLiteral<"none">]>;
export type LogLevel = z.input<typeof logLevelSchema>;
export type ParsedRegExpField = {
    original: string;
    regex: RegExp;
};
export declare const zodPathGlobTransform: (a: string | RegExp | ParsedRegExpField) => ParsedRegExpField;
export declare const zodWithForwardSlashTransform: <T extends string | null | undefined>(a: T) => string | T;
export declare const zodPathStringField: (desc?: string, optional?: boolean) => z.ZodEffects<z.ZodString, string, string> | z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
export declare const zodPathWithGlobField: (desc?: string, optional?: boolean) => z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef, RegExp>]>>, string | ParsedRegExpField | undefined, string | RegExp | undefined> | z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<RegExp, z.ZodTypeDef, RegExp>]>, ParsedRegExpField, string | RegExp>;
//# sourceMappingURL=configUtilitySchemas.d.ts.map