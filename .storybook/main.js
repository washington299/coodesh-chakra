module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ["@chakra-ui/storybook-addon"],
  features: {
    emotionAlias: false,
  },
  "framework": "@storybook/react",
	webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

		return config;
	}
}
