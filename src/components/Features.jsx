import new1 from "../assets/Images/newin.jpeg";
import new2 from "../assets/Images/newin1.jpeg";
import new3 from "../assets/Images/newin2.jpeg";
import new4 from "../assets/Images/newin3.jpeg";

function Features() {
  return (
    <section className="bg-neutral-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
      
      {/* TEXT */}
      <div className="md:w-1/3 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          New Arrivals in the Gallery
        </h2>

        <p className="text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed">
          Discover our latest curated pieces expressive paintings, modern sculptures,
          and distinctive artworks selected to elevate your space with depth and emotion.
        </p>

        <button className="bg-yellow-600 hover:bg-yellow-700 transition px-8 py-3 rounded-full text-white font-semibold shadow-md">
          Explore New Art
        </button>
      </div>

      {/* IMAGES */}
      <div className="md:w-2/3 mt-12 md:mt-0 flex justify-center items-center gap-4">
        <img
          src={new1}
          alt="New Art 1"
          className="rounded-xl shadow-lg object-cover w-1/4 h-64 border border-neutral-200"
        />
        <img
          src={new2}
          alt="New Art 2"
          className="rounded-xl shadow-lg object-cover w-1/4 h-64 border border-neutral-200"
        />
        <img
          src={new3}
          alt="New Art 3"
          className="rounded-xl shadow-lg object-cover w-1/4 h-64 border border-neutral-200"
        />
        <img
          src={new4}
          alt="New Art 4"
          className="rounded-xl shadow-lg object-cover w-1/4 h-64 border border-neutral-200"
        />
      </div>

    </section>
  );
}

export default Features;
