var restify = require('restify');
require('restify').plugins;
const axios = require('axios').default;

axios.defaults.baseURL = 'http://localhost:8080/api/v1';

function hello(req, res, next: any) {
  res.send('hello ' + req.params.name);
  next();
}

function getSessions(req, res, next: any) {
    var response = axios.get('/sessions')
        .then(function(response) {
            res.send(response.data);
            next();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getSingleSession(req, res, next: any) {
    var response = axios.get('/sessions/' + req.params.id)
        .then(function(response) {
            res.send(response.data);
            next();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getSpeakers(req, res, next: any) {
    var response = axios.get('/speakers')
        .then(function(response) {
            res.send(response.data);
            next();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getSingleSpeaker(req, res, next: any) {
    var response = axios.get('/speakers/' + req.params.id)
        .then(function(response) {
            res.send(response.data);
            next();
        })
        .catch(function (error) {
            console.log(error);
        });
}

var server = restify.createServer();
server.get('/hello/:name', hello);
//server.head('/hello/:name', hello);
server.get('/sessions', getSessions);
server.head('/sessions', getSessions);
server.get('/sessions/:id', getSingleSession);
server.get('/speakers', getSpeakers);
server.get('/speakers/:id', getSingleSpeaker);

server.listen(8626, function() {
  console.log('%s listening at %s', server.name, server.url);
});
