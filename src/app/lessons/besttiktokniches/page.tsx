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
          I Found The Highest RPM TikTok Creativity Program Niches{" "}
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="N5_x1olKD8s" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          TikTok&apos;s creativity program is blowing up at the moment and
          people are earning thousands a month, in this video I will go over the
          top niches to start making content in so you can maximise your
          profits, as well as give you some advice on how to stand out from
          everyone else and bring in more views.
        </h2>
        <h2 className="text-xl font-bold text-center">
          I&apos;ll also cover a secret tip to ensure you bring in the most
          amount of views for yourself, and if you follow the tip as well as the
          rest of the info in this video your page will make you no money and
          you will be wasting your time.
        </h2>
        <h2 className="text-xl font-bold text-center">Niche 1:</h2>
        <p>
          The Conspiracy Niche is original content. This niche is very engaging,
          especially when you start the video with a hook, for example, this is
          what they don&apos;t tell you about the pyramids OR time travellers
          exist and here is proof.
        </p>
        <p>
          These hooks not only break the scrolling pattern of the viewer, but
          they watch to the end as they&apos;re very interested in hearing the
          entire story.
        </p>
        <p>
          Which is why this niche is a great niche to start with when creating a
          tiktok page.
        </p>
        <p>
          The videos in niche that do well are made through using AI Image
          generators to create the images, and then using elevenlabs to generate
          the voice in the videos.
        </p>
        <p>
          Just to show you how easy it is to create images, I am going to use
          Midjourney (which is free to use) and generate an image. “time
          traveller on a pyramid”
        </p>
        <img src="/resources/midjourneyresults.png"></img>

        <p>
          As you can see these images are great quality, and if you pair this
          with a solid hood, and the AI voice, you will get a highly engaging
          video that will get views and make you money.
        </p>
        <p>
          Again, Midjourney is completely free so you can do this process over
          and over again and bring in easy views for your page.
        </p>
        <p>
          People love hearing conspiracy theories and there&apos;s thousands out
          there so you will never run out of content.
        </p>
        <h2 className="text-xl font-bold text-center">Niche 2:</h2>
        <p>
          Moving onto Reddit style tiktok videos, I&apos;m sure you&apos;ve seen
          this when you&apos;re scrolling on Tiktok.
        </p>
        <p>
          TikTok pages in this niche are bringing in millions of views on a
          consistent basis and the content is so easy to make and get views on.
        </p>
        <p>
          The reason why this niche does so well is because naturally we pay
          more attention as humans when a story is being told, and all these
          reddit tiktok videos are stories, so the avd increases and that
          validates the video to tiktok to push it more.
        </p>
        <p>
          How you make these videos is by finding some generic content to have
          in the background, find a reddit story, use elevenlabs for the ai
          voice and you&apos;re set.
        </p>
        <p>You can pump out 5 videos like this in under an hour with ease.</p>
        <p>
          If you want to learn more about editing these types of videos to bring
          in more views and money for your page, check the link in the
          description, but this is a great niche to do as well.
        </p>
        <h2 className="text-xl font-bold text-center">Niche 3:</h2>
        <p>
          You&apos;ve definitely seen this from time to time whilst scrolling
          and the content takes two things and it presents it to you, waits a
          few seconds and then shows you the answer.
        </p>
        <p>
          Now this is a method that not many people know about that allows you
          to make 50 of these videos in under 30 minutes. Canva has a feature
          that allows you to create designs in bulk, if you use this and push
          out content, you can get ahead of the competition very easily.
        </p>
        <p>
          You make these videos by searching up a fact you want to display, get
          pictures of the two competing sides, and edit it together. You can
          even add some comedy to the video to get people to comment about it
          which increases engagement and reach, here&apos;s an example
        </p>
        <p>
          It&apos;s a great niche to do, and especially with the Canv feature.
        </p>
        <h2 className="text-xl font-bold text-center">
          It&apos;s very easy to implement and it will improve your ability to
          make money online.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Secret about TikTok Pages:
        </h2>
        <p>
          Now you&apos;ll notice I&apos;ve only suggested original content
          TikTok pages, the reason for this is because TikTok is starting to
          take down these pages and disqualifying their application to the
          creativity program due to “unoriginal content”. This means TikTok will
          not pay you for the views you get.
        </p>
        <p>
          So to save yourself from building up these pages and wasting hours of
          your time, stick with original content, use the tips I mentioned in
          this video to boost your views and bring in easy money for yourself.
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
