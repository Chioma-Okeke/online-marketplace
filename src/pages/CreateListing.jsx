import React from "react";

import { IoMdArrowBack, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import profile from "../assets/profile.svg";
import AddPhotos from "../components/AddPhotos";
// import ListingGallery from "../components/listings/ListingGallery";
import PostPreview from "../components/PostPreview";
import FormInput from "../components/FormInput";
import Button from "../components/reusable/Button";

function CreateListing() {
    const [mouseEnter, setMouseEnter] = React.useState(false);
    const [images, setImages] = React.useState([]); // Separate state for images
    const [formData, setFormData] = React.useState({})

    const handleImagesChange = (images) => {
        setImages(images);
    };

    function handleChange (e) {
        const {name, value} = e.target
		setFormData(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)

        const dataToSend = new FormData();

        // Add other form fields to dataToSend
        // Object.keys(formData).forEach((key) => {
        //     dataToSend.append(key, formData[key]);
        // });

        images.forEach((fileData) => {
            dataToSend.append("files", fileData.file);
        });
        console.log(dataToSend.getAll("files"));
    };

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
                    <img src={profile} alt="" />
                </div>
                <hr />
                <div className="p-4">
                    <div className="">
                        <h2 className="font-bold text-2xl mb-3">
                            Item for sale
                        </h2>
                        <div>
                            {/* <img src={profile} alt="" /> */}
                            <p>Lisiting to Marketplace · Public</p>
                            <p>
                                <span>{`Photos · ${images.length}/3 -`}</span>{" "}
                                You can add up to 3 photos
                            </p>
                            <AddPhotos onImagesChange={handleImagesChange} />
                        </div>
                        <h3>Required</h3>
                        <p>Be as descriptive as possible</p>
                        <FormInput
                            inputName="title"
                            inputId="title"
                            placeholderText="Title"
                            inputValue={formData.title}
                            onChange={(e) => handleChange(e)}
                            className="w-full p-4 border-2 my-3 border-[#D0D5DD] bg-white rounded-md shadow-sm transition ease-in-out hover:border-[#720D96] focus:outline-none focus:border-[#720D96] duration-300"
                        />
                        <FormInput
                            inputName="price"
                            inputId="price"
                            placeholderText="Price"
                            inputValue={formData.price}
                            onChange={(e) => handleChange(e)}
                            className="w-full p-4 border-2 mb-3 border-[#D0D5DD] bg-white rounded-md shadow-sm transition ease-in-out hover:border-[#720D96] focus:outline-none focus:border-[#720D96] duration-300"
                        />
                        <div className="cursor-pointer flex items-center justify-between w-full p-4 border-2 mb-3 border-[#D0D5DD] bg-white rounded-md shadow-sm transition ease-in-out hover:border-[#720D96] focus:outline-none focus:border-[#720D96] duration-300">
                            <span className="text-[#ccc]">Category</span>
                            <IoMdArrowDropdown size={20} />
                        </div>

                        <textarea
                            name="message"
                            id="message"
                            cols={50}
                            rows={5}
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
                    </div>
                </div>
            </div>
            <div className=" hidden w-[70%] 2xl:w-[75%] h-screen lg:flex items-center justify-center bg-[#f0f2f5]">
                {/* <div className="flex items-center">
                    {images.map((image) => {
                        return <img className="w-28" key={image} src={image.id} alt="" />;
                    })}
                </div> */}
                <div className="md:w-[95%] 2xl:w-[70%] mx-auto">
                    <PostPreview images={images} formData={formData}/>
                </div>
            </div>
        </div>
    );
}

export default CreateListing;
