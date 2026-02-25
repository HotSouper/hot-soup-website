"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const interests = [
  "Rapid Build (MVP)",
  "Product Coaching",
  "Embedded Sprints",
  "General Enquiry",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
    subscribe: false,
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formId) {
        throw new Error("Form not configured");
      }
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
          subscribe: formData.subscribe,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          interest: "",
          message: "",
          subscribe: false,
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
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

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-surface border border-accent/30 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
              <p className="text-muted mb-6">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-accent hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "error" && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400">
                {errorMessage}
              </div>
            )}

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
              disabled={status === "submitting"}
              className="w-full px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
