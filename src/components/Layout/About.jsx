import aboutImg from "../../assets/Images/about.jpg";

function AboutSection() {
  return (
    <section className="py-28 bottom-5 w-full px-6 md:px-16 bg-white " >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image */}
        <img
          src={aboutImg}
          alt="Gallery Exhibit"
          className="rounded-xl shadow-xl object-cover w-full h-full"
        />

        {/* Right Side Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Curating Spaces Filled With Soul & Warmth
          </h2>

          <p className="text-gray-900 mb-8 text-lg leading-relaxed">
            Every artwork in our collection is carefully selected to inspire, evoke emotion, 
            and create a sense of timeless elegance in every space it occupies.
          </p>

          <ul className="space-y-8">
            <li>
              <h3 className="font-semibold text-xl text-gray-900 flex items-center gap-2">
                <span className="text-gray-400 text-2xl">•</span> Curated Valuation Experience
              </h3>
              <p className="text-gray-900">
                Gain insight into each piece's story, history, and significance through thoughtful evaluations.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-xl text-gray-900 flex items-center gap-2">
                <span className="text-gray-400 text-2xl">•</span> Artistic Development & Curation
              </h3>
              <p className="text-gray-900">
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
