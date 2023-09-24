import Link from 'next/link'
import './home.css'

export default function Works({ children, name, className, link='/home', id}) {
    return (
        <Link href={link}>
            <div className="p-4 works">
                <p className="text-xl font-bold">
                    {name}
                </p>
                <p className="text-xs font-semibold text-gray-400">{className}</p>
            </div>
        </Link>
    )
}