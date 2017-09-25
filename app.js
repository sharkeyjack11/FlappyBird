var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('public'))


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

app.listen(port, function() {
  console.log('Port:' + port);
});
