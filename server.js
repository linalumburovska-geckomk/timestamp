
var express = require('express');
var app = express();
var parseTime = require('./parseTime.js');

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200})); 


app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/timestamp/:date_string", function (req, res) {
  var date = req.params.date_string;
  var output = parseTime(date);
  res.send(JSON.stringify(output));
});



app.listen(3000, function () {
  console.log('Your app is listening on port 3000');
});