import {
  appConfigSchema
} from "../chunk-DVVV2RLR.mjs";
import "../chunk-YNYUEFQE.mjs";
import "../chunk-L33HHCY3.mjs";
import "../chunk-UPQGPPWF.mjs";
import "../chunk-ZMLXBMCS.mjs";
import "../chunk-YD7ERF6Y.mjs";
import "../chunk-KEWTKAXN.mjs";
import "../chunk-R464NK3M.mjs";
import "../chunk-6QYW7IIJ.mjs";
import "../chunk-MG7G2I5I.mjs";
import "../chunk-4K2VFKQZ.mjs";
import "../chunk-I3TUABK3.mjs";
import "../chunk-VJD4ZICZ.mjs";
import "../chunk-JVLW3XLC.mjs";
import "../chunk-VQMWP2MQ.mjs";
import "../chunk-ZGGN6EBW.mjs";
import "../chunk-YPPW64VT.mjs";
import "../chunk-LEIGK6CT.mjs";
import "../chunk-F4OWPLKE.mjs";
import "../chunk-E4QAKK37.mjs";
import "../chunk-SODMMTM6.mjs";
import "../chunk-VUVBLIYO.mjs";
import "../chunk-RI3KER5U.mjs";
import "../chunk-PPLLPMHA.mjs";
import "../chunk-AZ3BL532.mjs";
import "../chunk-I62DW57C.mjs";
import "../chunk-IKGPSHLZ.mjs";
import "../chunk-UUFTJZTI.mjs";
import "../chunk-YSQL5WSG.mjs";
import "../chunk-S2BPIAJV.mjs";
import "../chunk-XHBPEY36.mjs";
import "../chunk-JWHVYI5Y.mjs";
import "../chunk-GMU7AEL3.mjs";
import "../chunk-ULQTWAOY.mjs";
import "../chunk-4TOS6Z5T.mjs";

// src/zod/writeConfigJson.ts
import fs from "fs";
import path from "path";
import { zodToJsonSchema } from "zod-to-json-schema";
var writeConfigJson = async (config, targetDirectory) => {
  let parsed = appConfigSchema.parse(config);
  const jsonSchema = zodToJsonSchema(appConfigSchema, {
    name: "UlldAppConfig",
    "$refStrategy": "relative",
    "basePath": [targetDirectory]
  });
  await fs.promises.writeFile(path.join(targetDirectory, "appConfig.ulld.json"), JSON.stringify(parsed), { encoding: "utf-8" });
  return await fs.promises.writeFile(path.join(targetDirectory, "jsonSchema.ulld.json"), JSON.stringify(jsonSchema), { encoding: "utf-8" });
};
export {
  writeConfigJson
};
//# sourceMappingURL=writeConfigJson.mjs.map