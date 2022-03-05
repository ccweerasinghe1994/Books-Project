function httpGetAllBooks(req, res) {
  return res.json({
    book: {
      name: "abc",
    },
  });
}

module.exports = {
  httpGetAllBooks,
};
