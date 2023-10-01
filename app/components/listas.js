"use client"
export default function Listas({role, items}) {
   
    return (
        <div>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {items.map(item => (
                    
                    <li className='itemClasses flex row items-center' key={item._id}>
                        <div className='avatar text-white flex items-center content-center justify-center' style={{backgroundColor: item.color.slice(0,-2)}}>
                            {item.code}
                        </div>
                        <div className='bodyItemClass'>
                            <h3>{item.name}</h3>
                            <p>{item.students.length} students</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}