import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { ListingsProvider } from "../../../context/ListingsContext";
import NavContainer from "../../navBar/NavContainer";
import AppHeader from "../AppHeader";

function PageLayout({ pageName, children }) {
    console.log(pageName, "name in page layout");
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative lg:flex justify-between"
        >
            <ListingsProvider>
                <NavContainer pageName={pageName} className="hidden lg:block" />
                <div className="flex flex-col relative lg:w-3/4 2xl:w-4/5">
                    <div className="sticky top-0 left-0 bg-white z-20">
                        <AppHeader />
                    </div>
                    <NavContainer pageName={pageName} />
                    {/* <ListingsGrid /> */}
                    {children}
                </div>
            </ListingsProvider>
        </motion.div>
    );
}

PageLayout.propTypes = {
    pageName: PropTypes.string,
    children: PropTypes.node,
};

export default PageLayout;
