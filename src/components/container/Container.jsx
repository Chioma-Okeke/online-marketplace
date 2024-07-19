/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

function Container({ children, className }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full mx-auto px-2 sm:px-5 ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default Container;
