const express = require("express");
const booksRouter = require("./books/books.routes");

const api = express.Router();

api.use("/books", booksRouter);

module.exports = api;
