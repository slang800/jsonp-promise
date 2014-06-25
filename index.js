var jsonp = require("jsonp");
var Promise = require("promise");

module.exports = function jsonp_promise(url, options) {
	return new Promise(function (resolve, reject) {
		var args = [].slice.call(arguments);
		args.push(function (err, res) {
			if (err) reject(err)
			else resolve(res);
		});

		jsonp.apply(null, args);
	});
};
