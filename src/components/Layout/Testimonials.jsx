import React, { useState } from "react";

function Testimonial() {
  const testimonials = [
    {
      name: "Alicia M.",
      role: "Art Collector",
      image: "/Alicia.jpg",
      quote:
        "Their curation is flawless each piece feels intentional, soulful, and timeless. Perfect for anyone looking to elevate their home or workspace with fine art.",
    },
    {
      name: "Daniel K.",
      role: "Creative Director",
      image: "../Daniel.jpg",
      quote:
        "The gallery understands visual storytelling on a deeper level. Every artwork feels like a conversation waiting to happen.",
    },
    {
      name: "Martha W.",
      role: "Interior Designer",
      image: "/Martha.jpg",
      quote:
        "I source pieces for my premium clients here. The versatility, mood, and emotional depth are unmatched.",
    },
    {
      name: "Leo S.",
      role: "Digital Artist",
      image: "/Leo.jpg",
      quote:
        "As an artist, I appreciate how respectfully and beautifully my work is displayed. They care about both creators and collectors.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const t = testimonials[index];

  return (
    <section className="w-full bg-neutral-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
          What People Are Saying About Us
        </h2>

        {/* Client */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 transition-all">
          <img
            src={t.image}
            alt={t.name}
            className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900">{t.name}</h3>
            <p className="text-gray-500 text-xs sm:text-sm">{t.role}</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-lg">
          “{t.quote}”
        </p>

        {/* Arrows */}
        <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={prev}
            className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition text-lg sm:text-xl"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition text-lg sm:text-xl"
          >
            →
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <img
          src="/Images/Gallery room.jpg"
          alt="gallery room"
          className="rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Testimonial;
