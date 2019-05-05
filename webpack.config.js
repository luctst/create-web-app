const config = require("./webpack/config");
const plugins = require("./webpack/plugins-config");
const modules = require("./webpack/module-config");

/**
 * Export
 */
module.exports = {
	...config,
	module: modules,
	plugins,
};
