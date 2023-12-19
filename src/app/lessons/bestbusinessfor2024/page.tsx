"use client";

import React from "react";
import Link from "next/link";
import YouTube from "react-youtube";
import { useEffect, useRef } from "react";
import Backtolessons from "@/components/backtolessons";

const VideoBlog: React.FC = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event: { target: { pauseVideo: () => void } }) => {
    event.target.pauseVideo();
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-4/5 md:w-2/3 lg:w-1/2 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Best Online Business To Start As a Beginner
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="N5_x1olKD8s" opts={opts} onReady={onReady} />
        </div>
        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
          Here is my backstory:
        </h1>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>
              I am 21 years old, and I have been making online since the age of
              14.
            </b>
          </li>
          <li>
            <b>I have ran multiple business models and side hustles.</b>
          </li>
          <li>
            <b>
              I grew my first media business from $0-$100k by the age of 19.
            </b>
          </li>
          <li>
            <b>I will show the easiest path to make money FAST with $0.</b>
          </li>
        </ul>
        <h2 className="text-xl font-bold text-center">
          I will show you the model that not only gives you the best chance to
          make a lot of money online, but caters towards your individual
          strengths and weaknesses, so you can truly optimise your results.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Make sure you watch till the end of the video to know the secret
          fundamentals to ensure your success with your business in 2024.
        </h2>
        <h2 className="text-xl font-bold text-center">
          The Best Business To Start In 2024 is….
        </h2>
        <h2 className="text-xl font-bold text-center">
          Build and Show Business model.
        </h2>
        <h2 className="text-xl font-bold text-center">
          This model involves you building a business and showcasing how you do
          this at the same time.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Let&apos;s cover the building part of this first.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Building a business with $0:
        </h2>
        <p>
          You have no capital so you need to sell something that requires no
          costs, apart from your time. Which is why you will be selling a
          service.
        </p>
        <p>Choose a service for your business:</p>
        <ul className="list-disc list-inside ">
          <li>
            <b>SEO Services</b>
          </li>
          <li>
            <b>Web Design</b>
          </li>
          <li>
            <b>Graphic Design</b>
          </li>
          <li>
            <b>Software Developer</b>
          </li>
          <li>
            <b>SMMA</b>
          </li>
          <li>
            <b>Copywriting</b>
          </li>
        </ul>
        <p>
          The key here is to pick a business model that not only is lucrative,
          and something worth selling, but also easy to learn. Which is why I
          would recommend copywriting.
        </p>
        <h2 className="text-xl font-bold text-center">What is copywriting?</h2>
        <p>Copywriting is the art of selling through the use of words. </p>
        <p>
          You are carefully analysing the situation to understand how to
          formulate your words with the end goal of driving revenue to a
          business.
        </p>
        <p>
          Explaining the entire concept and how to do this is quite a lengthy
          task, to expedite this process head over to{" "}
          <a href="https://z-lib.is" className="text-blue-500">
            https://z-lib.is
          </a>
          and read up on how to do copywriting successfully.
        </p>
        <p>
          I&apos;ve compiled a list of books which are available in the YouTube
          description from the website.
        </p>
        <p>
          Practise this skill and by learning from the books, refine your skill
          and then sell it to businesses.
        </p>
        <p>This particular skill allows to do the following:</p>
        <ul className="list-disc list-inside ">
          <li>
            <b>Sell something with no cost.</b>
          </li>
          <li>
            <b>
              Give the business extra revenue which increases your value to
              them.
            </b>
          </li>
          <li>
            <b>It&apos;s scalable as you can train people to work for you.</b>
          </li>
          <li>
            <b>
              You can get started for FREE today and make money within days.
            </b>
          </li>
        </ul>
        <h2 className="text-xl font-bold text-center">
          Moving onto the SHOW part of the model.
        </h2>
        <p>
          It&apos;s truly never been easier to build an audience online,
          I&apos;ve done this for years and by far the best platform to get
          exposure quickly is TikTok. I&apos;ve consistently posted low effort
          videos on there and I&apos;ve brought in a lot of views. No fancy
          edits, just me talking to my target audience to leverage that
          elsewhere.
        </p>
        <img
          className="shadow-lg mx-auto block"
          height={250}
          width={250}
          alt="tiktok organic results"
          src="/resources/tiktokresultsorganic.jpeg"
        ></img>
        <p>
          You are going to actively create content around what you&apos;re
          doing, the benefits from this are the following:
        </p>
        <ul className="list-disc list-inside ">
          <li>
            <b>
              You build an audience of people that are interested in what
              you&apos;re doing.
            </b>
          </li>
          <li>
            <b>You can leverage your audience when doing business deals.</b>
          </li>
          <li>
            <b>
              You can monetize the audience by creating digital
              products/services that show them how to do what you do.
            </b>
          </li>
          <li>
            <b>
              You can even stop doing the business model and become a coach
              teaching people how to do what you once did.
            </b>
          </li>
        </ul>
        <p>This business is by far the easiest way to make money online.</p>
        <h2 className="text-xl font-bold text-center">
          The Secret Fundamentals:
        </h2>
        <ul className="list-disc list-inside ">
          <li>
            <b>Do not waste time (drinking,smoking,partying etc)</b>
          </li>
          <li>
            <b>Remember that SPEED is vital.</b>
          </li>
          <li>
            <b>
              Improve yourself as you build your business (gym, diet, mental
              capacity, knowledge) products/services that show them how to do
              what you do.
            </b>
          </li>
        </ul>
        <div className="text-gray-700 space-y-4">
          <p>With that being said, I wish you the best of luck 🤝</p>
        </div>
        <Backtolessons />
      </div>
    </div>
  );
};

export default VideoBlog;
