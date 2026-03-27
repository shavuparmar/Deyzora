import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 90999 99999",
    href: "https://wa.me/919099999999",
    accent: "#25d366",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@deyzora.com",
    href: "mailto:hello@deyzora.com",
    accent: "#a855f7",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Surat, Gujarat, India",
    href: null,
    accent: "#f97316",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90999 99999",
    href: "tel:+919099999999",
    accent: "#06b6d4",
  },
];

const services = [
  "Web Development",
  "Chatbot Solution",
  "Booking System",
  "Custom Software",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwrT4v2lzfaY-QvbuDmdRRp7e7CxusIYNsbiH1198NqX_8HuaYtkOb3x1ivNcsSxiGgOg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(form),
        },
      );

      const data = await res.json();

      if (data.status === "success") {
        setSubmitted(true);
        setForm({ name: "", email: "", service: "", budget: "", message: "" });

        setTimeout(() => setSubmitted(false), 4000);
      } else {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
      setError("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      {/* BG Effects */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6,182,212,0.25), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.06), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="section-tag mx-auto mb-6 w-fit">Get In Touch</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Let's build something{" "}
            <span className="text-gradient">incredible</span>
          </h2>
          <p className="text-white/40 text-lg">
            Have a project in mind? We'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-white text-xl mb-6">Contact Details</h3>

              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="flex items-center gap-4 mb-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-xl"
                      style={{ background: `${info.accent}20` }}
                    >
                      <Icon size={18} style={{ color: info.accent }} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">{info.label}</p>
                      <p className="text-white/80 text-sm">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-green-500/20">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-white text-xl mb-2">
                    Message Sent Successfully 🎉
                  </h3>
                  <p className="text-white/40 text-sm">
                    We’ll get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none transition"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none transition"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white bg-[#0a0a0f] border border-white/10 focus:outline-none focus:border-purple-500 transition appearance-none"
                    >
                      <option
                        value=""
                        style={{ background: "#0a0a0f", color: "#aaa" }}
                      >
                        Select Service
                      </option>

                      {services.map((s) => (
                        <option
                          key={s}
                          value={s}
                          style={{ background: "#0a0a0f", color: "#fff" }}
                        >
                          {s}
                        </option>
                      ))}
                    </select>

                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white/70 focus:outline-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <option style={{ background: "#0a0a0f", color: "#aaa" }}>
                        Select Budget
                      </option>
                      <option style={{ background: "#0a0a0f", color: "#fff" }}>
                        Under ₹10k
                      </option>
                      <option style={{ background: "#0a0a0f", color: "#fff" }}>
                        ₹10k - ₹25k
                      </option>
                      <option style={{ background: "#0a0a0f", color: "#fff" }}>
                        ₹25k - ₹60k
                      </option>
                      <option style={{ background: "#0a0a0f", color: "#fff" }}>
                        ₹60k+
                      </option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-white py-4 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </motion.button>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
