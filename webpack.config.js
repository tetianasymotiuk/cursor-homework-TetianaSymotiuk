const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ['@babel/polyfill',
        './src/index.js'],
    output: {
        path: __dirname + './dist',
        filename: 'main.js'
    },
    devServer: {
        contentBase:  __dirname + './dist',
        port: 3000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: false
        })
    ],
    resolve: {
        alias : {

        },
        extensions : ['.js','.jsx']
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }

}
