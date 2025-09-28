export default function HeroSection() {
  return (
    <section
      id="section1"
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/home.jpg')", // replace with your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-primary drop-shadow-lg">
          Enhance Your Natural Beauty
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
          Bridal • Party • Professional Looks — Crafted with Elegance
        </p>

        <a
          href="#section4"
          className="mt-8 inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
