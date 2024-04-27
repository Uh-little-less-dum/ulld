import { FeaturedContainerPropsRequired } from "#/components/pageSpecific/landing/feature/types";
import { corePluginsFeature } from "./corePlugins";
import { customizableFeature } from "./customizable";
import { integrationsFeature } from "./integrations";
import { mdxFeature } from "./mdxFeature";
import { pluginArchitectureFeature } from "./pluginArchitecture";

export const allFeatures: FeaturedContainerPropsRequired[] = [
    mdxFeature,
    pluginArchitectureFeature,
    corePluginsFeature,
    integrationsFeature,
    customizableFeature
];
