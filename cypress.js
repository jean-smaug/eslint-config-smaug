/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:cypress/recommended", "./index.js"],
  plugins: ["cypress"],
};
