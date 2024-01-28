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
          Smartest Route To $10,000/Month in 2024
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="xx3WxSMxnwE" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          2024 has by far the most unique and lucrative opportunities to make
          money online.
        </h2>
        <h2 className="text-xl font-bold text-center">
          It&apos;s never been easier to do so, but there is also a lot of
          useless information out there, and overpriced courses that do not
          teach you the smartest way to make money online.
        </h2>
        <h2 className="text-xl font-bold text-center">
          I want to start this video by saying that I have been making money
          online since the age of 14, I am now 21, I&apos;ve scaled my media
          company to over 6 figures by the age of 19, and I run a variety of
          businesses that allow me to have complete freedom, both financially
          and physically.
        </h2>
        <h2 className="text-xl font-bold text-center">
          What I am going to show you in this lesson is exactly what I do, and
          it&apos;s what I have continued to do since the age of 14, so you know
          it is a great way.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Adding to that, not only is this the smartest route to $10,000 a
          month, but you will majorly save on a lot of typical costs like
          marketing, ads and much more.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Step 1: Breaking Down Financial Targets.
        </h2>
        <p>
          Let&apos;s break this down so we know the financial targets we need to
          meet.
        </p>
        <p>
          30 days in a month, 10k/ 30 = $333, we need to make that amount per
          day to make $10k a month, which can very easily be done with the right
          opportunity vehicle.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 2: Improvement Benefits All.
        </h2>
        <p>
          The key to the smartest route to make $10,000 a month in 2024 is to
          improve yourself as you build your business.
        </p>
        <p>
          As you improve yourself, your ability to make more money with your
          business will increase drastically.
        </p>

        <p>
          So here are the 3 things you can start doing today to set you up to
          execute on your business.
        </p>
        <ul className="list-disc list-inside ">
          <li>
            <b>Sell something with no cost.</b>
          </li>
          <li>
            <b>
              Set a regimented routine (people often don't work due to lack of
              time and structure)
            </b>
          </li>
          <li>
            <b>Keep your finger on the pulse (Trends change all the time)</b>
          </li>
          <li>
            <b>Always seek to improve</b>
          </li>
        </ul>
        <h2 className="text-xl font-bold text-center">
          Step 4: What Opportunity Will Make You $10,000 A Month In 2024
        </h2>
        <p>
          Now moving onto the opportunity vehicle that is going to get you to
          $10,000 a month.
        </p>
        <p>
          We are going to leverage the most unique thing you can offer the
          marketplace, YOU.
        </p>
        <p>
          Building an audience has never been easier and we&apos;re going to use
          that to make a ton of money quicker than any traditional side hustle
          or business.
        </p>
        <p>
          You might be thinking, is it hard to build an audience? Or am I the
          right person to build an audience?
        </p>
        <p>Trust me, it is way easier than you think.</p>

        <p>
          If you&apos;re not convinced that building an audience is as easy as I
          am portraying, there are thousands of regular people building
          audiences in just a few months by posting on TikTok.
        </p>

        <p>
          Paired with that, I have even built an audience on TikTok by posting
          low effort videos on a daily basis and I am bringing in thousands of
          views very easily.
        </p>
        <p>
          So very simply, you need to pick a niche to make content and money in,
          I&apos;d suggest you pick any of the following niches:
        </p>
        <ul className="list-disc list-inside ">
          <li>
            <b>Health</b>
          </li>
          <li>
            <b>Wealth</b>
          </li>
          <li>
            <b>Relationships</b>
          </li>
          <li>
            <b>Technology</b>
          </li>
        </ul>
        <p>
          These niches have thousands of problems that we&apos;re going to solve
          through our content and what we sell, so the audience is getting value
          from what we offer.
        </p>
        <p>
          Now the two best options you have when operating in these niches is
          either make a high ticket offer (coaching, or an extensive course)
        </p>
        <p>Or make a low ticket offer (pdfs, smaller courses)</p>
        <p>And push that to your audience.</p>
        <p>Let me give you an example.</p>
        <p>
          Let&apos;s say you choose the health niche, you decide to be a fitness
          coach.
        </p>
        <p>
          You can offer a coaching program for $333 a month where you help
          people with their diet, training and get them to achieve the desired
          physique.
        </p>
        <p>
          All you need is 30 people to reach 10k a month using that offer
          structure.
        </p>
        <p>
          Now, let&apos;s say you go over with the other option of offering a
          lower ticket offer, let&apos;s say a one time payment of $175 which is
          a video course showing people how to start working out, how to build a
          diet, how to tweak calories, how to do certain exercises.
        </p>
        <p>All you need is 58 purchases a month to hit $10k a month.</p>
        <p>
          You have to realise that there are LITERALLY MILLIONS of people doing
          this, they&apos;re not born with a special “gift”, nor are they more
          skilled than you, they simply are willing to put in more work.
        </p>
        <p>
          With the thousands of views you bring in on TikTok, do you really
          think getting sales will be hard? Especially if you know how to make
          content correctly so it goes viral.
        </p>
        <p>
          I&apos;ve done this countless times on my own tiktok account and I
          will show you how to do the same as well.
        </p>
        <h2 className="text-xl font-bold text-center">
          There is a video resource with this lesson, click{" "}
          <a className="text-blue-500" href="/videos/10kamonthin2024">
            here
          </a>{" "}
          to watch me breakdown a creators entire traffic funnel spanning across
          different platforms. Importantly, how you can copy their strategy too.
        </h2>
        <div className="text-gray-700 space-y-4">
          <p>With that being said, I wish you the best of luck 🤝</p>
        </div>
        <Backtolessons />
      </div>
    </div>
  );
};

export default VideoBlog;
