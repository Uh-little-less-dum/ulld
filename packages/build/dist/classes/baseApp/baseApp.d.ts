import { ShellManager } from "../baseClasses/shell.js";
import { UlldBuildProcess } from "../build.js";
import { TargetPaths } from "../paths.js";
import { UlldPlugin } from "../plugin.js";
import { BuildStaticData } from "./buildStaticData.js";
import { BuildCleanup } from "./cleanup.js";
import { BuildOptionsType } from "../../utils/options.js";
import type { pathKeys } from "@ulld/utilities/buildUtils";
export declare class BaseApp extends ShellManager {
    build: UlldBuildProcess;
    options: BuildOptionsType;
    paths: TargetPaths;
    slotMap: any;
    buildStaticData: BuildStaticData;
    buildCleanup: BuildCleanup;
    constructor(build: UlldBuildProcess, options: BuildOptionsType);
    writeFile(location: typeof pathKeys[number], content: string): void;
    generate(): void;
    createComponentMap(plugins: UlldPlugin[]): void;
    applySlots(): void;
    writeTemporaryTargetPaths(): void;
    createEventFunctions(): void;
    writeNoteTypePages(): void;
    writePrismaSchema(): void;
    copyAdditionalSources(): void;
    writePluginSettingPages(): void;
    writeUnifiedParsingFunctions(): void;
    copyComponentDocs(): void;
    copyPluginDocs(): void;
    writeGitIgnore(): void;
    onBuild(): void;
    private runOnBuild;
    private cleanUp;
    logSuccessfullBuild(): void;
}