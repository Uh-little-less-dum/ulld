import {
  gatherReservedPublicPaths
} from "../chunk-3IMAH4YD.js";
import {
  gatherProtectedPaths
} from "../chunk-7WVAVGKR.js";
import {
  writeTestStaticBuildData
} from "../chunk-54ONVC2N.js";
import "../chunk-QID62ZB5.js";
import "../chunk-USB6ZCXJ.js";
import {
  getInternalDocumentTypes
} from "../chunk-5PJZXRTW.js";
import "../chunk-BOVJOOSV.js";
import "../chunk-MDQ3YTZZ.js";
import "../chunk-NG6HCK6Y.js";
import "../chunk-6FCOZTYD.js";
import "../chunk-GQ44M3IR.js";
import "../chunk-PESBV4SX.js";
import "../chunk-QZPOLBQN.js";

// src/__scripts__/generateSlotMap.ts
import { globSync } from "glob";
import path from "path";
import fs from "fs";
import { capitalize } from "@ulld/utilities/stringUtils";
import { slotTypes } from "@ulld/utilities/types";
var testRoot = process.env.ULLD_TEST_ROOT;
var buildDataPath = path.join(__dirname, "../../../utilities/src/utils/buildStaticData.json");
var _propsExtendsMap = JSON.parse(fs.readFileSync(buildDataPath, { encoding: "utf-8" }));
if (!testRoot) {
  throw new Error(
    "ULLD_TEST_ROOT environment variable ws not present at run time in the generateSlotMap script."
  );
}
var targetDir = path.join(testRoot, "/src");
var mdxPath = path.join(
  __dirname,
  "../../../../apps/website/content/embeddedDocs/developer/slotMap.txt"
);
var typePath = path.join(__dirname, "../developer/slotMapType.ts");
var typeRootPath = path.join(__dirname, "../developer/slotMapRootType.ts");
var zodSlotKeyPath = path.join(__dirname, "../developer/slotKeySchema.ts");
var staticBuildDataPath = path.join(
  __dirname,
  "../../../utilities/src/utils/buildStaticData.json"
);
var files = globSync(`**/*.{tsx,ts}`, {
  ignore: "**/node_modules/**",
  cwd: targetDir
});
if (!fs.existsSync(staticBuildDataPath)) {
  throw new Error(`staticBuildDataPath ${staticBuildDataPath} does not exist.`);
}
var items = [];
var staticBuildData = gatherProtectedPaths(files.map((f) => path.join(targetDir, f)), _propsExtendsMap);
for (const k of files) {
  let content = fs.readFileSync(path.join(targetDir, k), { encoding: "utf-8" });
  let lineOne = content.split("\n")[0].trim();
  if (lineOne.startsWith("// Slot:")) {
    let words = lineOne.replace("// Slot: ", "").split(" ");
    let slots = words.find((w) => w.includes("/")).split("/").map((s) => s.trim());
    let type = words.find((w) => w.startsWith("type:"))?.replace("type:", "").trim() || "component";
    let propsExtends = words.find((w) => w.startsWith("propsExtends:"))?.replace("propsExtends:", "").trim();
    if (slots.length !== 2) {
      throw new Error(`Misformed slot string at ${k}`);
    }
    if (!slotTypes.includes(type)) {
      throw new Error(`No slotData type found for ${type}.`);
    }
    if (Boolean(
      // propsExtends && !(propsExtends in ((staticBuildData as any)?.propsExtendsMap as any)?.propsExtendsMap),
      propsExtends && !(propsExtends in staticBuildData?.propsExtendsMap)
    )) {
      staticBuildData.propsExtendsMap[propsExtends] = "FIX ME";
      console.warn(
        `Slot prop can not extend ${propsExtends}. It was is not included in the propsExtendsMap object. Added a temporary place holder.`
      );
    }
    const newItem = {
      path: k,
      parentSlot: slots[0],
      subSlot: slots[1],
      clientOnly: content.includes("clientOnly"),
      inReduxProvider: content.includes("inReduxProvider"),
      relativePath: `src/${k}`,
      type,
      propsExtends
    };
    let hasItem = items.find(
      (f) => Boolean(
        f.parentSlot === newItem.parentSlot && f.subSlot === newItem.subSlot
      )
    );
    if (hasItem) {
      throw new Error(`Found duplicate slots at:
parentSlot: ${hasItem.parentSlot}
subSlot: ${hasItem.subSlot}
path: ${hasItem.path}
----
parentSlot: ${newItem.parentSlot}
subSlot: ${newItem.subSlot}
path: ${newItem.path}
`);
    }
    items.push(newItem);
  }
}
var slotMap = {};
for (const k of items) {
  if (!slotMap[k.parentSlot]) {
    slotMap[k.parentSlot] = {};
  }
  slotMap[k.parentSlot][k.subSlot] = {
    path: `src/${k.path}`,
    clientOnly: k.clientOnly,
    inReduxProvider: k.inReduxProvider,
    type: k.type,
    propsExtends: k.propsExtends
  };
}
var targetPath = path.join(
  __dirname,
  "../../../utilities/src/utils/slotMap.json"
);
var mdxSlotMap = `interface SlotMap {
`;
for (const k in slotMap) {
  mdxSlotMap += `    "${k}": {
`;
  for (const l in slotMap[k]) {
    mdxSlotMap += `        ${l}: string,
`;
  }
  mdxSlotMap += "    }, \n";
}
mdxSlotMap += "}";
var slotKeyContent = `
export const slotKeySchema = z.union([
`;
var slotSubKeys = {};
var subSlotsByKeys = {};
var subslotSchemas = [];
var addedParentSlots = [];
var makeValidSymbol = (val) => {
  return val.replaceAll("-", "_").replaceAll(" ", "_");
};
for (const k of items) {
  if (!addedParentSlots.includes(k.parentSlot)) {
    slotKeyContent += `    z.literal("${k.parentSlot}"),
`;
    addedParentSlots.push(k.parentSlot);
  }
  if (!(k.parentSlot in slotSubKeys)) {
    subSlotsByKeys[k.parentSlot] = [];
    let name = `${k.parentSlot}SubkeySchema`;
    subslotSchemas.push(name);
    slotSubKeys[k.parentSlot] = `
export const ${makeValidSymbol(name)} = z.union([
`;
  }
  if (k.subSlot) {
    subSlotsByKeys[k.parentSlot].push(k.subSlot);
    slotSubKeys[k.parentSlot] += `    z.literal("${k.subSlot}"),
`;
  }
}
slotKeyContent += "])";
for (const k in slotSubKeys) {
  if (subSlotsByKeys[k].length < 2) {
    let re = /z\.union\(\[[.|\n|\r|\w|\W]*z\.literal\("(?<content>[\w|\S|\s]*)"\)\,?/gm;
    let foundContent = re.exec(slotSubKeys[k]);
    if (!foundContent) {
      throw new Error(`No content was found for a slot with a single component, that can't be applied to a union of slot keys. Tried replacing ${k}.`);
    }
    slotSubKeys[k] = `${slotSubKeys[k].slice(0, slotSubKeys[k].indexOf("=") + 1)} z.literal("${foundContent[1]}")`;
  } else {
    slotSubKeys[k] += "])";
  }
}
var formatTypeSymbol = (k) => {
  return `${makeValidSymbol(capitalize(k))}SubSlots`;
};
var slotKeyFileContent = `
import { z } from 'zod';

${slotKeyContent}

${Object.values(slotSubKeys).join("\n\n")}

`;
fs.writeFileSync(mdxPath, mdxSlotMap, { encoding: "utf-8" });
fs.writeFileSync(
  typeRootPath,
  `export ${mdxSlotMap}
`,
  { encoding: "utf-8" }
);
fs.writeFileSync(
  typePath,
  `import { SlotMap as SM } from "./slotMapRootType";

export type PluginSlotKey = keyof SM

${Object.keys(slotSubKeys).map(
    (k) => `export type ${formatTypeSymbol(k)} = keyof SM["${k}"]`
  ).join("\n\n")}

export type AnySubSlotKey = ${Object.keys(slotSubKeys).map((t) => formatTypeSymbol(t)).join(" | ")};
`,
  { encoding: "utf-8" }
);
fs.writeFileSync(targetPath, JSON.stringify(slotMap, null, 4), {
  encoding: "utf-8"
});
fs.writeFileSync(zodSlotKeyPath, slotKeyFileContent, {
  encoding: "utf-8"
});
var reservedPublicDirs = gatherReservedPublicPaths();
staticBuildData.reservedPublicDirs = reservedPublicDirs;
staticBuildData.internalDocumentTypes = getInternalDocumentTypes();
fs.writeFileSync(
  staticBuildDataPath,
  JSON.stringify(staticBuildData, null, 4),
  { encoding: "utf-8" }
);
writeTestStaticBuildData();
console.log(`Wrote slotMap to @ulld/utilities/slotMap.json`);
//# sourceMappingURL=generateSlotMap.js.map