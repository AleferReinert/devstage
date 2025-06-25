import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y'
	],
	framework: {
		name: '@storybook/nextjs',
		options: {}
	},
	features: {
		experimentalRSC: true
	},
	// docs: {},

	staticDirs: ['../public'],
	webpackFinal: config => {
		config.resolve?.modules?.push(`${process.cwd()}/src`)
		return config
	}
}
export default config

