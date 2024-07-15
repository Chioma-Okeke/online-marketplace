import React from "react";
import profile from "../../assets/profile.svg";
import FormInput from "../FormInput";
import { MdLocationPin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

function AppHeader() {
    const [search, setSearch] = React.useState("");

    return (
        <div className="flex items-center justify-between p-5">
            <div>
                <h1 className="text-4xl font-bold text-[#720D96]">
                    Marketplace
                </h1>
                <p className="text-2xl font-semibold">Platform</p>
            </div>
            <div className="flex items-center justify-between border-2 border-[#720D96] py-1 pl-5 pr-2 w-[30%] max-w-md rounded-3xl">
                <FormInput
                    inputName="search"
                    inputValue={search}
                    placeholderText="Search for items..."
                    inputId="search"
                    ariaLabelName="search bar"
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-r border-white mb-0 bg-transparent border-0 focus:border-0 focus:outline-none"
                />
                <div className="bg-[#720D96] p-2 rounded-full cursor-pointer">
                    <IoSearch size={20} color="white" />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <MdLocationPin />
                <span>Lagos, Nigeria</span>
            </div>
            <img src={profile} alt="" className="cursor-pointer"/>
        </div>
    );
}

export default AppHeader;
