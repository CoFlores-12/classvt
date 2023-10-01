import Image from "next/image";

export default function ListaUsers({items}) {
    return (
        <div>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {items.map(item => (
                    
                    <li className='itemUser flex row items-center' key={item._id}>
                        <div className='avatar text-white flex items-center content-center justify-center'>
                            
                        </div>
                        <div className='bodyItemClass'>
                            <h3>{item.name}</h3>
                            <p>{item.classes.length} Classes</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}