import { NextRequest, NextResponse } from "next/server";
import absoluteUrl from 'next-absolute-url'
import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db = null;

export async function POST(request) {
    let response = null
    const res = await request.json()
    if (!res.username) {
        response = NextResponse.json({ error: 'Username is required' },
        { status: 500 })
    } else if (!res.password) {
        response = NextResponse.json({ error: 'Password is required' }, { status: 500 })
    }else {
        if (!db) {
            db = await open({
                filename: "./collection.db", 
                driver: sqlite3.Database, 
            });
        }
        const items = await db.all("SELECT * FROM users WHERE username = ? AND password = ?", res.username, res.password);
        
        if (items.length === 0) {
            response = NextResponse.json({ error: 'Username or password is incorrect' }, { status: 500 })
        }
        const { origin } = absoluteUrl(request);
        if (items[0].role === 'student') {
            response = NextResponse.redirect(origin+'/home')
        } else if (items[0].role === 'teacher') {
            response = NextResponse.redirect(origin+'/admin')
        }
    }
    return response
}