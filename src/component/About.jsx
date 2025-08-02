import React from "react";

export default function About() {
  return (
    <>
 
    <div className="bg-black text-white min-h-screen pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About PixelFusion
        </h1>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          PixelFusion is a next-gen platform dedicated to bringing pixel-perfect
          designs, lightning-fast development, and aesthetic storytelling into
          the digital world. We blend creativity with technology to deliver
          bold, expressive user experiences.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">💡 Our Vision</h2>
        <p className="text-gray-400 mb-6 leading-relaxed">
          We envision a future where design is not just visual but emotional —
          where each line of code tells a story, each interaction sparks
          curiosity, and each product becomes unforgettable.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-10">🚀 What We Do</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>⚙️ Frontend engineering with React & motion libraries</li>
          <li>🎨 UI/UX design focused on storytelling & usability</li>
          <li>🌐 Building responsive and accessible web platforms</li>
          <li>🧠 Experimenting with AI & futuristic UI ideas</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-10">📍 Based In</h2>
        <p className="text-gray-400 leading-relaxed">
          Mumbai, India — but our energy & ambition is global. 🌍
        </p>
      </div>
    </div>
        </>
  );
}
