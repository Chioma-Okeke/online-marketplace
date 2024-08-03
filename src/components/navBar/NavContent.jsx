/* eslint-disable react/prop-types */
import React from "react";
import Button from "../reusable/Button";
import { listingCategories } from "../../data/listings";
import profile from "../../assets/profile.svg";
import { MdLocationPin } from "react-icons/md";
import ChangeLocationModal from "../modals/ChangeLocationModal";
import { Link } from "react-router-dom";
import MobileCategories from "../modals/MobileCategories";
import { ListingsContext } from "../../context/ListingsContext";
import { FaShop } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { AuthContext } from "../../context/AuthContext";

function NavContent() {
    const [showLocationModal, setShowLocationModal] = React.useState(false);
    const [showCategories, setShowCategories] = React.useState(false);
    const [currentCategory, setCurrentCategory] = React.useState("Browse All");
    const { showCategory } = React.useContext(ListingsContext);
    const { isAuthenticated } = React.useContext(AuthContext);

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

    function handleCategories() {
        if (!showCategories) {
            document
                .getElementsByTagName("html")[0]
                .classList.add("overflow-y-hidden");
            setShowCategories(true);
        } else {
            document
                .getElementsByTagName("html")[0]
                .classList.remove("overflow-y-hidden");
            setShowCategories(false);
        }
    }

    function handleSelection(e) {
        const category = e.target.id;
        console.log(category, "value");
        showCategory(category);
        setCurrentCategory(category);
    }

    return (
        <div className="">
            <div className="hidden lg:block">
                <div className="mb-5">
                    <Link to={"/create"}>
                        <Button className="p-4 rounded-md w-full bg-[#e8d7ee] text-[#720D96] font-semibold transition ease-in-out hover:text-white hover:bg-[#720D96]">
                            + Create a New Listing
                        </Button>
                    </Link>
                </div>
                <div className="pt-5">
                    <div
                        onClick={handleSelection}
                        id="Browse All"
                        className={`flex items-center gap-2 mb-2 p-1 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md ${
                            currentCategory === "Browse All"
                                ? "bg-[#e8d7ee] text-[#720d96]"
                                : ""
                        }`}
                    >
                        <div className="bg-[#e4e6eb] rounded-full p-2">
                            <FaShop size={20} />
                        </div>
                        <span>Browse All</span>
                    </div>
                    {isAuthenticated && (
                        <Link
                            to={"/notifications"}
                            className={`flex items-center gap-2 mb-2 p-1 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md`}
                        >
                            <div className="bg-[#e4e6eb] rounded-full p-2 w-fit">
                                <IoNotifications size={20} />
                            </div>
                            <span>Notifications</span>
                        </Link>
                    )}
                    <hr className="my-3" />
                    <h1 className="font-semibold text-lg">Categories</h1>
                    <div className="py-3">
                        {listingCategories.map(({ id, Icon, category }) => {
                            return (
                                <div
                                    key={id}
                                    id={category}
                                    onClick={handleSelection}
                                    className={`flex items-center gap-2 mb-2 p-1 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md ${
                                        currentCategory === category
                                            ? "bg-[#e8d7ee] text-[#720d96]"
                                            : ""
                                    }`}
                                >
                                    <div className="bg-[#e4e6eb] rounded-full p-2">
                                        <Icon size={20} id={category} />
                                    </div>
                                    <span id={category}>{category}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* {mobile screen} */}
            <div className="lg:hidden">
                <div className="flex items-center justify-between text-xs sm:text-sm my-2">
                    <div className="flex items-center gap-2 font-medium">
                        <img
                            src={profile}
                            alt=""
                            className="cursor-pointer w-6 sm:w-10"
                        />
                        <p className="py-1 px-2 sm:py-2 sm:px-3 rounded-3xl bg-[#e4e6eb]">
                            Inbox
                        </p>
                        <Link
                            to={"/create"}
                            className="py-1 px-2 sm:py-2 sm:px-3 rounded-3xl bg-[#e4e6eb]"
                        >
                            Sell
                        </Link>
                        <p
                            onClick={handleCategories}
                            className="py-1 px-2 sm:py-2 sm:px-3 rounded-3xl bg-[#e4e6eb]"
                        >
                            Categories
                        </p>
                        {isAuthenticated && (
                            <p className="py-1 px-2 sm:py-2 sm:px-3 rounded-3xl bg-[#e4e6eb]">
                                Notifications
                            </p>
                        )}
                    </div>
                </div>
                <hr />
                <div
                    className="flex items-center gap-1 cursor-pointer text-sm float-right mt-2"
                    onClick={handleLocationToogle}
                >
                    <MdLocationPin size={20} />
                    <span className="hover:underline text-[#720D96]">
                        Lagos, Nigeria
                    </span>
                </div>
            </div>
            {showLocationModal && (
                <ChangeLocationModal onClose={handleLocationToogle} />
            )}
            {showCategories && <MobileCategories onClose={handleCategories} />}
        </div>
    );
}

export default NavContent;
