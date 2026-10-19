

import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
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

const connectedClient = await connectToMongoDB();

const database = connectedClient.db("simpleCrudDB");
const users = database.collection("users");

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', async (req, res) => {
    const cursor = users.find({});
    const allUsers = await cursor.toArray();
    res.send(allUsers);
});

app.get('/users/:id', async (req, res) => {
    // console.log("params in the server", req.params)
    const id = req.params.id
    // console.log("params in the server", id)
    const query = {_id: new ObjectId(id)}

    const result = await users.findOne(query);
    res.send(result);
});

app.post('/users', async (req, res) => {
    const newUser = req.body;
    console.log("Adding new user", newUser);

    const result = await users.insertOne(newUser);
    res.send(result);
});

app.delete('/users/:id', async (req, res) => {
    console.log("params in the server", req.params)
    const id = req.params.id
    console.log("params in the server", id)
    const query = {_id: new ObjectId(id)}

    const result = await users.deleteOne(query);
    res.send(result);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
