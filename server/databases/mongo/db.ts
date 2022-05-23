import { MongoClient } from "https://deno.land/x/mongo/mod.ts";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient();
try {
  await client.connect(URI);
  console.log("Database successfully connected");
} catch (err) {
  console.log(err);
}

export const db = client.database("silas-car"); 