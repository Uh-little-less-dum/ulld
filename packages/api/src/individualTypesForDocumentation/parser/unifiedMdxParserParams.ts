import { AppConfigSchemaOutput, FrontMatterType } from "@ulld/types";
import { serverClient } from "../../trpc/serverClient";

export interface UnifiedMdxParserParams {
    content: string;
    docTypeData: AppConfigSchemaOutput["noteTypes"][number];
    data: Partial<FrontMatterType>
    appConfig: AppConfigSchemaOutput
    serverClient: typeof serverClient // Trpc router
    db: {
        // Will only be undefined or null
        // if reading from a remote source
        // or before sync.
        noteId?: number | null
    }
}
