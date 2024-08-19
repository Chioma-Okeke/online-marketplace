import React, { createContext } from "react";
import PropTypes from "prop-types";

export const ModalContext = createContext();

function ModalProvider({ children }) {
    const [showLocationModal, setShowLocationModal] = React.useState(false);
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [showSellerModal, setShowSellerModal] = React.useState(false);
    const [showMessageModal, setShowMessageModal] = React.useState(false);

    function handleLocationToggle() {
        if (!showLocationModal) {
            document
                .getElementsByTagName("html")[0]
                .classList.add("overflow-y-hidden");
            setShowLocationModal(true);
        } else {
            document
                .getElementsByTagName("html")[0]
                .classList.remove("overflow-y-hidden");
            setShowLocationModal(false);
        }
    }
    function handleNotificationToggle() {
        if (!showNotifications) {
            document
                .getElementsByTagName("html")[0]
                .classList.add("overflow-y-hidden");
            setShowNotifications(true);
        } else {
            document
                .getElementsByTagName("html")[0]
                .classList.remove("overflow-y-hidden");
            setShowNotifications(false);
        }
    }
    function handleSellerToggle() {
        if (!showSellerModal) {
            document
                .getElementsByTagName("html")[0]
                .classList.add("overflow-y-hidden");
            setShowSellerModal(true);
        } else {
            document
                .getElementsByTagName("html")[0]
                .classList.remove("overflow-y-hidden");
            setShowSellerModal(false);
        }
    }
    function handleMessageToggle() {
        if (!showMessageModal) {
            document
                .getElementsByTagName("html")[0]
                .classList.add("overflow-y-hidden");
            setShowMessageModal(true);
        } else {
            document
                .getElementsByTagName("html")[0]
                .classList.remove("overflow-y-hidden");
            setShowMessageModal(false);
        }
    }

    return (
        <ModalContext.Provider
            value={{
                showLocationModal,
                showNotifications,
                showSellerModal,
                showMessageModal,
                handleLocationToggle,
                handleMessageToggle,
                handleNotificationToggle,
                handleSellerToggle,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

ModalProvider.propTypes = {
    children: PropTypes.node,
};

export default ModalProvider;
