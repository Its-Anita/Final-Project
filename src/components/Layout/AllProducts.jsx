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
    <section id="allfeatures" className="bg-neutral-50 py-16 px-6 md:px-16 text-center">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Featured Artworks
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-10">
        Discover curated pieces that inspire, provoke, and transform spaces. Each artwork tells its own unique story.
      </p>

      {/* ArtWorks*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {artPieces.map((art, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 p-4 flex flex-col items-center"
          >
            <img
              src={art.img}
              alt={art.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {art.name}
            </h3>
            <div className="flex items-center gap-2">
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
