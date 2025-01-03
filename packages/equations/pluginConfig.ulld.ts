import {
    type DeveloperConfigInput,
    developerConfigSchema,
} from "@ulld/configschema/developer";
import { writePluginConfig } from "@ulld/developer/writePluginConfig";

const pluginConfig: DeveloperConfigInput<"math"> = {
    pluginName: "@ulld/equations",
    slot: "math",
    label: "Math",
    events: {
        onBackup: "./onBackup",
        onRestore: "./onRestore"
    },
    parsers: {
        mdx: {
            export: "./parser"
        }
    },
    pages: [
        {
            export: "./equationModal",
            targetUrl: "@modal/(.)equations/details/[equationId]/page.tsx",
            exportsPageProps: true,
            slot: "EquationDetailsModalPage",
        },
        {
            export: "./addEquationPage",
            targetUrl: "equations/add/page.tsx",
            exportsPageProps: true,
            slot: "AddEquationPage",
        },
        {
            export: "./equationDetailsPage",
            targetUrl: "equations/details/[equationId]/page.tsx",
            exportsPageProps: true,
            slot: "EquationDetailsPage",
        },
        {
            export: "./equationsPage",
            targetUrl: "equations/page.tsx",
            exportsPageProps: true,
            slot: "EquationsPage",
        },
    ],
    components: [
        {
            componentName: "EmbeddableEquation",
            export: "./embeddableEquation",
            embeddable: [
                {
                    regexToInclude: "<Equation",
                    label: "Equation",
                },
            ],
        },
    ],
    navigationLinks: [
        {
            label: "Equations",
            href: "/equations",
        },
        {
            label: "Add Equation",
            href: "/equations/add",
        },
    ],
};

const parsedPlugin = developerConfigSchema.parse(pluginConfig);

writePluginConfig(parsedPlugin, __dirname, "both");
