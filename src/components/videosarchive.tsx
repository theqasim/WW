"use client";

import React, { useState } from "react";
import Link from "next/link";

const videosData = [
  {
    id: 1,
    title:
      "Viral TikTok Niches to make $10,834 in 30 Days (TikTok Creativity Program)",
    description:
      "Making money on Tiktok has been a very popular subject recently, I've covered it a few times and there's been major interest. Here's the newest and most viral Tiktok niches to make you money.",
    imageUrl: "/resources/viraltiktokniches.jpg",
    link: "/videos/viraltiktokniches",
  },
  {
    id: 2,
    title: "Smartest Route To $10,000/Month in 2024",
    description:
      "There is a variety of ways to make money online in 2024, with $10,000/month being every beginners target for making money online, I am going to show you the smartest route to achieve it.",
    imageUrl: "/resources/10kamonthin2024.jpg",
    link: "/videos/10kamonthin2024",
  },
  {
    id: 3,
    title: "The Laziest Way To Make Money Online In 2024",
    description:
      "I am not exaggerating when I say this, this is the easiest way to make money that I've found online. Never covered this before and regular people are making THOUSANDS doing this.",
    imageUrl: "/resources/100ahour.jpg",
    link: "/videos/laziestwaytomakemoneyonline2024",
  },
  {
    id: 4,
    title: "The Best TikTok Niche in 2024",
    description:
      "The average person is making THOUSANDS of $ through the TikTok Creativity Program. I will show you the best niche and how to create the content for the best performance.",
    imageUrl: "/resources/besttiktokniche2024.jpg",
    link: "/videos/besttiktokniche2024",
  },
  {
    id: 5,
    title: "If I Was A Teen With $0 in 2024, I'd Do THIS..",
    description:
      "Are you in your teen years with no money, but you want to make money online? Trust me, I've been there, looking at the lavish lifestyles people live online and wishing that was you. Good news, it can be.",
    imageUrl: "/resources/howtomakemoneyasateenwith$0.jpg",
    link: "/videos/bestwaytomakemoneyonline2024",
  },
  {
    id: 6,
    title: "Best Way To Make Money Online In 2024",
    description:
      "We are approaching 2024, it's time to actually achieve your goal of making money online. I've done this for YEARS, and I have created the easiest model for you to follow to make money online easily. ",
    imageUrl: "/resources/best-business-2024.png",
    link: "/videos/bestwaytomakemoneyonline2024",
  },
];

function VideosArchive() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([...videosData]);

  const handleSearchInputChange = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchInput(searchTerm);

    const filteredVideos = videosData.filter((video) =>
      video.title.toLowerCase().includes(searchTerm),
    );

    setFilteredVideos(filteredVideos);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <header className="flex justify-between items-center p-4 shadow-md">
        <Link href="/lessons" passHref>
          <button className="bg-blue-500 hover:bg-blue-700 tracking-tighter text-white font-bold py-2 px-4 rounded">
            Written Lessons
          </button>
        </Link>
      </header>
      <section className="w-full py-10 px-5 lg:px-20 space-y-10 bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white tracking-tighter font-bold">
            Web Wealth Videos Archive
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            A complete list of all the exclusive videos available in Web Wealth
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-md bg-white shadow-md rounded-md">
            <input
              aria-label="Search"
              className="pl-10 py-3 text-lg bg-transparent focus:outline-none w-full"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchInputChange}
              type="text"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className=" h-5 w-5 text-gray-400"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <a
              key={video.id}
              href={video.link}
              className="rounded shadow-md ease-in-out border-solid border-2 border-white hover:scale-105 transform transition-all duration-300"
            >
              <img
                alt={video.title}
                className="w-full rounded-t object-cover"
                src={video.imageUrl}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 dark:text-white">
                  {video.title}
                </h2>
                <p className="text-white h-full text-gray-400">
                  {video.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default VideosArchive;
