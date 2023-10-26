"use client";

import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

function Thankyou() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Plyr(videoRef.current);

      return () => {
        player.destroy();
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:w-3/4 w-4/4">
      <h2 className="text-3xl mt-4 font-bold text-center mb-6">
        Thank you for joining, your exclusive invite is below, along with a
        video from me to you 👇
      </h2>
      <video ref={videoRef} controls className="w-full">
        <source
          src="https://www.dropbox.com/scl/fi/zhz5f16g19vqekhwuxgcg/WW-Join-Video.mp4?rlkey=asw9hv56k85rq7zs27sjkk9pw&dl=1"
          type="video/mp4"
          className=" "
        />
        Your browser does not support the video tag.
      </video>
      <a
        href="https://discord.gg/ENHePPhAF"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 p-3 border rounded-lg flex items-center space-x-4 bg-[#7289da] text-white hover:bg-[#677ac3] transition-colors duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      >
        <img
          src="/resources/logo.png"
          alt="Discord Logo"
          className="w-12 h-12 rounded-lg"
        />
        <div className="flex flex-col items-center">
          <h3 className="text-xl">Join Web Wealth 🤝</h3>
        </div>
      </a>
    </div>
  );
}

export default Thankyou;
