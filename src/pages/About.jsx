import { Link } from "react-router-dom";

function About() {
  return (
    <div className="pt-[100px] px-6 md:px-20 text-white bg-black space-y-24 pb-20">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">
          ChillMe - Endless Entertainment
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          ChillMe is more than just a movie streaming platform — it’s a
          cinematic journey tailored for you. From blockbusters to hidden gems,
          we bring stories that move you.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold text-red-500 mb-6 text-center">
          Why Choose ChillMe?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Unlimited Streaming",
              desc: "Watch movies in HD with no limits, ads, or interruptions.",
            },
            {
              title: "Daily Updated Library",
              desc: "We refresh our catalog every day with new and trending titles.",
            },
            {
              title: "Smart Search & AI Recommendations",
              desc: "Find what you love fast with intelligent search and personalized suggestions.",
            },
            {
              title: "Cross-Device Experience",
              desc: "Enjoy your movies on phone, tablet, TV, or PC — wherever, whenever.",
            },
            {
              title: "Multi-language Support",
              desc: "Experience movies with subtitles or dubbing in multiple languages.",
            },
            {
              title: "Community Ratings",
              desc: "Make better choices with real user reviews and star ratings.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-red-700 transition"
            >
              <h3 className="text-xl font-semibold text-red-400 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-red-500">Our Story</h2>
        <p className="text-gray-300 max-w-4xl mx-auto leading-7">
          Born from a passion for film and technology, ChillMe was founded in
          2024 with one vision — to redefine how people experience cinema. We
          noticed a gap: streaming platforms either lacked content,
          personalization, or accessibility. So we built ChillMe: a smart,
          seamless, beautiful experience made by movie lovers, for movie lovers.
        </p>
        <p className="text-gray-400 italic">
          “Great movies deserve great experiences.”
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-red-500 mb-4">
            🎯 Our Mission
          </h3>
          <p className="text-gray-300 leading-7">
            We aim to democratize entertainment. Everyone, everywhere deserves
            access to top-quality cinema, without barriers. Whether you're in a
            big city or rural village, ChillMe brings the red carpet to your
            screen.
          </p>
        </div>
        <div className="bg-gray-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-red-500 mb-4">
            🌍 Our Vision
          </h3>
          <p className="text-gray-300 leading-7">
            To become the most loved entertainment brand in the world, known not
            just for content, but for culture, creativity, and community.
          </p>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-bold text-red-500 text-center mb-10">
          Meet the Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Ha", "Hoang", "Vy"].map((name, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition"
            >
              <div className="w-24 h-24 mx-auto bg-gray-700 rounded-full mb-4"></div>
              <h4 className="text-lg font-semibold text-red-400">{name}</h4>
              <p className="text-sm text-gray-400">Frontend Developer</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold text-red-500 text-center mb-10">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              name: "Mai",
              feedback:
                "ChillMe changed how I enjoy movies! The interface is smooth and intuitive.",
            },
            {
              name: "John",
              feedback:
                "I canceled Netflix. ChillMe gives me exactly what I want — fast and personalized.",
            },
            {
              name: "An",
              feedback:
                "Tôi cực kỳ thích tính năng đề xuất phim, chính xác đến bất ngờ!",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700"
            >
              <p className="italic text-gray-300 mb-3">“{t.feedback}”</p>
              <h4 className="text-red-400 font-semibold text-sm">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-10">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Chill?</h2>
        <p className="text-gray-400 mb-6">
          Join thousands of movie lovers who stream smarter with ChillMe.
        </p>
        <Link
          to="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium transition"
        >
          Explore Now
        </Link>
      </section>
    </div>
  );
}

export default About;
