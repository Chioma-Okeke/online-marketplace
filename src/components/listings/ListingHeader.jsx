import React from "react";
import profile from "../../assets/profile.svg";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function ListingHeader() {
    const [mouseEnter, setMouseEnter] = React.useState(false)

    return (
        <div className="flex items-center justify-between p-3 border-b">
            <Link to={"/listings"} className="flex items-center gap-2 cursor-pointer" onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
                <IoMdArrowBack size={25} className={ `${mouseEnter ? "transition ease-in-out w-8 duration-500" : ""}`}/>
                <p className="text-lg">Marketplace</p>
            </Link>
            <img src={profile} alt=""/>
        </div>
    );
}

export default ListingHeader;
