import { NextRequest, NextResponse } from "next/server";
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



export async function GET(request) {
    await client.connect()
    const database = client.db("ClassVT");
    const items = await database.collection('classes').find({}).toArray()
    return NextResponse.json(items, { status: 200 })
}
