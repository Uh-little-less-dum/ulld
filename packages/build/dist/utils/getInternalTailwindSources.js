// import { getInternalPackageNames } from "@ulld/utilities/internalDataHelpers";
import staticData from "../../staticDevelopmentData.json" with { type: "json" };
import { getInternalPackageRecord } from "@ulld/utilities/internalDataHelpers";
export const getInternalTailwindSources = () => {
    const packageRecord = getInternalPackageRecord();
    let items = staticData.alwaysIncludedTailwindSources;
    for (const k in packageRecord) {
        if (!staticData.excludeFromInternalTailwindSources.includes(k)) {
            items.push(`./node_modules/${k}/${packageRecord[k].sourceLocation}/**/*.{js,ts,tsx,jsx,mdx}`);
        }
    }
    // const internalPackageNames = getInternalPackageNames()
    // for (const k of internalPackageNames) {
    //     if (
    //         !(staticData.excludeFromInternalTailwindSources as string[]).includes(k)
    //     ) {
    //         items.push(`./node_modules/${k}/${packages}/**/*.{js,ts,tsx,jsx,mdx}`);
    //     }
    // }
    return items;
};