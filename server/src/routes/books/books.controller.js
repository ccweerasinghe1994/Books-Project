const { getAllBooks } = require("../../models/boooks/books.model");

async function httpGetAllBooks(req, res) {
  const books = await getAllBooks();

  return res.json(books);
}

module.exports = {
  httpGetAllBooks,
};
