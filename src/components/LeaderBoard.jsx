import React from "react";

const Leaderboard = () => {
  const players = [
    { id: 1, name: "username", userId: "#12345", country: "USA", state: "CA", city: "LA", rating: "2400" },
    { id: 2, name: "username", userId: "#67890", country: "UK", state: "LDN", city: "London", rating: "2350" },
    { id: 3, name: "username", userId: "#54321", country: "India", state: "MH", city: "Mumbai", rating: "2300" },
  ];

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-4xl p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
      <h1 id="color" className="text-5xl font-bold text-rebeccapurple text-center mb-6">
          LEADERBOARD
        </h1>
        {/* Profile & Title */}
        <div id="MatchingUI" className="flex justify-between items-center mb-4 p-4 rounded-lg bg-white/10">
          <div>
            <h2 className="text-white text-3xl font-semibold">Rocko Shely</h2>
            <p className="text-gray-300 text-sm">#21345</p>
          </div>
          <h2 className="text-white text-lg font-semibold">Country Ranking <span className="text-gray-300">248</span></h2>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white/10 p-4 rounded-lg">
          <div id="MatchingUI" className="text-2xl grid grid-cols-5 text-gray-300 font-semibold border-b border-white/20 pb-2">
            <span>#</span>
            <span>Username</span>
            <span>Country</span>
            <span>City</span>
            <span>Rating</span>
          </div>

          {players.map((player) => (
            <div key={player.id} className="grid grid-cols-5 items-center text-white py-3 border-b border-white/10">
              <span>{player.id}</span>
              <span>{player.name}</span>
              <span>{player.country}</span>
              <span>{player.city}</span>
              <span>{player.rating}</span>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Leaderboard;
