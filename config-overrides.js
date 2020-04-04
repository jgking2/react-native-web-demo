const webpack = require('webpack');

module.exports = module.exports = function override(config, env) {
  // Let's force our code to bundle using the same bundler react native does.
  config.plugins.push(new webpack.DefinePlugin({__DEV__: true}));
  config.module.rules.push({
    test: /\.(js|tsx?)$/,
    /**
     * You can exclude the exclude property if you don't want to keep adding individual node_modules
     * just keep an eye on how it effects your build times, for this example it's negligible */
    // exclude: /node_modules[/\\](?!@react-navigation|react-native-gesture-handler|react-native-screens)/,
    use: {
      loader: 'babel-loader',
    },
  });

  return config;
};
