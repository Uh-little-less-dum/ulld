declare global {
  namespace PrismaJson {
    // you can use classes, interfaces, types, etc.
    type PluginSettingsRecord = Record<string, Record<string, any>>
  }
}