// import React, { useContext } from "react";
// import SingleListingContext from "../../context/SingleListingContext";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

function ListingGallery() {
    // const { singleListingData } = useContext(SingleListingContext);

    return (
        <div className="md:flex-1">
            <div className="w-full lg:w-[80%] 2xl:w-full mx-auto py-5 md:py-0">
                <div className="mb-5 w-full">
                    <img src={image1} alt="" className="rounded-3xl w-full" />
                </div>
                <div className="grid grid-cols-3 gap-5 md:gap-8 w-full">
                    <img src={image2} alt="" className="rounded-3xl w-full" />
                    <img src={image3} alt="" className="rounded-3xl w-full" />
                    <img src={image1} alt="" className="rounded-3xl w-full" />
                </div>
            </div>
        </div>
    );
}

export default ListingGallery;
