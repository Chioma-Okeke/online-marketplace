// import React from "react";
import { useState } from "react";
import FormInput from "../FormInput";
import Button from "../reusable/Button";
import { Link } from "react-router-dom";

function SigninForm() {
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

    return (
        <div>
            <form>
                <FormInput
                    inputLabel="Email Address"
                    labelFor="email"
                    inputType="text"
                    inputId="email"
                    inputName="email"
                    placeholderText="Enter your email address"
                    ariaLabelName="Email"
                    inputValue={formData.email}
                    onChange={(e) => handleChange(e)}
                    className="w-full p-4 border border-[#D0D5DD] bg-white rounded-md shadow-sm text-sm focus:outline-none focus:shadow mb-5"
                />
                <FormInput
                    inputLabel="Password"
                    labelFor="password"
                    inputType="password"
                    inputId="password"
                    inputName="password"
                    placeholderText="Enter your password"
                    ariaLabelName="Password"
                    inputValue={formData.password}
                    onChange={(e) => handleChange(e)}
                    className="w-full p-4 border border-[#D0D5DD] bg-white rounded-md shadow-sm text-sm focus:outline-none focus:shadow mb-5"
                />
                {/* <PhoneNumber />
        <HiddenInput /> */}
                <span className="text-end italic text-[#720D96] font-medium text-sm float-end mb-5">
                    <Link to="/forgotpassword">Forgot Password?</Link>
                </span>
                <Button className="w-full md:text-base text-white font-medium px-6 py-4 rounded-md bg-[#720D96]">
                    Sign in
                </Button>
            </form>
        </div>
    );
}

export default SigninForm;
