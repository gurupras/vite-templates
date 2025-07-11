import vue from 'eslint-plugin-vue'
import neostandard from 'neostandard'
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

export default [
	...neostandard({ ts: true }),
	...vue.configs['flat/recommended'],
	...storybook.configs['flat/recommended']
]
