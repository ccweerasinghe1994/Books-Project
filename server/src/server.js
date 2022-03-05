const http = require("http");
const { mongoConnect } = require("./services/mongo.service");

const PORT = process.env.PORT || 8000;

const server = http.createServer();

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
}

startServer();
