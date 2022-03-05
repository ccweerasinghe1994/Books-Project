const express = require("express");
const { httpGetAllBooks } = require("./books.controller");

const booksRouter = express.Router();

booksRouter.get("/", httpGetAllBooks);

module.exports = booksRouter;
