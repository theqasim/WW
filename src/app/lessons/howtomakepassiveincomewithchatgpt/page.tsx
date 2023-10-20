"use client";

import React from "react";
import Link from "next/link";
import Plyr from "plyr";
import { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";

const VideoBlog: React.FC = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Plyr(videoRef.current);

      return () => {
        player.destroy();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-4/5 md:w-2/3 lg:w-1/2 space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          How to make PASSIVE INCOME with ChatGPT
        </h1>
        <video ref={videoRef} controls className="w-full mb-6">
          <source
            src="https://www.dropbox.com/scl/fi/rju41l1rmcd68aqundh2s/How-I-would-start-Dropshipping-with-0.mp4?rlkey=7ssy5ez50kh6mjnlpsx2rbhfq&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-2xl font-bold text-center mb-4">
          By far these are the easiest ways to make passive income with AI.
        </h2>

        <div className="text-gray-700 space-y-4">
          <h3 className="font-bold text-xl mb-2">Affiliate Marketing:</h3>
          <p>
            Very simply you will be signing up to affiliate programs and using
            AI to create content which advertises your chosen AI tool. This is
            one of the easiest ways to make passive income with ChatGPT on this
            list.
          </p>
          <ul className=" text-gray-700 mb-6">
            <li>
              Locate any affiliate program that pays well for advertising their
              AI tools. Examples are the following:
              <ul className="list-inside text-gray-700 mb-6 indent-1 mt-2">
                <li className="ml-4">
                  <a
                    className="text-blue-400 hover:text-blue-500"
                    href="https://www.jasper.ai"
                    target="_blank"
                  >
                    <b>JasperAI</b>
                  </a>
                </li>
                <li className="ml-4 mt-1">
                  <a
                    className="text-blue-400 hover:text-blue-500"
                    href="https://www.copy.ai"
                    target="_blank"
                  >
                    <b>CopyAI</b>
                  </a>
                </li>
                <li className="ml-4 mt-1">
                  <a
                    className="text-blue-400 hover:text-blue-500"
                    href="https://rytr.me"
                    target="_blank"
                  >
                    <b>Rytr</b>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Head over to ChatGPT and ask it to generate 10 titles about the
              chosen AI Tool as we will need to make content on. Use the prompt:
              <br></br>
              <b>
                You are to act an expert content creator, Write 10 titles about
                (insert AI Tool here)
              </b>
            </li>
            <li className="mt-4">
              Once you have your title, we are going to post this content on the
              easiest platform to attract viewers on, TikTok. After getting your
              response from the first prompt, send in the next prompt to get a
              script for the TikToks. Use this exact prompt for high quality
              scripts: <br></br>
              <b>
                Thank you, now act as a TikToker and generate a script for each
                of the titles mentioned above with a catchy hook to increase AVD
              </b>
              .
            </li>
            <li className="mt-4">
              Once you have the titles and the scripts, you can create AI
              generated videos by using{" "}
              <b>
                <a
                  href="https://pictory.ai"
                  className="text-blue-400 hover:text-blue-500"
                  target="_blank"
                >
                  Pictory
                </a>
              </b>
            </li>
            <li className="mt-4">
              Sign up for free, enter the title and script that ChatGPT created
              for you, and select the 9:16 template as we are creating{" "}
              <b>SFC (Short Form Content).</b>
            </li>
            <li className="mt-4">
              Once the video is created, you will have full access to edit the
              video to your liking
            </li>
            <li className="mt-4">
              Once the video is done, post it on all <b>SFC platforms</b> such
              as TikTok, Instagram Reels & YouTube Shorts with your affiliate
              link for the AI Tools you choose.
            </li>
            <li className="mt-4">
              You&apos;re very simply making money to advertise a great product
              so the value is there already, you just need to shine a light on
              it to make yourself money.
            </li>
          </ul>
          <h3 className="font-bold text-xl mb-2">Selling Physical Products:</h3>
          <p>
            In this method you will be generating digital patterns and
            monetizing them through 2 different ways. Etsy and other stores are
            doing crazy numbers with this <b>($300k+)</b> and it is very easy to
            do.
          </p>
          <p>
            The money in this market is large and so is the potential for you to
            make money. It is very easy to do and replicate to then scale.
          </p>
          <p>
            Let&apos;s start with <b>generating the patterns</b>, we will be
            using <b>Midjourney</b> to do this. Head over to the Midjourney
            {"  "}
            <a
              href="https://discord.gg/midjourney"
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
            >
              <b>Discord server</b>
            </a>
            , head into one of the channels and use the <b>/imagine command</b>{" "}
            and enter the following prompt: <br></br>
            <b>
              repeating patern botanical wallpaper magical old money. --tile
            </b>
            . <br></br>
            <br></br>You will ammend the prompt to be generate a pattern you
            like, this is just an example.
          </p>
          <p>
            This prompt will provide you with a result in which you can alter
            and download the pattern to sell or use on products.
          </p>
          <img src="/resources/midjourneyresult.png"></img>
          <p>
            The result will look like this, you can see the 4 images generated,
            each number is labelled so you&apos;re aware of which image each
            button is referring to. The <b>U buttons</b> stand for Upscale so
            you can upscale the images to then save them in high quality. The{" "}
            <b>V buttons</b> stand for Version which will allow you to create
            another version of the image you select. Finally, the{" "}
            <b>looping emoji</b>
            {"     "}allows you to reroll all the images.
          </p>
          <p>
            Once you have the pattern you can sell the patterns on Etsy. Take
            inspiration from other stores selling digital patterns for your
            listings so they can rank well. This is <b>very easy to do</b> as
            you&apos;re doing the work upfront and passively making money.
          </p>
          <p>
            If you want to take a step further, put it on physical products like
            notebooks, water bottles, journals etc. You can do this by using
            {"  "}
            <a
              href="https://printify.com"
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
            >
              <b>Printfiy</b>
            </a>
          </p>
          <h3 className="font-semibold text-xl mb-2">Course Creation: </h3>
          <p>
            In this method you will be creating a course using ChatGPT and then
            utilising content creation AI tools to present the course. This
            really is the most “passive” method on the list as it only requires
            the work on the frontend to get things rolling.
          </p>
          <p>
            Head over to{" "}
            <a
              href="https://udemy.com"
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
            >
              <b>Udemy</b>
            </a>{" "}
            and browse through the trending courses, personally I stick to the
            courses that are marketing related as people are constantly trying
            to learn how to market on different platforms. Click{" "}
            <a
              href="https://udemy.com/courses/marketing"
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
            >
              <b>here</b>
            </a>{" "}
            to go to the marketing courses
          </p>
          <p>
            I picked out{" "}
            <a
              href="https://www.udemy.com/course/learn-google-adwords-course-for-beginners/"
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
            >
              <b>this</b>
            </a>{" "}
            course to recreate as it has a lot of reviews so it is clearly doing
            well at the moment.
          </p>
          <p>
            Head back to <b>ChatGPT</b> and type in the following prompt:
            <br></br>
            <b>
              You are to act as an expert course instructor on marketing. Write
              a course outline for a Beginners Guide to Google Ads.
            </b>
          </p>
          <p>
            Once you get the outline, ask for a detailed script for each lesson
            included in the outline using this follow-up prompt: <br></br>
            <b>
              Based on your response above, generate a script for each lesson.
            </b>
          </p>
          <p>
            Once you have the scripts, we are going to use an AI video content
            creator to create the course content.
          </p>
          <p>
            Use{" "}
            <a
              href="https://www.synthesia.io"
              className="text-blue-400 hover:text-blue-500"
              target="_blank"
            >
              <b>Synthesia.io</b>
            </a>{" "}
            which is by far the easiest way to create this type of content, the
            AI models are very well done.
          </p>
          <p>
            Pick a template, and configure the title for the lesson as well as
            the course content.
          </p>{" "}
          <p>
            Once you&apos;re happy with the course content, post it on Udemy,
            Skillshare and even consider hosting it yourself, Shopify has very
            easy to use plugins which will allow you to supply the course.
          </p>
          <p>
            Leverage your social media following to advertise the course, you
            can even use the course you generated to collect some results and
            use that as proof to sell the course. People like buying into things
            that work.
          </p>
          <h3 className="font-semibold text-xl mb-2">Final Notes:</h3>
          <p>
            Making money with AI is very easy and there is multiple ways you can
            do it. The ways I mentioned in this lesson are the easiest ways to
            make money based off my experience.<br></br>
            <br></br>With that being said, I wish you the best of luck 🤝
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/lessons">
            <button
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 flex items-center justify-center" // Added flex, items-center and justify-center to center the SVG and text
            >
              <svg
                className="svg-snoweb svg-theme-light mr-2"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 100 100"
                width="32"
                x="0"
                xmlns="http://www.w3.org/2000/svg"
                y="0"
              >
                <clipPath id="clip-path-202310-1316-3932-2fc5104a-fa3e-40d8-9b72-45ae15b5111b">
                  <circle cx="50" cy="50" r="50"></circle>
                </clipPath>
                <g transform="translate(20.00, 20.00) scale(0.60, 0.60)">
                  <path
                    className="svg-stroke-primary"
                    d="M43.3,73.5,19.8,50m0,0L43.3,26.5M19.8,50H80.2"
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                  ></path>
                </g>
              </svg>
              Back to lessons
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoBlog;
