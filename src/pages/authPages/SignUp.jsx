// import React from 'react'

import { Link } from "react-router-dom";
import SignupForm from "../../components/auth/SignupForm";
// import GoogleButton from "../../components/reusable/GoogleButton";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import Container from "../../components/container/Container";
import { IoMdCloseCircle } from "react-icons/io";

function SignUp() {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
                className="flex w-full md:min-h-[100vh] flex-col md:flex-row md:py-8"
            >
                <div className="hidden md:flex flex-col justify-center flex-1 bg-white rounded-3xl">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <Player
                        src="https://lottie.host/9c30cb49-bcc6-40ff-83b2-c45dba153869/KJnZ3ZELnt.json"
                        background="#FFFFFF"
                        speed="1"
                        style={{ width: "100%", height: "500px" }}
                        loop
                        controls
                        autoplay
                        direction="1"
                        mode="normal"
                    ></Player>
                    <h2 className="font-bold text-xl mb-3 mx-auto w-[90%] lg:w-[70%]">
                        Shopping made easier
                    </h2>
                    <p className="font-light text-md w-[90%] lg:w-[70%] mx-auto">
                        Whether you&apos;re hunting for the perfect gift or
                        treating yourself to something special, this space is
                        your go-to destination for local finds. Join our
                        community of savvy shoppers and start exploring
                        today—your next great find is just around the corner!
                    </p>
                </div>
                <div className="flex-1 w-full flex flex-col justify-center">
                    <div className="p-5 lg:py-5 lg:px-20">
                        <div className="border-[#E4E7EC] border-2 border-solid rounded-xl p-5 lg:p-10 bg-white sm:w-[80%] mx-auto md:w-full">
                            <h2 className="font-semibold text-2xl lg:text-[28px] leading-9 text-center text-[#720D96]">
                                Create a new account
                            </h2>
                            <p className="text-base text-center text-[#475367] mb-5">
                                It&apos;s quick and easy.
                            </p>
                            <SignupForm />
                            <p className="text-[#B3B1B1] text-sm text-center mt-5">
                                Already have an account?{" "}
                                <span className="font-semibold text-[#720D96]">
                                    <Link to="/signin">Sign in</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <Link to={"/"} className="flex justify-end">
                    <IoMdCloseCircle
                        size={40}
                        cursor={"pointer"}
                        className="bg-white rounded-full transition ease-in-out hover:scale-110 duration-300"
                    />
                </Link>
            </motion.div>
        </Container>
    );
}

export default SignUp;
