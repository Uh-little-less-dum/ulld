import { PackageJsonType } from "@ulld/developer-schemas/fullPackageJson";
import { DeveloperConfigOutput } from "@ulld/configschema/developer";
import path from "path";
import fs from "fs";
import { PluginSlotKey } from "@ulld/configschema/developerTypes";
import { PluginSlot } from "./slot";
import { PluginComponent } from "./component";
import { PluginPage } from "./page";
import { PluginParser } from "./parser";
import { PluginEvents } from "./pluginEvents";
import { TargetPaths } from "./paths";

export class UlldPlugin {
    pluginConfig?: DeveloperConfigOutput;
    packageRoot: string;
    hasConfig: boolean = false;
    slot?: PluginSlot;
    components: PluginComponent[] = [];
    parsers: PluginParser[] = [];
    pages: PluginPage[] = [];
    events: PluginEvents = new PluginEvents({});
    targetDir: string;
    embeddables?: (NonNullable<
        (typeof this.components)[number]["data"]["embeddable"]
    >[number] & { export: string; componentName: string })[];
    constructor(
        public paths: TargetPaths,
        public name: string,
        public version?: string,
    ) {
        this.targetDir = paths.targetDir;
        this.packageRoot = path.join(this.targetDir, "node_modules", this.name);
        let configPath = path.join(this.packageRoot, "pluginConfig.ulld.json");
        if (fs.existsSync(configPath)) {
            this.hasConfig = true;
            this.pluginConfig = JSON.parse(
                fs.readFileSync(configPath, { encoding: "utf-8" }),
            ) as DeveloperConfigOutput;
            this.events = new PluginEvents(this.pluginConfig?.events || {});
            if (!this.pluginConfig) return;
            if (this.pluginConfig?.slot) {
                this.slot = new PluginSlot(
                    this.name,
                    this.pluginConfig.slot as PluginSlotKey,
                );
            }
            this.components = this.pluginConfig.components.map(
                (f) =>
                    new PluginComponent(f, {
                        parentSlot: this.pluginConfig?.slot,
                        pluginName: this.name,
                    }),
            );
            this.parsers = this.pluginConfig.parsers.map((f) => new PluginParser(f));
            this.pages = this.pluginConfig.pages.map(
                (p, i) => new PluginPage(p, this.name, i, this.paths),
            );
        }
    }
    removeUnusedPages() {
        this.pages = this.pages.filter((f) => f.shouldUse)
    }
    removeRejectedSlots() {
        this.components = this.components.filter((c) => {
            if (c.subSlot && c.subSlot.shouldUse) {
                return false;
            }
            return true;
        });
    }

    getEmbeddables() {
        let em: typeof this.embeddables = [];
        if (this.embeddables) {
            return this.embeddables;
        }
        let componentsWithEmbeddable = this.components.filter(
            (f) => f.data.embeddable,
        );
        for (const component of componentsWithEmbeddable) {
            if (component && component.data.embeddable) {
                for (const embeddable of component.data.embeddable) {
                    em.push({
                        ...embeddable,
                        export: component.data.export,
                        componentName: component.data.componentName,
                    });
                }
            }
        }
        this.embeddables = em;
        return em;
    }

    getUniqueEmbeddableComponents() {
        let ems = this.getEmbeddables();
        let embeddables: typeof ems = [];
        for (const k of ems) {
            if (!embeddables.find((f) => f.componentName === k.componentName)) {
                embeddables.push(k);
            }
        }
        return embeddables;
    }

    getComponentMapImports() {
        let embeddables = this.getUniqueEmbeddableComponents();
        let s = "";
        for (const k of embeddables) {
            s += `import ${k.componentName} from "${this.name}/${k.export}";
`;
        }
        return s;
    }
    getComponentMapItemsAsString() {
        let embeddables = this.getEmbeddables();
        let s = "";
        for (const k of embeddables) {
            s += `    {
        regex: new RegExp("${k.regexToInclude}"),
        component: ${k.componentName},
        label: "${k.label}",
    },
`;
        }
        return s;
    }
    removeRejectedPages() {
        this.pages = this.pages.filter((p) => p.shouldUse);
    }
    isValid() {
        return this.hasConfig;
    }
    applyDependency(pkg: PackageJsonType): {
        pkg: PackageJsonType;
        isNew: boolean;
    } {
        let isNew = this.name! in pkg.dependencies;
        pkg.dependencies = {
            ...pkg.dependencies,
            [this.name]: this.version || "latest",
        };
        return { pkg: pkg, isNew };
    }
}