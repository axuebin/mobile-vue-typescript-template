const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../src'),
        port: 7777,
        host: '0.0.0.0',
        hot: true,
        compress: true,
    },
});
