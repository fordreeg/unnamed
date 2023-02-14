module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "next",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: ["@typescript-eslint", "tss-unused-classes", "react"],
  ignorePatterns: ["src/**/*.test.ts"],
  rules: {
    "react/jsx-max-props-per-line": [
      "error",
      {
        maximum: {
          single: 2,
          multi: 1
        }
      }
    ],
    "semi": ["error", "never"],
    "no-restricted-exports": "off",
    "implicit-arrow-linebreak": ["error", "beside"],
    "max-len": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2
      }
    ],
    //React
    "react/require-default-props": "off",
    "react/jsx-key": "error",
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    //Typescript
    "tss-unused-classes/unused-classes": "warn",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/semi": ["error", "never"],
    "@typescript-eslint/comma-dangle": ["error", "never"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
        leadingUnderscore: "allow"
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"]
      },
      {
        selector: "enum",
        format: ["UPPER_CASE", "PascalCase"]
      },
      {
        selector: "typeLike",
        format: ["PascalCase"]
      }
    ]
  }
};
