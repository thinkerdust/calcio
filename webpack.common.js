const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
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
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new WorkboxPlugin.InjectManifest({
            swSrc: "./src/sw-register.js",
            swDest: "service-worker.js",
            maximumFileSizeToCacheInBytes: 10000000,
        }),
        new WebpackPwaManifest({
            name: 'Calcio',
            short_name: 'Calcio',
            description: 'Football Premier League App',
            display: "standalone",
            background_color: '#0278ae',
            theme_color: "#0278ae",
            inject: true,
            fingerprints: false,
            icons: [
              {
                src: path.resolve('./src/img/icon.png'),
                sizes: [96, 128, 144, 256, 384, 512],
                purpose: 'maskable' 
              },
              {
                src: path.resolve('./src/img/apple-touch-icon.png'),
                size: '192x192',
                purpose: 'maskable' 
              }
            ]
          })
    ]
};