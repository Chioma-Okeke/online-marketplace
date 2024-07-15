// import React from 'react'

import { Link } from "react-router-dom";
import SigninForm from "../../components/auth/SigninForm";
// import PhoneImage from "../../assets/Phoneimages.png";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import Container from "../../components/container/Container";

function SignIn() {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.6, delay: 0.2 }}
                className="flex w-full md:min-h-[100vh] flex-col md:flex-row md:py-8"
            >
                <div className="hidden md:flex flex-col justify-center flex-1 bg-white">
                    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                    <Player
                        src="https://lottie.host/444c3d32-dd31-4420-b956-5bbb79bc67d9/5RTMDG1lu3.json"
                        background="#FFFFFF"
                        speed="1"
                        style={{ width: "100%", height: "400px" }}
                        loop
                        controls
                        autoplay
                        direction="1"
                        mode="normal"
                    ></Player>
                    <h2 className="font-bold text-xl mb-3 mx-auto w-[70%]">
                        Shopping made easier
                    </h2>
                    <p className="font-light text-md w-[70%] mx-auto">
                        Discover amazing deals and unique treasures right in
                        your neighborhood! Our marketplace connects you with
                        listings from people within a 65km radius, making it
                        easy to find what you need close to home.
                    </p>
                </div>
                <div className="flex-1 w-full flex flex-col justify-center">
                    <div className="p-5 lg:py-5 lg:px-20">
                        <div className="border-[#E4E7EC] border-2 border-solid rounded-xl p-5 lg:p-10 bg-white sm:w-[80%] mx-auto md:w-full">
                            <h2 className="font-semibold text-2xl lg:text-3xl leading-9 text-center text-[#720D96] mb-5">
                                Welcome back
                            </h2>
                            <SigninForm />
                            <p className="text-[#B3B1B1] text-sm text-center mt-5">
                                Don&apos;t have an account?{" "}
                                <span className="font-semibold text-[#720D96]">
                                    <Link to="/signup">Sign up</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Container>
    );
}

export default SignIn;
