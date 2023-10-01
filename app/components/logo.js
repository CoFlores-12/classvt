import Image from "next/image"

export default function Logo({height=50, width=50}) {
    return (
        <div className="logo">
            <Image src="/logo.svg" alt="logo" width={height} height={width} />
        </div>
    )
}