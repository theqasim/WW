import React from "react";
import Backtolessons from "@/components/backtolessons";

const VideoBlog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-4/5 md:w-2/3 lg:w-1/2 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          The BEST TikTok Niche in 2024 (Creativity Program){" "}
        </h1>
        <p>
          The average person is making THOUSANDS of $ through the TikTok
          Creativity Program. I will show you the best niche and how to create
          the content for the best performance.
        </p>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            src="https://www.loom.com/embed/28440a4a7e5b47b99a99b93ea7bbda80?sid=66fc11eb-f3c7-4b61-adb4-2c6315a309f8"
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
