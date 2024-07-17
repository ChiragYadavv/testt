

import clientPromise from '../mongodb';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { NextResponse } from 'next/server';

const jwtPass = 'urbandetailing.in';

export async function POST(request) {
    try {
        const { username, password } = await request.json();
        const hashPassword = crypto.createHash('sha1').update(jwtPass + password).digest('hex');
        const time = new Date();

        const client = await clientPromise;
        const db = client.db('urbandetailing');
        const userCollection = db.collection('Users');
        const user = await userCollection.findOne({ username });

        if (user) {
            if (user.password === hashPassword) {
                const tokenData = { username, time };
                const authToken = jwt.sign(tokenData, jwtPass);
                return NextResponse.json({ authtoken: authToken, msg: 'Login Succeeded' });
            } else {
                return NextResponse.json({ msg: 'Wrong Password' }, { status: 401 });
            }
        } else {
            return NextResponse.json({ msg: 'User Was not found' }, { status: 404 });
        }
    } catch (e) {
        console.error('Some Error Occurred\n' + e);
        return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
    }
}
