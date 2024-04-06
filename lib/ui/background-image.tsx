import Image from "next/image";

export default function Page() {
    return (
        <>
            <Image
                className="-z-[1] object-cover"
                src={'/images/background-image.jpg'} 
                alt="background-image" 
                fill
            />
            <div className="absolute left-0 top-0 bg-blue-900 opacity-60 h-full w-full -z-[1]" />
        </>
    )
}