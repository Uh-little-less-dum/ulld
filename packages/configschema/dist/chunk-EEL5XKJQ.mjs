// src/developer/pluginPageSchema.ts
import { z } from "zod";
import { transformExportString } from "@ulld/utilities/transformExportString";
var pluginAdditionalPageSchema = z.object({
  targetUrl: z.string().optional().describe("The target URL to place this page at. This is synonomous with a file path from the root of the app directory, including intercepted routes. An intercepted modal route for example should appear as `@modal/(.)myPath/...` even though `@modal` doesn't appear in the URL. This must be unique, as if it overwrites an existing route it will not be applied.").transform((f) => {
    if (!f)
      return void 0;
    let _f = f;
    if (_f.endsWith("page.tsx")) {
      _f = _f.slice(0, _f.lastIndexOf("/"));
    }
    if (_f.startsWith("/")) {
      _f = _f.slice(1);
    }
    if (_f.endsWith("/")) {
      _f = _f.slice(0, _f.length - 1);
    }
    return _f;
  }),
  slot: z.string().optional().describe("The optional slot key that matches a corresponding slot of type page."),
  export: z.string().describe("The export in your package.json that matches a single component that will act as this page. The component must be the default export, and will be passed all props that the page receives, like params and searchParams. This can include intercepted modal routes with the @modal/(.)... syntax, nested routes and parameter based routes with the [someParam] syntax.").transform(transformExportString),
  exportsPageProps: z.boolean().default(false).describe("Whether or not the file at the export field exports a type named PageProps to apply to the parent page properties. This type should include a params property and/or a searchParams property as they apply to the page itself. This is mostly for the sake of completeness, but can help other developers to work in a bug free environment if they choose to extend their own app.")
});

export {
  pluginAdditionalPageSchema
};
//# sourceMappingURL=chunk-EEL5XKJQ.mjs.map