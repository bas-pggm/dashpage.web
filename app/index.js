// import fs from 'fs';
const read = require('fs').readFile;
// import server from './core/server';
const server = require('./core/server');

read('./app/app.config.json', ( err, data ) => {
	if (err) data = "{}";
	const config = JSON.parse(data) || {};

	var app = new server(config['server']);
	app.start(() => {
		console.log('dashpage.web-$ Started');
	});
});
