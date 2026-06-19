import { useState, useEffect } from "react";
import { loginWithSpotify } from "../api/spotify";

const API_URl = import.meta.env.VITE_API_URL;

type Score = {
  track_similarity: number;
  artist_similarity: number;
  overall: number;
};

export default function SpotifyMatch() {
  const [token, setToken] = useState<string | null>(null);
  const [score, setScore] = useState<Score | null>(null);
  const [loading, setLoading] = useState(false);

  // Replace the useEffect that reads the token with this:
  useEffect(() => {
    const t = sessionStorage.getItem("spotify_token");
    if (t) {
      setToken(t);
      sessionStorage.removeItem("spotify_token");
    }
  }, []);

  async function fetchSimilarity() {
    if (!token) return;
    setLoading(true);
    const res = await fetch(API_URl + "/api/spotify/similarity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_token: token }),
    });
    const data = await res.json();
    setScore(data);
    setLoading(false);
  }

  return (
    <section className="min-h-[calc(100vh-73px)] bg-white dark:bg-slate-900 transition-colors duration-300 py-24">
      <div className="max-w-2xl mx-auto px-6 space-y-10">

        {/* Header */}
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full
            bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Spotify
          </span>
          <h2 className="text-5xl font-bold tracking-tight
            text-slate-800 dark:text-slate-100">
            Music Match
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            See how similar your Spotify taste is to Matthew's.
          </p>
        </div>

        {/* Action */}
        {!token ? (
          <button 
            onClick={() => loginWithSpotify()}
            className="px-6 py-3 rounded-full text-sm font-medium
              bg-emerald-500 text-white hover:bg-emerald-400
              transition-colors duration-300"
          >
            Connect with Spotify
          </button>
        ) : !score ? (
          <button
            onClick={fetchSimilarity}
            disabled={loading}
            className="px-6 py-3 rounded-full text-sm font-medium
              bg-slate-800 text-white hover:bg-slate-700
              dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white
              transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? "Calculating..." : "Calculate Match →"}
          </button>
        ) : (
          <div className="space-y-4">
            {/* Overall score */}
            <div className="p-8 rounded-2xl border text-center space-y-2
              bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500">Overall Match</p>
              <p className="text-7xl font-bold text-slate-800 dark:text-slate-100">
                {score.overall}
                <span className="text-3xl text-slate-400">%</span>
              </p>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Track Similarity", value: score.track_similarity },
                { label: "Artist Similarity", value: score.artist_similarity },
              ].map(({ label, value }) => (
                <div key={label} className="p-5 rounded-2xl border text-center space-y-1
                  bg-white border-slate-200 dark:bg-slate-800/50 dark:border-slate-700">
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500">{label}</p>
                  <p className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                    {value}<span className="text-lg text-slate-400">%</span>
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => { setScore(null); setToken(null); }}
              className="text-sm font-medium text-slate-400 hover:text-slate-600
                dark:hover:text-slate-200 transition-colors duration-300"
            >
              ← Try again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}