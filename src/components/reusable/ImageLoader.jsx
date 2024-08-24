import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Blurhash } from "react-blurhash";
import { encode } from "blurhash";

function ImageLoader({ src, alt, loading, width, height, className }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [hash, setHash] = useState("");

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // Important for cross-origin images
        img.onload = () => {
            // Create a canvas to draw the image and get the pixel data
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            
            // Encode the image data to a BlurHash
            const blurhash = encode(imageData.data, imageData.width, imageData.height, 4, 4);
            setHash(blurhash);

            setImageLoaded(true);
        };
        img.src = src;
    }, [src]);

    return (
        <div>
            {!imageLoaded && hash && (
                <Blurhash
                    hash={hash}
                    width={width}
                    height={height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            )}

            <img
                className={className}
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                onLoad={() => setImageLoaded(true)}
                // style={{ display: imageLoaded ? "block" : "none" }}
            />
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
