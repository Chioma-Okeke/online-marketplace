/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
// import background from "../assets/background.png";

function PostPreview({ images, formData }) {
    const [currentPicture, setCurrentPicture] = useState(null);
    const {title, price, message} = formData

    useEffect(() => {
        if (images.length > 0) {
            const firstImageUrl = URL.createObjectURL(images[0].file);
            setCurrentPicture(firstImageUrl);

            // Clean up the object URL when the component unmounts or the image changes
            return () => URL.revokeObjectURL(firstImageUrl);
        }
    }, [images]);

    const handleSelection = (file) => {
        if (file instanceof File) {
            const objectUrl = URL.createObjectURL(file);
            setCurrentPicture(objectUrl);

            // Clean up the object URL when the selection changes
            return () => URL.revokeObjectURL(objectUrl);
        }
    };

    return (
        <div className="border bg-white p-5 rounded-md">
            <p>Preview</p>
            {/* <div className="flex h-[520px] divide-x-2 border rounded-md">
                    <div className="text-lg flex flex-col items-center justify-center w-[60%] bg-[#f0f2f5] rounded-md">
                        <h1 className="font-bold text-2xl">
                            Your listing preview
                        </h1>
                        <p className="w-[80%] mx-auto">
                            As you create your listing, you can preview how it
                            would appear to others
                        </p>
                    </div>
                    <div className="w-[40%] p-5">
                        <h1>Title</h1>
                        <p>Price</p>
                        <p>Listed a few seconds ago in Lagos</p>
                    </div>
                </div> */}
            <div className="flex h-[520px] divide-x-2 border rounded-md">
                {images.length === 0 ? (
                    <div className="text-lg flex flex-col items-center justify-center w-[60%] bg-[#f0f2f5] rounded-md">
                        <h1 className="font-bold text-2xl">
                            Your listing preview
                        </h1>
                        <p className="w-[80%] mx-auto">
                            As you create your listing, you can preview how it
                            would appear to others
                        </p>
                    </div>
                ) : (
                    <div className="flex-1 py-4">
                        {currentPicture && (
                            <img
                                src={currentPicture}
                                alt="Current Preview"
                                className="w-[60%] min-h-[300px] max-h-80 mx-auto rounded-md object-scale-down"
                            />
                        )}
                        <div className="grid grid-cols-3 place-items-center gap-4 md:gap-8 w-full p-3">
                            {images.map((fileData, index) => {
                                const objectUrl = URL.createObjectURL(
                                    fileData.file
                                );
                                return (
                                    <img
                                        key={index}
                                        src={objectUrl}
                                        alt={`Preview ${index}`}
                                        className="rounded-md w-full h-full max-h-[150px] cursor-pointer "
                                        onClick={() =>
                                            handleSelection(fileData.file)
                                        }
                                        onLoad={() =>
                                            URL.revokeObjectURL(objectUrl)
                                        } // Revoke after loading
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
                <div className="flex-1 p-5">
                    {title ? <h1>{title}</h1> : <h1>Title</h1>}
                    {price ? <p>{`₦ ${price}`}</p> : <p>Price</p>}
                    <p>Listed a few seconds ago in Lagos</p>
                    {message ? <p>{message}</p> : <p>Description</p>}
                </div>
            </div>
        </div>
    );
}

export default PostPreview;
