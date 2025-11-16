import aboutImg from "../../assets/Images/about.jpg";

function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-28 w-full px-4 sm:px-6 md:px-12 lg:px-16 bg-white" >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
        
        {/* Left Side Image */}
        <div className="order-2 md:order-1">
          <img
            src={aboutImg}
            alt="Gallery Exhibit"
            className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl object-cover w-full h-64 sm:h-80 md:h-full"
          />
        </div>

        {/* Right Side Text */}
        <div className="order-1 md:order-2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Curating Spaces Filled With Soul & Warmth
          </h2>

          <p className="text-gray-900 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            Every artwork in our collection is carefully selected to inspire, evoke emotion, 
            and create a sense of timeless elegance in every space it occupies.
          </p>

          <ul className="space-y-5 sm:space-y-6 md:space-y-8">
            <li>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 flex items-center gap-2">
                <span className="text-gray-400 text-xl sm:text-2xl flex-shrink-0">•</span> Curated Valuation Experience
              </h3>
              <p className="text-gray-900 text-sm sm:text-base">
                Gain insight into each piece's story, history, and significance through thoughtful evaluations.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 flex items-center gap-2">
                <span className="text-gray-400 text-xl sm:text-2xl flex-shrink-0">•</span> Artistic Development & Curation
              </h3>
              <p className="text-gray-900 text-sm sm:text-base">
                Collaborating with artists to present and refine their work for an elevated, immersive gallery experience.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
