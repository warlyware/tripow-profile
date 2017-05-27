var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var resolve = require("path").resolve;

module.exports = {
	entry: "./src/main.js",
	output: {
		path: resolve("./public"),
		filename: "[name].bundle.js",
		chunkFilename: "[hash].js",
		publicPath: "public/"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: "babel-loader",
			query: {
				presets: ["env"]
			}
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract(
                { fallback: 'style-loader', use: 'css-loader?sourceMap' }
            )
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract(
                { fallback: 'style-loader', use: 'css-loader?sourceMap!sass-loader?sourceMap' }
            )
		}]
	},
	plugins: [
        new ExtractTextPlugin("[name].css"),
        new CopyWebpackPlugin([
            { from: 'src/index.html', to: 'index.html' }
        ])

    ],
	devtool: "#source-map"
}