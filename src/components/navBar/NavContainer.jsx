/* eslint-disable react/prop-types */
// import React from 'react'
import NavContent from "./NavContent";

function NavContainer({className, authenticated}) {
    return (
        <section className={`relative ${className}`}>
            <div className="nav-contianer lg:w-1/4 2xl:w-1/5 lg:bg-white lg:border p-2 md:p-5 lg:fixed top-0 left-0 lg:h-screen md:overflow-y-scroll">
                <NavContent authenticated={authenticated}/>
            </div>
        </section>
    );
}

export default NavContainer;
