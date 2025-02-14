// import "server-only"
import path from 'path'
import fs from 'fs'
import {checkExistsOfAllParsableTypes} from "../filesystem/fsUtils"
import { ParsableExtensionsSchema } from "@ulld/configschema/zod/secondaryConfigParse/getParsableExtensions"
import { readAppConfig } from '@ulld/developer/readAppConfig'
import { AppConfigSchemaOutput } from '@ulld/configschema/types'



export const getFsMdx = async (rootRelativePath: string, ext: ".mdx" | ".md" = ".mdx", _config: AppConfigSchemaOutput | undefined | null = null, useProcessRoot: boolean = false) => {
    const fsRoot = useProcessRoot ? process.cwd() : (_config || await readAppConfig()).fsRoot
    let _path = path.join(fsRoot, rootRelativePath.endsWith(ext) ? rootRelativePath : `${rootRelativePath}${ext}`)
    // if (!fs.existsSync(_path)) {
    // NOTE: Turned off for now. It's working as is. Might be an issue for people on Linux systems though with the ability to create multiple files with only a difference in casing.
    //     let otherFile = checkDirForCaseInsensitiveFile(_path)
    //     console.log("otherFile: ", otherFile)
    // }
    return await fs.promises.readFile(_path, { encoding: "utf-8" })
}


export const getFsIpynb = async (rootRelativePath: string, _config?: AppConfigSchemaOutput) => {
    const config = _config || await readAppConfig()
    let _path = path.join(config.fsRoot, rootRelativePath.endsWith(".ipynb") ? rootRelativePath : `${rootRelativePath}.ipynb`)
    return await fs.promises.readFile(_path, { encoding: "utf-8" })
}

export const getFsNote = async (rootRelativePath: string, knownType?: ParsableExtensionsSchema) => {
    let p: string | null | undefined = null
    if (knownType === ".mdx") {
        let d = await getFsMdx(rootRelativePath)
        return {
            content: d,
            format: ".mdx"
        }
    }
    if (knownType === ".md") {
        let d = await getFsMdx(rootRelativePath, ".md")
        return {
            content: d,
            format: ".md"
        }
    }
    if (!p) {
        let d = await checkExistsOfAllParsableTypes(rootRelativePath)
        if (d) {
            let res = await fs.promises.readFile(d.path, { encoding: "utf-8" })
            return {
                content: res,
                format: d.format as ParsableExtensionsSchema
            }
        }
    }
}
