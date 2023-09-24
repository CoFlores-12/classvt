import Link from "next/link"

export default function CardClass({ children, name, id, code, pendings, bg, link, color, className}) {
    
    return (
        <Link href={"/class/"+id} className={className}>
            <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out bannerClass"
            style={{ "backgroundImage": "url("+bg+")"}}
            >
                <div className="absolute inset-0 bg-opacity-75 transition duration-300 ease-in-out" style={{ "background":color}}></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                <div>
                    <h3 className="text-center text-white text-lg">
                        {code}
                    </h3>
                    <h3 className="text-center text-white text-3xl mt-2 font-bold">
                        {name}
                    </h3>
                    <h3 style={{"textAlign": "center"}} className="text-white text-lg mt-2 text-yellow-100 ">
                        {pendings} pendng
                    </h3>
                </div>
                </div>
            </div>
        </Link>
    )
}