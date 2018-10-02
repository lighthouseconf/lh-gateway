//import 3rd party libraries
const express = require('express');
const app = express();
const request = require('request');
//import list of endpoints from microservices
const endpoints = require('./services/endpoints');
const port = process.env.PORT || 3000;

//reference implmentation
app.get('/api/users', function getUsers(req, res) {
	request.get('/api/users', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
	});
});

app.listen(port, () => {
	console.log(`API gateway running at port ${port}`);
});