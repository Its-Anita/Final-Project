import heroBg from "../../assets/Images/heroimg.jpg";

function Header() {
  return (
    <header
      className="relative bg-cover bg-center text-black shadow-lg h-[90vh]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      {/* NAVBAR */}
      <div className="relative w-full flex items-center justify-between py-16 px-8">
        <h1 className="text-2xl font-bold tracking-tight">The MuseHall</h1>

        <nav>
          <ul className="flex items-end space-x-4 text-lg font-medium text-black mt-2">
            <li className="hover:text-yellow transition-colors cursor-pointer">
               Home
            </li>
            <li className="hover:text-yellow transition-colors cursor-pointer">
              Exhibitions
            </li>
            <li className="hover:text-yellow transition-colors cursor-pointer">
              Artists
            </li>
            <li className="hover:text-yellow transition-colors cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      </div>

      {/* HERO SECTION */}
      <div className="relative container mx-auto text-center px-8 mt-20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Discover the Soul of Contemporary Art
        </h2>

        <p className="max-w-2xl mx-auto text-xl text-gray-900 mb-6">
          Curated masterpieces that inspire, challenge, and captivate a
          sanctuary for art lovers and collectors alike.
        </p>

        <button className="bg-gold-500 hover:bg-gold-600 transition px-10 py-3 rounded-full text-white font-semibold"
        onClick={() => window.location.href = '#allfeatures'}>
          Explore Gallery
        </button>
      </div>

      {/* STATS — positioned at bottom */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] 
                      bg-stone-700 text-black rounded-xl shadow-xl 
                      grid grid-cols-3 md:grid-cols-4 gap-6 
                      px-8 py-6 w-[85%] md:w-[60%] text-center"
      >
        <div>
          <h3 className="text-3xl font-bold">15</h3>
          <p className="text-gray-900 text-sm">Years Curating</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-gray-900 text-sm">Featured Artists</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">200+</h3>
          <p className="text-gray-900 text-sm">Exhibitions Held</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">10k+</h3>
          <p className="text-gray-900 text-sm">Visitors Served</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
