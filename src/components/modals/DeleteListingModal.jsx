/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { Player } from "@lottiefiles/react-lottie-player";

import Button from "../reusable/Button";
import { ModalContext } from "../../context/ModalContext";

function DeleteListingsModal({ onClose, isDeleteInProgress, deleteListing }) {
    const { handleDeleteListingsToggle } = useContext(ModalContext);

    console.log(typeof onClose, "close modal");
    console.log(typeof deleteListing, "delete modal");

    return (
        <div>
            <AnimatePresence>
                <div className="">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className=" fixed inset-0 z-[80] transition-all duration-500"
                    >
                        {/* Modal Backdrop */}
                        <div
                            className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-30"
                            onClick={handleDeleteListingsToggle}
                        ></div>

                        {/* Modal Content */}
                        <main className="flex flex-col items-center justify-center h-full w-full relative">
                            <div className="modal-wrapper flex items-center z-30 relative xl:w-[70%] justify-center">
                                <div className="max-w-md mx-5 md:w-[55%] xl:max-w-3xl lg:max-w-xl md:max-w-xl bg-white shadow-lg rounded-lg relative pb-5">
                                    <div className="py-1 px-2 w-full ">
                                        <h1 className="font-semibold text-xl text-center flex-1">
                                            Delete in progress
                                        </h1>
                                    </div>
                                    <hr />
                                    {isDeleteInProgress ? (
                                        <Player
                                            src={
                                                "https://lottie.host/fa761f5f-0a13-4acd-bc4b-e1d60d5bc49d/T48QddYNTr.json"
                                            }
                                            loop
                                            autoplay
                                            background="transparent"
                                            speed="1"
                                            className="w-48"
                                        />
                                    ) : (
                                        <div>
                                            <div className="w-full">
                                                <p className="text-center p-3 sm:text-lg text-[#141414] mb-2 md:mb-0">
                                                    Are you sure you want to
                                                    delete this listing
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center gap-10">
                                                <Button
                                                    onClick={deleteListing}
                                                    className="w-24 border border-[#720D96] bg-white p-4 rounded-md font-medium transition ease-in-out hover:bg-[#720D96] hover:text-white duration-300"
                                                >
                                                    Yes
                                                </Button>
                                                <Button
                                                    onClick={
                                                        handleDeleteListingsToggle
                                                    }
                                                    className="w-24 border border-[#720D96] bg-white p-4 rounded-md font-medium transition ease-in-out hover:bg-[#720D96] hover:text-white duration-300"
                                                >
                                                    No
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </main>
                    </motion.div>
                </div>
            </AnimatePresence>
        </div>
    );
}

DeleteListingsModal.propTypes = {
    isDeleteInProgress: PropTypes.bool.isRequired,
    deleteListing: PropTypes.func,
};

export default DeleteListingsModal;
