import React from "react";
import Backtolessons from "@/components/backtolessons";

const VideoBlog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-4/5 md:w-2/3 lg:w-1/2 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Smartest Route To $10,000/Month in 2024
        </h1>
        <p>
          This lesson aims to cut out the noise with how to make money online
          and give you the smartest route. Here is a live case study breakdown
          of a person using this route and making a ton of money.
        </p>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            src="https://www.loom.com/embed/a20041244103466b89efc40b97b701c6?sid=d901b799-01f5-44bc-9bc4-6250bb2d5741"
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
