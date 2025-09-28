// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    makeupType: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real submission logic (e.g. Formspree, API route, etc.)
    console.log("Form submitted:", formData);
    alert(
      "Your request has been received. We will contact you back via email."
    );
  };

  return (
    <section className="bg-[var(--muted)] text-[var(--card-foreground)] py-12 px-4">
      <div className="max-w-xl mx-auto bg-[var(--card)] p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-[var(--muted-foreground)]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[var(--border)] p-2 rounded bg-white"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-[var(--muted-foreground)]">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-[var(--border)] p-2 rounded bg-white"
              placeholder="Your Location"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-[var(--muted-foreground)]">
              Makeup Type
            </label>
            <input
              type="text"
              name="makeupType"
              value={formData.makeupType}
              onChange={handleChange}
              className="w-full border border-[var(--border)] p-2 rounded bg-white"
              placeholder="Type of Makeup"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-[var(--muted-foreground)]">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-[var(--border)] p-2 rounded bg-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[var(--primary)] text-white py-2 px-4 rounded hover:bg-[var(--secondary)] transition"
          >
            Send Request
          </button>
        </form>

        <p className="mt-4 text-sm text-[var(--muted-foreground)]">
          We’ll send your details to our email. You’ll receive a confirmation
          email that we’ll contact you back.
        </p>
      </div>
    </section>
  );
}
