/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";

import { IoMdArrowBack, IoMdCloseCircle, IoMdSearch } from "react-icons/io";
import Button from "../reusable/Button";
import { MdArrowDropDown, MdLocationPin } from "react-icons/md";
import FormInput from "../FormInput";
import map from "../../assets/model-map.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ChangeLocationModal({ onClose }) {
    const [mouseEnter, setMouseEnter] = React.useState(false);
    const [showLocationOptions, setShowLocationOptions] = useState(false);
    const [chosenLocation, setChosenLocation] = useState("65 Kilometer");

    function handleSelection(e) {
        setChosenLocation(e.target.innerText);
        setShowLocationOptions(false);
    }

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden lg:block fixed inset-0 z-50 transition-all duration-500"
            >
                {/* Modal Backdrop */}
                <div
                    className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-30"
                    onClick={onClose}
                ></div>

                {/* Modal Content */}
                <main className="flex flex-col items-center justify-center h-full w-full relative">
                    <div className="modal-wrapper flex items-center z-30 relative xl:w-[70%] justify-center">
                        <div className="max-w-md mx-5 w-[55%] xl:max-w-3xl lg:max-w-xl md:max-w-xl bg-white max-h-[93vh] shadow-lg rounded-lg relative">
                            <div className="flex items-center justify-between p-4 w-full ">
                                <div>
                                    <h1 className="font-semibold text-xl flex-1">
                                        Change Location
                                    </h1>
                                    <p className="my-1 text-sm">
                                        Search by town, city, neighborhood or
                                        postal code
                                    </p>
                                </div>
                                <IoMdCloseCircle
                                    size={40}
                                    onClick={onClose}
                                    cursor={"pointer"}
                                    className="bg-white rounded-full transition ease-in-out hover:scale-90 duration-300 z-50"
                                />
                            </div>
                            <hr />
                            <div className="px-4 pb-3 mt-2">
                                <div className="text-xs text-[#65676B]">
                                    <div className="border-2 rounded-md mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="pl-4">
                                                <MdLocationPin size={20} />
                                            </div>
                                            <FormInput
                                                inputGroupClassNames="flex flex-col py-2 text-[#141414]"
                                                inputLabel="Location"
                                                labelFor="location"
                                                labelClasses="mb-0 text-base text-[rgba(20,20,20, .8)]"
                                                inputName="location"
                                                inputId="location"
                                                className="focus:outline-none text-[13px]"
                                                placeholderText="Enter a town or city"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div
                                            className="flex items-center justify-between border-2 rounded-md relative text-[#141414] cursor-pointer"
                                            onClick={() =>
                                                setShowLocationOptions(
                                                    (prevState) => !prevState
                                                )
                                            }
                                        >
                                            <div className="flex-1">
                                                <span className="inline-block absolute text-base left-4 top-2 text-[rgba(20,20,20, .8)]">
                                                    Radius
                                                </span>
                                                <div className="pt-7 px-4 pb-2 text-[13px]">
                                                    <span>
                                                        {chosenLocation}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <MdArrowDropDown
                                                    className="pr-4"
                                                    color="#141414"
                                                    size={50}
                                                    cursor={"pointer"}
                                                />
                                            </div>
                                        </div>
                                        {showLocationOptions && (
                                            <div className="absolute w-full top-full bottom-0 left-0 py-3 h-48 overflow-auto border rounded-md bg-white">
                                                <ul className="text-sm text-[#141414]">
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        69 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        34 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        56 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        64 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        32 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        10 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        40 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        50 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        70 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        32 Kilometer
                                                    </li>
                                                    <li
                                                        className="p-2 border-b cursor-pointer hover:bg-gray-200 "
                                                        onClick={
                                                            handleSelection
                                                        }
                                                    >
                                                        6 Kilometer
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="my-3">
                                    <LazyLoadImage
                                        src={map}
                                        alt="map"
                                        className="w-[90%] mx-auto"
                                    />
                                </div>
                                <div className="flex items-center justify-end gap-5">
                                    <Button
                                        onClick={onClose}
                                        className="border border-[#720D96] bg-white p-4 rounded-md font-medium transition ease-in-out hover:bg-[#720D96] hover:text-white duration-300"
                                    >
                                        Apply
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </motion.div>
            {/* {mobile view} */}
            <div className="lg:hidden bg-white overflow-y-scroll fixed inset-0 z-30 transition-all duration-500 ">
                <div className="flex items-center justify-between p-3 border-b">
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
                        <p className="text-lg">Change Location</p>
                    </div>
                    <IoMdSearch
                        size={25}
                        className="transition ease-out hover:scale-90 duration-300"
                    />
                </div>
                <hr />
                <div className="px-4 pb-3">
                    <div className="text-xs text-[#65676B]">
                        <p className="my-2">
                            Search by town, city, neighbourhood or postal code
                        </p>
                        <div className="border-2 rounded-md mb-2">
                            <div className="flex items-center gap-2">
                                <div className="pl-4">
                                    <MdLocationPin size={20} />
                                </div>
                                <FormInput
                                    inputGroupClassNames="flex flex-col py-2 text-[#141414]"
                                    inputLabel="Location"
                                    labelFor="location"
                                    labelClasses="mb-0 text-xs text-[rgba(20,20,20, .8)]"
                                    inputName="location"
                                    inputId="location"
                                    className="focus:outline-none text-base"
                                    placeholderText="Enter a town or city"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-2 rounded-md relative text-[#141414]">
                            <div className="flex-1">
                                <span className="inline-block absolute left-4 top-2 text-xs text-[rgba(20,20,20, .8)]">
                                    Radius
                                </span>
                                <div className="pt-7 px-4 pb-2 text-base">
                                    <span>65 Kilometers</span>
                                </div>
                            </div>
                            <MdArrowDropDown
                                className="pr-4"
                                color="#141414"
                                size={50}
                                cursor={"pointer"}
                            />
                        </div>
                    </div>
                    <div className="my-3">
                        <img src={map} alt="" className="h-full w-full" />
                    </div>
                    <hr />
                    <div className="flex items-center justify-end gap-5 pt-3">
                        <Button
                            onClick={onClose}
                            className="border border-[#720D96] bg-white p-4 rounded-md font-medium transition ease-in-out hover:bg-[#720D96] hover:text-white duration-300"
                        >
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ChangeLocationModal.propTypes = {
    onClose: PropTypes.func,
};

export default ChangeLocationModal;
