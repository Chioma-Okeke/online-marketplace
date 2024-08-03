import React, { useContext } from "react";
import profile from "../../assets/profile.svg";
import { MdLocationPin } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import ChangeLocationModal from "../modals/ChangeLocationModal";
import SearchInput from "../SearchInput";
import Button from "../reusable/Button";
import { Link } from "react-router-dom";
import UserIconOptions from "../UserIconOptions";
import { AuthContext } from "../../context/AuthContext";

function AppHeader() {
    const [showLocationModal, setShowLocationModal] = React.useState(false);
    const [showUserOptions, setShowUserOptions] = React.useState(false);
    const {isAuthenticated} = useContext(AuthContext)

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

    function toggleFixed() {
        document.querySelector(".app-header").classList.add("active");
    }

    return (
        <div>
            <div
                onScroll={toggleFixed}
                className="app-header fixed top-0 left-0 flex items-center justify-between py-3 px-3 md:px-5 border-b shadow-md w-full"
            >
                <div>
                    <h1 className="text-lg md:text-3xl font-bold text-[#720D96]">
                        Marketplace
                    </h1>
                    <p className="md:text-2xl font-semibold">Platform</p>
                </div>
                <SearchInput />
                <div
                    className="hidden lg:flex items-center gap-1 cursor-pointer"
                    onClick={handleLocationToogle}
                >
                    <MdLocationPin size={20} />
                    <span className="hover:underline text-[#720D96]">
                        Lagos, Nigeria
                    </span>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                    <div className="relative">
                        {isAuthenticated ? (
                            <img
                                src={profile}
                                alt=""
                                onClick={() => setShowUserOptions(prevState => !prevState)}
                                className="cursor-pointer"
                            />
                        ) : (
                            <Link to={"/signin"}>
                                <Button className="border border-[#720D96] bg-white py-2 px-6 rounded-md font-medium transition ease-in-out hover:bg-[#720D96] hover:text-white duration-300">
                                    Sign in
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {showUserOptions && <UserIconOptions />}
            {showLocationModal && (
                <ChangeLocationModal onClose={handleLocationToogle}/>
            )}
        </div>
    );
}

export default AppHeader;
