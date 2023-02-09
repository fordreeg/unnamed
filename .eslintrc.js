module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'tss-unused-classes'
  ],
  ignorePatterns: [
    'src/**/*.test.ts'
  ],
  rules: {
    'no-restricted-exports': 'off',
    //React
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    //Typescript
    'tss-unused-classes/unused-classes': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: 'enum',
        format: ['UPPER_CASE', 'PascalCase']
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ]
  }
  
}
