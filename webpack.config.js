const config = require("./webpack/config");
const plugins = require("./webpack/plugins-config");
const modules = require("./webpack/module-config");

/**
 * Export
 */
module.exports = () => {
	const getConfig = {...config};
	return {
		...getConfig,
		module: modules,
		plugins,
	};
};
