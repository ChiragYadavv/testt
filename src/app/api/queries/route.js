// app/api/queries/route.js
import clientPromise from '../mongodb';
import { authCheck } from '../auth';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { authtoken } = await request.json();
        if (authCheck(authtoken)) {
            const client = await clientPromise;
            const db = client.db('urbandetailing');
            const collection = db.collection('Queries');
            const queries = await collection.find().toArray();
            return NextResponse.json(queries);
        } else {
            return NextResponse.json({ msg: 'Unauthorized Access' }, { status: 401 });
        }
    } catch (e) {
        console.error('Some Error Occurred\n' + e);
        return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
    }
}
