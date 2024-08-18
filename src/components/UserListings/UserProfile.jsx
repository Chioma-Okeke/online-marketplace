// import React from "react";
import { useState } from "react";
import image from "../../assets/image1.png";
import Button from "../reusable/Button";
import { motion } from "framer-motion";
import UserForm from "../forms/UserForm";

function UserProfile() {
    const [isEditRequested, setIsEditRequested] = useState(false);
    const [formData, setFormData] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    function saveChanges() {
        console.log(formData)
        setFormData({name: "", bio: "", about: ""})
        setIsEditRequested(false)
    }

    return (
        <section>
            <header className="w-full flex justify-end p-2">
                {!isEditRequested && (
                    <Button
                        onClick={() => setIsEditRequested(true)}
                        className=" md:text-base text-white font-medium px-6 py-4 rounded-md bg-[#720D96]"
                    >
                        Edit
                    </Button>
                )}
                {isEditRequested && (
                    <motion.div
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "linear", duration: 0.6 }}
                        className="flex align-center gap-3"
                    >
                        <Button onClick={saveChanges} className=" md:text-base font-medium px-6 py-4 rounded-md bg-white text-[#141414] border border-[#720D96] hover:bg-[#720D96] hover:text-white">
                            Save
                        </Button>
                        <Button
                            onClick={() => setIsEditRequested(false)}
                            className=" md:text-base font-medium px-6 py-4 rounded-md bg-white text-[#141414] border border-[#720D96] hover:bg-[#720D96] hover:text-white"
                        >
                            Close
                        </Button>
                    </motion.div>
                )}
            </header>
            {!isEditRequested && (
                <div className="bg-white lg:w-[80%] mx-auto">
                    {/* <div className="flex items-center justify-between p-4 border-b">
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
                    <IoMdSearch size={25} />
                /div> */}
                    <div className="">
                        <div className="relative">
                            <div
                                className="relative h-64 w-full bg-top bg-cover bg-no-repeat"
                                style={{ backgroundImage: `url(${image})` }}
                            >
                                <img
                                    src={image}
                                    alt=""
                                    className="absolute bottom-0 left-3 w-40 border-4 border-white rounded-full"
                                />
                            </div>
                        </div>
                        <div className="px-5 py-5">
                            <div>
                                <h1 className="text-2xl font-bold">
                                    Sunday Prince Chukwuemeka
                                </h1>
                                <p className="text-[#77797c] my-2">
                                    Joined in 2012
                                </p>
                                <p className="text-[#77797c]">
                                    <span className="text-[#141414] font-semibold">
                                        20+
                                    </span>{" "}
                                    active listings ·{" "}
                                    <span className="text-[#141414] font-semibold">
                                        118
                                    </span>{" "}
                                    followers
                                </p>
                                <p className="text-[#141414] text-sm text-center my-5">
                                    Bringing Innovation Home: Where Quality
                                    Meets Convenience!
                                </p>
                            </div>
                            <hr />
                            <div className="pt-3 mb-5">
                                <h2 className="font-semibold text-xl">About</h2>
                                <p className="text-sm">
                                    Welcome to Emmymall Electronics. Dealer in
                                    home electronics and appliances like fridge,
                                    TV, home theater, blenders, washing machine,
                                    fans, air conditioner, solar generator, .
                                    You are guaranteed to get the best product
                                    at the best affordable rate. We offer free
                                    delivery for Lagos residents only. We are
                                    here for you 24/7 to give you the best
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isEditRequested && (
                <div className="lg:w-[80%] mx-auto">
                    <UserForm formData={formData} handleChange={handleChange}/>
                </div>
            )}
        </section>
    );
}

export default UserProfile;
