import React from "react";
import profile from "../../assets/profile.svg";
import { MdLocationPin } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import ChangeLocationModal from "../modals/ChangeLocationModal";
import SearchInput from "../SearchInput";

function AppHeader() {
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
                <SearchInput/>
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
