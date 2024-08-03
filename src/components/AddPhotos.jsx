/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";

const AddPhotos = ({ onImagesChange }) => {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const maxFilesAllowed = 1;
        const totalFiles = selectedFiles.length + files.length;

        if (totalFiles > maxFilesAllowed) {
            alert(`You can only ${maxFilesAllowed} image.`);
            return;
        }

        const filePreviews = files.map((file) => ({
            id: URL.createObjectURL(file),
            file,
        }));

        const updatedFiles = [...selectedFiles, ...filePreviews];
        setSelectedFiles(updatedFiles);
        onImagesChange(updatedFiles);
    };

    const handleRemoveImage = (index) => {
        setSelectedFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            URL.revokeObjectURL(updatedFiles[index].id);
            updatedFiles.splice(index, 1);
            onImagesChange(updatedFiles);
            return updatedFiles;
        });
    };

    useEffect(() => {
        return () => {
            selectedFiles.forEach((fileData) =>
                URL.revokeObjectURL(fileData.id)
            );
        };
    }, [selectedFiles]);

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                // style={{ display: 'none' }}
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="hidden"
            />

            <div
                onClick={handleClick}
                // style={{
                //   border: '2px dashed #ccc',
                //   padding: '20px',
                //   textAlign: 'center',
                //   cursor: 'pointer',
                //   width: '200px',
                //   margin: 'auto',
                // }}
                className="my-5 border-2 border-[#ccc] p-5 flex items-center justify-center flex-col w-full h-52 transition ease-in-out hover:border-[#720D96] duration-300 cursor-pointer"
            >
                <div className="bg-[#ccc] rounded-full p-2 mb-3">
                    <BiSolidImageAdd size={30} />
                </div>
                <p>Add Photos</p>
            </div>

            <div
                style={{ marginTop: "20px" }}
                className="mt-5 flex items-center justify-start gap-4 lg:grid grid-cols-3"
            >
                {selectedFiles.map((fileData, index) => (
                    <div key={fileData.id} className="mb-2 relative">
                        <img
                            src={fileData.id}
                            alt={`preview ${index}`}
                            className="w-full h-24 md:h-32 max-w-28"
                        />
                        <button onClick={() => handleRemoveImage(index)} className="absolute right-0 top-0 hover:scale-110">
                            <IoIosCloseCircle size={20} color="red"/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddPhotos;
