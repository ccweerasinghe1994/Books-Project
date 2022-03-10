const { MongoClient } = require("mongodb");
// Connection URI
// const URI = `mongodb+srv://m220student:m220password@mflix.yfnoj.mongodb.net/mflix?retryWrites=true&w=majority`;
const URI = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;
// Create a new MongoClient
const client = new MongoClient(URI, {
  connectTimeoutMS: 5000,
});
let connectedClient = null;
async function mongoConnect() {
  // Connect the client to the server
  connectedClient = await client.connect();
  // Establish and verify connection
  // await client.db("admin").command({ ping: 1 });
  console.log("Connected successfully to MongoDB Local server");

  // console.log(
  //   await response
  //     .db("sample_mflix")
  //     .collection("movies")
  //     .findOne({ title: "Once Upon a Time in Mexico" })
  // );

  return connectedClient;
}

async function mongoDisconnect() {
  await client.close();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
  client,
};
