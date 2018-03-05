import webpack from 'webpack';
import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname, 'src/userExample/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist/userExample'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false,
        }),
        // Create HTML File that includes a reference to bundled JS
        new htmlWebpackPlugin({
            template: 'src/userExample/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),
        // Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}
