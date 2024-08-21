import { useState } from "react";
import PropTypes from "prop-types"

function ImageLoader({ src, alt, loading, width, height, className }) {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div>
            {isLoading && (
                <div
                    className={`bg-gray-200 border shadow-sm`}
                    style={{ minWidth: `${width}`, minHeight: `${height}` }}
                ></div>
            )}

            <img
                className={className}
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                onLoad={handleLoad}
                style={{ display: isLoading ? "none" : "block" }} // Hide the main image until it's loaded
            />
        </div>
    );
}

ImageLoader.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    loading: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string
}

export default ImageLoader;
