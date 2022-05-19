var express = require('express'),
cors = require('cors'),
  app = express(),
 fileUpload = require('express-fileupload');
  port = process.env.PORT || 3001,
  bodyParser = require('body-parser');

process.on('uncaughtException', function (err) {
  console.log(err);
});

app.use(cors());

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./near-api/routes/transactionsRoute');
routes(app);

routes = require('./near-api/routes/songsRoute');
routes(app);

routes = require('./near-api/routes/accountRoute');
routes(app);

app.use(fileUpload());
routes = require('./arweave-api/routes/addressRoute'); //importing route
routes(app); //register the route

app.listen(port, function () {
  console.log('near/arweave RESTful API server started on: ' + port);
});