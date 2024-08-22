// import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { MdAnalytics } from "react-icons/md";

import Button from "../reusable/Button";
import profile from "../../assets/profile.svg";

function UserListingsNavBar({ pageName }) {
    return (
        <div className="">
            <div className="hidden lg:block">
                <header>
                    <div>
                        <Link
                            to={"/listings"}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <div className="p-1 rounded-full transition ease-in-out hover:bg-[#e8d7ee] duration-300">
                                <IoMdArrowBack size={20} />
                            </div>
                            <p className="text-xl font-bold">{pageName}</p>
                        </Link>
                    </div>
                </header>
                <div className="mt-5">
                    <Link to={"/create"}>
                        <Button className="p-4 rounded-md w-full bg-[#e8d7ee] text-[#720D96] font-semibold transition ease-in-out hover:text-white hover:bg-[#720D96]">
                            + Create a New Listing
                        </Button>
                    </Link>
                </div>
                <div className="mt-5">
                    <NavLink
                        to={"/dashboard"}
                        id="Seller dashboard"
                        className={({ isActive }) => {
                            return (
                                "flex items-center gap-2 p-2 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md " +
                                (isActive ? "bg-[#e8d7ee] text-[#720d96]" : "")
                            );
                        }}
                    >
                        <div className={`bg-[#e4e6eb] rounded-full p-2`}>
                            <MdAnalytics size={20} id="Seller dashboard" />
                        </div>
                        <span id="Seller dashboard">Seller dashboard</span>
                    </NavLink>
                    <NavLink
                        to={"/selling"}
                        id="Your listings"
                        className={({ isActive }) => {
                            return (
                                "flex items-center gap-2 p-2 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md " +
                                (isActive ? "bg-[#e8d7ee] text-[#720d96]" : "")
                            );
                        }}
                    >
                        <div className={`bg-[#e4e6eb] rounded-full p-2`}>
                            <MdAnalytics size={20} id="Your listings" />
                        </div>
                        <span id="Your listings">Your listings</span>
                    </NavLink>
                    <NavLink
                        to={"/buying"}
                        id="Listings Bought"
                        className={({ isActive }) => {
                            return (
                                "flex items-center gap-2 p-2 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md " +
                                (isActive ? "bg-[#e8d7ee] text-[#720d96]" : "")
                            );
                        }}
                    >
                        <div className={`bg-[#e4e6eb] rounded-full p-2`}>
                            <MdAnalytics size={20} id="Listings Bought" />
                        </div>
                        <span id="Listings Bought">Listings Bought</span>
                    </NavLink>
                    <NavLink
                        to={"/favorites"}
                        id="Favorites"
                        className={({ isActive }) => {
                            return (
                                "flex items-center gap-2 p-2 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md " +
                                (isActive ? "bg-[#e8d7ee] text-[#720d96]" : "")
                            );
                        }}
                    >
                        <div className={`bg-[#e4e6eb] rounded-full p-2 `}>
                            <MdAnalytics size={20} id="Favorites" />
                        </div>
                        <span id="Favorites">Favorites</span>
                    </NavLink>
                    <NavLink
                        to={"/userprofile"}
                        id="UserProfile"
                        className={({ isActive }) => {
                            return (
                                "flex items-center gap-2 p-2 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md " +
                                (isActive ? "bg-[#e8d7ee] text-[#720d96]" : "")
                            );
                        }}
                    >
                        <div>
                            <img src={profile} alt="" id="userProfile" />
                        </div>
                        <span id="userProfile w-5">User Profile</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

UserListingsNavBar.propTypes = {
    pageName: PropTypes.string,
};

export default UserListingsNavBar;
