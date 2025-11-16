import heroBg from "../../assets/Images/heroimg.jpg";

function Header() {
  return (
    <header
      className="relative bg-cover bg-center text-black shadow-lg h-[90vh]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      {/* NAVBAR */}
      <div className="relative w-full flex items-center justify-between py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">The MuseHall</h1>

        <nav>
          <ul className="hidden sm:flex items-end space-x-3 sm:space-x-4 md:space-x-6 text-sm sm:text-base md:text-lg font-medium text-black mt-2">
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
      <div className="relative container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-12 mt-10 sm:mt-16 md:mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 md:mb-6 leading-tight">
          Discover the Soul of Contemporary Art
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 mb-6 sm:mb-8 leading-relaxed">
          Curated masterpieces that inspire, challenge, and captivate a
          sanctuary for art lovers and collectors alike.
        </p>

        <button className="bg-gold-500 hover:bg-gold-600 transition px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base"
        onClick={() => window.location.href = '#allfeatures'}>
          Explore Gallery
        </button>
      </div>

      {/* STATS — positioned at bottom */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-60px] sm:bottom-[-70px] 
                      bg-stone-700 text-black rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl 
                      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 
                      px-4 sm:px-6 md:px-8 py-5 sm:py-6 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] text-center"
      >
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold">15</h3>
          <p className="text-gray-900 text-xs sm:text-sm">Years Curating</p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold">50+</h3>
          <p className="text-gray-900 text-xs sm:text-sm">Featured Artists</p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold">200+</h3>
          <p className="text-gray-900 text-xs sm:text-sm">Exhibitions Held</p>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold">10k+</h3>
          <p className="text-gray-900 text-xs sm:text-sm">Visitors Served</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
