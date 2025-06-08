import { useNavigate } from "react-router-dom";
import "@/App.css";

export default function Index() {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-4 font-sans text-[#1e1e2f]">
      <div className="max-w-md mx-auto"> {/* ✅ Responsive container starts */}
        {/* VJIT Logo */}
        <div className="text-center mb-4">
          <img
            src="/vjit-logo.png"
            alt="VJIT Logo"
            className="mx-auto h-16"
          />
        </div>

        {/* Greeting Box */}
        <div className="bg-white border border-gray-200 rounded-xl shadow p-4 mb-4">
          <h2 className="text-md font-semibold">Hi Katakam Sri Pranav,</h2>
          <p className="text-sm text-gray-500">Good Evening, {currentDate}</p>
          <div className="text-right text-sm text-blue-600 font-medium mt-2 cursor-pointer">
            Schedule &gt;
          </div>
        </div>

        {/* Action Centre */}
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 mt-4">
          Action Centre
        </h3>
        <div
          onClick={() => navigate("/attendance")}
          className="bg-[#1e1e2f] rounded-xl p-4 flex justify-between items-center text-white mb-4 cursor-pointer hover:opacity-90 transition"
        >
          <div className="flex items-center gap-3">
            <img
              src="/evaluate-icon.png"
              alt="Evaluate Icon"
              className="w-8 h-8"
            />
            <span className="text-sm font-medium">Evaluate My Attendance</span>
          </div>
        </div>

        {/* Essentials Section */}
        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
          Essentials
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Attendance */}
          <div className="bg-[#e6f4e6] rounded-xl p-4 text-sm text-gray-700">
            <p className="font-medium mb-1">Attendance</p>
            <p className="text-xl text-green-700 font-bold">61.70%</p>
            <p className="text-xs text-gray-500 mt-1">
              As on Jun 08, 16:06 PM
            </p>
          </div>

          {/* Fee Payments */}
          <div className="bg-[#ffe6e6] rounded-xl p-4 text-sm text-gray-700">
            <p className="font-medium mb-1">Fee Payments</p>
            <p className="text-xl text-red-600 font-bold">INR 0.00</p>
            <p className="text-xs text-gray-500 mt-1">
              As on Jun 08, 16:07 PM
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-8">
          Welcome to <strong>Attend Up</strong>
        </div>
      </div> {/* ✅ Responsive container ends */}
    </div>
  );
}
