"use client";

import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

export default function WorkSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 15 },
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(0, true);
    },
    autoplay: true,
  });

  // Auto slide every 3s
  useEffect(() => {
    if (!instanceRef.current) return;
    const slider = instanceRef.current;
    const interval = setInterval(() => {
      slider.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const slides = [
    { name: "Bridal Look", img: "/home.jpg" },
    { name: "Party Glam", img: "/home.jpg" },
    { name: "Editorial Style", img: "/home.jpg" },
    { name: "Everyday Makeup", img: "/home.jpg" },
  ];

  return (
    <section id="section3" className="py-20 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Portfolio Download */}
        <div className="space-y-6 text-center md:text-left">
          <img
            src="/home.jpg"
            alt="Portfolio Cover"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
          <a
            href="/portfolio.pdf"
            download
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition"
          >
            Download Portfolio
          </a>
        </div>

        {/* Right: Carousel */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="keen-slider rounded-2xl shadow-md overflow-hidden"
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="keen-slider__slide flex flex-col items-center justify-center bg-card text-card-foreground"
              >
                <img
                  src={slide.img}
                  alt={slide.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 text-lg font-semibold text-secondary">
                  {slide.name}
                </div>
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-secondary transition"
          >
            ◀
          </button>

          {/* Next Button */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-secondary transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
