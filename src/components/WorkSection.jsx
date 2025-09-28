"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function WorkSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { name: "Bridal Look", img: "/home.jpg" },
    { name: "Party Glam", img: "/home.jpg" },
    { name: "Editorial Style", img: "/home.jpg" },
    { name: "Everyday Makeup", img: "/home.jpg" },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="section3" className="py-20 bg-background text-foreground">
      <div className="lg:max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8">
        {/* Left: Our Work */}
        <div className="w-full lg:w-1/2 relative space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-primary">
            Our Work
          </h2>

          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96  rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/home.jpg"
              alt="Portfolio Cover"
              fill
              className="object-cover rounded-2xl"
            />
            <a
              href="/portfolio.pdf"
              download
              className="absolute inset-0 flex items-center justify-center text-white text-lg sm:text-2xl font-semibold bg-black/30 hover:bg-black/50 transition-colors duration-300"
            >
              Click here to download portfolio
            </a>
          </div>
        </div>

        {/* Right: Our Services */}
        <div className="lg:w-1/2 relative w-full space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left text-primary">
            Our Services
          </h2>

          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl shadow-md overflow-hidden">
            {/* Carousel Container */}
            <div className="relative w-full h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.img}
                    alt={slide.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-3 text-lg font-semibold">
                    {slide.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full hover:cursor-pointer shadow-lg transition-all duration-200 z-10"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 hover:cursor-pointer rounded-full shadow-lg transition-all duration-200 z-10"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
