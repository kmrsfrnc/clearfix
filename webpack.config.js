const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.jsx',
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: path.resolve(__dirname, 'src/modules/'),
            views: path.resolve(__dirname, 'src/views/'),
            utils: path.resolve(__dirname, 'src/utils/'),
            src: path.resolve(__dirname, 'src/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'postcss-loader',
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
            {
                test: /\.jpg$/,
                use: [
                    'url-loader',
                ],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'public/fonts',
                            name: '[name]-[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'dist/[name].[hash].js',
    },
    plugins: [
        htmlPlugin,
        new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
        new WebappWebpackPlugin('src/assets/favicon.png'),
    ],
};
