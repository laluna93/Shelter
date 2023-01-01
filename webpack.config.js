const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = {
    entry: {
        index: "./src/pages/main/index.ts",
        pets: "./src/pages/pets/index.ts",
      },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false },
                    },
                ],
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', "sass-loader",],
            },
            
            {
                test: /\.(png|jpg|jpeg|svg|gif|json|styles)$/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    
    output: {
        filename: "[name].bundle.js",
        assetModuleFilename: "assets/[name][ext]",
        chunkFilename: "[id].[chunkhash].js",
        path: path.resolve(__dirname, "dist/"),
        publicPath: "auto",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/pages/main/index.html",
            inject: true,
            chunks: ["index"],
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/pets/index.html",
            inject: true,
            chunks: ["pets"],
            filename: "pets.html",
        }),
        // new CleanWebpackPlugin(),
        new EslingPlugin({ extensions: 'ts' }),
        new CopyPlugin(
            { 
                patterns: [
                    { from: './src/assets/img/cards-pets', to: 'assets/img/cards-pets' },
        { from: './src/assets/json', to: 'assets/json' }] }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
