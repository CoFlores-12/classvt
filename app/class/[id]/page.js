import './class.css'
import ItemList from "./ItemList";
import CardClass from "../../home/cardClass";
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI;
import { cookies } from 'next/headers'

export default async function Classes({ params }) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  await client.connect()
  const database = client.db("ClassVT");
  const cookieStore = cookies()
  const tokens = cookieStore.get('token')
  let id = null
  id = tokens.value.split('.')[1]
  id = JSON.parse(Buffer.from(id, 'base64').toString())
  const classes = await database.collection('classes').findOne({_id: new ObjectId( params.id) })

  return <main>
    <CardClass className={"width"} key={classes._id.toString()} name={classes.name} id={classes._id.toString()} code={classes.code} pendings={classes.assig.length} link={classes.link} color={classes.color} bg={classes.bg}/>
    <div className="works">
      {classes.assig.map((assignment) => {
        let flagDone = assignment.done.includes(id.id) ? true : false;
        return <ItemList key={assignment._id.toString()} isDone={flagDone} name={assignment.name} description={assignment.description}
        due={assignment.due} src={assignment.src} id={assignment._id.toString()}
        />
      })}
    </div>
  </main>;
}