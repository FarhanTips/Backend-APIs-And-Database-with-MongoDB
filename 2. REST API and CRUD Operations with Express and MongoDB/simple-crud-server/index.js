

import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import 'dotenv/config'


const app = express();
const port = process.env.port || 5000;

// middleware
app.use(cors());
app.use(express.json());

// console.log("Hello",process.env.DB_USER)


const client = new MongoClient(process.env.MONGODB_CLIENT);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

await connectToMongoDB();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
