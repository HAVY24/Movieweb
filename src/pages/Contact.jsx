import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We’ll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-[100px] px-6 md:px-20 text-white bg-black pb-24 space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">
          Let’s Talk 👋
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Whether you have feedback, ideas, or just want to say hi — we’re all
          ears. Reach out and let’s start a conversation!
        </p>
      </section>

      {/* Contact Form */}
      <section className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-3xl font-bold text-red-500 mb-6">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full text-lg font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-900 p-8 rounded-xl space-y-6">
          <h3 className="text-xl font-bold text-red-400">📞 Contact Info</h3>
          <p className="text-gray-300">
            Phone:{" "}
            <span className="text-white font-medium">+84 123 456 789</span>
          </p>
          <p className="text-gray-300">
            Email:{" "}
            <span className="text-white font-medium">support@chillme.io</span>
          </p>
          <p className="text-gray-300">
            Hours:{" "}
            <span className="text-white font-medium">Mon - Fri: 9AM - 6PM</span>
          </p>

          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-red-400 font-semibold mb-2">🌍 Headquarters</h4>
            <p className="text-gray-300">123 Chill Street, Hanoi, Vietnam</p>
            <p className="text-gray-300">456 Stream Lane, San Francisco, CA</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-red-500 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              q: "How do I reset my password?",
              a: "Go to the login page, click 'Forgot Password', and follow the instructions sent to your email.",
            },
            {
              q: "Can I watch movies offline?",
              a: "Currently, offline mode is available on our mobile apps. Web download is coming soon!",
            },
            {
              q: "Do you support smart TVs?",
              a: "Yes! ChillMe is compatible with Android TV, Apple TV, and most modern smart TVs.",
            },
            {
              q: "Is there a free trial?",
              a: "Yes! Every new account gets a 7-day free trial with full features.",
            },
          ].map((faq, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white">{faq.q}</h4>
              <p className="text-gray-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          We’d love to hear from you
        </h2>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Your feedback makes ChillMe better. Don’t hesitate to drop us a line —
          we respond within 24 hours!
        </p>
        <a
          href="mailto:support@chillme.io"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          Contact Us Now
        </a>
      </section>
    </div>
  );
}

export default Contact;
