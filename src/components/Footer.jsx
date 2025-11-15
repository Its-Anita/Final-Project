function Footer() {
  return (
    <footer className="w-full bg-amber-77 text-stone-300 py-20 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Brand */}
        <h2 className="text-3xl font-extrabold text-amber-100 tracking-wide">
          The MuseHall
        </h2>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 w-full">

          {/* Gallery */}
          <div>
            <h4 className="font-semibold text-amber-200 mb-4 uppercase tracking-wide text-sm">
              Gallery
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="hover:text-amber-300 transition">Current Exhibitions</li>
              <li className="hover:text-amber-300 transition">Permanent Collection</li>
              <li className="hover:text-amber-300 transition">Featured Artists</li>
              <li className="hover:text-amber-300 transition">New Arrivals</li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-amber-200 mb-4 uppercase tracking-wide text-sm">
              Programs
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="hover:text-amber-300 transition">Art Workshops</li>
              <li className="hover:text-amber-300 transition">Artist Talks</li>
              <li className="hover:text-amber-300 transition">Guided Tours</li>
              <li className="hover:text-amber-300 transition">Special Events</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-amber-200 mb-4 uppercase tracking-wide text-sm">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="hover:text-amber-300 transition">Visitor Information</li>
              <li className="hover:text-amber-300 transition">Membership</li>
              <li className="hover:text-amber-300 transition">Gallery Blog</li>
              <li className="hover:text-amber-300 transition">Press Releases</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-amber-200 mb-4 uppercase tracking-wide text-sm">
              About
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="hover:text-amber-300 transition">Our Story</li>
              <li className="hover:text-amber-300 transition">Mission & Vision</li>
              <li className="hover:text-amber-300 transition">Team</li>
              <li className="hover:text-amber-300 transition">Careers</li>
            </ul>
          </div>

          {/* For Collectors */}
          <div>
            <h4 className="font-semibold text-amber-200 mb-4 uppercase tracking-wide text-sm">
              For Collectors
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li className="hover:text-amber-300 transition">Private Viewings</li>
              <li className="hover:text-amber-300 transition">Acquisitions</li>
              <li className="hover:text-amber-300 transition">Corporate Collections</li>
              <li className="hover:text-amber-300 transition">Art Consultation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <p className="text-center text-xs text-stone-500 mt-16">
        © The MuseHall 2025. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
