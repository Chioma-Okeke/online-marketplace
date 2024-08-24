/* eslint-disable react/prop-types */
import React from "react";
import { IoMdArrowBack, IoMdCloseCircle, IoMdSearch } from "react-icons/io";
import { motion } from "framer-motion";

import noNotificationIllustration from "../../assets/nonotifications.png";
import ImageLoader from "../reusable/ImageLoader";

function NotificationModal({ onClose }) {
    const [mouseEnter, setMouseEnter] = React.useState(false);

    return (
        <div className="">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hidden lg:block fixed inset-0 z-[80] transition-all duration-500"
            >
                {/* Modal Backdrop */}
                <div
                    className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-30"
                    onClick={onClose}
                ></div>

                {/* Modal Content */}
                <main className="flex flex-col items-center justify-center h-full w-full relative">
                    <div className="modal-wrapper flex items-center z-30 relative xl:w-[70%] justify-center">
                        <div className="max-w-md mx-5 w-[55%] xl:max-w-3xl lg:max-w-xl md:max-w-xl bg-white min-h-[70vh] max-h-[93vh] shadow-lg rounded-lg relative">
                            <div className="flex items-center justify-between p-4 w-full ">
                                <h1 className="font-semibold text-xl text-center flex-1">
                                    Notifications
                                </h1>
                                <IoMdCloseCircle
                                    size={40}
                                    onClick={onClose}
                                    cursor={"pointer"}
                                    className="bg-white rounded-full transition ease-in-out hover:scale-110 duration-300 z-50"
                                />
                            </div>
                            <hr />
                            <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                                <ImageLoader
                                    src={noNotificationIllustration}
                                    className="w-20 mx-auto"
                                    width="80px"
                                    height="80px"
                                    loading="lazy"
                                    alt="No notification icon"
                                />
                                <p className="text-center p-3 text-xl font-medium text-gray-900 mt-2">
                                    You have no notifications.
                                </p>
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
                        <p className="text-lg">Notifications</p>
                    </div>
                    <IoMdSearch
                        size={25}
                        className="transition ease-out hover:scale-90 duration-300"
                    />
                </div>
                <hr />
                <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <ImageLoader
                        src={noNotificationIllustration}
                        className="w-20 mx-auto"
                        width="80px"
                        height="80px"
                        loading="lazy"
                        alt="No notification icon"
                    />
                    <p className="text-center p-3 text-lg font-semibold text-gray-700">
                        You have no notifications.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotificationModal;
