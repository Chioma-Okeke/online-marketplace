import React from "react";
import FormInput from "../FormInput";
import Button from "../reusable/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassordForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = React.useState({});

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

    async function resetPassword (e) {
        e.preventDefault()
        try {
            await axios.post("https://composed-visually-newt.ngrok-free.app/api/auth/reset", formData)
            alert("You will receive an email shortly")
            navigate("/signin")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <form onSubmit={(e) => resetPassword(e)}>
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
                {/* <PhoneNumber />
        <HiddenInput /> */}
                <Button className="w-full md:text-base text-white font-medium px-6 py-4 rounded-md bg-[#720D96]">
                    Send Email
                </Button>
            </form>
        </div>
    );
}

export default ForgotPassordForm;
