import React from "react";
import Marquee3D from "../effect/Impmarque";

export default function Contact() {
  const contacts = [
    {
      name: "Karan Sharma",
      role: "Founder & CEO",
      phone: "+91 98765 43210",
      email: "karan@pixlfusion.dev",
      hobbies: "Coding, Gym, Public Speaking",
      location: "Mumbai, India",
      linkedIn: "https://linkedin.com/in/karanpixl",
      imageUrl: "/images/img1.jpg", // Replace with your image URL
    },
    {
      name: "Utssav Mehta",
      role: "Co-Founder & CTO",
      phone: "+91 87654 32109",
      email: "utssav@pixlfusion.dev",
      hobbies: "Design, Music, Debugging",
      location: "Bangalore, India",
      linkedIn: "https://linkedin.com/in/utssav-tech",
      imageUrl: "/images/img2.jpg", // Replace with your image URL
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      {/* Greeting Section */}
      <section className="mb-20 text-center">
        <h1 className="text-6xl font-bold mb-4 text-gradient bg-clip-text text-transparent">
          Welcome to Pixlfusion!
        </h1>
        <p className="text-2xl mb-4 text-gray-400">
          We’re a team of visionary creators and innovators. Meet the people
          behind the magic.
        </p>
        <p className="text-xl text-gray-500">
          We are passionate about tech, creativity, and making an impact through
          cutting-edge solutions.
        </p>
      </section>

      {/* Marquee Effect */}
      <div className="w-full mb-20">
        <Marquee3D />
      </div>

      {/* Meet the Visionaries Section */}
      <section>
        <h2 className="text-5xl font-bold mb-16 text-center tracking-wide">
          ✨ Meet the Visionaries
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="group relative w-full max-w-md bg-zinc-900 rounded-3xl border border-zinc-700 p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#ffffff33]"
            >
              <div className="absolute inset-0 rounded-3xl z-0 bg-gradient-to-br from-white/10 to-white/5 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10 space-y-2">
                <h2 className="text-3xl font-bold contact-name hover:cursor-pointer">
                  {contact.name}
                </h2>

                {/* The image now becomes visible and oval when hovered over the name */}
                <img
                  src={contact.imageUrl}
                  alt={contact.name}
                  className="contact-image absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:w-24 group-hover:h-16 group-hover:rounded-full transition-all duration-500"
                />

                <p className="text-lg text-gray-400">{contact.role}</p>
                <p className="text-md text-gray-300">📱 {contact.phone}</p>
                <p className="text-md text-gray-300">✉️ {contact.email}</p>
                <p className="text-md text-gray-300">
                  🎯 Hobbies: {contact.hobbies}
                </p>
                <p className="text-md text-gray-300">📍 {contact.location}</p>
                <a
                  href={contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 rounded-full border border-white text-sm hover:bg-white hover:text-black transition"
                >
                  🔗 LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-20 text-center text-gray-500">
        <p>© 2025 Pixlfusion. All rights reserved.</p>
      </footer>
    </div>
  );
}
