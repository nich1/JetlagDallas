import NavCategories from "./navCategories"
import NavLogin from "./navLogin"
import Image from "next/image"
export default function NavBar() {
    return (
        <div className=" py-4 flex justify-around items-center">
            <Image
                src="/words.png"
                width={300}
                height={300}
                alt={"JetLag Dallas"}
            />
            <NavCategories/>
            <NavLogin/>

        </div>
    )
}