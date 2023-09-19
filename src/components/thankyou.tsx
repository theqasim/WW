"use client";

import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

function Thankyou() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Plyr(videoRef.current);

      // Cleanup the player on component unmount
      return () => {
        player.destroy();
      };
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center md:w-3/4 sm:w-4/4">
      <h2 className="text-3xl mt-4 font-bold text-center mb-6">
        Thank you for joining, your exclusive invite is below, along with a
        video from me to you 👇
      </h2>
      <video ref={videoRef} controls className="w-full">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Thankyou;
