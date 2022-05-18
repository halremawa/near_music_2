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

routes = require('./near-api/routes/transactionsRoute');
routes(app);

routes = require('./near-api/routes/songsRoute');
routes(app);

routes = require('./near-api/routes/accountRoute');
routes(app);


app.listen(port, function () {
  console.log('near/arweave RESTful API server started on: ' + port);
});