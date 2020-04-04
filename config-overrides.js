const webpack = require('webpack');
const path = require('path');

const aliasForWeb = ([folder]) => path.resolve(`./src/.web-aliases/${folder}`);

module.exports = module.exports = function override(config) {
  const webAliases = {
    'react-native' /* import to override */: aliasForWeb`react-native` /* the path within the alias folder */,
  };
  Object.assign(config.resolve.alias, webAliases);

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
