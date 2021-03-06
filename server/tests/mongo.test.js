const {
  mongoConnect,
  mongoDisconnect,
} = require("../src/services/mongo.service");

describe("Mongo Test", () => {
  let client;

  beforeAll(async () => {
    client = await mongoConnect();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });

  test("Testing Mongo Db Connection With Uri", async () => {
    expect(client).not.toBe(null);
    const clientOptions = client.s.options;
    expect(clientOptions.credentials).not.toBe(null);
    expect(clientOptions.credentials.username).toBe("m220student");
    expect(clientOptions.credentials.source).toBe("admin");
    expect(clientOptions.dbName).toBe("mflix");
  });

  test("Testing The Collections", async () => {
    const mflixDB = await client.db("sample_mflix");
    const mflixCollections = await mflixDB.listCollections().toArray();
    const actualCollectionNames = mflixCollections.map((obj) => obj.name);
    const expectedCollectionNames = ["movies", "comments", "users", "sessions"];

    expectedCollectionNames.map((collection) =>
      expect(actualCollectionNames).toContain(collection)
    );

    const movies = mflixDB.collection("movies");

    const numMovies = await movies.countDocuments();

    expect(numMovies).toBe(23530);
  });
  test("Testing Movies Collection", () => {});
});
