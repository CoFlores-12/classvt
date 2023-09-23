"use client"
import Image from "next/image";
import './home.css'

export default function MyComponent() {
  const src = "https://api.dicebear.com/7.x/adventurer/svg?seed=Mia"
  return (
    <div>
        <div className="flex h-screen w-full bg-gray-800 " x-data="{openMenu:1}">

      <aside className="w-20 relative z-20 flex-shrink-0  px-2 overflow-y-auto bg-indigo-900 sm:block">
      <div className="mb-6">

        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-full bg-gray-300 border-2 border-white mt-2">
            <Image
            loader={() => src}
              src={src}
              className="rounded-full w-auto" 
              alt="Picture of the author"
              width={50}
              height={50}
              />
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
                      <p className="text-xs mt-1 text-center font-semibold">Dashboard</p>
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
                          <p className="text-lg font-semibold text-gray-400">Dashboard</p>
                        </div>
                        <div className="grid grid-cols-12 gap-6 border-b-2 pb-5">
                          <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xxl:col-span-8">
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-3">
                               <div className="p-4">
                                  <p className="text-xl font-bold">work 1</p>
                                  <p className="text-xs font-semibold text-gray-400">Class 1</p>
                               </div>
                               <div className="p-4">
                                  <p className="text-xl font-bold">work 2</p>
                                  <p className="text-xs font-semibold text-gray-400">Class 2</p>
                               </div>
                               <div className="p-4">
                                  <p className="text-xl font-bold">work 3</p>
                                  <p className="text-xs font-semibold text-gray-400">Class 3</p>
                               </div>
                               <div className=" p-4">
                                  <p className="text-xl font-bold">work 2</p>
                                  <p className="text-xs font-semibold text-gray-400">Class 1</p>
                               </div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xxl:col-span-4">
                              <div className="p-4">
                                  <p className="text-sm text-gray-400">Progress</p>
                                  <div className="shadow w-full bg-gray-100 mt-2">
                                      <div className="bg-indigo-900 text-xs leading-none py-1 text-center text-white" style={{width: '55%'}}></div>
                                   </div>
                                    <p className="text-xs font-semibold text-gray-400 mt-2">55%</p>
                               </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                          <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out sassd123"
                           >
                              <div className="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                                <div>
                                  <h3 className="text-center text-white text-lg">
                                       IS01
                                  </h3>
                                  <h3 className="text-center text-white text-3xl mt-2 font-bold">
                                       Class 1
                                  </h3>
                                  <h3 className="text-white text-lg mt-2 text-yellow-100 ">
                                      2 pending
                                  </h3>
                                </div>
                              </div>
                          </div>
                           <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out snjdw"
                        >
                              <div className="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
                              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                                <div>
                                  <h3 className="text-center text-white text-lg">
                                       IS02
                                  </h3>
                                  <h3 className="text-center text-white text-3xl mt-2 font-bold">
                                       Class 2
                                  </h3>
                                  <h3 className="text-white text-lg mt-2 text-yellow-100 ">
                                      1 pendng
                                  </h3>
                                </div>
                              </div>
                          </div>
                           <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out snjdw1"
                            >
                              <div className="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                                <div>
                                  <h3 className="text-center text-white text-lg">
                                       IS03
                                  </h3>
                                  <h3 className="text-center text-white text-3xl mt-2 font-bold">
                                       Class 3
                                  </h3>
                                  <h3 className="text-white text-lg mt-2 text-yellow-100 ">
                                      1 pending
                                  </h3>
                                </div>
                              </div>
                          </div>        
                        </div>
                        
                  </div>
              </main>
            </div>
        </div>
        </div>
  );
}