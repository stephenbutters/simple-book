// getting-started.js
const mongoose = require('mongoose');
const model = require('./schema');
const mock = require('./mock');

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;

module.exports = () => {
    const promises = [];
    mock.cards.forEach(data => {
        const object = new model.CardModel(data);
        promises.push(object.save());
    });

    mock.authors.forEach(data => {
        const object = new model.AuthorModel(data);
        promises.push(object.save());
    });

    mock.articles.forEach(data => {
        const object = new model.ArticleModel(data);
        promises.push(object.save());
    });

    Promise.all(promises).catch(err => {
        console.log(err);
    }).finally(() => {
        console.log("Sample Data Loaded");
    })
};