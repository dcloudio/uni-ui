const path = require("path");

module.exports = (options = {}, ctx) => ({
	define() {
		return {
			selector: options.selectors || 'div[class*="language-"]',
			copyText: options.copyText || "复制代码",
			change: options.change
		};
	},
	clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
});
