import { NextRequest, NextResponse } from "next/server";
import absoluteUrl from 'next-absolute-url'
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

export async function POST(request) {
    let response = null
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
    
    await client.connect()
    const database = client.db("ClassVT");
    const res = await request.json()
    if (!res.username) {
        response = NextResponse.json({ error: 'Username is required' },
        { status: 500 })
        return response
    } else if (!res.password) {
        response = NextResponse.json({ error: 'Password is required' }, { status: 500 })
        return response
    }else {
        
        const items = await database.collection('users').find({username: res.username, password: res.password}).toArray()
        
        if (items.length === 0) {
            return NextResponse.json({ error: "Username or Password invalid",  data : 400 },
            { status: 400 })
        }
        const { origin } = absoluteUrl(request);
        if (items[0].role === 'student') {
            response = NextResponse.json({ url: origin+'/home'})
        } else if (items[0].role === 'teacher') {
            response = NextResponse.json({ url: origin+'/home'})
        }
    }
    return response
}