import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-medium-image-zoom/dist/styles.css";

// import SingleListingContext from "../../context/SingleListingContext";
// import Zoom from "react-medium-image-zoom";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image6.png";
import image4 from "../../assets/image5.png";

function ListingGallery() {
    const [currentPicture, setCurrentPicture] = React.useState(image4);
    const [expandedImage, setExpandedImage] = React.useState(null);
    const [zoom, setZoom] = React.useState(1);
    // const { singleListingData } = useContext(SingleListingContext);

    const handleImageClick = (e) => {
        setExpandedImage(e.target.src);
    };

    const handleClose = () => {
        setExpandedImage(null);
        setZoom(1);
        console.log("working");
    };

    function handleSelection(e) {
        console.log(e.target.src);
        setCurrentPicture(e.target.src);
    }

    const handleZoomIn = (event) => {
        event.stopPropagation(); // Prevent closing the overlay
        setZoom((prevZoom) => prevZoom + 0.1);
    };

    const handleZoomOut = (event) => {
        event.stopPropagation(); // Prevent closing the overlay
        setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1));
    };

    return (
        <div className="md:flex-1 2xl:flex-none 2xl:w-2/3">
            <div className="w-full lg:w-[80%] 2xl:w-full 2xl:flex flex-row-reverse mx-auto py-5 px-2 md:py-0">
                <div
                    className="mb-5 w-full"
                    onClick={(e) => handleImageClick(e)}
                    id="main-image"
                >
                    <LazyLoadImage
                        src={currentPicture}
                        alt=""
                        effect="blur"
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                        className="rounded-3xl w-full max-h-[700px] "
                    />
                </div>
                <div className="grid grid-cols-3 gap-4 md:gap-8 w-full 2xl:flex flex-col 2xl:max-h-56 2xl:w-1/4 ">
                    <LazyLoadImage
                        src={image2}
                        className="rounded-3xl w-full h-full cursor-pointer transition ease-in-out hover:opacity-90 duration-500 2xl:w-3/4 mx-auto"
                        onClick={(e) => handleSelection(e)}
                        onMouseEnter={(e) => handleSelection(e)}
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                    />
                    <LazyLoadImage
                        src={image4}
                        className="rounded-3xl w-full h-full cursor-pointer transition ease-in-out hover:opacity-90 duration-500 2xl:w-3/4 mx-auto"
                        onClick={(e) => handleSelection(e)}
                        onMouseEnter={(e) => handleSelection(e)}
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                    />
                    <LazyLoadImage
                        src={image1}
                        className="rounded-3xl w-full h-full cursor-pointer transition ease-in-out hover:opacity-90 duration-500 2xl:w-3/4 mx-auto"
                        onClick={(e) => handleSelection(e)}
                        onMouseEnter={(e) => handleSelection(e)}
                        wrapperProps={{
                            style: { transitionDelay: "1s" },
                        }}
                    />
                </div>
            </div>
            {expandedImage && (
                <div className="overlay" onClick={handleClose}>
                    <div
                        className="image-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={expandedImage}
                            alt="Selected"
                            loading="lazy"
                            className="full-screen-image"
                            style={{ transform: `scale(${zoom})` }}
                        />
                    </div>
                    <div className="controls">
                        <button onClick={handleZoomIn}>Zoom In</button>
                        <button onClick={handleZoomOut}>Zoom Out</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListingGallery;
