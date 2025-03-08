import {ChangeEvent, useState} from 'react';
import Navbar from "./Navbar.tsx";

export interface CollectionProps {
    images: string[];
}

function CollectionViewer(props: CollectionProps) {
    const [images, setImages] = useState(props.images)

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
                <div className="card min-w-1/3 bg-base-200 shadow-lg">
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
