export default function AboutSection() {
  return (
    <section id="section2" className="py-20 bg-muted text-foreground">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-96 md:h-[500px]">
          <img
            src="/home.jpg" // replace with your image
            alt="Makeup Artist"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With years of experience in bridal, editorial, and event makeup, I
            specialize in creating personalized looks that enhance your natural
            beauty. My passion is to bring out confidence in every client,
            ensuring you feel your best on your special day.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether it’s timeless elegance or a modern glam, my goal is to make
            your vision come to life with professional artistry and a touch of
            creativity.
          </p>

          <a
            href="#section3"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
