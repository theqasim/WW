"use client";

import React from "react";
import Link from "next/link";
import Plyr from "plyr";
import YouTube from "react-youtube";
import { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";
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
          The Easiest Way to make $10k a month (TikTok Creativity Program){" "}
        </h1>
        <YouTube videoId="Xv1Kub4iZt0" opts={opts} onReady={onReady} />

        <h2 className="text-xl font-bold text-center">
          There&apos;s always money making opportunities that you wish you were
          in earlier on. We had Bitcoin in 2012, NFT&apos;s in 2021, and various
          others. Tiktok just launched a brand new program where they are giving
          away <a className="text-green-500">$1 Billion</a>, and no one is
          talking about this.
        </h2>
        <h2 className="text-xl font-bold text-center">
          By simply posting a few TikToks a day, you can make anything from a
          few thousand a month, to over
          <a className="text-green-500"> $100,000+</a>. This is extremely easy
          to do, and I will show you how to do this. Not many are taking this
          seriously and you are leaving money on the table by not doing this.
          Look at these people bringing in a lot of money:
        </h2>
        <img
          className=""
          alt="tiktok creativity fund results"
          src="/resources/tiktokcreativityresults.png"
        ></img>
        <h2 className="text-xl font-bold text-center">
          Let&apos;s breakdown what this program is:
        </h2>
        <p>
          To be clear, this is <b>completely different</b> from Tiktok&apos;s
          creativity fund, where people would only make a few cents per 1k
          views.
        </p>
        <p>
          This is the <b>Creativity Program</b> where for videos over 1 minute
          long, you will get a <b>$1 RPM</b> which is{" "}
          <b>$1000 per 1 million views.</b>
        </p>
        <p>
          This is completely unheard of, considering how easy it is to blow up
          on Tiktok, you can make a lot of money doing this.
        </p>

        <p>
          For the people that do not know how to edit videos, do not worry, I
          have a solution for you, so be sure to read this entire lesson to know
          how you do this too.
        </p>

        <h2 className="text-xl font-bold text-center">
          Now let&apos;s cover how you can qualify for this program:
        </h2>
        <h2 className="text-xl font-bold">Here are the requirements:</h2>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>You need to 18+ (if you&apos;re not 18, ask your parents)</b>
          </li>
          <li>
            <b>You must be USA, France or Brazil.</b>
          </li>
          <li>
            <b>You must have 100,000 views in the last 30 days.</b>
          </li>
          <li>
            <b>You must have 10,000+ followers on your account.</b>
          </li>
        </ul>
        <p>
          The follower count may seem daunting, but with the strategies I show
          you and by following the basic short form content principles, you will
          surpass 10,000 in no time. Especially on a new account, as Tiktok will
          give you a boost if you&apos;re making good content.
        </p>
        <p>
          The views count is very easy, you can get views very easily if you
          follow the strategy I show you in order to keep people watching your
          video so it gets pushed.{" "}
        </p>

        <h2 className="text-xl font-bold text-center">
          Here&apos;s how you can attack this to bring in a lot of money and
          views:{" "}
        </h2>

        <h2 className="text-xl font-bold">Very simply do the following:</h2>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>Pick a niche.</b>
          </li>
          <li>
            <b>Setup your account.</b>
          </li>
          <li>
            <b>You must have 100,000 views in the last 30 days.</b>
          </li>
          <li>
            <b>
              Choose what type of content you will post (self made, or
              repurposing).
            </b>
          </li>
        </ul>

        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
          Here&apos;s a pros and cons list for both:
        </h1>
        <h1 className="text-xl font-bold mb-4 text-gray-800">
          Self Made Content:{" "}
        </h1>
        <h1 className="text-lg font-bold text-green-500">Pros: </h1>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>You get to build your personal brand.</b>
          </li>
          <li>
            <b>You have complete creative freedom.</b>
          </li>
        </ul>

        <h1 className="text-lg font-bold text-red-500">Cons: </h1>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>
              This is more difficult to do if you&apos;re not experienced on
              camera.
            </b>
          </li>
          <li>
            <b>Steeping learning curve compared to repurposing content.</b>
          </li>
        </ul>

        <h1 className="text-xl font-bold mb-4 text-gray-800">
          Repurposed Content:{" "}
        </h1>
        <h1 className="text-lg font-bold text-green-500">Pros: </h1>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>
              You&apos;re taking already successful content and posting it so
              your chances of going viral is high.
            </b>
          </li>
          <li>
            <b>
              You do not need to create the content which saves A LOT of time.
            </b>
          </li>
        </ul>

        <h1 className="text-lg font-bold text-red-500">Cons: </h1>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>
              Virtually none, if you don&apos;t care about a personal brand,
              this is a complete no brainer for you.
            </b>
          </li>
        </ul>

        <h3 className="font-bold">
          Personally, I&apos;d recommend going with repurposed content as you
          can meet the requirements quicker, enabling you to make money quicker.
        </h3>
        <h3 className="font-bold">
          Here&apos;s the strategy that all the big pages use on TikTok to make
          a lot of money:
        </h3>

        <ol className="list-decimal list-inside mb-2">
          <li>
            <b>
              You need to focus on going viral to meet the requirements first to
              qualify.
            </b>
          </li>
          <li>
            <b>Follow this posting strategy to bring in views and money:</b>
            <ol className="list-disc indent-5 list-inside mb-6">
              <li>Post Twice a day ensuring all videos are 1+ minute long.</li>
              <li>
                Add in 1 regular length video daily for content variety which
                helps your account.
              </li>
            </ol>
          </li>
          <li>
            <b>The type of content you should post:</b>
            <ol className="list-disc indent-5 list-inside mb-2 text-left">
              <li>
                For the 1 minute videos, you can either do videos that prompt
                the user to go to the next part (movies, tv shows, podcasts
                etc).
              </li>
              <li>
                Or you can post 1 minute clips from interactions that truly
                capture the viewer&apos;s attention (crazy stream moments,
                podcast moments)
              </li>
              <li>
                If you&apos;re struggling for content, curate your TikTok feed
                to push you content that you&apos;re likely to get ideas from.
                Bookmark them into a folder and study them so you know what
                works, and what doesn&apos;t. This way you can expedite the
                process of being viral and making money.
              </li>
            </ol>
          </li>
          <li>
            <b>
              The secret to success with this side hustle: Very simply if you
              want to be successful with this, you need to be….CONSISTENT
            </b>
          </li>

          <p>
            It is hard to fail if you&apos;re truly consistent, this applies to
            anything in life too.
          </p>
          <p>
            Trust me, keep at this, you will go viral and you will see the money
            come in.
          </p>

          <li>
            <b className="">How you can make even more money doing this:</b>
          </li>
        </ol>
        <p>
          You&apos;re garnering an audience, and when you have attention, you
          can sell it.{" "}
        </p>
        <p>
          Brands will reach out to you wanting to promote their products or
          services that are fitting for your audience.
        </p>
        <p>
          If you&apos;re clipping a creator&apos;s content, they may reach out
          to you and offer to put you on payroll to do this, on top of the money
          you&apos;re making from the account, as the exposure is beneficial for
          them.
        </p>
        <p>
          You can even sell this as a service to other creators showing them
          your ability to make content go viral on TikTok, this can make you a
          lot of money but also build your network very easily. They&apos;ll
          refer you to others and then you&apos;ll have a lot of money coming
          in.
        </p>
        <h1 className="text-xl font-bold mb-4 text-gray-800">
          This is how you can do this as a beginner:{" "}
        </h1>
        <p>If you don&apos;t know how to make content, this is for you.</p>
        <p>
          Head over to any popular podcast, or show and copy the YouTube URL.
        </p>
        <p>
          Head over to Opus Pro, a tool that generates clips for you and puts
          auto captions on them for you.
        </p>
        <p>Download the clips and post them on Tiktok.</p>
        <p>
          You can get weeks worth of content in a few minutes using this
          website.
        </p>
        <p>
          Just to help you guys out, I&apos;ve made a folder of clips you can
          post and you can get access to it for FREE inside Web Wealth. Click{" "}
          <a
            href="https://discord.com/channels/1153994810789740598/1171404548292739142/1171430809325027418"
            className="text-green-500"
          >
            here
          </a>{" "}
          to get access to the clips
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
