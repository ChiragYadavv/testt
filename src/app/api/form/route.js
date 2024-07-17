import clientPromise from '../mongodb';
import { NextResponse } from 'next/server';
import NextCors from 'nextjs-cors';
export async function POST(request) {
    // const response = NextResponse.next();
    // await NextCors(request, response, {
    //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    //     origin: '*',
    //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    // });
    const { name, email, mobile, message } = await request.json();
    try {
        const client = await clientPromise;
        const db = client.db('urbandetailing');
        const collection = db.collection('Queries');
        await collection.insertOne({ name, email, mobile, message });
        console.log("done");
        return NextResponse.json({ msg: 'Query Submitted Successfully' });
    } catch (e) {
        console.error('Some Error Occurred\n' + e);
        return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
    }
}

