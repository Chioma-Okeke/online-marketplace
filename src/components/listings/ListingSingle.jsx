/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ImageLoader from "../reusable/ImageLoader";

function ListingSingle({ title, price, location, img, id }) {
    const [liked, setLiked] = React.useState(false);
    const [likedPost, setLikedPosts] = React.useState([]);

    function handleLike(e) {
        console.log(e.target.id, "event");
        // let id = e.target.id
        e.stopPropagation();
        setLiked(!liked);
        // if (liked) {
        //     setLikedPosts(prevState => {
        //         return [...prevState, id]
        //     })
        // }
        // console.log(likedPost)
    }

    return (
        <div className="relative lg:border rounded-md text-lg lg:p-2 transition ease-in-out hover:scale-105 duration-300">
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
                    <ImageLoader src={img} loading="lazy" width="212px" height="187px"/>
                </div>
                <div className="flex justify-between">
                    <div className="text-sm lg:text-base pl-2">
                        <p className="font-semibold">{price}</p>
                        <h1>{title}</h1>
                        <p>{location}</p>
                    </div>
                </div>
            </Link>
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
        </div>
    );
}

export default ListingSingle;
