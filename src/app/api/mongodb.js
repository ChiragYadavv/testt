// lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://chirgq:jgQIZXHNhv6TSxAr@cluster0.4pochyr.mongodb.net/?retryWrites=true&w=majority";
let client;
let clientPromise;


    // In production mode, it's best to not use a global variable
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    clientPromise = client.connect();

export default clientPromise;
