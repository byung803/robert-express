const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        // console.log(req);
        res.writeHead(200, { 'content-type': 'text/html' });
        // res.write('<h1>This is the home page!</h1>');
        const homePage = fs.readFileSync('node.html');
        res.write(homePage);
        res.end();
    } else if (req.url === "/molang.png") {
        res.writeHead(200, { 'content-type': 'image/png' });
        const image = fs.readFileSync('molang.png');
        res.write(image);
        res.end();
    } else if (req.url === "/styles.css") {
        res.writeHead(200, { 'content-type': 'text/css' });
        const css = fs.readFileSync('styles.css');
        res.write(css);
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Sorry! 404 error</h1>');
        res.end();
    }


})

server.listen(3000);