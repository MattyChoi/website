import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeCodeForToken } from "../api/spotify";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      exchangeCodeForToken(code)
        .then((token) => {
          sessionStorage.setItem("spotify_token", token);
          navigate("/spotify-match");
        })
        .catch(() => navigate("/spotify-match"));
    } else {
      navigate("/spotify-match");
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <p className="text-slate-500 dark:text-slate-400 text-sm animate-pulse">
        Connecting to Spotify...
      </p>
    </div>
  );
}