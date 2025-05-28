import React, { useEffect, useState } from "react";

const Matchmaking = () => {
  const [status, setStatus] = useState("Finding an opponent...");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus("Opponent Found! Preparing match...");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="MatchingUI" className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-lg p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-white mb-4 text-center">
          Matchmaking
        </h2>

        {/* Status */}
        <div className="bg-white/10 text-2xl font-medium text-white p-4 rounded-lg shadow-md text-center animate-pulse">
          {status}
        </div>

        {/* Loading Animation */}
        <div className="mt-4 flex justify-center">
          <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        </div>

        {/* Cancel Button */}
        <button className="text-2xl mt-6 w-full bg-rebeccapurple hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all shadow-md">
          Cancel Matchmaking
        </button>
      </div>
    </div>
  );
};

export default Matchmaking;
