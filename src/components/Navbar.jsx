"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#section1" },
  { label: "About", href: "#section2" },
  { label: "Work", href: "#section3" },
  { label: "Services", href: "#section3" }, // same section but can scroll down within
  { label: "Contact", href: "#section4" },
];

export default function Navbar() {
  const [active, setActive] = useState("");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + 120; // adjust offset for navbar height

      sections.forEach((section, idx) => {
        if (section instanceof HTMLElement) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(navItems[idx].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="#section1" className="text-xl font-bold text-primary">
          Makeup Portfolio
        </Link>

        {/* Nav Items */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                active === item.href
                  ? "text-primary"
                  : "text-foreground hover:text-secondary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
