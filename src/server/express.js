var express = require('express'),
    path = require('path'),
    port = process.env.PORT || 8083,
    app = express();

app.use(express.static(__dirname));

app.get('*', function(request, response){
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);