const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

console.log(uri);

export default async function Home() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
    await client.connect()
    const database = client.db("ClassVT");
    const items = await database.collection('users').find().toArray()
    
    return <div>{JSON.stringify(items)}</div>
}