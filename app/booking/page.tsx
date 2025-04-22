import WhatsAppButton from "@/components/WhatsAppButton";
import React from "react";
import { FaHotel, FaTags, FaSuitcaseRolling } from "react-icons/fa";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center p-4 mt-20">
      <WhatsAppButton/>
      <div className="max-w-6xl w-full bg-gray-100 shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left: Booking Form */}
        <form
          action="https://formsubmit.co/rameentourtravels@gmail.com" 
          method="POST"
          className="p-8 space-y-6 bg-white"
        >
          <h2 className="text-3xl font-bold text-black">Book Your Tour</h2>
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-black">Contact Number</label>
            <input
              type="tel"
              name="contact"
              required
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              rows={4}
              required
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* FormSubmit Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://www.rameentourandtravels.com"
          />

          <button

            type="submit"
            className="bg-black text-white text-white font-semibold py-2 px-6 rounded  transition"
          >
            Submit
          </button>
        </form>

        {/* Right: Contact Section */}
        <div className="bg-primary text-white flex flex-col gap-4 p-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-black">Contact Us</h2>
            <p className="mb-4">
              📍 <strong>Location:</strong> Srinagar, Jammu & Kashmir
            </p>
            <p className="mb-4">
              📞 <strong>Phone:</strong> +91-8492976434, +91-7006224095
            </p>
            <p className="mb-4">
              ✉️ <strong>Email:</strong> rameentourtravels@gmail.com
            </p>
         
          </div>

          {/* Bottom Highlights */}
          <div className=" space-y-3">
            <div className="flex items-center gap-3">
              <FaSuitcaseRolling className="text-xl" color="black" />
              <p>Customizable Travel Packages</p>
            </div>
            <div className="flex items-center gap-3" >
              <FaTags className="text-xl" color="black" />
              <p>Best Price Guarantee</p>
            </div>
            <div className="flex items-center gap-3" >
              <FaHotel className="text-xl"  color="black"/>
              <p>All Type of Hotels Available</p>
            </div>
            <p>
              We are here to make your journey smooth & memorable.
              Reach out for custom tours or hotel bookings!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
