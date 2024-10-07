module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows parsing of modern ECMAScript features
    sourceType: 'module', // Allows the use of imports
    ecmaFeatures: {
      jsx: true, // Enables JSX parsing
    },
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect', // Automatically detects the React version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve these extensions
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // React specific linting rules
    'plugin:react-hooks/recommended', // React Hooks rules
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:jsx-a11y/recommended', // Accessibility rules for JSX
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:styled-components-a11y/recommended', // Accessibility rules for styled-components
    // Optional: If using Prettier
    'plugin:prettier/recommended',
    'prettier',
    
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jsx-a11y',
    'import',
    'styled-components-a11y',
    'styled-components',
    'react-refresh',
    // Optional: If using Prettier
    'prettier',
    
  ],
  rules: {
    // Custom Rules

    // React Rules
    'react/prop-types': 'off', // Disable prop-types as we're using TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+

    // TypeScript Rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Import Rules
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-unresolved': 'error',
    'styled-components-a11y/noUnsupportedCssProperties': 'warn',

    // JSX Accessibility Rules
    // You can customize accessibility rules as needed

    // styled-components Accessibility
    'styled-components-a11y/noUnsupportedCssProperties': 'warn',

    // React Refresh
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // Optional: If using Prettier
    // 'prettier/prettier': 'error',

    // Other Customizations
    'no-unused-vars': 'off', // Disable base rule as it can report incorrect errors
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
