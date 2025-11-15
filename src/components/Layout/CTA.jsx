import ctaBg from "../../assets/Images/cta.jpg";

function CTA() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side Empty */}
        <div className="md:w-1/2 hidden md:block"></div>

        {/* Right Side Text */}
        <div className="md:w-1/2 text-left text-gray-900">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm">
            Become a Patron of the Arts
          </h2>

          <p className="mt-6 text-lg text-white leading-relaxed">
            Join our exclusive circle to access new exhibitions, artist previews, 
            and limited edition releases. Immerse yourself in creativity curated 
            for true art enthusiasts.
          </p>

          {/* Input + Button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none w-full sm:w-72 text-gray-900 focus:outline-semibold focus:ring-2 focus:ring-[#C6A675]"
            />
            <button
              className="bg-gradient-to-r from-[#7b5e3b] to-[#C6A675]
                         px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none
                         font-semibold text-black transition-all duration-200
                         hover:from-[#6a5134] hover:to-[#b89f5b] hover:shadow-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
