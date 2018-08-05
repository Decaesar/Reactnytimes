const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  url: { type: String, required: true },
  synopsis: String

});

const Article = mongoose.model("Article", articlesSchema);

module.exports = Article;
