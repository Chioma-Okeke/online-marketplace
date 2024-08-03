/* eslint-disable react/prop-types */
import React from "react";
import { IoMdArrowBack, IoMdSearch } from "react-icons/io";
// import Button from "../reusable/Button";
// import { MdArrowDropDown, MdLocationPin } from "react-icons/md";
// import FormInput from "../FormInput";
// import map from "../../assets/model-map.png";
import { listingCategories } from "../../data/listings";

function MobileCategories({ onClose }) {
    const [mouseEnter, setMouseEnter] = React.useState(false);

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
                <div className="py-3">
                    {listingCategories.map(({ id, Icon, category }) => {
                        return (
                            <div
                                key={id}
                                className="border-b-2 flex items-center gap-2 mb-2 py-2 pl-3 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md"
                            >
                                <div className="bg-[#e4e6eb] rounded-full p-2">
                                    <Icon size={20} />
                                </div>
                                <span>{category}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default MobileCategories;
