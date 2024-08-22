// import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import profile from "../../../assets/profile.svg";
import NavContainer from "../../navBar/NavContainer";
import { ListingsProvider } from "../../../context/ListingsContext";
import ModalProvider, { ModalContext } from "../../../context/ModalContext";
import DeleteListingsModal from "../../modals/DeleteListingModal";

function PersonalPageLayout({ pageName, children }) {
    return (
        <ModalProvider>
            <ListingsProvider>
                <div>
                    {/* large screen View */}
                    <div className="hidden lg:flex justify-between">
                        <NavContainer pageName={pageName} />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative lg:w-3/4 2xl:w-4/5"
                        >
                            {children}
                        </motion.div>
                    </div>
                    {/* Mobile screen */}
                    <div className="lg:hidden">
                        <div>
                            <header className="flex items-center justify-between py-2 px-3 border-b-2">
                                <div>
                                    <Link
                                        to={"/listings"}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <IoMdArrowBack size={25} />
                                        <p className="text-lg">{pageName}</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={"/userprofile"}>
                                        <img
                                            src={profile}
                                            alt=""
                                            className="cursor-pointer w-10"
                                        />
                                    </Link>
                                </div>
                            </header>
                            {pageName !== "User Profile" && (
                                <div>
                                    <nav>
                                        <ul className="flex items-center justify-between">
                                            <NavLink
                                                to={"/selling"}
                                                className={({ isActive }) => {
                                                    return (
                                                        "hover:text-blue-700 py-2 px-5 flex-1 text-center " +
                                                        (isActive
                                                            ? "text-blue-700 border-b border-b-blue-700"
                                                            : "")
                                                    );
                                                }}
                                            >
                                                Selling
                                            </NavLink>
                                            <NavLink
                                                to={"/buying"}
                                                className={({ isActive }) => {
                                                    return (
                                                        "hover:text-blue-700 py-2 px-5 flex-1 text-center " +
                                                        (isActive
                                                            ? "text-blue-700 border-b border-b-blue-700"
                                                            : "")
                                                    );
                                                }}
                                            >
                                                Buying
                                            </NavLink>
                                            <NavLink
                                                to={"/favorites"}
                                                className={({ isActive }) => {
                                                    return (
                                                        "hover:text-blue-700 py-2 px-5 flex-1 text-center " +
                                                        (isActive
                                                            ? "text-blue-700 border-b border-b-blue-700"
                                                            : "")
                                                    );
                                                }}
                                            >
                                                Favorites
                                            </NavLink>
                                        </ul>
                                    </nav>
                                </div>
                            )}
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            </ListingsProvider>
            <ModalContext.Consumer>
                {({ showDeleteListingsModal, handleDeleteListingsToggle }) => (
                    <>
                        {showDeleteListingsModal && (
                            <DeleteListingsModal onClose={handleDeleteListingsToggle}/>
                        )}
                    </>
                )}
            </ModalContext.Consumer>
        </ModalProvider>
    );
}

PersonalPageLayout.propTypes = {
    pageName: PropTypes.string,
    children: PropTypes.node,
};

export default PersonalPageLayout;
