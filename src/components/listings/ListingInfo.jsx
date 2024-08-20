import React, { useContext } from "react";
import Button from "../reusable/Button";
import { FaHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import image from "../../assets/image1.png";
import { TiMessages } from "react-icons/ti";
import { AuthContext } from "../../context/AuthContext";
import { ModalContext } from "../../context/ModalContext";

function ListingInfo() {
    const [showFullDescription, setShowFullDescription] = React.useState(false);
    const { isAuthenticated } = useContext(AuthContext);
    const { handleMessageToggle, handleSellerToggle } = useContext(ModalContext);

    console.log(isAuthenticated, "listinginfo auth status")

    return (
        <div className="md:flex-1 px-2 pb-10 md:pb-0">
            <div className="md:pl-10 lg:pl-0 2xl:pl-10">
                <h1 className="font-semibold text-2xl xl:text-3xl mb-2">
                    Plain Sleeve Kangaroo Pocket Drawstring Hoodie
                </h1>
                <p className="text-[#720D96] text-xl xl:text-2xl font-semibold mb-2">
                    $67
                </p>
                <p className="text-[#b3b4b6] font-medium rounded-lg mb-2">
                    Listed 2 weeks ago in Lagos
                </p>
                <div className="flex items-center gap-5 mb-5">
                    {isAuthenticated && (
                        <div>
                            <Button
                                className="hidden md:block text-black text-base lg:text-lg font-bold p-4 border bg-white border-[#720D96] rounded-md hover:bg-[#720D96] hover:text-white"
                                onClick={handleMessageToggle}
                            >
                                Message
                            </Button>
                            <Button
                                onClick={handleMessageToggle}
                                className="md:hidden border border-[#720D96] p-4 rounded-full bg-white hover:bg-[#720D96] hover:text-white active:bg-[#720D96] active:text-white"
                            >
                                <TiMessages size={25} />
                            </Button>
                        </div>
                    )}
                    {isAuthenticated && (
                        <Button className="bg-white border border-[#720D96] p-4 rounded-full md:rounded-md hover:bg-[#720D96] hover:text-white active:bg-[#720D96] active:text-white">
                            <FaHeart size={25} />
                        </Button>
                    )}
                    <Button className="bg-white border border-[#720D96] p-4 rounded-full md:rounded-md hover:bg-[#720D96] hover:text-white active:bg-[#720D96] active:text-white">
                        <IoIosShareAlt size={25} />
                    </Button>
                </div>
                <hr />
                <div className="mt-3">
                    <h5 className="text-xl font-semibold">Description</h5>
                    {!showFullDescription && (
                        <p className="lg:text-lg mb-5">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout...{" "}
                            <span
                                className="underline text-[#b3b4b6] cursor-pointer hover:text-[#141414]"
                                onClick={() => setShowFullDescription(true)}
                            >
                                Read more
                            </span>
                        </p>
                    )}
                    {showFullDescription && (
                        <p className="lg:text-lg mb-5">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. This hoodie is very
                            comfortable and soft on the skin{" "}
                            <span
                                className="underline text-[#b3b4b6] cursor-pointer hover:text-[#141414]"
                                onClick={() => setShowFullDescription(false)}
                            >
                                Show less
                            </span>
                        </p>
                    )}
                </div>
                <hr />
                <div className="mt-3">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-xl">
                            Seller information
                        </span>
                        <span
                            onClick={handleSellerToggle}
                            className="text-[#720D96] lg:text-lg cursor-pointer transition ease-in-out hover:underline duration-500"
                        >
                            Seller details
                        </span>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <img
                            src={image}
                            alt=""
                            className="rounded-full w-20 hover:opacity-90 cursor-pointer"
                            onClick={handleSellerToggle}
                        />
                        <p
                            className="lg:text-lg font-medium hover:underline cursor-pointer"
                            onClick={handleSellerToggle}
                        >
                            Sophia Princess
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListingInfo;
