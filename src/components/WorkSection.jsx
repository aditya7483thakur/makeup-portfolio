"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";

export default function WorkSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 15 }, // Always 1 slide per view
    renderMode: "performance",
    drag: true,
    created(s) {
      s.moveToIdx(0, true);
    },
    autoplay: true,
  });

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
      <div className="lg:max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8">
        {/* Left: Our Work */}
        <div className="w-full lg:w-1/2 relative space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-primary">
            Our Work
          </h2>

          <a
            href="/portfolio.pdf"
            download
            className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-2xl font-semibold"
          >
            Click here to download portfolio
          </a>

          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/home.jpg"
              alt="Portfolio Cover"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right: Our Services */}
        <div className="lg:w-1/2 relative w-full space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-primary">
            Our Services
          </h2>

          <div
            ref={sliderRef}
            className="keen-slider rounded-2xl shadow-md overflow-hidden"
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="keen-slider__slide flex flex-col items-center justify-center bg-card text-card-foreground"
              >
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={slide.img}
                    alt={slide.name}
                    fill
                    className="object-cover"
                  />
                </div>
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
