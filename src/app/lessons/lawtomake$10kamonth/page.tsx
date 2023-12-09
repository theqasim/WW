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
          I Started Making $10,000/mo After Learning this FORGOTTEN Law
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="N5_x1olKD8s" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          In this lesson I will show you the law I use as well as other
          successful people.
        </h2>
        <h2 className="text-xl font-bold text-center">
          I will show you the best way to make money online right now, and where
          you should actually be focussing your time for the greatest return.
        </h2>
        <h2 className="text-xl font-bold text-center">
          My name is Qasim and I have been making online since the age of 14,
          and I run multiple businesses on a day to day basis, which once was a
          goal of mine.
        </h2>
        <h2 className="text-xl font-bold text-center">
          The CRAZIEST part of all of this is that all the top people in the
          industry like Iman Gadhzi, Luke Belmar, Alex Hormozi use this law too,
          but NO ONE talks about this.
        </h2>
        <h2 className="text-xl font-bold text-center">
          It&apos;s very easy to implement and it will improve your ability to
          make money online.
        </h2>
        <h2 className="text-xl font-bold text-center">
          You can start using this law TODAY, so let&apos;s dive in.
        </h2>
        <h2 className="text-xl font-bold text-center">The Law of Magnetism</h2>
        <p>Here&apos;s an example:</p>
        <p>
          You truly do not like your job, you hate the 9-5 lifestyle, you do not
          like waking up early and getting back super late.
        </p>
        <p>
          You want to leave the 9-5 life, but you doubt your capabilities as a
          person.
        </p>
        <p>
          Instead of doubting your abilities, you change your thoughts to align
          with your desired outcome.
        </p>
        <p>
          In this case, you think about running an online business so you can
          quit your job.
        </p>
        <p>
          The <b>important</b> part here is not only did you visualise it and
          believe it was possible, but you took action towards it.
        </p>
        <p>
          You started researching side hustles, you paid for mentorship so you
          can be coached by someone that has done this before to make it easier
          for you.
        </p>
        <p>
          A few months down the line your side hustle scaled up to surpass your
          jobs income, you quit your job and you are <b>EXACTLY</b> where you
          visualised you wanted to be a few months back.
        </p>
        <p>
          You changed your thoughts and actions to align with your goal, and it
          became magnetic, you gradually achieved it.
        </p>
        <p>Let me show you how I did this:</p>
        <img
          className="shadow-lg"
          alt="ad sense history"
          src="/resources/adsensehistory.png"
        ></img>
        <p>
          I wanted to build another stream of income for myself, so I worked
          hard on a faceless YouTube channel to build the views and make money
          from the revenue. Here is the revenue from the channel.
        </p>
        <p>
          The important part is I truly believed this was possible, there was no
          doubt, no fear, no lack of belief in my abilities to accomplish this
          outcome.
        </p>
        <p>
          I shifted my mind to align towards this goal, and I shifted my actions
          towards this goal which led me to building up a large income stream.
        </p>
        <p>
          <b>REMEMBER:</b> I am not “special”, I am not “lucky”, this law{" "}
          <b>SIMPLY WORKS</b> with anything you want to achieve.
        </p>
        <p>
          You feel like success isn&apos;t for you, or you&apos;re not skilled enough
          for this, but <b>TRUST ME</b> you&apos;re capable of this.
        </p>
        <p>
          You&apos;re starting to see how anyone can achieve this, even{" "}
          <b>YOU</b>.
        </p>
        <p>
          Take a second and ask yourself, is your life where you want it to be?
        </p>

        <p>Are you living in a reality that you&apos;re truly happy with?</p>
        <p>
          If the answer is anything but <b>YES</b>, do this:
        </p>
        <ul className="list-disc list-inside  mb-6">
          <li>
            <b>
              Assess your current situation, analyse every element of it. What
              time you wake up, do you go to the gym, are you eating healthy,
              are you confident etc.
            </b>
          </li>
          <li>
            <b>
              Set your goal, and truly tell yourself{" "}
              <b>you are capable of achieving this</b>, and <b>visualise</b>{" "}
              what achieving this goal would look like in your life.
            </b>
          </li>
          <li>
            <b>
              Recognize what changes you need to make to your current situation
              to align your action towards the goal.
            </b>
          </li>
        </ul>
        <p>
          BOOM, that&apos;s it. You&apos;re now utilising{" "}
          <b>The Law of Magnetism.</b>
        </p>
        <p>
          BUT, this is only one piece of the puzzle, there are others I used and
          other successful people use to push themselves further in their life.
        </p>
        <p>
          This is how I can help YOU, click the link below and get access to a
          detailed PDF on how I reprogrammed my subconcious mind to achieve my
          goals.
        </p>
        <a href="https://www.qasim.biz/pdf" className="text-green-500">
          Click Here for the FREE PDF
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
