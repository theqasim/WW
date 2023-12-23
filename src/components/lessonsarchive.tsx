"use client";

import React, { useState } from "react";

const lessonsData = [
  {
    id: 1,
    title: "Best Online Business To Start As a BEGINNER (2024)",
    description:
      "We are approaching 2024, you want to start an online business as one of your new years resolutions, THIS IS YOUR YEAR, let me show how to make your first online business that is easy to do as a complete beginner.",
    imageUrl: "/resources/best-business-2024.png",
    link: "/lessons/bestbusinessfor2024",
  },
  {
    id: 2,
    title: "I Found The Highest RPM TikTok Creativity Program Niches",
    description:
      "You hear many people talk about making money through the creativity program on TikTok, but what is the best type of content to make for the greatest return? I found the highest paying TikTok niches and I show you exactly how to make the content too.",
    imageUrl: "/resources/besttiktokniches.jpg",
    link: "/lessons/besttiktokniches",
  },
  {
    id: 3,
    title: "I Started Making $10,000/mo After Learning this FORGOTTEN Law",
    description:
      "Making money online does require execution on an idea, but also the correct mindset to excel at it. I used this law when I first started making money online, and I still do till this day, so do many other successful people, trust me try this out and see what happens in your life.",
    imageUrl: "/resources/hiddenlawto$10kamonth.png",
    link: "/lessons/lawtomake$10kamonth",
  },
  {
    id: 4,
    title: "Laziest Way to Make Money Online For Beginners ($100/day)",
    description:
      "Making money online is often overcomplicated by many, people buy get rich quick schemes and crypto courses in the hopes of making some money, the reality is it's much easier than you think. I will show you the framework the top people in the industry use to make money online.",
    imageUrl: "/resources/bestwaytomakemoney.jpg",
    link: "/lessons/laziestwaytomakemoneyonline",
  },
  {
    id: 5,
    title: "I Tried Dropshipping For 30 Days To Prove It's Not Dead",
    description:
      "Dropshipping is one of the most popular business models on the internet at the moment, a lot of claim it is dead. I tried Dropshipping for 30 days to prove it is not dead, but also easy to start as a complete beginner. If you follow the strategies in this lesson, you will find success with Dropshipping.",
    imageUrl: "/resources/tryingdropshippingfor30days1.jpg",
    link: "/lessons/dropshippingisnotdead",
  },
  {
    id: 6,
    title: "Make Your First $1000 in 24 hours TYPING",
    description:
      "If you're someone that has no monetizable skills, this is for you. Imagine you could make money, just from typing? This is what I will teach you how to do in this lesson, going from finding potential clients, to how to perform this service, to how to be successful at this.",
    imageUrl: "/resources/makeyourfirst$1000.jpg",
    link: "/lessons/make$1000in24hours",
  },
  {
    id: 7,
    title: "Easiest Way To Make $10k/Month In 2023 (TikTok Creativity Program)",
    description:
      "Making $10k a month is a big goal for many, but what if it was much easier to attain than you think? TikTok invested $1 Billion into their Creativity program, using that I will show you how to start making easy money by posting TikTok's and monetizing the views.",
    imageUrl: "/resources/easiest-way-to-make-10kamonth.png",
    link: "/lessons/easiestwaytomake10kamonth",
  },
  {
    id: 8,
    title: "I found the 5 laziest ways to make money online",
    description:
      "Have you ever wanted to make money online? But don't want to spend a ton of time building a business to do so? I will show you the easiest ways to make money online as a complete beginner. I currently use some of these methods too, so rest assured they work very well.",
    imageUrl: "/resources/5waystomakemoney.jpeg",
    link: "/lessons/fivewaystomakemoney",
  },
  {
    id: 9,
    title: "How to Make AI Historical Content",
    description:
      "Have you ever wanted to make viral content? This lesson is for you, I will show you how to make viral content that will not only allow you to garner a lot of views but also a lot of money with minimal effort. With the help of AI, you can make engaging content to build an audience and make yourself money.",
    imageUrl: "/resources/howtomakeviralaihistoryvideos.jpg",
    link: "/lessons/makeaihistoricalcontent",
  },
  {
    id: 10,
    title: "How to Make Money with ChatGPT ($1000/day)",
    description:
      "Making money with AI is very easy, but the key is making it passive so you can apply minimal effort whilst still making a lot of money. I will show you in this lesson how to do that. You can very easily make $1000+ a day using these methods, but always remember that all these methods require consistency to make them work.",
    imageUrl: "/resources/howtomakepassiveincomewithchatgpt.jpg",
    link: "/lessons/makemoneywithchatgpt",
  },
  {
    id: 11,
    title: "How to make money as a teen with $0",
    description:
      "Struggling to make money online? Have no idea where to start? I've been there, I have been making online for 6 years, since the age of 14. I have tested a variety of business models and side hustles. I will teach you the easiest and best way to make money online, and the best part is you need $0 to start.",
    imageUrl: "/resources/howtomakemoneyasateenwith$0.jpg",
    link: "/lessons/makemoneywith$0",
  },
  {
    id: 12,
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
      lesson.title.toLowerCase().includes(searchTerm),
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
