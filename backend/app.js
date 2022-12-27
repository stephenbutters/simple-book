const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const model = require('./schema');
const load_data = require('./load_data');
const path = require('path');

const app = express();
const port = 4000;
app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));

mongoose.set('strictQuery', false);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/cards', async (req, res) => {
    const cards = await model.CardModel.find({});
    return res.json(cards);
})

app.get('/api/authors', async (req, res) => {
    const authors = await model.AuthorModel.find({});
    return res.json(authors);
})

app.get('/api/article', async (req, res) => {
    const id = req.query.id
    const article = await model.ArticleModel.findOne({ id: id });
    return res.json(article);
})

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);

    await mongoose.connect('mongodb://mongodb:27017/local');

    // load some sample data to MongoDB
    load_data();
})