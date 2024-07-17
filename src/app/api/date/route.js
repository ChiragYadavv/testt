

import clientPromise from '../mongodb';
import { ObjectId } from 'mongodb';
import { authCheck } from '../auth';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { authtoken, date } = await request.json();
        if (authCheck(authtoken)) {
            if (date) {
                const client = await clientPromise;
                const db = client.db('urbandetailing');
                const collection = db.collection('Queries');
                await collection.deleteMany({ date: date });
                return NextResponse.json({ msg: 'Deleted Successfully' });
            } else {
                return NextResponse.json({ msg: 'Request Did not contain id parameter' }, { status: 400 });
            }
        } else {
            return NextResponse.json({ msg: 'Unauthorized Access' }, { status: 401 });
        }
    } catch (e) {
        console.error('Some Error Occurred\n' + e);
        return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
    }
}
