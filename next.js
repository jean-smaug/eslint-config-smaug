/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals", "./react.js"],
  rules: {
    // NOTE: In order to keep bundlesize light
    "lodash/import-scope": ["error", "member"],
  },
};
