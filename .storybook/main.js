module.exports = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  stories: ['../*.@(md|html)'],
  addons: ["../preset.js", "@storybook/addon-essentials"],
  docs: {
    autodocs: true
  }
};