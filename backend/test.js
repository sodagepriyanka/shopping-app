const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const count = await client
    .db("shopping-app")
    .collection("products")
    .countDocuments();
  console.log("Connected! Products in database:", count);
  await client.close();
}

main().catch((err) => console.error("Connection failed:", err.message));
