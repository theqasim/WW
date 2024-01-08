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
          Best Way To Make Money Online In 2024
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="3G_nsdvzaik" opts={opts} onReady={onReady} />
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
          I will show you the best way to make money online, and if you&apos;re
          wondering how effective this is, not only have I done this countless
          times over the last 8 years, but so do many people, and it&apos;s not
          often talked about as a great way to make money online.{" "}
        </h2>
        <h2 className="text-xl font-bold text-center">
          The Best Way To Make Money Online In 2024 is….
        </h2>
        <h2 className="text-xl font-bold text-center">
          Creator Ecosystem Model.
        </h2>
        <h2 className="text-xl font-bold text-center">
          This model involves you simply being yourself, and using that to your
          advantage to garner an audience online, and then monetize that
          audience through a variety of ways.
        </h2>
        <h2 className="text-xl font-bold text-center">
          You may be thinking, “I&apos;m I the right person to make content
          online?” or “Isn&apos;t it very hard to gain popularity online?”
        </h2>
        <p>
          Take my TikTok for example, all I am doing is low effort videos that
          take me 2-3 minutes a day to record at my desk and I am bringing in
          THOUSANDS of views daily. It&apos;s so easy to do on TikTok once you
          apply what I&apos;ll show you in this video.
        </p>
        <p>
          In case you&apos;re wondering whether TikTok is the only place this
          will work, I&apos;ve done this on YouTube multiple times too.
        </p>
        <p>
          Take this channel for example, it originally was a channel in the
          sneaker botting niche, I made a podcast, spoke to prevalent figures in
          the niche and brought in THOUSANDS of views and a lot of money in ad
          sense, but also through other ways which i&apos;ll show you to how to
          do in this video too.
        </p>
        <p>
          Now that you&apos;re convinced literally ANYONE can do this,
          considering I&apos;ve done this, I will show you the steps on how to
          make money online using the Creator Ecosystem Model, and trust me step
          3 is by far the most important that has created the top people
          industry like Iman gadhzi, Alex hormozi, Luke Belmar etc.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 1: Choose a topic
        </h2>
        <p>
          CThe first step is to choose a topic, simply write down 5 things
          you&apos;re interested in that you can base your Creator Model on.
          This is one of the most important parts, but once you do that, we need
          to now consider the economic viability of your chosen topics, we need
          to make sure we can make money with it.
        </p>
        <p>It needs to align with any of the following:</p>
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
            <b>Happiness</b>
          </li>
          <li>Technology</li>
        </ul>
        <p>
          The reason for this is because there&apos;s a market for these
          problems, and if we can solve people&apos;s problems within these
          niches, we can make money through the content so easily.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 2: Validate your chosen topic.
        </h2>
        <p>
          Now we need to validate the chosen topic through market research,
          pretty simple do a youtube search on your topic, for example, if I
          said I was interested in teaching people how to grow on YouTube, I
          would search up the term, look at the videos as well as when they were
          posted to judge the demand and whether people are still interested in
          this.
        </p>
        <p>
          If there is an active market, great news, you can start making money
          with your chosen topic.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 3: Understanding your natural advantage
        </h2>
        <p>
          I cannot stress this enough, YOU as a person are unique in your own
          ways. You need to play to your own strengths and lean into what makes
          YOU, YOU. Feel free to reuse concepts that are successful so you can
          bring in views easily, but put your spin on it, let your personality
          be present in the content.
        </p>
        <p>
          People do not want to see a carbon copy of the most prevalent and
          popular figures online. When applying this approach, always remember,
          people will hate you, people will love you, but they won&apos;t feel
          indifferent as you&apos;re being original so you will stand out.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 4: Monetizing your audience
        </h2>
        <p>
          Now you&apos;re building your audience, but how do you make money from
          it?
        </p>
        <p>
          Trust me, it&apos;s so easy to do because you&apos;re in the best
          position now as you have an audience to leverage no matter what you
          choose to do.
        </p>
        <p>
          The most direct way is through ad placement, monetizing the content
          through the platforms ad monetisation system, which is not to be
          overlooked, my faceless YouTube channel makes very decent money from
          low effort content all through YouTube ads.
        </p>
        <p>
          Zooming out, you can direct the audience to products or services that
          are within your niche to make you money IF you frame it correctly.{" "}
        </p>
        <p>
          You can make thousands of $ easily by showing the audience part of
          your solution to the problem they&apos;re trying to solve, and that
          will increase their willingness to buy using your affiliate link,
          which makes you a ton of money.
        </p>
        <p>
          Zooming out EVEN MORE, this is where you can go from making thousands
          to MILLIONS. Going back to the top guys in the industry, they become
          millionaires through selling their own products and services, because
          their audience are so invested in them, they love to purchase things
          built by them as not only does it help them solve their problem, but
          it also feels like they&apos;re supporting the creator.
        </p>
        <p>
          For example, Iman Gadhzi made his first million through his ad agency,
          but he made MULTIPLE millions and reached a whole new level through
          selling a high level course and community called Educate.
        </p>
        <p>
          He is selling a high ticket product showing people how to do what he
          once did, and given the size of his audience, he is making MILLIONS,
          now here&apos;s how you can do it too.
        </p>
        <p>
          To create this product or service, don&apos;t reinvent the wheel, but
          if you want to make the most money, take what works in the market, and
          innovate it which you can use to your advantage when marketing it to
          your audience.
        </p>
        <p>
          I&apos;ll give you an example, let&apos;s your in the wealth niche,
          and people are selling paid groups on how to make money online. The
          offering is a discord group with info, now how can YOU improve this?
          You can create video courses talking about different subtopics on
          making money online, you can create resources that people can use in
          the group.
        </p>
        <p>
          You&apos;re created improved products and services to show your
          audience that what you&apos;re offering is better than the rest of the
          market.
        </p>
        <h2 className="text-xl font-bold text-center">
          There is a video resource with this lesson, click here to watch me
          breakdown a creators entire traffic funnel spanning across different
          platforms, different types of content that all leads to them making
          $300k+ a month. Importantly, how you can copy their strategy too.
        </h2>{" "}
        <div className="text-gray-700 space-y-4">
          <p>With that being said, I wish you the best of luck 🤝</p>
        </div>
        <Backtolessons />
      </div>
    </div>
  );
};

export default VideoBlog;
