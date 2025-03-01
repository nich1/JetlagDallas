import NavCategories from "./navCategories"
import NavLogin from "./navLogin"
import Image from "next/image"
export default function NavBar() {
    return (
        <div className="flex justify-around items-center">
            <Image
                src="/logo.png"
                width={300}
                height={300}
                alt={"JetLag Dallas"}
            />
            <NavCategories/>
            <NavLogin/>

        </div>
    )
}