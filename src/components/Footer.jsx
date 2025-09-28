// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-[var(--card)] text-[var(--card-foreground)] py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center space-x-6">
        <a href="#" className="hover:text-[var(--accent)] transition">
          Instagram
        </a>
        <a href="#" className="hover:text-[var(--accent)] transition">
          Facebook
        </a>
        <a href="#" className="hover:text-[var(--accent)] transition">
          LinkedIn
        </a>
        <a href="#" className="hover:text-[var(--accent)] transition">
          Twitter
        </a>
      </div>
    </footer>
  );
}
