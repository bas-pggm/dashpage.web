// import express from 'express';
const express = require('express');
// import fs from 'fs';
const read = require('fs').readFile;
// import { join } from 'path';
const join = require('path').join;
// import serve from 'serve-static';
const serve = require('serve-static');

module.exports = class Server {

	constructor( config ) {
		this._config = config;
		this._server = new express;
		this._server.use('/assets', serve(join(__dirname, '..', '..', 'dist')));
		this._server.use('*', (req, res, next) => {
			read(join(__dirname, '..', '..', 'dist', 'index.html'), (err, data) => {
				if (err) throw err;
				res.end(data);
			});
		});
	}

	start( callback ) {
		this._server.listen(this._config.port || 3001, () => {
			console.log("dashpage.web-$ config:", this._config);
			callback();
		});
	}

}
