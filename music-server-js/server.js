var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser');
  
  process.on('uncaughtException', function (err) {
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });

var routes = require('./arweave-api/routes/addressRoute'); //importing route
routes(app); //register the route
app.get('/', function (req, res) {
    res.send('Hello World!'); // This will serve your request to '/'.
  });

app.listen(port, function () {
    console.log('arweave RESTful API server started on: ' + port);
   });