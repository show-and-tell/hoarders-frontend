import {ChangeEvent, useState} from 'react';
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
import Navbar from "./Navbar.tsx";

function CollectionViewer() {
    const initialImages = [cat1, cat2, cat3, cat4, cat5]
    const [images, setImages] = useState(initialImages)

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const files = event.target.files
        if (files !== null) {
            const newImages = Array.from(files).map(file => URL.createObjectURL(file))
            setImages(prevImages => [...prevImages, ...newImages])
        }
    }

    return (
        <div className="bg-base-100 h-screen">
            <Navbar/>
            <div className="h-full flex items-center justify-center">
                <div className="card bg-base-200 shadow-lg">
                    <div className="card-body">
                        <div className="flex justify-between mb-8">
                            <div className="card-title text-3xl">
                                Collection
                            </div>
                            <label
                                className="btn bg-primary"
                                htmlFor="files"
                            >
                                Select Image
                            </label>
                            <input
                                className="hidden"
                                id="files"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-6">
                            {images.map((image, index) =>
                                <div
                                    className="flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                                    key={index}
                                >
                                    <img
                                        className="rounded-2xl"
                                        src={image}
                                        alt="image"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionViewer;
