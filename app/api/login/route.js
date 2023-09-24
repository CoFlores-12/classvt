import { NextRequest, NextResponse } from "next/server";
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/libs/auth";

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
        let uri = '';
        if (items[0].role === 'student') {
            uri = { url: '/home'}
        } else if (items[0].role === 'teacher') {
            uri = { url: '/admin/teacher'}
        } else if (items[0].role === 'admin') {
            uri = { url: '/admin/admin'}
        }
        const token = await new SignJWT({
            id: items[0]._id,
            role: items[0].role, 
          })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("30s") // Set your own expiration time
            .sign(getJwtSecretKey());
      
        response = NextResponse.json(
            uri,
            { success: true },
            { status: 200, headers: { "content-type": "application/json" } }
          );
      
        response.cookies.set({
            name: "token",
            value: token,
            path: "/",
          });
    }
    return response
}