const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = process.env.NODE_ENV;
const chunkSorts = ['vendor', 'app'];

const resolve = p => path.resolve(__dirname, p);

function styleLoaders(lang) {
    const loaders = [{
        loader: 'css-loader',
    }];
    if (lang === 'scss') {
        loaders.push({
            loader: 'sass-loader',
            options: {
                indentedSyntax: false,
            },
        });
    }
    if (env === 'production') {
        return ExtractTextPlugin.extract({
            fallback: 'vue-style-loader',
            use: ['css-loader', 'sass-loader'],
        });
    }
    return ['vue-style-loader'].concat(loaders);
}


module.exports = {
    entry: {
        app: resolve('../src/index.ts'),
    },
    output: {
        path: resolve('../build'),
        filename: '[name].[hash:10].js',
        chunkFilename: '[id].[hash:10].js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.vue', '.json'],
        alias: {
            '@': resolve('../src'),
            vue$: 'vue/dist/vue.esm.js',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('../src/index.html'),
            filename: './index.html',
            excludeChunks: [],
            chunksSortMode: (a, b) => chunkSorts.indexOf(a.names[0]) - chunkSorts.indexOf(b.names[0]),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        new VueLoaderPlugin(),
        new ExtractTextPlugin('[name].[hash:10].css'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true,
        }),
    ],
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.js$/, loader: 'babel-loader' },
            { test: /\.ts$/, use: [{ loader: 'babel-loader' }, { loader: 'ts-loader', options: { appendTsSuffixTo: ['\\.vue$'] } }] },
            { test: /\.tsx$/, exclude: /node_modules/, enforce: 'pre', use: ['babel-loader', { loader: 'ts-loader', options: { appendTsSuffixTo: ['\\.vue$'] } }] },
            { test: /\.css$/, use: styleLoaders() },
            { test: /\.scss$/, use: styleLoaders('scss') }
        ],
    },
    optimization: {
        minimize: env === 'production' ? true : false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
    },
};
