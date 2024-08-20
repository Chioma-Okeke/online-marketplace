import React from "react";

import { IoMdArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import profile from "../assets/profile.svg";
import AddPhotos from "../components/AddPhotos";
// import ListingGallery from "../components/listings/ListingGallery";
import PostPreview from "../components/PostPreview";
import FormInput from "../components/FormInput";
import Button from "../components/reusable/Button";
import { listingCategories } from "../data/listings";
import { MdLocationPin } from "react-icons/md";
// import axios from "axios";
import ListingService from "../services/Listing";
import FetchClient from "../ServiceClients/FetchClient";

function CreateListing() {
    const [mouseEnter, setMouseEnter] = React.useState(false);
    const [images, setImages] = React.useState([]); // Separate state for images
    const [formData, setFormData] = React.useState({});
    const [activeInput, setActiveInput] = React.useState("");
    const [showCategoryOptions, setShowCategoryOptions] = React.useState(false);
    const [chosenCategory, setChosenCategory] = React.useState("");

    const handleImagesChange = (images) => {
        setImages(images);
    };

    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(",")[1]);
            reader.onerror = (error) => reject(error);
        });

    function handleChange(e) {
        setActiveInput(e.target.id);
        const { name, value } = e.target;
        setFormData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    function highlightField(e) {
        setActiveInput(e.target.id);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const listingService = new ListingService(FetchClient);
        try {
            // Converting files to Base64
            const filesBase64Promises = images.map((fileData) =>
                toBase64(fileData.file)
            );
            const filesBase64 = await Promise.all(filesBase64Promises);

            //updating formData with the chosen category
            setFormData((prevFormData) => {
                return {
                    ...prevFormData,
                    category: chosenCategory,
                };
            });

            // Preparing listingInfo with the first file as string and form data as JSON string
            const listingInfo = {
                file: filesBase64[0],
                listingData: JSON.stringify(formData),
            };
            const response = listingService.createListing(listingInfo);
            alert("Successful");
            console.log(response.data);
        } catch (err) {
            console.error(err);
            alert("unsuccessful");
        }
    }

    function handleCategorySelection(e) {
        const option = e.target.id;
        setChosenCategory(option);
        setShowCategoryOptions(false);
    }

    return (
        <div className="flex h-screen text-[#141414]">
            <div className="w-full lg:w-[30%] 2xl:w-[25%] h-screen overflow-y-scroll">
                <div className="flex items-center justify-between p-3 border-b">
                    <Link
                        to={"/listings"}
                        className="flex items-center gap-2 cursor-pointer"
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
                        <img src={profile} alt="" className="hover:scale-110"/>
                    </Link>
                </div>
                <hr />
                <div className="p-4">
                    <form className="">
                        <h2 className="font-bold text-2xl mb-3">
                            Item for sale
                        </h2>
                        <div>
                            {/* <img src={profile} alt="" /> */}
                            <p>Listing to Marketplace · Public</p>
                            <p>
                                <span>{`Photos · ${images.length}/1 -`}</span>{" "}
                                You can add your photo here
                            </p>
                            <AddPhotos onImagesChange={handleImagesChange} />
                        </div>
                        <h3>Required</h3>
                        <p>Be as descriptive as possible</p>
                        <FormInput
                            inputName="name"
                            inputId="name"
                            placeholderText="Name"
                            inputValue={formData.name}
                            // onMouseLeave={() => setActiveInput("")}
                            onMouseEnter={(e) => highlightField(e)}
                            onChange={(e) => handleChange(e)}
                            className="w-full p-4 border-2 my-3 border-[#D0D5DD] bg-white rounded-md shadow-sm transition ease-in-out hover:border-[#720D96] focus:outline-none focus:border-[#720D96] duration-300"
                        />
                        <FormInput
                            inputName="price"
                            inputId="price"
                            placeholderText="Price"
                            inputValue={formData.price}
                            // onMouseLeave={setActiveInput("")}
                            onMouseEnter={(e) => highlightField(e)}
                            onChange={(e) => handleChange(e)}
                            className="w-full p-4 border-2 mb-3 border-[#D0D5DD] bg-white rounded-md shadow-sm transition ease-in-out hover:border-[#720D96] focus:outline-none focus:border-[#720D96] duration-300"
                        />
                        <div className="relative">
                            <div
                                onClick={() =>
                                    setShowCategoryOptions(
                                        (prevState) => !prevState
                                    )
                                }
                                className="cursor-pointer flex items-center justify-between w-full p-4 border-2 mb-3 border-[#D0D5DD] bg-white rounded-md shadow-sm transition ease-in-out hover:border-[#720D96] focus:outline-none focus:border-[#720D96] duration-300"
                            >
                                <span
                                    className={`${
                                        chosenCategory
                                            ? "text-[#141414]"
                                            : "text-[#ccc]"
                                    }`}
                                >
                                    {chosenCategory
                                        ? chosenCategory
                                        : "Category"}
                                </span>
                                <IoMdArrowDropdown size={20} />
                            </div>
                            {showCategoryOptions && (
                                <div className="absolute w-full top-full bottom-0 left-0 py-3 h-72 overflow-auto border rounded-md bg-white">
                                    {listingCategories.map(
                                        ({ id, Icon, category }) => {
                                            return (
                                                <div
                                                    key={id}
                                                    id={category}
                                                    onClick={
                                                        handleCategorySelection
                                                    }
                                                    className="border-b-2 flex items-center gap-2 mb-2 py-2 pl-3 text-sm cursor-pointer transition ease-in-out hover:bg-[#e4e6eb] rounded-md"
                                                >
                                                    <div
                                                        id={category}
                                                        className="bg-[#e4e6eb] rounded-full p-2"
                                                    >
                                                        <Icon size={20} />
                                                    </div>
                                                    <span id={category}>
                                                        {category}
                                                    </span>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="border-2 rounded-md mb-3 w-full my-3 border-[#D0D5DD] bg-white shadow-sm transition ease-in-out hover:border-[#720D96] focus:outline-none focus:border-[#720D96] duration-300">
                            <div className="flex items-center gap-2">
                                <div className="pl-4">
                                    <MdLocationPin size={20} />
                                </div>
                                <FormInput
                                    inputGroupClassNames="flex flex-col py-3 text-[#141414]"
                                    inputLabel="Location"
                                    labelFor="location"
                                    labelClasses="mb-0 text-sm text-[rgba(20,20,20, .8)]"
                                    inputName="location"
                                    inputId="location"
                                    inputValue={formData.location}
                                    onChange={(e) => handleChange(e)}
                                    className="focus:outline-none text-base"
                                    placeholderText="Enter a town or city"
                                />
                            </div>
                        </div>

                        <textarea
                            name="message"
                            id="message"
                            cols={50}
                            rows={5}
                            // onMouseLeave={setActiveInput("")}
                            onMouseEnter={(e) => highlightField(e)}
                            onChange={(e) => handleChange(e)}
                            className="border-2 border-[#ced0d4] shadow-sm w-full rounded-md resize-none p-2 focus:outline-[#720D96] hover:border-[#720D96] text-sm"
                            value={formData.message}
                            placeholder="Please type your message to the seller"
                        ></textarea>
                        <div className="flex items-center justify-end gap-5 pt-3">
                            <Button
                                onClick={handleSubmit}
                                className="border border-[#720D96] bg-white p-4 rounded-md font-medium transition ease-in-out hover:bg-[#720D96] hover:text-white duration-300"
                            >
                                Create
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className=" hidden w-[70%] 2xl:w-[75%] h-screen lg:flex items-center justify-center bg-[#f0f2f5]">
                {/* <div className="flex items-center">
                    {images.map((image) => {
                        return <img className="w-28" key={image} src={image.id} alt="" />;
                    })}
                </div> */}
                <div className="md:w-[95%] 2xl:w-[70%] mx-auto">
                    <PostPreview
                        images={images}
                        formData={formData}
                        activeInput={activeInput}
                    />
                </div>
            </div>
        </div>
    );
}

export default CreateListing;
