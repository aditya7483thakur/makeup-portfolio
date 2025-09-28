"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    makeupType: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Your request has been received. We will contact you soon!");
        setFormData({
          name: "",
          location: "",
          makeupType: "",
          email: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send request.");
    }
  };

  return (
    <section
      className="bg-[var(--muted)] text-[var(--card-foreground)] py-12 px-4"
      id="section4"
    >
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
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[var(--border)] p-2 rounded bg-white"
              placeholder="Your Email"
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
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-[var(--border)] p-2 rounded bg-white"
              placeholder="Write your message..."
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
