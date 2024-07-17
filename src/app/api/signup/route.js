// app/api/signup/route.js

import clientPromise from '../mongodb';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

const jwtPass = 'urbandetailing.in';

export async function POST(request) {
    try {
        const { username, password } = await request.json();
        if (username && password) {
            const hashPassword = crypto.createHash('sha1').update(jwtPass + password).digest('hex');

            const client = await clientPromise;
            const db = client.db('urbandetailing');
            const userCollection = db.collection('Users');
            await userCollection.insertOne({ username, password: hashPassword });
            return NextResponse.json({ msg: 'Created The User, You May login now' });
        } else {
            return NextResponse.json({ msg: 'Request Parameters Incomplete' }, { status: 400 });
        }
    } catch (e) {
        console.error('Some Error Occurred\n', e);
        return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
    }
}
