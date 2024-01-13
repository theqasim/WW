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
          The BEST TikTok Niche in 2024 (Creativity Program){" "}
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="NZ8vwZmvkR4" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          I will show you how to create viral tiktoks to allow you to make money
          through the creativity program.
        </h2>
        <h2 className="text-xl font-bold text-center">
          All these videos are original content meaning you can actually
          monetize your content.
        </h2>
        <h2 className="text-xl font-bold text-center">
          By the end of this, you will have learned a skill that can make you
          THOUSANDS of $ a month.
        </h2>
        <h2 className="text-xl font-bold text-center">
          I will take you step by step through the entire process showing you
          exactly how to create these videos.
        </h2>

        <p>
          In case you don&apos;t know what the tiktok creativity program is, it
          is a monetisation program that allows the average person to make
          THOUSANDS a month by just posting short form content on TikTok.
        </p>
        <p>
          The content is SUPER easy to make you can see, and that&apos;s why you
          have people like Musa making $20k a month all from posting tiktoks.
        </p>
        <p>
          He has scaled his business to the point where he&apos;s filming
          content on private jets, so you can clearly see how lucrative this is.
        </p>
        <p>
          The type of content we will be making is the viral stoic motivation
          videos, and they&apos;re bringing in millions of views on TikTok which
          results in THOUSANDS being made.
        </p>
        <p>
          The type of content we will be making is the viral stoic motivation
          videos, and they&apos;re bringing in millions of views on TikTok which
          results in THOUSANDS being made.
        </p>
        <p>
          Very simply, its content that appeals to the masses, everyone can
          benefit from stoicism and the core values are things everyone is
          interested in, so people watch the video for longer periods of time,
          that increases the AVD which pushes the video out to more people,
          leading to more views and more money.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 1: Generating Quotes
        </h2>
        <ul className="list-disc list-inside ">
          <li>
            <b>The quotes aren&apos;t entertaining</b>
          </li>
          <li>
            <b>
              The quotes have no storytelling so the AVD isn&apos;t the best it
              can be
            </b>
          </li>
          <li>
            <b>
              The quotes are too short so it results in the tiktok being under 1
              minute which does not allow them to take advantage of the
              creativity program.
            </b>
          </li>
        </ul>
        <p>
          Which is why you&apos;re going to adopt the approach of looking up
          long form stoic stories/quotes, taking that content and using it for
          your tiktok videos.
        </p>
        <p>
          Head over to YouTube, look up stoic life lessons which is a channel
          that does long form stoic content, click on the transcript button on
          the video, and copy the content as that is what we&apos;re going to
          use.
        </p>
        <p>
          This will allow you to bring in more views with your content, but also
          more money.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 2: Generating AI Voice
        </h2>
        <p>
          Now we need a voiceover to read the content, head over to elevenlabs,
          which is an AI Voice generator, and simply select a voice that is
          suitable for the stoic content, I&apos;d recommend “Adam” as it is
          perfect for this type of content.
        </p>
        <p>
          Enter the transcript from the video, and then click on generate, here
          is what the voice sounds like.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 3: Finding Video Background Content
        </h2>
        <p>
          Now the one thing that will allow you run laps around the existing
          pages in this niche is to pivot away from the typical stoic statue
          background videos, and use clips from relevant tv shows that people
          are aware of that suite this niche, game of thrones is a great example
          of this.
        </p>
        <p>
          Go onto youtube, type in game of thrones jon snow battle battle, find
          a suitable clip, go to a youtube to mp4 converter and download the
          video.
        </p>
        <p>
          We&apos;re going to also sprinkle in a few AI images to vary the
          content in the videos, head over to leonardo.ai which is a free ai
          image generation tool, type in “stoic philosophers”, take the images
          that are generated as those will also be used in the video too.
        </p>
        <p>
          Keep in mind, you can reuse the content in the future too so this will
          become very easy.
        </p>
        <h2 className="text-xl font-bold text-center">
          Step 4: Making the content
        </h2>
        <p>
          Now we&apos;re going to combine everything together to make the video.
        </p>
        <p>
          Head over to capcut on either desktop or mobile, it&apos;s free on
          both, and now we&apos;re going to make the video, don&apos;t worry
          it&apos;s super simple to do, just follow these steps.
        </p>
        <p>
          The next step is to take your visual elements onto the timeline, after
          doing this, set the aspect ratio to 9:16 as this is needed to make the
          content suitable for tiktok.
        </p>
        <p>
          Then begin resizing the clips, and start cutting up the content, a tip
          with this part is to keep each flip between 3-5 seconds, so there is
          always something new on the screen for the viewer to view.
        </p>
        <p>
          Once your visuals are done, we need to drag the audio on the timeline,
          remove any gaps from the audio if there is any, then click text, then
          click auto caption and click create. This will start auto creating
          captions for you.
        </p>
        <p>
          Visually the captions dont look great, so you can edit the captions to
          make them look more visually appealing which will increase AVD, bring
          in more views and bring in more money.
        </p>
        <p>
          If you do this consistently, you will bring in major success on the
          tiktok creativity program and can very easily make THOUSANDS a month
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
