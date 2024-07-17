/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowBack, IoMdCloseCircle, IoMdSearch } from "react-icons/io";
import image from "../../assets/image1.png";
import Button from "../reusable/Button";
import { TiMessages } from "react-icons/ti";
import { MdArrowDropDown, MdLocationPin } from "react-icons/md";
import FormInput from "../FormInput";
import map from "../../assets/model-map.png"

function ChangeLocationModal({ onClose }) {
    const [mouseEnter, setMouseEnter] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [error, setError] = React.useState("");

    function handleChange(e) {
        setError("");
        setMessage(e.target.value);
    }

    function sendMessage() {
        if (message === "") {
            setError("You cannot send an empty message");
        }
        console.log(message);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=""
        >
            <div className="hidden md:block fixed inset-0 z-30 transition-all duration-500 ">
                {/* Modal Backdrop */}
                <div
                    className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
                    onClick={onClose}
                ></div>

                {/* Modal Content */}
                <main className="flex flex-col items-center justify-center h-full w-full relative">
                    <div className="modal-wrapper flex items-center z-30 relative xl:w-[70%] justify-center">
                        <div className="max-w-md mx-5 w-[55%] xl:max-w-3xl lg:max-w-xl md:max-w-xl bg-white max-h-[93vh] shadow-lg rounded-lg relative">
                            <div className="flex items-center justify-between p-4 w-full ">
                                <h1 className="font-semibold text-xl text-center flex-1">
                                    Change Location
                                </h1>
                                <IoMdCloseCircle
                                    size={40}
                                    onClick={onClose}
                                    cursor={"pointer"}
                                    className="bg-white rounded-full transition ease-in-out hover:scale-90 duration-300 z-50"
                                />
                            </div>
                            <hr />
                            <div className="px-4 pb-3">
                                <div className="text-xs text-[#65676B]">
                                    <p className="my-2">
                                        Search by town, city, neighbourhood or
                                        postal code
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
                                    <img src={map} alt="" className="h-full w-full"/>
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
                </main>
            </div>
            {/* {mobile view} */}
            <div className="md:hidden bg-white overflow-y-scroll fixed inset-0 z-30 transition-all duration-500 ">
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
                <div className="px-5 pb-3">
                    <div className="flex items-center gap-2">
                        <img
                            src={image}
                            alt=""
                            className="mt-3 w-28 border-4 border-white rounded-3xl"
                        />
                        <div>
                            <p className="font-medium text-sm">
                                Plain Sleeve Kangaroo Pocket Drawstring Hoodie
                            </p>
                            <p className="font-medium">$67</p>
                        </div>
                    </div>
                    <div className="flex gap-y-2 flex-col mt-5 mb-5 text-sm">
                        <p
                            onClick={(e) => setMessage(e.target.innerText)}
                            className="py-2 px-5 bg-[#e4e6eb] rounded-3xl w-fit cursor-pointer hover:bg-[#c9cbcf]"
                        >
                            I&apos;m interested in this item.
                        </p>
                        <p
                            onClick={(e) => setMessage(e.target.innerText)}
                            className="py-2 px-5 bg-[#e4e6eb] rounded-3xl w-fit cursor-pointer hover:bg-[#c9cbcf]"
                        >
                            Is this item still available?
                        </p>
                        <p
                            onClick={(e) => setMessage(e.target.innerText)}
                            className="py-2 px-5 bg-[#e4e6eb] rounded-3xl w-fit cursor-pointer hover:bg-[#c9cbcf]"
                        >
                            What condition is this item in?
                        </p>
                        <p
                            onClick={(e) => setMessage(e.target.innerText)}
                            className="py-2 px-5 bg-[#e4e6eb] rounded-3xl w-fit cursor-pointer hover:bg-[#c9cbcf]"
                        >
                            Do you deliver?
                        </p>
                    </div>
                    <div className="pb-3">
                        <textarea
                            name="message"
                            id="message"
                            cols={50}
                            rows={5}
                            onChange={(e) => handleChange(e)}
                            className="border-2 border-[#ced0d4] w-full rounded-md resize-none p-2 focus:outline-[#720D96] hover:border-[#141414] text-sm"
                            value={message}
                            placeholder="Please type your message to the seller"
                        ></textarea>
                        {error && !message && (
                            <p className="text-xs text-red-500 mb-2">{error}</p>
                        )}
                        <p className="text-xs text-[#a7a9ad]">
                            Don&apos;t share your email address, phone number or
                            financial information.
                        </p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-end gap-5 pt-5">
                        <Button
                            onClick={onClose}
                            className="border border-[#720D96] bg-white p-4 rounded-md font-medium hover:bg-[#720D96] hover:text-white"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={sendMessage}
                            className="border border-[#720D96] bg-white flex items-center gap-2 p-4 rounded-md font-medium hover:bg-[#720D96] hover:text-white"
                        >
                            <TiMessages size={20} /> Send Message
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ChangeLocationModal;
