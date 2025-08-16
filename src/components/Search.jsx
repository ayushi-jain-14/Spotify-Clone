import React, { useState, useContext } from 'react';
import { songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Search = () => {
  const [query, setQuery] = useState('');
  const { playwithId } = useContext(PlayerContext);  // ✅ Get function from context

  const filteredSongs = songsData.filter(song =>
    song.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Search Songs</h1>

      <input
        type="text"
        placeholder="Search for a song..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md p-2 rounded text-black bg-white"
      />

      {/* Show only when query is not empty */}
      {query.trim() && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <div
                key={song.id}
                onClick={() => playwithId(song.id)}  // ✅ Play on click
                className="bg-[#1f1f1f] p-3 rounded shadow-md cursor-pointer hover:bg-[#2a2a2a] transition"
              >
                <img src={song.image} alt={song.name} className="w-full rounded mb-2" />
                <p className="font-semibold">{song.name}</p>
                <p className="text-sm opacity-70">{song.desc?.slice(0, 30)}</p>
              </div>
            ))
          ) : (
            <p>No matching songs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

