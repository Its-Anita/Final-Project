import artwork1 from "../../assets/Images/eternal_bloom.jpeg";
import artwork2 from "../../assets/Images/whispering_shadows.jpeg";
import artwork3 from "../../assets/Images/golden_horizon.jpeg";
import artwork4 from "../../assets/Images/mystic_forest.jpeg";
import artwork5 from "../../assets/Images/silent_echoes.jpeg";
import artwork6 from "../../assets/Images/urban_rhythm.jpeg";
import artwork7 from "../../assets/Images/celestial_dreams.jpeg";
import artwork8 from "../../assets/Images/abstract_serenity.jpeg";

function ArtGallery() {
  const artPieces = [
    { img: artwork1, name: "Eternal Bloom", beforePrice: "$800", price: "$1000" },
    { img: artwork2, name: "Whispering Shadows", beforePrice: "$950", price: "$1200" },
    { img: artwork3, name: "Golden Horizon", beforePrice: "$700", price: "$900" },
    { img: artwork4, name: "Mystic Forest", beforePrice: "$1100", price: "$1400" },
    { img: artwork5, name: "Silent Echoes", beforePrice: "$650", price: "$850" },
    { img: artwork6, name: "Urban Rhythm", beforePrice: "$780", price: "$1000" },
    { img: artwork7, name: "Celestial Dreams", beforePrice: "$1200", price: "$1500" },
    { img: artwork8, name: "Abstract Serenity", beforePrice: "$900", price: "$1100" },
  ];

  return (
    <section id="allfeatures" className="bg-neutral-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 text-center">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
        Featured Artworks
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed">
        Discover curated pieces that inspire, provoke, and transform spaces. Each artwork tells its own unique story.
      </p>

      {/* ArtWorks*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {artPieces.map((art, index) => (
          <div
            key={index}
            className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 p-3 sm:p-4 md:p-5 flex flex-col items-center"
          >
            <img
              src={art.img}
              alt={art.name}
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg sm:rounded-xl mb-3 sm:mb-4"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
              {art.name}
            </h3>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <span className="text-gray-800 font-bold">{art.price}</span>
              <span className="text-gray-400 line-through">{art.beforePrice}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ArtGallery;
