import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { ListingsProvider } from "../../../context/ListingsContext";
import NavContainer from "../../navBar/NavContainer";
import AppHeader from "../AppHeader";
import ModalProvider, { ModalContext } from "../../../context/ModalContext";
import ChangeLocationModal from "../../modals/ChangeLocationModal";
import { useContext } from "react";
import NotificationModal from "../../modals/NotificationModal";
import SellerModal from "../../modals/SellerModal";
import MessageModal from "../../modals/MessageModal";

function PageLayout({ pageName, children }) {
    return (
        <ModalProvider>
            <InnerPageLayout pageName={pageName} content={children} />
        </ModalProvider>
    );
}

function InnerPageLayout({ pageName, content }) {
    const {
        showLocationModal,
        showSellerModal,
        showMessageModal,
        showNotifications,
        handleLocationToggle,
        handleNotificationToggle,
        handleMessageToggle,
        handleSellerToggle,
    } = useContext(ModalContext);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative lg:flex justify-between"
            >
                <ListingsProvider>
                    <NavContainer
                        pageName={pageName}
                        className="hidden lg:block"
                    />
                    <div className="flex flex-col relative lg:w-3/4 2xl:w-4/5">
                        <div className="sticky top-0 left-0 bg-white z-20">
                            <AppHeader />
                        </div>
                        <NavContainer pageName={pageName} />
                        {content}
                    </div>
                </ListingsProvider>
            </motion.div>
            {showLocationModal && (
                <ChangeLocationModal onClose={handleLocationToggle} />
            )}
            {showNotifications && (
                <NotificationModal onClose={handleNotificationToggle} />
            )}
        </div>
    );
}

PageLayout.propTypes = {
    pageName: PropTypes.string,
    children: PropTypes.node,
};

export default PageLayout;
