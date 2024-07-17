// lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://chirgq:jgQIZXHNhv6TSxAr@cluster0.4pochyr.mongodb.net/?retryWrites=true&w=majority";
let client;
let clientPromise;


if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    clientPromise = client.connect();
}

export default clientPromise;
