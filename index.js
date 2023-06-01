/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "xo-space",
    "xo-typescript",
    "turbo",
    "prettier",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:regexp/recommended",
    "plugin:lodash/recommended",
  ],
  plugins: [
    "unicorn",
    "sonarjs",
    "lodash",
    "jest-dom",
    "jest",
    "regexp",
    "deprecation",
  ],
  rules: {
    "capitalized-comments": "off",
    "no-warning-comments": "warn",
    "deprecation/deprecation": "error",

    // TODO: re-work on this one
    "arrow-body-style": "off",

    "unicorn/filename-case": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/prefer-top-level-await": "off",
    // For now because it's recommended to return null is React component when not rendering anything
    "unicorn/no-null": "off",
    // In conflicts with prettier formatting
    "unicorn/no-nested-ternary": "off",

    // Some projects will need to override this rule
    // in order to keep bundle size minimal
    "lodash/import-scope": ["error", "full"],

    // Native methods have better performances
    // https://github.com/wix-incubator/eslint-plugin-lodash#preference-over-native
    "lodash/prefer-lodash-method": "off",
    "lodash/prefer-lodash-typecheck": "off",
    "lodash/prefer-constant": "off",

    // The following TS rules should be restored
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/ban-types": "off",

    // The following Turbo rules should be restored
    "turbo/no-undeclared-env-vars": "off",

    // Default rules to restore
    "default-case": "off",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      rules: {
        "sonarjs/no-duplicate-string": "off",
        "unicorn/template-indent": "off",
      },
    },
  ],
};
