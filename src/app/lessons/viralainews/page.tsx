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
          How To Make VIRAL AI News Tiktok Videos
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="Xv1Kub4iZt0" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          I have found the best niche on TikTok currently.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Not only will the niche allow you to make money in the tiktok
          creativity program, but you will not be flagged for unoriginal
          content.
        </h2>
        <h2 className="text-xl font-bold text-center">
          These videos bring in millions of views, and they&pos;re so easy to
          make.
        </h2>
        <p>
          Now, you&apos;re probably thinking this is the weirdest niche
          you&apos;ve been told about, but THAT&apos;S EXACTLY WHY IT WORKS.
        </p>
        <p>
          It&apos;s unique, it&apos;s original and there are multiple pages
          doing this niche that are all bringing in millions of views, resulting
          in them making a ton of money.
        </p>
        <p>
          And now you&pos;re probably thinking, the views are great, but the
          content seems hard to make, that&apos;s where you&apos;re mistaken,
          this content is super easy to make and I&apos;ll show you how to make these
          tiktoks in this video.
        </p>
        <p>
          I&apos;ll show how to structure the content, how to animate the fish,
          and how to easily make these videos so you can make these on a regular
          basis and bring in millions of views.
        </p>
        <p>
          And if you wait till the end of the video, I&apos;ll show you how the
          method these pages use to get their content to go viral consistently.
        </p>
        <p>
          Before we head into the way to create these tiktok&apos;s, if
          you&apos;re wondering why you should pick this niche out of the
          plethora of other niches people are promoting out there, let me tell
          you why this is the BEST for you to start today.
        </p>
        <p>
          Firstly, it&apos;s 100% original content, so the time and effort you
          put into your page will not go unrewarded and you&apos;ll actually be
          able to make money with the content you make.
        </p>
        <p>
          Secondly, the niche is completely faceless, you can crush out a ton of
          these videos in a single day without showing your face or even using
          your own voice.
        </p>
        <p>
          Finally, this page&apos;s brand is about the news character you use, so in
          thai case we&apos;re using the fish, but you can do any type of animal
          and create a ton of pages with those animals, so you can bring in a
          ton of views super easily.
        </p>
        <p>Now let&apos;s get into exactly how you can create these tiktoks.</p>
        <p>
          Head over to YouTube and search Spongebob fish news green screen,
          click on a suitable one.
        </p>
        <p>Go to a youtube downloader and download the video.</p>
        <p>
          Next step is to head over to Capcut, which is a free video editor.
        </p>
        <p>Select 9:16 for the aspect ratio as we&apos;re making Tiktoks.</p>
        <p>
          Now put the footage into the timeline, and select the fish you want to
          use for the video.
        </p>
        <p>
          Position it well in the video so the character is clearly visible.
        </p>
        <p>
          Now we want to remove the green screen, click remove background, use
          the chroma key to remove the green background and you&apos;re good to
          go.
        </p>
        <p>
          Now we need to create the scene, we need a blue background for the
          video, so download the image and bring it into your project.
        </p>
        <p>
          Extend the background so it fits, then make sure the fish layer is
          above the blue background.
        </p>
        <p>
          Next step is to find a cartoon desk for the character to be seated at
          to tell the news, bring it into your project and make sure it&apos;s
          the top layer above the fish layer.
        </p>
        <p>Position it correctly so it looks good for the video.</p>
        <p>
          Now to make things easier, we&apos;re going to export a few seconds of
          the timeline so we can use this exported video and our timeline is
          less cluttered with layers.
        </p>
        <p>
          Now take the exported video, and add it to the timeline, then
          duplicate it to the desired length, depending on the news story
          you&apos;re telling.
        </p>
        <p>
          Now we need to generate the fish voice for this video, so we&apos;re
          going to use the cloning feature on speechify for free, but we first
          need to get the fishes voice to feed to speechify.
        </p>
        <p>
          Head over to YouTube and type in spongebob fish announcement dialogue,
          and look for a clip that is at least 5 minutes long.
        </p>
        <p>
          Download the youtube video as a MP3, and import the voice, it will
          then synthesise the clip, it will then save as a voice so you can use
          it at any time.
        </p>
        <p>
          Now we need the script so we can generate the voice, this will be
          based on real life news events, you can find these by searching news
          websites, there is always something going on everyday that people care
          about, so finding a story will not be hard.
        </p>
        <p>
          Keep in mind the story needs to be relevant and something the
          demographic of tiktok users will be interested in, remember that when
          selecting your story.
        </p>
        <p>
          Now take the contents of the news article, go to ChatGPT and use the
          prompt: “Summarise the following article to 1000 words, with a strong
          hook”
        </p>
        <p>
          Chatgpt will then summarise the text and it will be great for TikTok.
        </p>
        <p>
          Then throw the script into speechify, wait for the voice to be
          generated and then you&apos;re good to go, here is what it sounds
          like.
        </p>
        <p>
          Then put the voice into the project, and then we need to put images at
          the top of the video throughout to portray the point you&apos;re
          making, you can find suitable images on the original article you took
          the content from.
        </p>
        <p>
          The final element is to generate captions for the video, click on
          captions, auto captions and then you can edit the text to what you
          want.
        </p>
        <p>
          As you can see this content is super easy to make and it is doing very
          well for people on TiktTok.
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
