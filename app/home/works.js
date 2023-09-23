export default function Works({ children, name, className, link, id}) {
    return (
        <div className="p-4">
            <p className="text-xl font-bold">
                {name}
            </p>
            <p className="text-xs font-semibold text-gray-400">{className}</p>
        </div>
    )
}