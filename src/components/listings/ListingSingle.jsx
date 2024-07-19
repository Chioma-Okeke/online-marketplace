/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function ListingSingle({ title, price, location, img }) {
    return (
        <div className="border border-red-400 rounded-md text-lg p-2 sm:p-4">
            <Link to={"/listing"} className="cursor-pointer hover:shadow-xl">
                <div className="mb-2">
                    <img src={img} alt="" className="w-full rounded-md" />
                </div>
                <div>
                    <div className="text-sm md:text-base">
                        <h1>{title}</h1>
                        <p>{price}</p>
                        <p>{location}</p>
                    </div>

                </div>
            </Link>
        </div>
    );
}

export default ListingSingle;
