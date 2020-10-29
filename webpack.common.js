const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/i,
                exclude: /css/,
                use: ["to-string-loader", "css-loader"]
            },
            {
                test: /\.css$/i,
                include: /css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                    },
                }]
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                    from: './src/img/*.jpg'
                },
                {
                    from: './src/img/icons/*.png'
                },
                {
                    from: './src/*.json'
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/nav.html",
            filename: "/src/nav.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/home.html",
            filename: "/src/pages/home.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/competition.html",
            filename: "/src/pages/competition.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/saved.html",
            filename: "/src/pages/saved.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/team.html",
            filename: "/src/pages/team.html"
        }),
        new WorkboxPlugin.InjectManifest({
            maximumFileSizeToCacheInBytes: 5000000,
            swSrc: path.join(process.cwd(), "./src/service-worker.js"),
            swDest: "sw.js"
        })
    ]
};