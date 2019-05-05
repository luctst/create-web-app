const extractCss = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
	new htmlWebpackPlugin({
		inject: true,
		template: "./public/index.html",
	}),
	new extractCss({
		filename: "style.css"
	})
]
