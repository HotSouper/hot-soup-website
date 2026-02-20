"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const interests = [
  "Product Management",
  "Coaching",
  "Rapid Builds",
  "General Enquiry",
];

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
    subscribe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, construct mailto link with form data
    const subject = encodeURIComponent(`Hot Soup Enquiry: ${formData.interest || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nInterested in: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hello@hotsoup.agency?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Let&apos;s cook something up
          </h2>
          <p className="text-xl text-muted mb-10 text-center">
            Ready to embrace AI and ship products that matter?
            Get in touch and let&apos;s talk about what you&apos;re building.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
            </div>

            {/* Interest dropdown */}
            <div>
              <label htmlFor="interest" className="block text-sm font-medium mb-2">
                I&apos;m interested in <span className="text-accent">*</span>
              </label>
              <select
                id="interest"
                required
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select an option</option>
                {interests.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
              />
            </div>

            {/* Subscribe checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="subscribe"
                checked={formData.subscribe}
                onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                className="w-4 h-4 accent-accent"
              />
              <label htmlFor="subscribe" className="text-sm text-muted">
                Sign up for news and updates
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors text-lg"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
