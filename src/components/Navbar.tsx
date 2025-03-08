function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md w-full">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-3">
      <img src="/src/images/shelf.svg" alt="Logo" style={{ height: '50px', width: '50px' }}/>
      <span className="text-xl font-semibold">Show and Tell</span>
    </div>
    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-200">
      Login
    </button>
  </div>
</nav>
  );
}

export default Navbar;
