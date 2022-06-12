const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/scripts/index.js')
    },
    output: {
        filename: "[name].js",
        clean: true,
        assetModuleFilename: 'assets/[name][contenthash].[ext]',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            favicon: path.resolve(__dirname, 'src/assets/images/logo.ico')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpeg|jpg|webp)$/, 
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash][ext][query]'
                }
            },
            {
                test: /\.(ttf)$/, 
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash][ext][query]'
                }
            },
            {
                test: /\.(css$)/, 
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    },
}