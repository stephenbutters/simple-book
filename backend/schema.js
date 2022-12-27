const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    id: Number,
    title: String,
    content: String,
    author: String,
    comments: Number,
    diamond: Number,
    likes: Number
});

const authorSchema = new mongoose.Schema({
    thumbnailUrl: String,
    name: String,
    description: String
});

const articleSchema = new mongoose.Schema({
    id: String,
    title: String,
    likes: Number,
    author: String,
    author_thumbnail: String,
    diamond: Number,
    last_update: String,
    word_count: Number,
    read_amount: Number,
    ip_location: String,
    paragraphs: [String]
});

const CardModel = mongoose.model('Card', cardSchema);
const AuthorModel = mongoose.model('Author', authorSchema);
const ArticleModel = mongoose.model('Article', articleSchema);

module.exports = { CardModel, AuthorModel, ArticleModel };