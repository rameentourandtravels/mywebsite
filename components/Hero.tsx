'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 md:px-8 text-white max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Discover Heaven on Earth
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-white">
            Explore the beauty of Kashmir with customizable tour packages and local guides.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-10">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold transition">
              Book Your Tour
            </button>
            <button className="border border-white px-6 py-3 rounded-full  font-semibold transition bg-white text-black">
              Explore Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
