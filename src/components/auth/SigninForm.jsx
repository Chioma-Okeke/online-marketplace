// import React from "react";
import { useContext, useEffect, useState } from "react";
import FormInput from "../FormInput";
import Button from "../reusable/Button";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { AuthContext } from "../../context/AuthContext";

function SigninForm() {
    const [formData, setFormData] = useState({});
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/listings'

    useEffect(() => {
        // Clear the stored URL if the user navigates away from the sign-in page
        return () => {
            sessionStorage.removeItem("redirectBackTo");
        };
    }, []);

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

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData, "data");
        try {
            const res = await axios.post('https://composed-visually-newt.ngrok-free.app/api/auth/authenticate', formData)
            // const data = await res.json()
            console.log(res, "response")
            if (res.status === 201) {
                alert("You have successfully signed up.")
                navigate(from)
                login(res.data.token, res.data.user)
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                    isRequired={true}
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
                    isRequired={true}
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
