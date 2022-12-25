const express = require('express');
const mock = require('./mock');
const app = express();
const port = 4000;

app.get('/api/cards', (req, res) => {
    res.send(mock.cards);
})

app.get('/api/authors', (req, res) => {
    res.send(mock.authors);
})

app.get('/api/article', (req, res) => {
    const id = req.query.id
    res.send(mock.articles.at(id));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})