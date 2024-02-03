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
          Viral TikTok Niches to make $10,834 in 30 Days{" "}
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="xx3WxSMxnwE" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          Making money on TikTok has never been easier.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Trust me, you do not want to miss out because people are making
          THOUSANDS a month just from using the niches I will mention in this
          video.
        </h2>
        <h2 className="text-xl font-bold text-center">
          If you&apos;re excited, make sure to subscribe and drop a like on the
          video as I have a ton of content teaching you how to make money
          online.
        </h2>
        <h2 className="text-xl font-bold text-center">
          It&apos;s very important to keep in mind that the people that watch
          this video, will copy the exact strategy I showcase, so put your own
          spin on it, and I will show you exactly how to do that as well.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Make sure you watch till the end of the video where I show you how to
          expedite this entire process to make you more money very quickly.
        </h2>
        <h2 className="text-xl font-bold text-center">The Fish News Niche:</h2>
        <p>
          The first niche I want to mention is the news niche, now you&apos;re
          probably thinking, news is a very broad niche.
        </p>
        <p>
          But the way we&apos;re going to approach it is vastly different to
          other people.
        </p>
        <p>
          We&apos;re going to use a character to tell the news to make it more
          entertaining.
        </p>
        <p>
          A great example of this is fishnewsdaily who uses the fish from
          spongebob to talk about news, and they bring in MILLIONS of views.
        </p>
        <p>
          Loads of people are using the fish as it&apos;s seen success but you
          can literally use any character or cartoon.
        </p>
        <p>
          The key is to use a character that people are familiar with as it will
          catch their attention when scrolling.
        </p>
        <p>
          Another example of this the south park news station, they&apos;re
          bringing in MILLIONS of views super easily.
        </p>
        <p>
          A warning with this is that if you&apos;re using these characters, you
          may run into copyright issues given this is from copyrighted media,
          but here&apos;s how to get around this.
        </p>
        <p>
          Go onto fiver, and look up cartoon artist, give them your reference
          and tell them to recreate the character with variations and possibly
          in a different colour or style.
        </p>
        <p>
          That way the character is still recognizable to the viewer, but it is
          not directly using copyrighted media so your videos are at less of a
          risk.
        </p>
        <p>
          When it comes to the news report, you can be a broad page that reports
          on anything happening in the world, as that has mass audience appeal,
          or even niche down and tie your character to the niche you cover.
        </p>
        <p>
          If you&apos;re not fully sold on the character idea, you can take a
          faceless approach so it is more direct.A great example of this is
          nomoredanny who takes clips related to the news that&apos;s happening,
          clips them together and has an AI voice narrating over it with
          captions on the screen.
        </p>
        <p>
          In the past 30 days we have brought in 30M views which is over $30,000
          views for making very easy content.
        </p>
        <p>
          Keep in mind that originally and being unique will be your advantage,
          there&apos;s a reason why tons of people do Reddit story videos and
          get no views. It&apos;s because everyone does it, put your own spin on
          it and watch the views come in.
        </p>
        <p>
          This is a great niche to do as you don&apos;t come up with the content
          yourself, you simply report what is happening in the world and bring
          in a ton of money.
        </p>
        <h2 className="text-xl font-bold text-center">
          The Geo Location Niche:
        </h2>
        <p>
          The next niche is GEO Location, and this page is a great example of
          that, they got nearly 100k followers in 30 days all simply showcasing
          celebrity houses.
        </p>
        <p>
          They&apos;re most viewed video has over 10m views, which is over
          $10,000 views with a $1 RPM.
        </p>
        <p>
          How they make these videos is super simple, head over to google earth
          studio and sign up.
        </p>
        <p>
          As you can see on google earth studio, you can view any place on earth
          in a very cool looking way.
        </p>
        <p>
          All this tiktok page does is show off the celebrities house with a
          picture of them at the top with the valuation of the property which
          can very easily be found online.
        </p>
        <p>
          It&apos;s very easy content to make and you can very easily make money
          with this.
        </p>
        <p>
          You can put a spin on it and target a different niche, whether that&apos;s
          famous monuments, or famous battlegrounds, the possibilities are
          endless.
        </p>
        <p>
          The quality of google earth studio is INSANE which makes the content
          super engaging and beneficial for you.
        </p>
        <h2 className="text-xl font-bold text-center">
          The AI Generates Videos Niche:
        </h2>
        <p>
          Moving onto the next niche, we have AI generated videos, but not in
          the way you think.
        </p>
        <p>
          GPT-4 is now integrated with images, which chatgpt the ultimate
          content creation tool.
        </p>
        <p>
          You can literally give it any prompt and it will generate detailed
          content that you can use.
        </p>
        <p>
          This page (https://www.tiktok.com/@aistorymaster_) is creating swipe
          format content where they have minecraft parkour in the background,
          and have an ai voice read out the chatgpt prompt.
        </p>
        <p>
          This page is bringing in MILLIONS of views just by copying emerging
          trends with this type of content and is bringing in THOUSANDS.
        </p>
        <p>
          It&apos;s super easy to make as you&apos;re creating either a video or a
          carousel where the image progressively gets more detailed towards a
          certain theme, whether it be uglier, cuter, angrier etc.
        </p>
        <p>
          You can literally bring in MILLIONS of views without creating any
          content and taking a few screenshots.
        </p>
        <p>
          Keep in mind, this will get saturated very quickly, so examine what
          works, put your own spin on it and watch the money and views come in.
        </p>
        <p>
          So very simply, you need to pick a niche to make content and money in,
          I&apos;d suggest you pick any of the following niches:
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
