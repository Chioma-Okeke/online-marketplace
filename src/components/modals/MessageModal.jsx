/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowBack, IoMdCloseCircle, IoMdSearch } from "react-icons/io";
import image from "../../assets/image1.png";
import Button from "../reusable/Button";
import { TiMessages } from "react-icons/ti";

function MessageModal({ onClose }) {
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
            // exit={{ opacity: 0 }}
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
                    <div className="modal-wrapper flex items-center z-30 relative xl:w-[50%] justify-center">
                        <div className="max-w-md mx-5 xl:max-w-3xl lg:max-w-xl md:max-w-xl bg-white max-h-[90vh] shadow-lg rounded-lg relative">
                            <div className="flex items-center justify-between p-2 w-full ">
                                <h1 className="font-semibold text-2xl text-center flex-1">
                                    Message Seller
                                </h1>
                                <IoMdCloseCircle
                                    size={40}
                                    onClick={onClose}
                                    cursor={"pointer"}
                                    className="bg-white rounded-full hover:scale-90 z-50"
                                />
                            </div>
                            <hr />
                            <div className="px-5 pb-3">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={image}
                                        alt=""
                                        className="mt-3 w-28 border-4 border-white rounded-3xl"
                                    />
                                    <div>
                                        <p className="font-medium">
                                            Plain Sleeve Kangaroo Pocket
                                            Drawstring Hoodie
                                        </p>
                                        <p className="font-medium">$67</p>
                                    </div>
                                </div>
                                <div className="flex gap-y-2 flex-col my-5 text-sm">
                                    <div className="flex items-center gap-2">
                                        <p
                                            onClick={(e) =>
                                                setMessage(e.target.innerText)
                                            }
                                            className="py-2 px-5 bg-[#e4e6eb] rounded-3xl w-fit cursor-pointer hover:bg-[#c9cbcf]"
                                        >
                                            I&apos;m interested in this item.
                                        </p>
                                        <p
                                            onClick={(e) =>
                                                setMessage(e.target.innerText)
                                            }
                                            className="py-2 px-5 bg-[#e4e6eb] rounded-3xl w-fit cursor-pointer hover:bg-[#c9cbcf]"
                                        >
                                            Is this item still available?
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p
                                            onClick={(e) =>
                                                setMessage(e.target.innerText)
                                            }
                                            className="py-2 px-5 bg-[#e4e6eb] rounded-3xl w-fit cursor-pointer hover:bg-[#c9cbcf]"
                                        >
                                            What condition is this item in?
                                        </p>
                                        <p
                                            onClick={(e) =>
                                                setMessage(e.target.innerText)
                                            }
                                            className="py-2 px-5 bg-[#e4e6eb] rounded-3xl w-fit cursor-pointer hover:bg-[#c9cbcf]"
                                        >
                                            Do you deliver?
                                        </p>
                                    </div>
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
                                        <p className="text-xs text-red-500 mb-2">
                                            {error}
                                        </p>
                                    )}
                                    <p className="text-xs text-[#a7a9ad]">
                                        Don&apos;t share your email address,
                                        phone number or financial information.
                                    </p>
                                </div>
                                <hr />
                                <div className="flex items-center justify-end gap-5 pt-3">
                                    <Button
                                        onClick={onClose}
                                        className="border border-[#720D96] bg-white py-2 px-4 rounded-md font-medium hover:bg-[#720D96] hover:text-white"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={sendMessage}
                                        className="border border-[#720D96] bg-white flex items-center gap-2 py-2 px-4 rounded-md font-medium hover:bg-[#720D96] hover:text-white"
                                    >
                                        <TiMessages size={20} /> Send Message
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {/* {mobile view} */}
            <div className="md:hidden bg-white fixed inset-0 z-30 transition-all duration-500 ">
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
                        <p className="text-lg">Marketplace</p>
                    </div>
                    <IoMdSearch
                        size={20}
                        className="transition ease-out hover:scale-105 duration-300"
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
                    <div className="flex gap-y-2 flex-col my-5 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
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
                        </div>
                        <div className="flex items-center gap-2">
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
                    <div className="flex items-center justify-end gap-5 pt-3">
                        <Button
                            onClick={onClose}
                            className="border border-[#720D96] bg-white py-2 px-4 rounded-md font-medium hover:bg-[#720D96] hover:text-white"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={sendMessage}
                            className="border border-[#720D96] bg-white flex items-center gap-2 py-2 px-4 rounded-md font-medium hover:bg-[#720D96] hover:text-white"
                        >
                            <TiMessages size={20} /> Send Message
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default MessageModal;
