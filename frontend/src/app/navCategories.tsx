export default function NavCategories() {
    return (
        <div className="flex flex-col">
            <ul className=" border-b border-t py-2 border-black flex font-zain gap-8 text-5xl">
                <li>Men</li>
                <li>Women</li>
                <li>Shirts</li>
                <li>Shorts</li>
                <li>Hoodies</li>
            </ul>
            <ul className=" justify-center py-2 border-black flex font-zain gap-8 text-xl">
                
                <li>Greek</li>
                <li>Grunge</li>
                <li>Thoughts</li>
                <li>Meme</li>
                <li>Trending</li>
                <li>Sales</li>
                <li>Custom</li>
            </ul>
        </div>
        

    )
}