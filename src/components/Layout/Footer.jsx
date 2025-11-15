import { FaInstagram, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-stone-700 text-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        {/* Top: Gallery Name + Social Icons */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-6">
          {/* Gallery Name */}
          <h1 className="text-2xl font-bold">ArtHouse Gallery</h1>

          {/* Social Icons */}
          <div className="flex space-x-6 text-xl">
            <FaInstagram className="hover:text-yellow-400 transition-colors duration-300" />
            <FaTwitter className="hover:text-yellow-400 transition-colors duration-300" />
            <FaPinterest className="hover:text-yellow-400 transition-colors duration-300" />
            <FaLinkedin className="hover:text-yellow-400 transition-colors duration-300" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 text-sm">
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
        <div className="mt-10 text-center text-sm border-t border-gray-300 pt-6 text-black">
          © The MuseHall Gallery {new Date().getFullYear()} | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
