"use client";

import React from "react";
import Plyr from "plyr";
import { useEffect, useRef } from "react";
import Link from "next/link";
import "plyr/dist/plyr.css";
import Backtolessons from "@/components/backtolessons";

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
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          How to make money as a teen with $0
        </h1>

        <video ref={videoRef} controls className="w-full mb-6">
          <source
            src="https://www.dropbox.com/scl/fi/rpahmrh9x9k1k6mm0wdsf/howtomakemoneyasateenwith-0.mp4?rlkey=dielbdomxaeh66ip8i55jj1vv&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-2xl font-bold text-center mb-4">
          Here&apos;s my backstory:
        </h2>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>
              I am 20 years old, and I have been making online since the age of
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

        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
          Here are the fundamentals you need to follow:
        </h1>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>Do not waste time (drinking,smoking,partying etc)</b>
          </li>
          <li>
            <b>Remember that SPEED is vital.</b>
          </li>
          <li>
            <b>
              Improve yourself as you build your business (gym, diet, mental
              capacity, knowledge)
            </b>
          </li>
        </ul>

        <h1 className="text-xl font-bold mb-8 text-center text-gray-800">
          The model to make the fastest with $0 I recommend is the… Build and
          Show model.
        </h1>

        <h1 className="text-lg font-bold mb-4 text-center text-gray-800">
          This model involves you building a business and showcasing how you do
          this at the same time. <br></br>
          <br></br>Let&apos;s cover the building part of this first.
        </h1>

        <div className="text-gray-700 space-y-4">
          <h3 className="font-semibold text-2xl mb-2">
            Building a business with $0:
          </h3>
          <p>
            You have <b>no capital</b> so you need to sell something that
            requires no costs, apart from your time. Which is why you will be
            selling a <b>service.</b> <br></br>
            <br></br>When choosing a <b>service based business</b>, you have a
            ton of options to choose from:
          </p>
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
            <br></br>
            The key here is to pick a business model that not only is{" "}
            <b>lucrative</b>, and something <b>worth selling</b>, but also{" "}
            <b>easy to learn.</b> Which is why I would recommend{" "}
            <b>copywriting.</b>
          </p>

          <h3 className="font-semibold text-xl">
            <br></br>What is copywriting?{" "}
          </h3>
          <p>
            Copywriting is the art of <b>selling through the use of words.</b>{" "}
            You are carefully analysing the situation to understand how to
            formulate your words with the end goal of{" "}
            <b>driving revenue to a business.</b>
            <br></br>
            <br></br> Explaining the entire concept and how to do this is quite
            a lengthy task, to expedite this process head over to{" "}
            <a
              className="font-bold text-cyan-400"
              href="https://z-lib.is"
              target="_blank"
            >
              https://z-lib.is
            </a>{" "}
            and read up on how to do copywriting <b>successfully.</b> I’ve
            compiled a list of books which are available in the YouTube
            description from the website.
          </p>

          <p>
            Practise this skill and by learning from the books, refine your
            skill and then sell it to businesses.
          </p>

          <br></br>
          <h3 className="font-semibold text-xl mb-2">
            Moving onto the SHOW part of the model.
          </h3>
          <p>
            You are going to actively create content around what you’re doing,
            the benefits from this are the following:
          </p>

          <ul className="space-y-2 list-disc list-inside ">
            <li>
              You build an audience of people that are interested in what you’re
              doing.
            </li>
            <li>You can leverage your audience when doing business deals.</li>
            <li>
              You can monetize the audience by creating digital
              products/services that show them how to do what you do.
            </li>
            <li>
              You can even stop doing the business model and become a coach
              teaching people how to do what you once did.
            </li>
          </ul>
          <br></br>
          <h3 className="font-semibold text-xl text-center">
            This model by far is the easiest way to make money as a teen with
            $0.
            <br></br>
            <br></br>With that being said, I wish you the best of luck 🤝
          </h3>
        </div>
        <Backtolessons />
      </div>
    </div>
  );
};

export default VideoBlog;
