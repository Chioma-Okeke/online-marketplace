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

    return (
        <div>
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
                        inputGroupClassNames="w-full"
                        inputValue={search}
                        placeholderText="Search for items..."
                        inputId="search"
                        ariaLabelName="search bar"
                        onChange={(e) => setSearch(e.target.value)}
                        className="border-r border-white mb-0 bg-transparent border-0 focus:border-0 focus:outline-none w-full flex-1"
                    />
                    <div className="bg-[#720D96] p-2 rounded-full cursor-pointer">
                        <IoSearch size={20} color="white" />
                    </div>
                </div>
                <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={handleLocationToogle}
                >
                    <MdLocationPin size={20} />
                    <span className="hover:underline text-[#720D96]">Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
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
