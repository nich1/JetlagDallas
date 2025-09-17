import Image from "next/image"
export default function Cell() {
    return (
        <div className=" border-2 border-x-gray-300 mx-2 font-zain text-xl  w-96 h-96">
            <div className="flex h-3/4 justify-center">
                <Image
                            src="/sample3.png"
                            width={350}
                            height={350}
                            alt={"JetLag Dallas"}
                        />
            </div>
            <div className=" px-2">
                <div className=" text-xl text-orange-500 text-base flex">$15</div>
                <div className=" text-2xl flex">Sample</div>
                <div className=" text-sm flex">Men's Grunge</div>
            </div>
            
        </div>
    )
}