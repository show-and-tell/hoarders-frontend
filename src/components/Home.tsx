import demonSlayer from "../assets/demon-slayer.webp";
import download from "../assets/download.jpg";
import goJoModel from "../assets/go-jo-model.jpg";
import pokemonCard from "../assets/pokemon-card.jpg";
import pokemonCard2 from "../assets/pokemon-card-2.webp";
import stuff from "../assets/stuff.jpg";
import definitiveAndCommemorativ from "../assets/Definitive-and-Commemorativ.png";
import jellycat1 from "../assets/jellycat-1.jpg";
import jellycat2 from "../assets/jellycat-2.webp";
import jellycatAmuseablePainAuChocolat from "../assets/jellycat-amuseable-pain-au-chocolat.jpg";
import amuseSandcastle from "../assets/amusesandcastle.webp";
import NavBar from "./Navbar.tsx"
import {Link} from "react-router";

const HomePage = () => {
    // Dummy data for images (Instagram-like posts)
    const images = [
        {src: demonSlayer, collection: "Anime Model"},
        {src: download, collection: "Anime Model"},
        {src: goJoModel, collection: "Anime Model"},
        {src: pokemonCard, collection: "Pokemon cards"},
        {src: pokemonCard2,collection: "Pokemon cards"},
        {src: stuff, collection: "Toys"},
        {src: definitiveAndCommemorativ, collection: "Stamps"},
        {src: jellycat1, collection: "JellyCat"},
        {src: jellycat2, collection: "JellyCat"},
        {src: jellycatAmuseablePainAuChocolat, collection: "JellyCat"},
        {src: amuseSandcastle, collection: "JellyCat"}, 
    ];

    return (
        <div className="flex flex-col items-center justify-start">
            <NavBar/>
            <div className="container mx-auto w-full">


                {/* Website Description Section */}
                <section className="mb-10">
                    <h1 className="text-4xl font-semibold text-center mb-4">
                        Welcome to Hoarders
                    </h1>
                    <p className="text-lg text-center text-gray-700">
                        Hoarders is a platform where you can share your collections and discover amazing things
                        from others.
                        Explore our recent collections and get inspired by what people are sharing.
                    </p>
                </section>

                {/* Recent Collection Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Recent Collections</h2>
                    <div className="flex justify-center items-center gap-4">
                        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h3 className="text-xl font-semibold">
                                Cats
                            </h3>
                            <p className="text-sm text-gray-600">
                                Cats collection.
                            </p>
                            <Link to="/collection1" className="text-blue-600 hover:underline mt-2 block">
                                Explore Cats
                            </Link>
                        </div>
                        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h3 className="text-xl font-semibold">
                                Dogs
                            </h3>
                            <p className="text-sm text-gray-600">
                                Dogs collection.
                            </p>
                            <Link to="/collection2" className="text-blue-600 hover:underline mt-2 block">
                                Explore Dogs
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Scrollable Grid of Images (Instagram-like feed, scrolling downwards) */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4">Explore the Feed</h2>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-screen overflow-y-auto p-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="group relative flex-none w-full h-72 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                                <img
                                    src={image.src}
                                    alt={`Post ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay with collection name */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10">
                                    <span className="text-white text-xl font-semibold">{image.collection}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
        </div>
    );
};

export default HomePage;
