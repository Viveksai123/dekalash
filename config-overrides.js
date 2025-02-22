const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins = config.plugins.map(plugin => {
    if (plugin instanceof HtmlWebpackPlugin) {
      return new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'), // Use index.html from the root
      });
    }
    return plugin;
  });

  return config;
};
