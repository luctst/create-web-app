const extractCss = require("mini-css-extract-plugin");

module.exports =  {
	rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: /\.scss$/,
			use: [extractCss.loader, "css-loader", "sass-loader"],
		},
		{
			test: /\.(jpg|png|svg|jpeg|gif)$/,
			use: [{
				loader: "file-loader",
				options: { name: "[name].[ext]", outputPath: "img/" }
			}]
		}
	]
}
