import NavBar from "./Navbar.tsx"
import {Link} from "react-router";

const HomePage = () => {
    // Dummy data for images (Instagram-like posts)
    const images = [
        "src/images/demon-slayer.webp",
        "src/images/download.jpg",
        "src/images/go-jo-model.jpg",
        "src/images/pokemon-card-2.webp",
        "src/images/pokemon-card.jpg",
        "src/images/il_570xN.4371318603_pmin.webp",
        "src/images/stuff.jpg",
        "src/images/Definitive-and-Commemorativ.png",
        "src/images/jellycat-1.jpg",
        "src/images/jellycat-2.webp",
        "src/images/jellycat-amuseable-pain-au-chocolat.jpg",
        "src/images/amusesandcastle.webp",
    ];

    return (
        <div className="flex flex-col items-center justify-start">
            <NavBar/>
            <div className="container mx-auto w-full">


                {/* Website Description Section */}
                <section className="mb-10">
                    <h1 className="text-4xl font-semibold text-center mb-4">Welcome to Show and Tell</h1>
                    <p className="text-lg text-center text-gray-700">
                        Show and Tell is a platform where you can share your collections and discover amazing things
                        from others.
                        Explore our recent collections and get inspired by what people are sharing.
                    </p>
                </section>

                {/* Recent Collection Section */}
                <section className="mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Recent Collections</h2>
                    <div className="flex justify-center items-center gap-4">
                        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h3 className="text-xl font-semibold">Collection 1</h3>
                            <p className="text-sm text-gray-600">Description of collection 1.</p>
                            <Link to="/collection" className="text-blue-600 hover:underline mt-2 block">Explore
                                Collection</Link>
                        </div>
                        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <h3 className="text-xl font-semibold">Collection 2</h3>
                            <p className="text-sm text-gray-600">Description of collection 2.</p>
                            <a href="#" className="text-blue-600 hover:underline mt-2 block">Explore Collection</a>
                        </div>
                    </div>
                </section>

                {/* Scrollable Grid of Images (Instagram-like feed, scrolling downwards) */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4">Explore the Feed</h2>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-screen overflow-y-auto p-4">
                        {images.map((image, index) => (
                            <div key={index}
                                 className="flex-none w-full h-72 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                                <img src={image} alt={`Post ${index + 1}`} className="w-full h-full object-cover"/>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default HomePage;
