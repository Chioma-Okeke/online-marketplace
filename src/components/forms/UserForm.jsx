import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { FaCamera } from "react-icons/fa";

import FormInput from "../FormInput";
import image from "../../assets/image1.png";

function UserForm({ formData, handleChange }) {
    return (
        <div className="border shadow">
            <form>
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
                            <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 hover:scale-105 cursor-pointer">
                                <FaCamera size={25}/>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-5">
                        <div>
                            <FormInput
                                inputLabel="Your Name"
                                labelFor="name"
                                inputType="text"
                                inputId="name"
                                inputName="name"
                                placeholderText="Enter your name"
                                ariaLabelName="Name"
                                inputValue={formData.name}
                                onChange={(e) => handleChange(e)}
                                isRequired={true}
                                labelClasses="text-base"
                                className="sm:w-[40%] p-4 border border-[#D0D5DD] bg-white rounded-md shadow-sm text-sm focus:outline-[#720D96] hover:border-[#720D96] mt-2 mb-5"
                            />
                            <p className="text-[#77797c]">Joined in 2012</p>
                            <p className="text-[#77797c] mb-5">
                                <span className="text-[#141414] font-semibold">
                                    20+
                                </span>{" "}
                                active listings ·{" "}
                                <span className="text-[#141414] font-semibold">
                                    118
                                </span>{" "}
                                followers
                            </p>
                            <FormInput
                                inputLabel="Bio"
                                labelFor="bio"
                                inputType="text"
                                inputId="bio"
                                inputName="bio"
                                placeholderText="Type here"
                                ariaLabelName="Bio"
                                inputValue={formData.bio}
                                onChange={(e) => handleChange(e)}
                                className="sm:w-[40%] p-4 border border-[#D0D5DD] bg-white rounded-md shadow-sm text-sm focus:outline-[#720D96] hover:border-[#720D96] mt-2 mb-5"
                            />
                        </div>
                        <hr />
                        <div className="pt-3 mb-5">
                            <h2>About</h2>
                            <textarea
                                name="about"
                                id="about"
                                cols={50}
                                rows={5}
                                onChange={(e) => handleChange(e)}
                                className="border border-[#D0D5DD] shadow-sm w-full rounded-md resize-none p-2 focus:outline-[#720D96] hover:border-[#720D96] mt-2"
                                value={formData.about}
                                placeholder="Write a summary about yourself"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

UserForm.propTypes = {
    formData: PropTypes.object,
    handleChange: PropTypes.func,
};

export default UserForm;
