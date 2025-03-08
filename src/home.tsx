import React from 'react';
import NavBar from "./components/Navbar"

const HomePage = () => {
  // Dummy data for images (Instagram-like posts)
  const images = [
    "https://via.placeholder.com/400x400?text=Image+1",
    "https://via.placeholder.com/400x400?text=Image+2",
    "https://via.placeholder.com/400x400?text=Image+3",
    "https://via.placeholder.com/400x400?text=Image+4",
    "https://via.placeholder.com/400x400?text=Image+5",
    "https://via.placeholder.com/400x400?text=Image+6",
    "https://via.placeholder.com/400x400?text=Image+7",
    "https://via.placeholder.com/400x400?text=Image+8",
    "https://via.placeholder.com/400x400?text=Image+9",
    "https://via.placeholder.com/400x400?text=Image+10",
    "https://via.placeholder.com/400x400?text=Image+11",
    "https://via.placeholder.com/400x400?text=Image+12",
  ];

  return (
    <div className="flex flex-col items-center justify-start">
        <NavBar/>
    <div className="container mx-auto w-full">

      
      {/* Website Description Section */}
      <section className="mb-10">
        <h1 className="text-4xl font-semibold text-center mb-4">Welcome to Show and Tell</h1>
        <p className="text-lg text-center text-gray-700">
          Show and Tell is a platform where you can share your collections and discover amazing things from others. 
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
            <a href="#" className="text-blue-600 hover:underline mt-2 block">Explore Collection</a>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-screen overflow-y-auto p-4">
          {images.map((image, index) => (
            <div key={index} className="flex-none w-full h-72 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={image} alt={`Post ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

    </div>
    </div>
  );
};

export default HomePage;
