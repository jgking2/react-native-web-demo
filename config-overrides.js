const webpack = require('webpack');

module.exports = module.exports = function override(config, env) {
  // Let's force our code to bundle using the same bundler react native does.
  config.plugins.push(new webpack.DefinePlugin({__DEV__: true}));
  config.module.rules.push({
    test: /\.(js|tsx?)$/,
    exclude: /node_modules[/\\](?!react-navigation|victory-native|react-native-vector-icons|react-native-safe-area-view|react-native-elements|react-native-gesture-handler|react-native-google-places-autocomplete|react-native-keyboard-aware-scroll-view|react-native-keychain|react-native-ratings|react-native-reanimated|react-native-image-zoom-viewer|@react-navigation|@invertase|@react-native-community|react-native-fbsdk|react-native-screens|react-native-modalbox|react-native-step-indicator)/,
    use: {
      loader: 'babel-loader',
    },
  });

  return config;
};
