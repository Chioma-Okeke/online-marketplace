import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";

import profile from "../../assets/profile.svg";
import AppIcon from "../../assets/app-icon.png";
import SearchInput from "../SearchInput";
import Button from "../reusable/Button";
import UserIconOptions from "../UserIconOptions";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";

function AppHeader() {
    const [showUserOptions, setShowUserOptions] = React.useState(false);
    const [isSearchInProgress, setIsSearchInProgress] = React.useState(false);
    const { isAuthenticated } = useContext(AuthContext);
    const { handleLocationToggle } = useContext(ModalContext);

    function toggleFixed() {
        document.querySelector(".app-header").classList.add("active");
    }

    return (
        <div>
            <div
                onScroll={toggleFixed}
                onClick={() => setShowUserOptions(false)}
                className="app-header fixed top-0 left-0 flex items-center justify-between py-3 px-3 md:px-5 border-b shadow-md w-full"
            >
                <Link to={`${isAuthenticated ? "/listings" : "/"}`}>
                    <div className="flex items-center gap-3">
                        <img src={AppIcon} alt="" className="w-10" />
                        {!isSearchInProgress && (
                            <div>
                                <h1 className="text-lg md:text-3xl font-bold text-[#720D96]">
                                    Marketplace
                                </h1>
                            </div>
                        )}
                    </div>
                </Link>
                <SearchInput
                    isSearchInProgress={isSearchInProgress}
                    setIsSearchInProgress={setIsSearchInProgress}
                />
                <div
                    className="hidden lg:flex items-center gap-1 cursor-pointer"
                    onClick={handleLocationToggle}
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
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowUserOptions(
                                        (prevState) => !prevState
                                    );
                                }}
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
        </div>
    );
}

export default AppHeader;
