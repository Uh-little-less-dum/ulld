import { OptionValues } from "commander";
import { UlldBuildProcess } from "../classes/build.js";
export declare const resolveConflicts: (build: UlldBuildProcess, options: OptionValues) => Promise<void>;