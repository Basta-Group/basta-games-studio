import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const IGameScreen: React.FC = () => {
  const { gameUrl } = useParams();
  const navigate = useNavigate();
  const [gameSrc, setGameSrc] = useState<string>("");

  useEffect(() => {
    if (gameUrl) {
      // If we have a gameUrl parameter, use it
      const decodedUrl = decodeURIComponent(gameUrl);
      localStorage.setItem("currentGameUrl", decodedUrl);
      setGameSrc(decodedUrl);
      // Replace the URL with a clean path
      window.history.replaceState({}, "", "/gamescreen");
    } else {
      // If no gameUrl in params (page refresh), try to get it from localStorage
      const savedGameUrl = localStorage.getItem("currentGameUrl");
      if (savedGameUrl) {
        setGameSrc(savedGameUrl);
      } else {
        // If no saved game URL, redirect to home
        navigate("/");
      }
    }

    // Cleanup function to remove the game URL from localStorage when component unmounts
    return () => {
      localStorage.removeItem("currentGameUrl");
    };
  }, [gameUrl, navigate]);

  if (!gameSrc) {
    return null; // or a loading spinner
  }

  return (
    <div className="w-full h-screen bg-black pt-20">
      <iframe
        src={gameSrc}
        className="w-full h-full border-0"
        title="Game"
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  );
};

export default IGameScreen;
