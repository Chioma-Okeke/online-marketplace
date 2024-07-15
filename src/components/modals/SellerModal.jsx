/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowBack, IoMdCloseCircle, IoMdSearch } from "react-icons/io";
import image from "../../assets/image1.png";

function SellerModal({ onClose }) {
    const [mouseEnter, setMouseEnter] = React.useState(false);

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
                    <div className="modal-wrapper flex items-center z-30 relative">
                        <div className="relative overflow-y-scroll max-w-md mx-5 xl:max-w-3xl lg:max-w-xl md:max-w-xl bg-white max-h-[80vh] shadow-lg rounded-lg scroll-smooth">
                            {/* <div className="sticky top-0 w-full flex items-center justify-end z-50"> */}
                            <IoMdCloseCircle
                                size={40}
                                onClick={onClose}
                                cursor={"pointer"}
                                className="sticky bg-white rounded-full hover:scale-90"
                            />
                            {/* </div> */}
                            <div className="relative">
                                <div
                                    className="relative h-64 w-full"
                                    style={{ backgroundImage: `url(${image})` }}
                                >
                                    <img
                                        src={image}
                                        alt=""
                                        className=" absolute bottom-0 left-3 w-40 border-4 border-white rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="px-5 py-5">
                                <div>
                                    <h1 className="text-3xl font-bold">
                                        Sunday Prince Chukwuemeka
                                    </h1>
                                    <p className="text-[#77797c] md:text-lg my-2">
                                        Joined in 2012
                                    </p>
                                    <p className="text-[#77797c] md:text-lg">
                                        <span className="text-[#141414] font-semibold">
                                            20+
                                        </span>{" "}
                                        active listings ·{" "}
                                        <span className="text-[#141414] font-semibold">
                                            118
                                        </span>{" "}
                                        followers
                                    </p>
                                    <p className="text-[#141414] md:text-lg text-center mt-2">
                                        Bringing Innovation Home: Where Quality
                                        Meets Convenience!
                                    </p>
                                </div>
                                <hr />
                                <div className="pt-3">
                                    <h2 className="font-semibold md:text-xl">
                                        About
                                    </h2>
                                    <p className="">
                                        Welcome to Emmymall Electronics. Dealer
                                        in home electronics and appliances like
                                        fridge, TV, home theater, blenders,
                                        washing machine, fans, air conditioner,
                                        solar generator, . You are guaranteed to
                                        get the best product at the best
                                        affordable rate. We offer free delivery
                                        for Lagos residents only. We are here
                                        for you 24/7 to give you the best
                                    </p>
                                </div>
                                <hr />
                                <div className="pt-3">
                                    <h2 className="font-semibold md:text-xl">
                                        About
                                    </h2>
                                    <p className="">
                                        Welcome to Emmymall Electronics. Dealer
                                        in home electronics and appliances like
                                        fridge, TV, home theater, blenders,
                                        washing machine, fans, air conditioner,
                                        solar generator, . You are guaranteed to
                                        get the best product at the best
                                        affordable rate. We offer free delivery
                                        for Lagos residents only. We are here
                                        for you 24/7 to give you the best
                                    </p>
                                </div>
                                <hr />
                                <div className="pt-3">
                                    <h2 className="font-semibold md:text-xl">
                                        About
                                    </h2>
                                    <p className="">
                                        Welcome to Emmymall Electronics. Dealer
                                        in home electronics and appliances like
                                        fridge, TV, home theater, blenders,
                                        washing machine, fans, air conditioner,
                                        solar generator, . You are guaranteed to
                                        get the best product at the best
                                        affordable rate. We offer free delivery
                                        for Lagos residents only. We are here
                                        for you 24/7 to give you the best
                                    </p>
                                </div>
                                <hr />
                                <div className="pt-3">
                                    <h2 className="font-semibold md:text-xl">
                                        About
                                    </h2>
                                    <p className="">
                                        Welcome to Emmymall Electronics. Dealer
                                        in home electronics and appliances like
                                        fridge, TV, home theater, blenders,
                                        washing machine, fans, air conditioner,
                                        solar generator, . You are guaranteed to
                                        get the best product at the best
                                        affordable rate. We offer free delivery
                                        for Lagos residents only. We are here
                                        for you 24/7 to give you the best
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
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
                    <IoMdSearch/>
                </div>
            </div>
        </motion.div>
    );
}

export default SellerModal;
