// import React from "react";
import { useContext, useState } from "react";
import FormInput from "../FormInput";
import Button from "../reusable/Button";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AuthContext} from "../../context/AuthContext";

function SignupForm() {
    const {login} = useContext(AuthContext)
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()

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
            const res = await axios.post('https://composed-visually-newt.ngrok-free.app/api/auth/register', formData)
            // const data = await res.json()
            console.log(res, "response")
            if (res.status === 201) {
                alert("You have successfully signed up.")
                navigate("/signin")
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
                    inputLabel="First Name"
                    labelFor="firstName"
                    inputType="text"
                    inputId="firstName"
                    inputName="firstName"
                    placeholderText="Enter your first name"
                    ariaLabelName="First Name"
                    inputValue={formData.name}
                    onChange={(e) => handleChange(e)}
                    isRequired={true}
                    className="w-full p-4 border border-[#D0D5DD] bg-white rounded-md shadow-sm text-sm focus:outline-none focus:shadow mb-5"
                />
                <FormInput
                    inputLabel="Last Name"
                    labelFor="lastName"
                    inputType="text"
                    inputId="lastName"
                    inputName="lastName"
                    placeholderText="Enter your last name"
                    ariaLabelName="Name"
                    inputValue={formData.name}
                    onChange={(e) => handleChange(e)}
                    isRequired={true}
                    className="w-full p-4 border border-[#D0D5DD] bg-white rounded-md shadow-sm text-sm focus:outline-none focus:shadow mb-5"
                />
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
                    showPasswordRequirement={true}
                    className="w-full p-4 border border-[#D0D5DD] bg-white rounded-md shadow-sm text-sm focus:outline-none focus:shadow"
                />
                {/* <PhoneNumber />
        <HiddenInput /> */}
                <Button className="w-full md:text-base text-white font-medium px-6 py-4 rounded-md mt-5 bg-[#720D96]">
                    Sign up
                </Button>
            </form>
        </div>
    );
}

export default SignupForm;
