const { MongoClient } = require("mongodb");
const URI = `mongodb+srv://m220student:m220password@mflix.yfnoj.mongodb.net/mflix?retryWrites=true&w=majority`;

describe("Mongo Test", () => {
  const client = new MongoClient(URI, {
    connectTimeoutMS: 200,
    retryWrites: true,
  });

  afterAll(async () => {
    client.close();
  });

  test("Testing Mongo Db Connection With Uri", async () => {
    const testClient = await client.connect();

    expect(testClient).not.toBeNull();
    const clientOptions = testClient.s.options;

    expect(clientOptions.credentials).not.toBe(null);
    expect(clientOptions.credentials.username).toBe("m220student");
    expect(clientOptions.credentials.source).toBe("admin");
    expect(clientOptions.dbName).toBe("mflix");
  });
});
