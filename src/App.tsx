import {ChangeEvent, useState} from "react"
import cat1 from "./assets/cat1.jpg"
import cat2 from "./assets/cat2.jpg"
import cat3 from "./assets/cat3.jpg"
import cat4 from "./assets/cat4.jpg"
import cat5 from "./assets/cat5.jpg"
import "./App.css"

function App() {
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
        <div className="rounded-2xl bg-blue-500 p-6">
            <div className="flex justify-between mb-8">
                <div className="flex items-center justify-center text-3xl">
                    Collection
                </div>
                <div className="flex items-center justify-center">
                    <label
                        className="rounded-2xl bg-gray-700 transition duration-200 hover:bg-gray-800 p-3"
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
            </div>
            <div className="grid grid-cols-4 gap-6">
                {images.map((image, index) =>
                    <div
                        className="flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        key={index}
                    >
                        <img src={image} alt="image"/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
