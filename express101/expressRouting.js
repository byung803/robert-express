const express = require('express');
const app = express();

// app.all('/', (req, res) => {
//     res.send(`<h1>Welcome to homepage</h1>`)
// })

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to home GET page</h1>`)
})

app.post('/', (req, res) => {
    res.send(`<h1>Welcome to home POST page</h1>`)
})

app.delete('/', (req, res) => {
    res.send(`<h1>Welcome to home DELETE page</h1>`)
})

app.put('/', (req, res) => {
    res.send(`<h1>Welcome to home PUT page</h1>`)
})

app.listen(3000, () => {
    console.log('listen 3000')
});