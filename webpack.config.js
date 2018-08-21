var path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        vendor: ['react', 'react-dom'],
        main: './index.js',
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'public')
    },

    mode: 'development',

    watch: true,

    devtool: 'source-map',

    devServer: {
        port: 9090
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: '[path][name].[ext]',
                        outputPath: 'img/'
                    }
                }
            },
            {
			    test: /\.(ogg|mp3|wav|mpe?g)$/i,
			    use: 'file-loader'
			}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ],
    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all'
        }
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css', '*']
    }
}