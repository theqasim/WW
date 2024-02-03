import React from "react";
import Backtolessons from "@/components/backtolessons";

const VideoBlog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-4/5 md:w-2/3 lg:w-1/2 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Viral TikTok Niches to make $10,834 in 30 Days (TikTok Creativity
          Program)
        </h1>
        <p>
          I breakdown the strategy of the TikTok pages I mentioned in the
          YouTube video, and specifically how they structure their content to
          make the content go viral.
        </p>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            src="https://www.loom.com/embed/0b2aca97e4124537bb02ad2e456af5e6?sid=560c0ed2-0bb5-4d5f-8cec-029088b761e3"
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
