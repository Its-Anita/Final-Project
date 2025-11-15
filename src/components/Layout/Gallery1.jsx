import bestImage from "../../assets/Images/newin4.jpeg";

function Gallery1() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
      
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
          A Curated Masterpiece for Your Space
        </h2>

        <p className="text-stone-600 max-w-md mx-auto md:mx-0 text-lg">
          Each artwork in our collection is thoughtfully selected for its depth,
          emotion, and timeless elegance. From bold contemporary pieces to soft,
          atmospheric portraits we help you find the perfect statement for
          your home or gallery.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={bestImage}
          alt="Art Piece Showcase"
          className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg object-cover h-96"
        />
      </div>

    </section>
  );
}

export default Gallery1;
