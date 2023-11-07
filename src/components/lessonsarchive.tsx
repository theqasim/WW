"use client";

import React, { useState } from "react";

const lessonsData = [
  // {
  //   id: 1,
  //   title: "Easiest Way To Make $10k/Month In 2023 (TikTok Creativity Program)",
  //   description:
  //     "Making $10k a month is a big goal for many, but what if it was mumch easier to attain than you think? TikTok invested $1 Billion into thier Creativity program, using that I will show you how to start making easy money by posting TikTok's and monetizing the views.",
  //   imageUrl: "/resources/5waystomakemoney.jpeg",
  //   link: "/lessons/easiestwaytomake10kamonth",
  // },
  {
    id: 2,
    title: "I found the 5 laziest ways to make money online",
    description:
      "Have you ever wanted to make money online? But don't want to spend a ton of time building a business to do so? I will show you the easiest ways to make money online as a complete beginner. I currently use some of these methods too, so rest assured they work very well.",
    imageUrl: "/resources/5waystomakemoney.jpeg",
    link: "/lessons/fivewaystomakemoney",
  },
  {
    id: 3,
    title: "How to Make AI Historical Content",
    description:
      "Have you ever wanted to make viral content? This lesson is for you, I will show you how to make viral content that will not only allow you to garner a lot of views but also a lot of money with minimal effort. With the help of AI, you can make engaging content to build an audience and make yourself money.",
    imageUrl: "/resources/howtomakeviralaihistoryvideos.jpg",
    link: "/lessons/makeaihistoricalcontent",
  },
  {
    id: 4,
    title: "How to Make Money with ChatGPT ($1000/day)",
    description:
      "Making money with AI is very easy, but the key is making it passive so you can apply minimal effort whilst still making a lot of money. I will show you in this lesson how to do that. You can very easily make $1000+ a day using these methods, but always remember that all these methods require consistency to make them work.",
    imageUrl: "/resources/howtomakepassiveincomewithchatgpt.jpg",
    link: "/lessons/makemoneywithchatgpt",
  },
  {
    id: 5,
    title: "How to make money as a teen with $0",
    description:
      "Struggling to make money online? Have no idea where to start? I've been there, I have been making online for 6 years, since the age of 14. I have tested a variety of business models and side hustles. I will teach you the easiest and best way to make money online, and the best part is you need $0 to start.",
    imageUrl: "/resources/howtomakemoneyasateenwith$0.jpg",
    link: "/lessons/makemoneywith$0",
  },
  {
    id: 6,
    title: "How to Start Dropshipping with $0 (FREE COURSE)",
    description:
      "Dropshipping is a very popular business model, and it has been around for a long time. It has a resurgence over the past year with a lot of people attempting it, and a lot of them are doing it incorrectly. Leading them to waste their time and money. In this lesson, I will teach you exactly how to Dropshipping and do it successfully.",
    imageUrl: "/resources/30days-dropshipping.jpg",
    link: "/lessons/dropshipwithnomoney",
  },
];

function LessonsArchive() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredLessons, setFilteredLessons] = useState([...lessonsData]);

  const handleSearchInputChange = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchInput(searchTerm);

    const filteredLessons = lessonsData.filter((lesson) =>
      lesson.title.toLowerCase().includes(searchTerm)
    );

    setFilteredLessons(filteredLessons);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <section className="w-full py-10 px-5 lg:px-20 space-y-10 bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white tracking-tighter font-bold">
            Web Wealth Lessons Archive
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            A complete list of all the lessons available in Web Wealth
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
          {filteredLessons.map((lesson) => (
            <a
              key={lesson.id}
              href={lesson.link}
              className="rounded shadow-md ease-in-out border-solid border-2 border-white hover:scale-105 transform transition-all duration-300"
            >
              <img
                alt={lesson.title}
                className="w-full rounded-t object-cover"
                src={lesson.imageUrl}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2 dark:text-white">
                  {lesson.title}
                </h2>
                <p className="text-white h-full text-gray-400">
                  {lesson.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LessonsArchive;
