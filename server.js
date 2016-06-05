var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var spawn = require('child_process').spawn;

app.use(express.static(__dirname + '/index.html'));

app.get('/', function(req, res) {
    var url = req.query.url;
    // console.log(finalurl);
    spawnIndependentChild(url);
    res.sendFile(path.join(__dirname + '/index.html'));
});

var port = process.env.PORT || 3010;

app.listen(port, function() {
    console.log('Example app listening on port ' + port + ' !');
});


var spawnIndependentChild = function(url) {
    var child = spawn('sh', ['test.sh', url], {
        detached: true,
        cwd: __dirname,
        stdio: ['ignore']
    });

    child.unref();
}
