import React, { useContext } from "react";
import PropTypes from "prop-types";
import profile from "../../assets/profile.svg";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function reducer(state, action) {
    const { type, isAuthenticated } = action;
    switch (type) {
        case "back":
            return isAuthenticated ? "/listings" : "/";
        default:
            return state;
    }
}
function ListingHeader() {
    const { isAuthenticated } = useContext(AuthContext);
    const [mouseEnter, setMouseEnter] = React.useState(false);
    const [backToPage, dispatch] = React.useReducer(
        reducer,
        isAuthenticated ? "/listings" : "/"
    );

    function handlePageBack() {
        dispatch({ type: "back", isAuthenticated });
    }

    return (
        <div className="flex items-center justify-between p-3 border-b">
            <Link
                to={`${backToPage}`}
                className="flex items-center gap-2 cursor-pointer"
                onClick={handlePageBack}
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
            >
                <IoMdArrowBack
                    size={25}
                    className={`${
                        mouseEnter
                            ? "transition ease-in-out w-8 duration-500"
                            : ""
                    }`}
                />
                <p className="text-lg">Marketplace</p>
            </Link>
            <Link to={"/userprofile"}>
                <img src={profile} alt="" />
            </Link>
        </div>
    );
}

ListingHeader.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
};

export default ListingHeader;
