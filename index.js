'use strict';

var mimez = require('mimez'),
	url = require('url');

var aliez_mimez = function(req, res, done){
	var obj = url.parse(req.url);
	res.mime = function(ext){
		if('string' == typeof ext){
			res.setHeader('content-type', mimez.ext(ext));
		}else{
			res.setHeader('content-type', mimez.ext('xxx'));
		}
	}
	res.setHeader('content-type', mimez.url(obj.path));
	done();
}

module.exports = aliez_mimez;