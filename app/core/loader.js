var loader = require('vue-loader');

module.exports = function () {
	var basename = __dirname + '/../public/' + this.request.match(/.*\?(.*)\.vue$/)[1];
	var viewname = __dirname + '/../public/views/' + this.request.match(/.*\?(.*)\.vue$/)[1] + '/index.pug';
	var scriptname = __dirname + '/../public/scripts/' + this.request.match(/.*\?(.*)\.vue$/)[1] + '/index.js';
	var stylename = __dirname + '/../public/styles/' + this.request.match(/.*\?(.*)\.vue$/)[1] + '/index.less';
	// var viewname = basename.replace('comps', 'views') + '.pug';
	// var scriptname = basename.replace('comps', 'scripts') + '.js';
	// var stylename = basename.replace('comps', 'styles') + '.less';

	console.log(viewname);
	console.log(scriptname);
	console.log(stylename);

	var content = [
		'<template src="' + viewname + '" lang="pug" />',
		'<script src="' + scriptname + '" />',
		'<style src="' + stylename + '" lang="less" />'
	].join('\n');
	return loader.apply(this, [ content ]);
};
