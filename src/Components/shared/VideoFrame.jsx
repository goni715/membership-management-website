import { currentAccessToken } from "@/redux/features/auth/authSlice";
import React from "react";
import { useSelector } from "react-redux";

const VideoFrame = ({ video, isYoutube }) => {
  const accessToken = useSelector(currentAccessToken);

  return (
    <div className="bg-[#242424] p-4 rounded-lg cursor-pointer relative shadow-lg transition-all duration-300 hover:scale-105">
      <div className="relative w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
        {/* Video Player */}
        {isYoutube ? (
          <iframe
            width="100%"
            height="100%"
            className="object-cover w-full h-full rounded-lg"
            src={`${video?.url}?token=${accessToken}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <video
            controls
            className="object-cover w-full h-full rounded-lg"
            src={`${video?.url}?token=${accessToken}`} // Use the video URL from backend
            type="video/mp4"
          />
        )}
      </div>

      {/* Video Title */}
      <p className="mt-4 text-xl text-white font-semibold">{video?.title}</p>

      {/* Video Views */}
      <p className="mt-1 text-sm text-[#C6C6C6]">{video?.views} Views</p>
    </div>
  );
};

export default VideoFrame;
