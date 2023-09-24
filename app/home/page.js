import Image from "next/image";
import './home.css'
import CardClass from "./cardClass";
import Works from "./works";
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI;
import { cookies } from 'next/headers'


export default async function MyComponent() {
  let countPendings = 0;
  let countPendingsDone = 0;
  function viewWorksPendings(classes) {
    let respo = []
    classes.forEach((classw) => {
      classw.assig.forEach(assigment => {
        countPendings++
        if(!assigment.done.includes(user._id.toString())){
          respo.push({
            name: assigment.name,
            className: classw.name,
            _id: assigment._id,
            link: "/class/"+classw._id.toString()
          })
        }else{
          countPendingsDone++
        }
      });
    })
    return respo
  }
  let classes = [];
  let pendings = [];
  let user = null;
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
  user = await database.collection('users').findOne({_id: new ObjectId(id.id) })
  classes = await database.collection('classes').find({"students": [user._id.toString()] }).toArray()
  pendings = viewWorksPendings(await classes);
  const progress = (countPendingsDone / countPendings) * 100 + '%'
  return (
    <div>
        <div className="flex h-screen w-full bg-gray-800 " x-data="{openMenu:1}">

      <aside className="w-20 relative z-20 flex-shrink-0  px-2 overflow-y-auto bg-indigo-900 sm:block">
      <div className="mb-6">

        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full bg-gray-300 border-2 border-white mt-2">
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </aside>
            <aside className="animate__animated animate__fadeInLeft w-52 relative z-0 flex-shrink-0 hidden px-4 overflow-y-auto bg-gray-100 sm:block saso01 " 
                   x-show="openMenu ==  1" >
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-4 grid-cols-2 mt-6">
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                      <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                        <i className="fas fa-chart-pie fa-sm text-indigo-600"></i>
                      </div>
                      <p className="text-xs mt-1 text-center font-semibold">Welcome</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                      <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                        <i className="fas fa-calculator fa-sm text-indigo-600"></i>
                      </div>
                      <p className="text-xs mt-1 text-center font-semibold">Calculator</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                      <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                        <i className="fas fa-wallet fa-sm text-indigo-600"></i>
                      </div>
                      <p className="text-xs mt-1 text-center font-semibold">Wallet</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                      <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                        <i className="fas fa-archive fa-sm text-indigo-600"></i>
                      </div>
                      <p className="text-xs mt-1 text-center font-semibold">Saving</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                      <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                        <i className="fas fa-money-bill-wave-alt fa-sm text-indigo-600"></i>
                      </div>
                      <p className="text-xs mt-1 text-center font-semibold">Currencies</p>
                    </div>
                    <div className="p-2 flex flex-col items-center bg-white rounded-md justify-center shadow-xl cursor-pointer">
                      <div className="rounded-full p-2 bg-indigo-200 flex flex-col items-center">
                        <i className="fas fa-shopping-basket fa-sm text-indigo-600"></i>
                      </div>
                      <p className="text-xs mt-1 text-center font-semibold">Expenses</p>
                    </div>
                  </div>
                </div>
            </aside>
            <div className="flex flex-col flex-1 w-full overflow-y-auto">
              <main className="relative z-0 flex-1 pb-8 px-6 bg-white">
                  <div className="grid pb-10  mt-4 ">
                        <div className="mb-2">
                          <p className="text-lg font-semibold text-gray-400">Welcome {user.name}</p>
                        </div>
                        <div className="grid grid-cols-12 gap-6 border-b-2 pb-5">
                          <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xxl:col-span-8">
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-3">
                              { pendings.map((pending, index) => {
                                return (
                                  <Works key={pending._id} name={pending.name} className={pending.className} link={pending.link} id={pending._id} />
                                );
                                })
                              }
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xxl:col-span-4">
                              <div className="p-4">
                                  <p className="text-sm text-gray-400">Progress</p>
                                  <div className="shadow w-full bg-gray-100 mt-2">
                                      <div className="bg-indigo-900 text-xs leading-none py-1 text-center text-white" style={{width: progress}}></div>
                                   </div>
                                    <p className="text-xs font-semibold text-gray-400 mt-2">{progress}</p>
                               </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                         { classes.map((classw, index) => {
                            return (
                              <CardClass key={classw._id.toString()} name={classw.name} id={classw._id.toString()} code={classw.code} pendings={classw.assig.length} link={classw.link} color={classw.color} bg={classw.bg}/>
                            )
                         }) }
                                 
                        </div>
                        
                  </div>
              </main>
            </div>
        </div>
        </div>
  );
}