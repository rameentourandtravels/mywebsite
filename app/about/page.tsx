import React from "react";
import { FaMountain, FaHeart, FaUserFriends } from "react-icons/fa";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Rameen Tour & Travels</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover Kashmir with trusted locals. We design custom journeys — from romantic houseboat stays to thrilling snow adventures.
          </p>
        </div>

        {/* Mission, Vision, Why Us */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <FaMountain className="text-4xl text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>To make Kashmir travel affordable, memorable, and safe for every traveler across India and beyond.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <FaHeart className="text-4xl text-balck mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>To be the #1 trusted travel agency for Kashmir tours with a personal touch and 100% transparency.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <FaUserFriends className="text-4xl text-black mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
            <p>Local expertise, customized packages, honest pricing, and 24/7 support — that’s the Rameen promise.</p>
          </div>
        </div>

        {/* Story or Founder Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/aboutUs.png"
            alt="Kashmir Tour"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-black">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Started with a small team of passionate locals, Rameen Tour & Travels has helped 5000+ travelers explore the breathtaking valleys of Kashmir.
              <br /><br />
              Whether it is a peaceful honeymoon or an adrenaline-packed snow adventure, our mission is to make your dream trip seamless, safe, and spectacular.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
