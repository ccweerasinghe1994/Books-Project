const { MongoClient } = require("mongodb");
// Connection URI
const URI = `mongodb+srv://m220student:m220password@mflix.yfnoj.mongodb.net/mflix?retryWrites=true&w=majority`;
// Create a new MongoClient
const client = new MongoClient(URI);

async function mongoConnect() {
  // Connect the client to the server
  await client.connect();
  // Establish and verify connection
  await client.db("admin").command({ ping: 1 });
  console.log("Connected successfully to MongoDB Atlas");
}

async function mongoDisconnect() {
  await client.close();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
