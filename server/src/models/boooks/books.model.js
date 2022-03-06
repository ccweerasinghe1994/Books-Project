const { client } = require("../../services/mongo.service");

async function getAllBooks() {
  const db = await client.db("books");
  return await db.collection("books").find().toArray();
  console.log(booksCollection);
}

module.exports = {
  getAllBooks,
};
