import {
  GitManager
} from "./chunk-UICSY6NG.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/prompter.ts
init_esm_shims();
import enq from "enquirer";
var Prompter = class extends GitManager {
  constructor(targetDirectory, gitBranch) {
    super(targetDirectory, gitBranch);
  }
  async confirmContinueWithInvalidPlugins(invalidPlugins) {
    this.log(
      "There are some errors related to the following plugins, so they aren't able to be installed."
    );
    for (const k of invalidPlugins) {
      console.log(k.name);
    }
    let response = await enq.prompt({
      type: "confirm",
      message: "Would you like to continue?",
      name: "shouldContinue"
    });
    if ("shouldContinue" in response && response.shouldContinue) {
      return true;
    }
    return false;
  }
  async getPagePreferences(pageConflicts) {
    let opts = pageConflicts.map((s) => s.getSurveyPromptData());
    const response = await enq.prompt(opts);
    for (const k of pageConflicts) {
      if (k.surveyKey in response) {
        k.resolveSlotConflict(response[k.surveyKey]);
      }
    }
  }
  async getSlotPreferences(slotConflicts) {
    let opts = slotConflicts.map((s) => s.getSurveyPromptData());
    const response = await enq.prompt(opts);
    for (const k of slotConflicts) {
      if (k.surveyKey in response) {
        k.resolveSlotConflict(response[k.surveyKey]);
      }
    }
  }
  async promptForPackageManager() {
    let response = await enq.prompt({
      type: "select",
      name: "packageManager",
      message: "Which package manager are you using?",
      choices: ["npm", "pnpm", "yarn"]
    });
    return "packageManager" in response ? response.packageManager : void 0;
  }
  kBye() {
    console.log(`No worries. We can try this again later.`);
    process.exit(1);
  }
};

export {
  Prompter
};
//# sourceMappingURL=chunk-NL3L2LIO.js.map