import React from "react";
import profile from "../../assets/profile.svg";
import FormInput from "../FormInput";
import { MdLocationPin } from "react-icons/md";
import { IoNotifications, IoSearch } from "react-icons/io5";
import ChangeLocationModal from "../modals/ChangeLocationModal";

function AppHeader() {
    const [search, setSearch] = React.useState("");
    const [showLocationModal, setShowLocationModal] = React.useState(false);

    function handleLocationToogle() {
        if (!showLocationModal) {
            document
                .getElementsByTagName("html")[0]
                .classList.add("overflow-y-hidden");
            setShowLocationModal(true);
        } else {
            document
                .getElementsByTagName("html")[0]
                .classList.remove("overflow-y-hidden");
            setShowLocationModal(false);
        }
    }

    function toggleFixed () {
        document.querySelector(".app-header").classList.add("active")
    }

    return (
        <div>
            <div onScroll={toggleFixed} className="app-header fixed top-0 left-0 flex items-center justify-between py-3 px-3 md:px-5 border-b shadow-md w-full">
                <div>
                    <h1 className="text-lg md:text-3xl font-bold text-[#720D96]">
                        Marketplace
                    </h1>
                    <p className="md:text-2xl font-semibold">Platform</p>
                </div>
                <div className="md:flex items-center justify-between md:border-2 border-[#720D96] py-1 pl-5 pr-2 md:w-[40%] max-w-md rounded-3xl">
                    <FormInput
                        inputName="search"
                        inputGroupClassNames="hidden md:block w-full"
                        inputValue={search}
                        placeholderText="Search for items..."
                        inputId="search"
                        ariaLabelName="search bar"
                        onChange={(e) => setSearch(e.target.value)}
                        className="border-r border-white mb-0 bg-transparent border-0 focus:border-0 focus:outline-none w-full flex-1"
                    />
                    <div className="bg-[#e4e6eb] md:bg-[#720D96] p-2 rounded-full cursor-pointer">
                        <IoSearch size={20} color="white" className="hidden md:block"/>
                        <IoSearch size={20} className="md:hidden"/>
                    </div>
                </div>
                <div
                    className="hidden lg:flex items-center gap-1 cursor-pointer"
                    onClick={handleLocationToogle}
                >
                    <MdLocationPin size={20} />
                    <span className="hover:underline text-[#720D96]">Lagos, Nigeria</span>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                    <div className="border border-[#720D96] p-2 rounded-full cursor-pointer transition ease-in-out hover:bg-[#720D96] hover:text-white duration-300">
                        <IoNotifications size={20} />
                    </div>
                    <img src={profile} alt="" className="cursor-pointer" />
                </div>
            </div>
            {showLocationModal && (
                <ChangeLocationModal onClose={handleLocationToogle} />
            )}
        </div>
    );
}

export default AppHeader;
