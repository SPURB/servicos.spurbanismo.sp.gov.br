const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports =  ({ mode }) => {
	let config = {
		entry: './src/main.js',
		mode,
		devtool: 'inline-source-map',
		stats: 'errors-only',
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[chunkhash:8].js',
			chunkFilename: '[name].[chunkhash:8].chunk.js'
		},
		optimization: {
			minimize: mode === 'production'
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: 'style.css'
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, './src/index.html')
			}),
		],
		module: {
			rules: [
				{
					test: /\.svg$/,
					loader: 'svg-inline-loader',
					options: {
						removeTags: true
					}
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader'
					],
				},
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}			]
		}
	}
	if (mode === 'development') {
		config.devServer = {
			clientLogLevel: 'silent',
			overlay: true,
			contentBase: path.join(__dirname, 'dist')
		}
	}

	return config
}
