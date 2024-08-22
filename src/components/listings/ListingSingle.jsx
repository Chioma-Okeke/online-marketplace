/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import ImageLoader from "../reusable/ImageLoader";
import { ModalContext } from "../../context/ModalContext";

function ListingSingle({ title, price, location, img, id, isSellerListings }) {
    const [liked, setLiked] = React.useState(false);
    const [likedPost, setLikedPosts] = React.useState([]);
    const {handleDeleteListingsToggle} = React.useContext(ModalContext)

    function handleLike(e) {
        console.log(e.target.id, "event");
        e.stopPropagation();
        setLiked(!liked);
    }

    return (
        <div className="relative lg:border rounded-md text-lg mb-2 lg:p-2 transition ease-in-out hover:scale-105 duration-300">
            <Link
                to={"/listing"}
                className="cursor-pointer hover:shadow-xl"
                onClick={window.scrollTo(0, 0)}
            >
                <div className="mb-2">
                    {/* <img
                        src={img}
                        alt=""
                        loading="lazy"
                        className="w-full lg:rounded-md"
                    /> */}
                    <ImageLoader
                        src={img}
                        loading="lazy"
                        width="100%"
                        height="187px"
                        alt="Listing Image"
                    />
                </div>
                <div className="flex justify-between">
                    <div className="text-sm lg:text-base pl-2">
                        <p className="font-semibold">{price}</p>
                        <h1>{title}</h1>
                        <p>{location}</p>
                    </div>
                </div>
            </Link>
            {!isSellerListings ? (
                <div
                    className="absolute top-2 right-2"
                    onClick={(e) => handleLike(e)}
                >
                    {!liked ? (
                        <FaRegHeart
                            id={id}
                            className="hover:fill-[#720D96]"
                            cursor={"pointer"}
                        />
                    ) : (
                        <FaHeart id={id} color="#720D96" cursor={"pointer"} />
                    )}
                </div>
            ) : (
                <div className="absolute top-2 right-2" onClick={handleDeleteListingsToggle}>
                    <RiDeleteBin6Line
                        color="red"
                        className="hover:scale-125 "
                        cursor={"pointer"}
                        size={`${window.innerWidth < 640 ? 25 : 20 }`}
                    />
                </div>
            )}
        </div>
    );
}

ListingSingle.propTypes = {
    isSellerListings: PropTypes.boolean,
};

export default ListingSingle;
