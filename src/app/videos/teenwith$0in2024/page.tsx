import React from "react";
import Backtolessons from "@/components/backtolessons";

const VideoBlog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-4/5 md:w-2/3 lg:w-1/2 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          If I Was A Teen With $0 in 2024, I'd Do THIS..
        </h1>
        <p>
          I breakdown the strategy of an online creator who is growing his
          agency on TikTok as well as another creator who is using their traffic
          to grow their respective companies. They're both using the build and
          show model.
        </p>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            src="https://www.loom.com/embed/36fcabbb3750460cbe44bbc1261f2424?sid=8600b33d-1047-4df4-9409-321a8abe761b"
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
