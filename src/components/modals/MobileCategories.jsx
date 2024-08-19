/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { IoMdArrowBack, IoMdSearch } from "react-icons/io";
// import Button from "../reusable/Button";
// import { MdArrowDropDown, MdLocationPin } from "react-icons/md";
// import FormInput from "../FormInput";
// import map from "../../assets/model-map.png";
import { listingCategories } from "../../data/listings";
import { ListingsContext } from "../../context/ListingsContext";
import { FaShop } from "react-icons/fa6";

function MobileCategories({ onClose, setCurrentCategory, currentCategory }) {
    const [mouseEnter, setMouseEnter] = React.useState(false);
    const { showCategory } = useContext(ListingsContext);

    function displayCategory(e) {
        console.log(e.target.id);
        showCategory(e.target.id);
        setCurrentCategory(e.target.id);
        onClose();
    }

    return (
        <div className="">
            {/* {mobile view} */}
            <div className="lg:hidden bg-white overflow-y-scroll fixed inset-0 z-30 transition-all duration-500 ">
                <div className="flex items-center justify-between p-3 border-b sticky top-0 left-0 bg-white">
                    <div
                        onClick={onClose}
                        className="flex items-center gap-2 cursor-pointer"
                        onMouseEnter={() => setMouseEnter(true)}
                        onMouseLeave={() => setMouseEnter(false)}
                    >
                        <IoMdArrowBack
                            size={25}
                            className={`${
                                mouseEnter
                                    ? "transition ease-in-out w-8 duration-500"
                                    : ""
                            }`}
                        />
                        <p className="text-lg">Choose Category</p>
                    </div>
                    <IoMdSearch
                        size={25}
                        className="transition ease-out hover:scale-90 duration-300"
                    />
                </div>
                <hr className="border-b-2" />
                <div
                    onClick={(e) => displayCategory(e)}
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
                <div className="py-3">
                    {listingCategories.map(({ id, Icon, category }) => {
                        return (
                            <div
                                key={id}
                                id={category}
                                onClick={(e) => displayCategory(e)}
                                className={`flex items-center gap-2 mb-2 p-1 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md ${
                                    currentCategory === category
                                        ? "bg-[#e8d7ee] text-[#720d96]"
                                        : ""
                                }`}
                            >
                                <div
                                    className="bg-[#e4e6eb] rounded-full p-2"
                                    id={category}
                                >
                                    <Icon size={20} id={category} />
                                </div>
                                <span id={category}>{category}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MobileCategories;
