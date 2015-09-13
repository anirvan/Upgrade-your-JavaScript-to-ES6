'use strict';
var express    = require('express');
var app        = express();
var router     = express.Router();

app.set('port', 8080);
app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/'));
router.route('/').get(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.use('/', router);
app.listen(app.get('port'));
console.log('Magic happens on port ' + app.get('port'));
