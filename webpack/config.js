const path = require("path");

module.exports = {
	mode: "development",
	entry: path.resolve("src", "index.js"),
	output: {
		path: path.resolve("public"),
		filename: "bundle.js"
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
