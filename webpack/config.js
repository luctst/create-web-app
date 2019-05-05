const path = require("path");

module.exports = {
	mode: "development",
	target: 'web',
	entry: {
		index: path.resolve("src", "index.js")
	},
	output: {
		path: path.resolve("public/js/"),
		filename: "js/[name].[hash].bundle.js"
	},
	optimization: {
		splitChunks: {
			chunks: "all"
		}
	},
	devServer: {
		contentBase: path.resolve("public"),
		compress: true,
		port: 8080,
		open: true,
		disableHostCheck: true,
		historyApiFallback: true,
	},
}
