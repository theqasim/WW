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
          I found the 5 laziest ways to make money online
        </h1>
        <video ref={videoRef} controls className="w-full mb-6">
          <source
            src="https://www.dropbox.com/scl/fi/rju41l1rmcd68aqundh2s/How-I-would-start-Dropshipping-with-0.mp4?rlkey=7ssy5ez50kh6mjnlpsx2rbhfq&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
          Here is my backstory:
        </h1>
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
          YouTube
        </h1>
        <h3 className="">
          I&apos;ve personally used this method for years to make money online.
          Very simply you create content and you make money through the ad
          revenue. Here is a few of my months on one of my channels:
        </h3>
        <img
          className="shadow-lg"
          alt="ad sense history"
          src="/resources/adsensehistory.png"
        ></img>
        <p>
          This is all from making videos within a niche, and people watching the
          videos. I will show you how to make videos that are successful, so you
          can expedite your process to becoming monetized, bring in a lot of
          views and make a lot of money.
        </p>
        <p>
          Very simply, pick a niche, for example, I am in the make money online
          niche. I can search for a term that is often searched by viewers in
          this niche, look through the content and peoples channels, and look at
          what content performs well.
        </p>
        <p>
          Look at when the video was uploaded and how many views it has, if it
          has more than the typical rate (looking at previous video counts to
          establish this) then it&apos;s a good video concept to do, as the
          audience within this niche are interested in it.
        </p>
        <p>
          The longer your videos are, the more money you can potentially make
          from the videos
        </p>
        <p>
          Not only can you make money from the adsense, you can make money from
          leveraging your audience to bring in more money through being an
          affiliate, selling your own products, selling ad spots etc.
        </p>
        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
          Selling Digital Products
        </h1>
        <p>
          In this method you will be creating digital products and selling them.
          Etsy and other stores are doing crazy numbers with this ($300k+) and
          it is very easy to do.
        </p>
        <p>
          You can sell pretty much any digital product you can think of, here
          are a few examples:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>Planners</b>
          </li>
          <li>
            <b>Business Card Designs</b>
          </li>
          <li>
            <b>Coloring Books</b>
          </li>
          <li>
            <b>Fonts </b>
          </li>
        </ul>
        <p>
          To create these products, you can go onto any freelance marketplace
          such as upwork or freelancer, and post a job asking for someone to
          help you create what you want to sell. Look through the applicants,
          and pick the one most suitable.
        </p>
        <p>
          Once they&apos;ve made the digital product, list the product on etsy,
          use AI to create the title and description, and provide your listing
          13 tags (max tags).
        </p>
        <p>
          Once you&apos;ve done this, you can either wait for the sales to
          organically come in, or market the product from 0 through doing the
          following:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>Tiktok & IG Reels</b>
          </li>
          <li>
            <b>Etsy Ads</b>
          </li>
          <li>
            <b>
              Influencers to promote your product (the deal would be an
              affiliate relationship, they take a % of sales referred and you
              keep the rest)
            </b>
          </li>
        </ul>
        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
          TikTok Creativity Program:
        </h1>
        <p>
          People are making $10k+ a month all by posting TikToks. Here are some
          results you can look at:
        </p>
        <img
          className=""
          alt="tiktok creativity fund results"
          src="/resources/tiktokcreativityresults.png"
        ></img>
        <p>
          The platform itself is very easy to get views on, by far it&apos;s the
          easiest platform to blow up on and get traction. To join the
          creativity program, you need the following:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>Be 18+</b>
          </li>
          <li>
            <b>
              Be in any of the following countries: US,UK,France, Brazil and
              Germany
            </b>
          </li>
          <li>
            <b>100k views in the last 30 days</b>
          </li>
          <li>
            <b>10,000 followers.</b>
          </li>
        </ul>
        <p>
          If you want to make this easier for yourself, you should take existing
          content, clip it up and post it on TikTok. Here are the reasons why
          this is easier than creating content yourself:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>You do not need to make any original content.</b>
          </li>
          <li>
            <b>You&apos;re posting content that already has an audience.</b>
          </li>
        </ul>

        <p>Here is an example of someone that is utilising this very well:</p>
        <img
          className="shadow-lg"
          alt="Iman Gadhzi TikTok Account"
          src="/resources/imantiktokaccount.png"
        ></img>
        <p>
          As you can see this person is posting Iman Gadhzi clips with some
          small text on it loosely related to the video and they&apos;re
          bringing in views, which is making them a lot of money for very little
          effort.
        </p>
        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
          Selling Digital Products
        </h1>
        <p>
          This can be one of the most lucrative methods on the list, very simply
          you pick a service you can fulfil, and you gear it towards helping
          businesses.
        </p>
        <p>
          I actively use this method in my digital agency and I have been doing
          this for years. It is how I made my first $100k, and I can bring in
          numbers like these monthly through offering a range of media services
          that I&apos;ve refined over years of working online.
        </p>

        <img
          className="shadow-lg"
          src="/resources/mediabusinessproof.jpg"
          alt="media business proof"
        ></img>

        <p>
          You have two options when selling services to businesses, either aid
          their ability to make money (marketing, management etc), or you can
          directly make them money and take a % of that (closing, appointment
          setting etc)
        </p>

        <p>
          Personally, if I had to start from $0, I would help them directly make
          money as it&apos;s easier, and the learning curve isn&apos;t as steep
          compared to learning a high income skill. It&apos;s pretty easy to
          find jobs for these types of roles.
        </p>
        <p>
          Head over to Twitter, search up “Looking for appointment setters” and
          look through the posts of people who are hiring. Contact them and try
          land the role.
        </p>
        <p>
          If you want more help with learning high income skills, check the top
          link in the YouTube description, it&apos;s free and can definitely
          help you out.
        </p>

        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
          X/Twitter Monetisation:
        </h1>
        <p>
          This method of making money online will support the others and all you
          are simply doing is being active on Twitter/X, they are now competing
          with YouTube by paying creators and through your impressions you will
          make money. The requirements are the following:
        </p>

        <img
          className="shadow-lg"
          src="/resources/xmonetisationrequirements.png"
          alt="X/Twitter Monetisation Requirements"
        ></img>

        <p>
          This is very easy to attain, if you&apos;re putting out good content
          you will attract people very easily and your account will grow
          quickly.
        </p>
        <p>
          The fastest to bring in an audience to your account is through posting
          content that has succeeded on other platforms on X.
        </p>
        <p>
          Look at this page below, all they do is post content from TikTok and
          other platforms. Due to the fact that this content did well on other
          platforms, they know it will do well on X.
        </p>

        <img
          className="shadow-lg"
          alt="X/Twitter account success"
          src="/resources/xaccountsuccess.png"
        ></img>

        <h1 className="text-xl font-bold mb-4 text-center text-gray-800">
          Secret to making money online:
        </h1>

        <p>
          This is the secret <b>Iman Gadhzis, Luke Belmar, Jordan Welch</b> keep
          hidden away and do not reveal to you. You are 100% guaranteed to
          succeed if you do this.
        </p>
        <p>Very simply it is this, you need to try your best.</p>

        <p>Is that a logical thing to say?</p>

        <p>
          Yes, but is it something you do? Definitely not, you may trick
          yourself into thinking so, but I assure you, if you did, you would be
          successful. The rich people online are not “special”, they are simply
          people who kept going when you didn&apos;t. They are prepared to work
          more, which enables them to succeed more than you do. If you apply
          this to any craft, your ability to make money online will sky rocket,
          trust me, I make my living online and it&apos;s extremely easy to do
          once you understand this
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
