import React from "react";
import { FaCheckCircle, FaHotel, FaClock } from "react-icons/fa";

export default function Page() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">🏨 Hotel Category & ⏳ Tour Duration Notes</h1>
          <p className="text-lg text-gray-600">Transparency you can trust — Know everything before you book with Rameen Tour & Travels</p>
        </div>

        {/* Hotel Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaHotel className="text-primary" /> Hotel Accommodation</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>We offer a wide range of <strong>2-star, 3-star, and 4-star hotels</strong> based on your preference and availability.</li>
            <li>Hotels are selected to ensure <strong>comfort, cleanliness, and convenience</strong> at each destination.</li>
            <li>Houseboat stays in Srinagar are available in <strong>Standard, Deluxe, and Premium</strong> categories.</li>
          </ul>
        </div>

        {/* Duration Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><FaClock className="text-primary" /> Duration Flexibility</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Standard package duration is <strong>6 Nights / 7 Days</strong>.</li>
            <li>If the duration exceeds 7 days, <strong>additional charges</strong> will apply based on extra nights and services.</li>
            <li>If the trip is shorter than 7 days, <strong>package cost will be adjusted</strong> accordingly.</li>
            <li><FaCheckCircle className="inline text-green-500 mr-1" /> <strong>Customizable packages</strong> available to match your travel dates & budget.</li>
          </ul>
        </div>

        {/* Payment Terms */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">💳 Payment Terms</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>50%</strong> advance payment is required to confirm the booking.</li>
            <li>The remaining <strong>50%</strong> must be paid <strong>15 days before arrival</strong>.</li>
          </ul>
        </div>

        {/* Cancellation Policy */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">❌ Cancellation Policy</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>30%</strong> cancellation charge if cancelled <strong>15 days prior</strong> to arrival.</li>
            <li><strong>50%</strong> charge if cancelled <strong>7 days prior</strong> to arrival.</li>
            <li><strong>No refund</strong> if cancelled within <strong>7 days</strong> of arrival.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
