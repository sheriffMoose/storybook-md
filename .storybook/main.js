module.exports = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  stories: ['../*.md'],
  addons: ["../preset.js", "@storybook/addon-essentials", {
    name: "@storybook/addon-docs",
    options: {
      transcludeMarkdown: true
    }
  }],
  docs: {
    autodocs: true
  }
};