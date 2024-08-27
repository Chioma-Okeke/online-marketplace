import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ImageLoader({ src, alt, loading, width, height, className }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        console.log("Image has loaded."); // Debugging line
        setImageLoaded(true);
    };

    useEffect(() => {
        console.log("Component rendered. Image loaded state:", imageLoaded);
    }, [imageLoaded]);

    return (
        <div className="relative">
            {!imageLoaded && (
                <div
                    className={`bg-gray-200 border shadow-sm animate-pulse ${className}`}
                    style={{ width: width, height: height }}
                >
                    {/* <p>Loading...</p> */}
                </div>
            )}

            {/* <div style={{ display: imageLoaded ? "block" : "none" }}> */}
                {/* <img
                    className={className}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={loading}
                    onLoad={handleImageLoad}
                /> */}
                <LazyLoadImage
                    className={ className}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    onLoad={handleImageLoad}
                    style={{ display: imageLoaded ? "block" : "none" }}
                />
            {/* </div> */}
        </div>
    );
}

ImageLoader.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    loading: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

export default ImageLoader;
