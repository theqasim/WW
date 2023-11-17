"use client";

import React from "react";
import Link from "next/link";
import Plyr from "plyr";
import { useEffect, useRef } from "react";
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
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Make Your First $1,000 in 24 Hours TYPING
        </h1>
        <video ref={videoRef} controls className="w-full mb-6">
          <source
            src="https://www.dropbox.com/scl/fi/rju41l1rmcd68aqundh2s/How-I-would-start-Dropshipping-with-0.mp4?rlkey=7ssy5ez50kh6mjnlpsx2rbhfq&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h2 className="text-xl font-bold text-center">
          In this lesson I will break down exactly how to make your first $1000,
          in the next 24 hours, by literally typing messages. The best part is
          this will cost you a grand total of $0 to do.
        </h2>
        <h2 className="text-xl font-bold text-center">
          You can do this anywhere in the world at any age, so this information
          is applicable to everyone.
        </h2>
        <h2 className="text-xl font-bold text-center">
          If I went broke today, I would do this.
        </h2>
        <p>
          We&apos;re going to be using the <b>Service Based Business Model</b>,
          paired with utilising other peoples platforms to make you money.
        </p>
        <p>
          You sell your services to people with huge audiences to help them make
          money, but importantly make yourself money.
        </p>
        <p>
          <b>Key relationship:</b> Your ability to make the prospect money, will
          increase the money you make, it&apos;s very simple to understand.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 1 - Locating Prospects:
        </h2>
        <p>
          We are looking for people on Instagram in the{" "}
          <b>make money online niche</b>
          as they likely have a <b>paid offer</b> that we can help them bring in
          more sales.
        </p>
        <p>
          Search up any term in this niche, I will use the <b>stocks</b> term
          for this example. Look through the search results and find a prospect
          that is selling an offer or some type of product.{" "}
        </p>
        <p>
          Examine their profile to understand how they&apos;re building an
          audience, the more you know about them, the better you&apos;ll be able
          to help them.
        </p>
        <p>
          Look at their website, or how they&apos;re selling their
          product/service.
        </p>
        <p>
          If their website does not sell the products in the best way,
          that&apos;s a way you can help them.
        </p>
        <p>
          It&apos;s important to remember, if you&apos;re broke with the skill
          to help people make money, you&apos;re just cash broke, and that
          problem can be solved very easily, i&apos;ll show you how.
        </p>
        <p>
          We&apos;re going to help them sell better than they currently do, all
          by typing a few words.
        </p>
        <p>
          This skill is called <b>copywriting</b>
        </p>
        <p>The next step is to message the prospect.</p>
        <h2 className="text-xl font-bold text-center">
          Step 2 - Use this script for $$$:
        </h2>
        <p>
          You&apos;ve contacted them, they reply to you, but what do you say?
        </p>
        <p>
          This part is <b>crucial</b>, the ball is in your court, if you mess
          this up, the lead is gone and it will be hard to get them interested
          again.
        </p>
        <p>Which is why you&apos;re going to use this script:</p>
        <p className="font-bold">If you have previous clients:</p>
        <p>(Prospect Reply)</p>
        <p>
          Great, we just helped one of our clients get (insert result) they do
          (x niche) too.
        </p>
        <p>
          Would you be okay with me sending you a video of how we did this for
          the client?
        </p>
        <p>
          Not expecting anything in return, I just really like your content.
        </p>
        <p>If so, what&apos;s your email and i&apos;ll send it over now</p>
        <p>(Prospect Reply)</p>
        <p>Great, I just recorded it and sent it over.</p>
        <p className="font-bold">If you don&apos;have previous clients:</p>
        <p>(Prospect Reply)</p>
        <p>Great to hear.</p>
        <p>I love your page.</p>
        <p>
          I am doing a case study where I see if I can make influencers an extra
          $10-$30k without them having to do too much using new techniques
          I&apos;ve studied that are bringing in crazy results.
        </p>
        <p>
          I&apos;m sure you get plenty of DM&apos;s like this, so I recorded a
          video showing you do I&apos;d do this.
        </p>
        <p>Is it okay if I send it here?</p>
        <p className="font-bold">
          Relax, you&apos;re simply making yourself seem of importance.
        </p>
        <p>
          It&apos;s important to remember that if you have no previous results,
          the prospects hold a lot of the power in the conversation, so you need
          to do things (such as this) to shift the power in your favour slightly
          so they can <b>trust you</b>.
        </p>
        <h2 className="text-xl font-bold text-center">
          Let&apos;s assume the prospect says they&apos;re{" "}
          <a className="text-red-500">not interested</a>:
        </h2>
        <p>
          <b>Great</b>, rejection isn&apos;t the end of the road here, your DM
          is now open with them so they&apos;ll get a push notification when you
          message them again. Follow up with them a few weeks down the line and
          keep iterating your offer, compliment their brand, overall, be
          persistent.{" "}
        </p>
        <p>
          A little tip to help improve your acceptance rate is to ensure your
          profile is professional and populated with posts or content,
          don&apos;t look like some random bot.
        </p>
        <p>
          Create content that provides value, it isn&apos;t hard. Simply sit
          down for a few minutes a day and post 1 reel a day, not only will you
          get followers, but you&apos;ll appear more professional, which will
          increase your acceptance rate.
        </p>
        <h2 className="text-xl font-bold text-center">
          Let&apos;s assume the prospect says they&apos;re{" "}
          <a className="text-green-500">interested</a>:
        </h2>
        <p>
          Now, we need to make the video for the prospect, let&apos;s move over
          to that. It&apos;s important to do this quickly and send it to them,
          overall it looks better on your behalf.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 3 - How to record the video for the prospect:
        </h2>
        <p>
          Head over to{" "}
          <a href="https://www.loom.com" className="text-blue-500">
            Loom{" "}
          </a>
          which is a free recording software that will allow you to record your
          camera, microphone and screen. Start the recording and make sure the
          starting frame is their Instagram page as that will catch their
          attention.
        </p>
        <p>
          After giving the value in the video, pitch the idea of a zoom call so
          you can discuss your offer to them and close them.{" "}
        </p>
        <p>
          Watch the YouTube video if you want to see a LIVE recording of me
          pitching a client.
        </p>
        <h2 className="text-xl font-bold text-center">
          <h2 className="text-xl font-bold text-center">
            Step 3 - How to record the video for the prospect:
          </h2>
        </h2>
        <p>There is a variety of ways to go about this, here are a few:</p>
        <p>Ask for a one time payment upfront</p>
        <p>
          Ask for commission for the sales you refer with your work (
          <a className="text-green-500">recommended</a>).
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 5 - What will you be selling them?
        </h2>
        <p>
          You will be selling on behalf of the person you reach out to.
          It&apos;s a lot easier than you think. You&apos;ll have access to
          their social accounts and you can use their platform to speak with
          warm potential leads.
        </p>
        <p>
          I went through a sample conversation in the YouTube video. Those
          videos you see the people send the potential customers will be done by
          the influencer, use this script to give them a guide on what to say:
        </p>
        <a href="https://www.loom.com" className="text-blue-500">
          https://drive.google.com/file/d/1mBNxcmur7UCI99SpVNBZOcvOw9A-xiDU/view?usp=drive_link
        </a>
        <div className="text-gray-700 space-y-4">
          <p>With that being said, I wish you the best of luck 🤝</p>
        </div>
        <Backtolessons />
      </div>
    </div>
  );
};

export default VideoBlog;
