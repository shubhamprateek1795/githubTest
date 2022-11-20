var http = require('http');
var fs = require('fs');
var path = require('path');
const port=5000

http.createServer( (req, res)=> {
    var filePath = '.' + req.url;
    if (filePath == './')
        {
            filePath = './index.html';
        }
     
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
       
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        
    }


    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', function (error, content) {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content);
                });
            }
            else {
                res.writeHead(500);
                res.end('Sorry, check with the site  for error: ' + error.code + ' ..\n');
                res.end();
            }
        }

        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }

    });
})

.listen(5000);
console.log(`Server running on port ${port}`);
console.log(`http://localhost:${port}`);

