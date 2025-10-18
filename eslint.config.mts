import tseslint from 'typescript-eslint'
import {defineConfig} from 'eslint/config'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import customPluginEslint from 'custom-plugin-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
	eslintConfigPrettier,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
	  plugins: {
			'custom-plugin-eslint': customPluginEslint,
	  },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'react/prop-types': 'warn',
	    'custom-plugin-eslint/path-checker': ['error', {alias: '@'}],
	    'custom-plugin-eslint/public-api-imports': ['error', {alias: '@'}],
	    'custom-plugin-eslint/layer-imports': ['error', {alias: '@'}],
	    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' },],
    },
  },
])