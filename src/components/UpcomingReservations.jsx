import React from 'react';
import { CalendarDays, Clock, Users } from 'lucide-react';

const reservations = [
  { id: 1, venueName: "The Grand Cafe", date: "2024-08-15", time: "19:00", partySize: 2, status: "Confirmed" },
  { id: 2, venueName: "Ocean's Breeze", date: "2024-08-22", time: "20:30", partySize: 4, status: "Confirmed" },
  { id: 3, venueName: "The Rooftop Grill", date: "2024-09-01", time: "18:00", partySize: 5, status: "Pending" },
];

const UpcomingReservations = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-white mb-10 tracking-tight">
        🎉 Upcoming Reservations
      </h2>

      <div className="space-y-8">
        {reservations.map((res, index) => (
          <div
            key={res.id}
            className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
            style={{ animation: `fadeInUp 0.5s ease ${index * 0.1}s forwards`, opacity: 0 }}
          >
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{res.venueName}</h3>

                <div className="space-y-2 text-sm text-gray-300">
                  <p className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-blue-400" />
                    {new Date(res.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    {res.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-400" />
                    Party Size: {res.partySize}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-3">
                <span
                  className={`px-4 py-1 text-xs font-semibold rounded-full w-fit transition-all duration-300 ${
                    res.status === "Confirmed"
                      ? "bg-emerald-600/90 text-white"
                      : "bg-yellow-500/80 text-white"
                  }`}
                >
                  {res.status}
                </span>
                <button
                  onClick={() => console.log("Cancel reservation:", res.id)}
                  className="px-5 py-2 rounded-full text-sm font-medium border border-red-500 text-red-400 bg-red-400/10 hover:bg-red-500 hover:text-white transition-all duration-300 hover:shadow-md hover:scale-[1.03]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal fadeInUp animation keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default UpcomingReservations;
