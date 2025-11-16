import { FaInstagram, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-amber-50 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        {/* Top: Gallery Name + Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 sm:gap-0 border-b border-gray-300 pb-6 sm:pb-8">
          {/* Gallery Name */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">ArtHouse Gallery</h1>

          {/* Social Icons */}
          <div className="flex space-x-4 sm:space-x-6 text-lg sm:text-xl">
            <FaInstagram className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer" />
            <FaPinterest className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer" />
            <FaLinkedin className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12 text-xs sm:text-sm">
          {/* Exhibitions */}
          <div>
            <h3 className="font-bold mb-4">Exhibitions</h3>
            <ul className="space-y-2">
              {["Upcoming", "Current", "Past", "Virtual"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Artists */}
          <div>
            <h3 className="font-bold mb-4">Artists</h3>
            <ul className="space-y-2">
              {["Featured", "Emerging", "Collaborations", "Submit Work"].map(
                (item) => (
                  <li key={item}>{item}</li>
                )
              )}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              {["Our Story", "Press", "Careers", "Contact"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-bold mb-4">Visit</h3>
            <ul className="space-y-2">
              {["Location", "Hours", "Guided Tours", "Events"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 md:mt-14 text-center text-xs sm:text-sm border-t border-gray-300 pt-6 sm:pt-8 text-black">
          © The MuseHall Gallery {new Date().getFullYear()} | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
