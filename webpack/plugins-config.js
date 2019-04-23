const extractCss = require("mini-css-extract-plugin");

module.exports = [
	new extractCss({
		filename: "style.css"
	})
]
