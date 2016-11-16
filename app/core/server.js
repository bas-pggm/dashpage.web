var join = require('path').join;
var express = require('express');
var serve = require('serve-static');

module.exports = class Server {

	constructor( config ) {
		this._config = config;
		this._server = new express;
		this._server.use(serve(join(__dirname, '..', '..', 'dist')));
	}

	start( callback ) {
		this._server.listen(this._config.port || 3001, () => {
			console.log("dashpage.web-$ config:", this._config);
			callback();
		});
	}

}
