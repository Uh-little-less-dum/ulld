const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

// WITH_WIFI: Need to resolve this still. Find eslint related packages and versions used in turborepo demos and install those versions.
module.exports = {
    extends: [
        "@vercel/style-guide/eslint/node",
        "@vercel/style-guide/eslint/typescript",
        "@vercel/style-guide/eslint/browser",
        "@vercel/style-guide/eslint/react",
        "@vercel/style-guide/eslint/next",
        // "turbo",
    ].map(require.resolve),
    parserOptions: {
        project,
    },
    globals: {
        React: true,
        JSX: true,
    },
    plugins: ["only-warn", "eslint-plugin-tsdoc"],
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: ["node_modules/", "dist/"],
    // add rules configurations here
    rules: {
        "import/no-default-export": "off",
        "unicorn/prefer-node-protocol": "off",
        "unicorn/filename-case": "off",
        "react/function-component-definition": "off", // Enforces declaring function components using the function keyword, which I don't think I've done once in my life.
    },
};
