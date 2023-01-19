const mdIndexer = require('./indexer');

module.exports = {
  storyIndexers: (indexers) => {
    return [
      {
        test: /\.md$/,
        indexer: mdIndexer
      },
      ...(indexers || [])
    ];
  }
}