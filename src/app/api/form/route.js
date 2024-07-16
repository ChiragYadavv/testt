

import clientPromise from '../mongodb';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { name, email, mobile, message } = await request.json();
    try {
        const client = await clientPromise;
        const db = client.db('urbandetailing');
        const collection = db.collection('Queries');
        await collection.insertOne({ name, email, mobile, message });
        return NextResponse.json({ msg: 'Query Submitted Successfully' });
    } catch (e) {
        console.error('Some Error Occurred\n' + e);
        return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
    }
}
