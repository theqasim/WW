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
          The Laziest Way To Make Money Online in 2024{" "}
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="N5_x1olKD8s" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          In this lesson I will show the LAZIEST way to make money online in
          2024.
        </h2>
        <h2 className="text-xl font-bold text-center">
          I&apos;ve covered a lot of other ways to make money online on my
          YouTube channel, a lot of them require a lot of time, money and skill
          to do.
        </h2>
        <h2 className="text-xl font-bold text-center">
          These are great ways to make money, and to build a business for
          yourself, but if you want a lazy to make money consistently, the
          opportunity I will reveal to you in this video IS BY FAR the laziest
          way to make A LOT OF money.c
        </h2>
        <h2 className="text-xl font-bold text-center">
          Genuinely, people with very little knowledge, skill or expertise in
          ANYTHING are MAKING THOUSANDS from this, and this is not talked about
          at all.
        </h2>
        <h2 className="text-xl font-bold text-center">
          This opportunity is on TikTok, now before you jump to conclusions,
          this is NOT the creativity program, this is another way to make money
          on the app, in my opinion the easiest way.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Think back to when you&apos;re scrolling on the app, and you see a
          person talking about their experience using a product, the content
          looks raw and personal, but then at the bottom of the TikTok they have
          a product linked, this is because they&apos;re an affiliate of the
          product they&apos;re selling you in the video.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Now, you might be asking yourself, is this hard to do? Or, Do I need
          to know how to sell?
        </h2>
        <h2 className="text-xl font-bold text-center">
          Trust me, it is way easier than you think.
        </h2>
        <h2 className="text-xl font-bold text-center">
          At the end of this lesson, there is an exclusive video lesson
        </h2>
        <h2 className="text-xl font-bold text-center">What is TikTok Shop?</h2>
        <p>
          TikTok as an app has evolved to the point where they allow people to
          sell their products through TikTok Shop, but more importantly they
          allow TikTokers to make money through collecting a % of every sale
          referred.
        </p>
        <p>This % can range from 5-30% per every sale you refer.</p>
        <p>
          Now, the biggest question here is how are you going to refer sales,
          here&apos;s the best part, you&apos;re not going to sell the audience
          directly, you&apos;re going to create super easy content about the
          product and allow the sales to come organically.
        </p>
        <p>
          <a
            className="text-blue-500"
            href="https://www.tiktok.com/@nomiresotenamoras/video/7309096325818158369?q=tongue%20scraper&t=1705621166784"
          >
            Here
          </a>
          is a great example
        </p>
        <p>
          This product the tongue scraper is super popular at the moment and you
          can see in the video there was no selling, there was no “guys you need
          to buy this right now whilst stock lasts”, it was just him sharing his
          experience and linking the product to the TikTok.
        </p>
        <p>
          And if you&apos;re still not convinced this is the way to sell on
          TikTok, this video got over 11 MILLION views, the reason why it did is
          because people are watching the entire video as it is not salesy, and
          I can guarantee he made THOUSANDS from affiliate commissions just from
          this 1 video alone.
        </p>
        <p>
          The key takeaway is his raw experience is doing the selling, not him
          pitching the product.
        </p>
        <h2 className="text-xl font-bold text-center">
          How can you do it yourself?
        </h2>
        <p>
          Now that you can see this is very easy to do, I am going to show you
          how to do it yourself.
        </p>
        <p>
          Super simple, make a TikTok account and brand it as your own account.
        </p>
        <p>
          Now you have to make point and shoot content from your phone
          that&apos;s easy to film about the products on the TikTok shop.
        </p>
        <p>
          A great example is the tongue scraper, and here is the best framework
          for your content to ensure it goes viral.
        </p>
        <p>
          You highlight the proposed benefit of the product, you use the product
          and highlight the benefit being actualized, and offer a lively
          reaction.
        </p>
        <p>
          This is the literal blueprint of how these random creators are
          bringing in millions of views and these videos take them 5 minutes to
          film.
        </p>
        <p>
          Do 1 of these a day for a month, you spend 150 minutes making low
          effort content, bringing in THOUSANDS for literally 2.5hrs of work.
        </p>
        <p>
          If you&apos;re not convinced you can make your content go viral, here
          is my TikTok page where I can easily bring in THOUSANDS of views on a
          daily basis with low effort content, if I can do it, and random
          everyday people can do it, so can you.
        </p>
        <p>
          To help you out, I recorded a video breaking down one of these peoples
          pages, how they&apos;re structuring their content when promoting
          products, and how you can copy their strategy to bring in a lot of
          money.
        </p>
        <h2 className="text-xl font-bold text-center">
          There is a video resource with this lesson, click{" "}
          <a
            className="text-blue-500"
            href="/videos/laziestwaytomakemoneyonline2024"
          >
            here
          </a>{" "}
          to watch me breakdown a creators entire traffic funnel spanning across
          different platforms, different types of content that all leads to them
          making $300k+ a month. Importantly, how you can copy their strategy
          too.
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
