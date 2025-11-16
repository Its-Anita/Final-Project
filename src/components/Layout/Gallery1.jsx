import bestImage from "../../assets/Images/newin4.jpeg";

function Gallery1() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6 md:space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
          A Curated Masterpiece for Your Space
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-stone-600 max-w-md mx-auto md:mx-0 leading-relaxed">
          Each artwork in our collection is thoughtfully selected for its depth,
          emotion, and timeless elegance. From bold contemporary pieces to soft,
          atmospheric portraits we help you find the perfect statement for
          your home or gallery.
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={bestImage}
          alt="Art Piece Showcase"
          className="rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg object-cover h-56 sm:h-72 md:h-96"
        />
      </div>

    </section>
  );
}

export default Gallery1;
