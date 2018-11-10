const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

//1. route
//2. callback to run if the route is requested 
app.all('/', (req, res) => {
    // res.send(`<h1>This is awesome home page</h1>`)
    res.sendFile(path.join(__dirname, './node.html'))
})

app.all('*', (req, res) => {
    res.send("<h1>404 page not found</h1>")
})

app.listen(3000, () => {
    console.log('listening 3000')
});