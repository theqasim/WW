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
          How to Make AI Historical Content{" "}
        </h1>

        <div className="flex justify-center">
          <YouTube videoId="1aXinsLXgeA" opts={opts} onReady={onReady} />
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">
          Here&apos;s what you will learn:
        </h2>
        <h3 className="">
          These two YouTube channels have blown up, accumulating more than
          <b> 200,000 subscribers each</b> in less than 9 months. Very simply
          they are telling stories of historical figures using AI, the stories
          are very engaging, and the best part is, this is very easy to do. I
          will show you exactly how to do this.
        </h3>
        <h3 className="font-semibold">
          Let&apos;s take a deeper look at how many views these channels are
          getting, but also how much money they&apos;re making.
        </h3>

        <p className="font-bold">Stellar Sagas:</p>
        <img src="/resources/stellarsagas.png"></img>
        <p className="font-bold">
          This channel is making $30k a month with over 7.8M views in the last
          30 days.
        </p>

        <p className="font-bold">The AI Historian:</p>
        <img src="/resources/aihistorical.png"></img>
        <p className="font-bold">
          This channel is making over $10k a month with over 2.6 million views
          in the last 30 days.
        </p>
        <p>
          Keep in mind, this is all AI generated content so the effort required
          to do this is minimal.
        </p>
        <p>
          At the end of this lesson, I will give you my <b>secret ways </b>
          secret ways of monetizing these channels to make a lot more money then
          these channels are making.
        </p>

        <p>Very simply, to recreate this we need to use the following:</p>

        <ul className="list-disc list-inside text-gray-700 mb-3">
          <li>
            <b>ChatGPT</b>
          </li>
          <li>
            <b>Image Generation AI Tool</b>
          </li>
          <li>
            <b>AI Voice Generationor (ElevenLabs)</b>
          </li>
          <li>
            <b>Video Editing Software (Premiere Pro/CapCut)</b>
          </li>
          <li>
            <b>The easiest scaling method to grow your store.</b>
          </li>
        </ul>
        <div className="text-gray-700 space-y-4">
          <h3 className="font-semibold text-xl mb-2">
            Step 1: Create the script
          </h3>
          <p>
            We are going to use ChatGPT to create the script. Typically people
            use ChatGPT from the start and run the risk of using scripts that
            are not interesting or engaging. In an effort to expedite the
            process of you making money, we&apos;re going to work with
            successful shorts so we can replicate their success.
          </p>
          <p>
            Head over to a themed YouTube Shorts channel and select a Short that
            has performed well. Copy the URL of the YouTube Short and head over
            to{" "}
            <a
              href="https://www.dupdub.com"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              Dupdub
            </a>{" "}
            to get a transcription of the YouTube Short. Copy the transcription
            and head over to ChatGPT, enter the following prompt:
            <b> Reword this in simple English: (insert transcription here)</b>
          </p>
          <p>
            This will heavily increase your chances of gaining popularity which
            will lead to increased views and increased revenue for yourself.
          </p>
          <h3 className="font-semibold text-xl mb-2">
            Step 2: Generate Images for SFC.
          </h3>
          <p>
            We are going to use{" "}
            <a
              href="https://www.midjourney.com"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              Midjourney
            </a>{" "}
            for this task, if you cannot afford Midjourney, using{" "}
            <a
              href="https://leonardo.ai"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              LeonardoAI
            </a>{" "}
            which is FREE. To create the prompts, if you have access to GPT-4
            you can use the following prompt to get image generation prompts:{" "}
            <br></br>
            <b>
              Write me 5 Midjourney prompts of vicious roman gladiators in a
              colosseum.
            </b>
          </p>
          <p>
            This is an example based on a particular theme, but you will need to
            experiment to find the prompt that works for you. If you do not have
            GPT-4 very simply create your own prompts, here are the prompts I
            will use:
            <b> A Roman Gladiotor in a colosseum, high definition, natural.</b>
          </p>

          <p>
            Select the images you believe look the best, and then you&apos;re
            ready to move onto the next step.{" "}
          </p>

          <h3 className="font-semibold text-xl mb-2">
            Step 3: Generate AI Voice for SFC.
          </h3>
          <p>
            Head over to{" "}
            <a
              href="https://elevenlabs.io"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              Elevenlabs
            </a>{" "}
            and configure the voice you wish to use in your SFC, I personally
            use “Brian - Slow speaking and deep”. Once you find an AI voice you
            like, paste in the reworded transcript ChatGPT created for you, and
            then click generate. Listen to the generated voice to check if you
            like what has been made.
          </p>

          <h3 className="font-semibold text-xl mb-2">
            Step 4: Editing the Content.
          </h3>
          <p>
            Now we need to combine all the elements we have created to create
            the content we are going to post. It&apos;s important to spend a bit
            of time ensuring the quality is high and optimised for the best
            chance of success, I will show you how to do this.
          </p>
          <p>
            I&apos;ll be using{" "}
            <a
              href="https://capcut.com"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              CapCut
            </a>{" "}
            on Desktop for this process, but you can do this on mobile or with
            any editing software available. The first step is to import the AI
            voice and cut out any gaps in the audio, this will give the video a
            polished look and make it shorter.
          </p>
          <p>
            Then we need to import the AI generated images. Make sure the
            imported images aspect ratio is <b>9:16</b> as that is the aspect
            ratio for SFC. When importing the images, fit them appropriately on
            the screen so the subject is clearly visible, and switch to a
            different image every 3-5 seconds to increase AVD (Average Viewer
            Duration).
          </p>
          <p>
            You can add some <b>transition effects</b> if you like to make the
            video look better. An example of this is a swipe transition from one
            image to another.
          </p>
          <p>
            Now you need to add the captions, music, voice and polish up the
            video before exporting it.
          </p>
          <p>
            For the captions, go to the text section, and click on{" "}
            <b>Auto Captions</b>. Capcut will automatically create captions
            based on the transcribed audio in the project. You can fix them
            manually if needed.
          </p>
          <p>
            Edit the text to make it look more appealing to the viewer,
            utilising the font <b>KOMIKAX</b> would be a good idea as channels
            like this often use it. Configure the font size, colour etc to your
            liking.
          </p>
          <p>Export your video, and then you&apos;re done!</p>
          <p>
            Post it on a themed YouTube channel on a consistent basis and{" "}
            <b>watch the views come in.</b>
          </p>
          <h3 className="font-semibold text-xl mb-2">
            Secrept Monetization Tips:{" "}
          </h3>
          <p>
            Sell Digital Products such as ebooks through your YouTube channel
            related to the niche you&apos;re doing. You do not need to make the
            ebook yourself, you can take existing ebooks that are well written
            and take a % of the referred sales. Ebooks.com has an affiliate
            program for this:{" "}
            <a
              href="https://www.ebooks.com/en-gb/information/affiliates/"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              https://www.ebooks.com/en-gb/information/affiliates/
            </a>
          </p>
          <p>
            Sell physical products like phone cases, mugs, hoodies etc. You can
            create the products yourself at{" "}
            <a
              href="https://printify.com"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              Printify.com
            </a>
            .
          </p>
          <h3 className="font-semibold text-xl mb-2">Final Notes:</h3>
          <p>
            This is a great way to start making money online. It requires no
            specialised skills, and only a bit of your time each day to
            maintain. Not to mention the secret tips to monetize this will truly
            increase your income.
            <br></br>
            <br></br>With that being said, I wish you the best of luck 🤝
          </p>
        </div>
        <Backtolessons />
      </div>
    </div>
  );
};

export default VideoBlog;
