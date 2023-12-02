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
          Laziest Way to Make Money Online For Beginners ($100/day+)
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="Xv1Kub4iZt0" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          In this lesson I will show you the absoulte best way to make money
          online as a complete beginner.
        </h2>
        <h2 className="text-xl font-bold text-center">
          I will show you the best way to make money online right now, and where
          you should actually be focussing your time for the greatest return.
        </h2>
        <h2 className="text-xl font-bold text-center">
          My name is Qasim and I have been making online since the age of 14,
          and I am going to tell you the absolute best method of making money
          online that I have ever come across where the return you can get from
          it is way more than the other business models out there.{" "}
        </h2>
        <h2 className="text-xl font-bold text-center">
          And the best method of making money online right now is called the
          “Seamless Cooperative Framework”{" "}
        </h2>
        <h2 className="text-xl font-bold text-center">
          You might be thinking to yourself, what is this? Is it difficult to
          do?
        </h2>
        <h2 className="text-xl font-bold text-center">
          But it is actually extremely simple to do, and more simple than all
          the other methods out there.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Most people think to make money online you need to make a large
          Software company and spend a ton of money, and be a genius visionary
          entrepreneur, like Elon Musk or Jeff Bezos in order to make millions
          of £ online, but that isn&apos;t true.
        </h2>
        <h2 className="text-xl font-bold text-center">
          I scaled my media business from 0-$100k at the age of 19, and If I can
          do it, so can you. I don&apos;t have a “hidden” talent, and the reason
          why I&apos;m making this video is because I see a lot of people go
          down the wrong path to make money, like a get rich quick scheme, or a
          crypto course.
        </h2>
        <h2 className="text-xl font-bold text-center">
          When in reality the truth to making money is much simpler and much
          easier than you think.
        </h2>
        <h2 className="text-xl font-bold text-center">
          The First Principle of Making Money Online
        </h2>
        <p>
          The first principle you must understand is that the best way to make
          money online is by giving people value, and the internet makes this
          very easy to do at scale.
        </p>
        <p>
          I&apos;ll explain this to you, typically you trade your time for
          money, which 9-5 jobs make you do. You have to repeat this over and
          over again to make money.
        </p>
        <p>
          Now the reason why you see all these millionaires online driving fast
          cars, flying around in jets, is because they&apos;re not working 24/7,
          but instead working on the right things.
        </p>
        <p>
          They focus on “Smart Work” rather than “Hard Work”, people who have
          worked way harder than me and these millionaires you see online have a
          lot less money than they do purely because they&apos;re not working
          smarter.
        </p>
        <p>
          Now, I am not trying to claim to be this all knowing being that has
          cracked the code, but if you truly follow this Seamless Cooperative
          Framework, you will make money online easily.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 1: Choose a topic
        </h2>
        <p>
          The first step is to choose a topic, simply write down 5 things
          you&apos;re interested in that you can base your Seamless Cooperative
          Framework on. This is one of the most important parts, but once you do
          that, we need to now consider the economic viability of your chosen
          topics, we need to make sure we can make money with it.
        </p>
        <p>It needs to align with any of the following:</p>
        <ul className="list-disc list-inside  mb-6">
          <li>
            <b>
              <a
                href="https://apps.shopify.com/judgeme"
                className="text-blue-500"
              >
                Health{" "}
              </a>
            </b>
          </li>
          <li>
            <b>
              <a
                href="https://apps.shopify.com/bundles-bear"
                className="text-blue-500"
              >
                Wealth
              </a>{" "}
            </b>
          </li>
          <li>
            <b>
              <a
                href="https://apps.shopify.com/swatches-popup-cart"
                className="text-blue-500"
              >
                Relationships
              </a>{" "}
            </b>
          </li>
          <li>
            <b>
              <a
                href="https://apps.shopify.com/swatches-popup-cart"
                className="text-blue-500"
              >
                Happiness
              </a>{" "}
            </b>
          </li>
          <li>
            <b>
              <a
                href="https://apps.shopify.com/swatches-popup-cart"
                className="text-blue-500"
              >
                Technology
              </a>{" "}
            </b>
          </li>
        </ul>
        <p>
          The reason for this is because there&apos;s a market for these
          problems, and if we can solve people&apos;s problems within these
          niches, we can make money.
        </p>
        <p>
          Trust me this framework is very rarely talked about and it makes a lot
          of the top people in the online industry a lot of money.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 2: Validate your chosen topic
        </h2>
        <p>
          Now we need to validate the chosen topic through market research,
          pretty simple do a youtube search on your topic, for example, if I
          said I was interested in teaching people how to grow on YouTube, I
          would search up the term, look at the videos as well as when they were
          posted to judge the demand and whether people are still interested in
          this.{" "}
        </p>
        <p>
          If there is an active market, great news, you can start making money
          with your chosen topic.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 3: Building an audience
        </h2>
        <p>
          Now we need to build an audience, how we do this is by analysing what
          works in the market in terms of content, and doing it ourselves.
          I&apos;d recommend starting on YouTube, choosing a sub-niche within
          your chosen niche, focus on it and make content to bring in an
          audience.
        </p>
        <p>
          For example, if you want to show people how to grow on youtube, you
          can dive deeper and teach people how to run a faceless YouTube
          channel.
        </p>
        <p>
          By the way, you do not need to be an expert, you simply need to take
          what people are interested in and make your own version of this
          content, in doing that you&apos;re a few % of the people wanting to
          learn in this niche, and you&apos;re simply teaching them that few %.
        </p>
        <p>
          After scrolling for a few hours, I found this product, I believed it
          to be a good option as it wasn&apos;t too expensive and it was blowing
          up like crazy.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 4: Monetizing your audience
        </h2>
        <p>
          Now here is the part where all these millionaires make a lot of their
          money, this is where we create multiple streams of income from 1 video
          you make. You can truly make thousands of $$$ a video if you follow
          this correctly. The sequence goes as follows, and be sure to wait
          until the last one:
        </p>
        <p>
          <b>1:</b> You create the video on your chosen sub topic, based on
          successful content, so you&apos;re assuring its performance. In the
          video you will undoubtedly mention products and services you use,
          they&apos;ll likely have an affiliate marketing program. You sign up
          to these affiliate marketing programs, and you get paid for the sales
          you refer to them. Not only are you helping your viewers, but
          you&apos;re also making yourself a lot of money, as these products and
          services directly help the viewer solve their problem. You can make
          crazy money doing this, and it is very easy to do
        </p>
        <p>
          <b>2:</b> The next source of income with the Seamless Cooperative
          Framework is the money you directly make with video, as you grow your
          audience, you&apos;re going to make money from the video, because
          you&apos;re basing your videos off successful videos, you will get a
          lot more success with the videos and that will bring in views which
          brings in money. The money you can make this with is crazy if
          you&apos;re consistent with your content, and this number can
          continuously go up too:{" "}
        </p>
        <p>
          <b>3:</b> This final income source is where a lot of people mess up
          when building their Seamless Cooperative Framework, but I will show
          you how to execute this properly. We are going to build a
          complimentary passive income stream
        </p>
        <p>
          Here&apos;s an example, let&apos;s say we&apos;re teaching people how
          to grow on YouTube, a complimentary passive income stream can be an
          exclusive guide with information you don&apos;t freely give out, or a
          mentoring program that teaches people how to grow on YouTube. Once you
          set this up, along with the other income sources, you&apos;re at the
          final stage of your monetization setup.
        </p>
        <p>
          Now you can invest time into your content to grow your audience by
          providing value, and that will build all your streams of income,
          allowing you to make a lot of money online, all from one action.
        </p>
        <p>
          Making money online is a lot simpler than most people think it is. If
          you truly apply yourself to this framework, you will make money online
          and you&apos;ll thank yourself for taking the leap.
        </p>
        <div className="text-gray-700 space-y-4">
          <p>With that being said, I wish you the best of luck 🤝</p>
        </div>
        <Backtolessons />
      </div>
    </div>
  );
};

export default VideoBlog;
