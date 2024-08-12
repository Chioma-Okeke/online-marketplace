/* eslint-disable react/prop-types */
// import React from 'react'
import NavContent from "./NavContent";
import UserListingsNavBar from "./UserListingsNavBar";

function NavContainer({ className, pageName }) {
    console.log(pageName, "name");
    return (
        <section className={`relative ${className}`}>
            <div className="nav-container lg:w-1/4 2xl:w-1/5 lg:bg-white lg:border p-2 md:p-5 lg:fixed top-0 left-0 lg:h-screen md:overflow-y-auto">
                {pageName === "Home" ? (
                    <NavContent />
                ) : pageName === "Selling" ? (
                    <UserListingsNavBar pageName={"Selling"} />
                ) : pageName === "Buying" ? (
                    <UserListingsNavBar pageName={"Buying"} />
                ): pageName === "Favorites" ? (
                    <UserListingsNavBar pageName={"Favorites"} />
                ): pageName === "User Profile" ? (
                    <UserListingsNavBar pageName={"User Profile"} />
                ): <></>}
            </div>
        </section>
    );
}

export default NavContainer;
