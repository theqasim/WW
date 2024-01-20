import React from "react";
import Backtolessons from "@/components/backtolessons";

const VideoBlog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-4/5 md:w-2/3 lg:w-1/2 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          The Laziest Way To Make Money Online In 2024 Video Resource{" "}
        </h1>
        <p>
          I breakdown the strategy of a creator on TikTok that has made
          thousands using the stratedgy I cover in the YouTube video.
        </p>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            src="https://www.loom.com/embed/4f553d6ad13d494f87af4f4662ea2c2a?sid=75fa413c-ff33-4950-b8c1-a0de0d948b83"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>

        <div className="text-gray-700 space-y-4">
          <p>With that being said, I wish you the best of luck 🤝</p>
        </div>
        <Backtolessons />
      </div>
    </div>
  );
};

export default VideoBlog;
