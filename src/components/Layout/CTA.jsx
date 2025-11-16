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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
        
        {/* Left Side Empty */}
        <div className="md:w-1/2 hidden md:block"></div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/2 text-center md:text-left text-gray-900">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md leading-tight">
            Become a Patron of the Arts
          </h2>

          <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-white leading-relaxed">
            Join our exclusive circle to access new exhibitions, artist previews, 
            and limited edition releases. Immerse yourself in creativity curated 
            for true art enthusiasts.
          </p>

          {/* Input + Button */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none w-full sm:flex-1 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C6A675]"
            />
            <button
              className="bg-gradient-to-r from-[#7b5e3b] to-[#C6A675]
                         px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-none sm:rounded-r-lg font-semibold text-white transition-all duration-200
                         hover:from-[#6a5134] hover:to-[#b89f5b] hover:shadow-md active:scale-95"
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
