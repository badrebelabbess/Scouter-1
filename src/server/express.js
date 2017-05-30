var express = require('express'),
    path = require('path'),
    port = process.env.PORT || 9090,
    app = express();

app.use(express.static(__dirname));

app.get('*', function(request, response){
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);
console.log('listening on port : ' + port);