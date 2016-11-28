// import fs from 'fs';
const fs = require('fs');
// import server from './core/server';
const server = require('./core/server');

fs.readFile('./app/app.config.json', ( err, data ) => {
	if (err) throw err;
	const config = JSON.parse(data) || {};

	var app = new server(config['server']);
	app.start(() => {
		console.log('dashpage.web-$ Started');
	});
});
