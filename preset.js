const indexer = require('./indexer');
const { loader, loaderOptions } = require('./loader');

module.exports = {
  storyIndexers: (indexers) => {
    return [
      {
        test: /\.(md|html)$/,
        indexer
      },
      ...(indexers || [])
    ];
  },
  webpack: async (config, options) => {
    const module = config.module || {};
    let rules = module.rules || [];
    rules = [
      ...rules.filter((rule) => rule.test?.toString() !== '/\\.md$/'),
      {
        test: /\.(md|html)$/,
        use: [
          {
            loader,
            options: loaderOptions,
          },
        ],
      },
    ];

    return { ...config, module: { ...module, rules } };
  }
}