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
          I Tried Dropshipping For 30 Days To Prove It&apos;s Not Dead
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="1WpySO_8t_Q" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          In this lesson I will be trying Dropshipping for 30 days as a complete
          beginner to prove it&apos;s not dead.
        </h2>
        <h2 className="text-xl font-bold text-center">
          I will be doing a 30 day Dropshipping challenge to prove to you what
          you can do Dropshipping anywhere in the world with no money. And that
          it&apos;s not dead, it&apos;s not too competitive and it is the best
          time to start Dropshipping.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Let&apos;s start with finding winning products to Dropship with.{" "}
        </h2>
        <h2 className="text-xl font-bold text-center">
          The criteria I use to vet my products are as follows:
        </h2>
        <ul className="list-disc list-inside  mb-6">
          <li>
            <b>
              The product needs to add value, or a specific benefit to
              somebody&apos;s life. Otherwise known as, it needs to be a{" "}
              <a className="text-green-500">problem solving product.</a>
            </b>
          </li>
          <li>
            <b>
              It needs to have a <a className="text-green-500">wow</a> factor to
              capture consumers attention.
            </b>
          </li>
          <li>
            <b>
              It needs to be{" "}
              <a className="text-green-500">
                relatively cheap, and target all audiences
              </a>
              , so the product has success from posting straight on TikTok.
            </b>
          </li>
        </ul>
        <p>
          The first step to starting a good Dropshipping store was finding a
          product, and I used a Tiktok burner account, and I optimised my
          account to only show other Dropshipping stores.
        </p>
        <p>
          When I found a decent product on my FYP, I will through go to the
          store through TikTok, and make a “ghost purchase” which is going
          through the checkout process up until submitting payment so TikTok
          recognize me as a “buyer” and push me more Dropshipping products.
        </p>
        <p>
          After scrolling for a few hours, I found this product, I believed it
          to be a good option as it wasn&apos;t too expensive and it was blowing
          up like crazy.
        </p>
        <p>
          The next step was to pick a name, make a logo, build the store, create
          the social media pages, and get to work.
        </p>
        <p>
          Now, a lot of people order the product, wait for it to come and start
          making content.
        </p>
        <p>
          BUT, the method I used was much easier than this, I simply used
          Snaptik to download other people&apos;s content without the TikTok
          watermark and upload it to my own accounts.
        </p>
        <p>
          These videos were created with existing customers of the product, so
          the video sold the product itself very well.
        </p>
        <p>I posted twice a day and the views started rolling in.</p>
        <img
          className="shadow-md"
          src="/resources/tiktokviewsinitial.png"
        ></img>

        <p>
          My views were okay after posting for a few days, but I needed more
          traffic if I wanted more sales quickly.
        </p>
        <p>
          I decided to make a UK account and post on there too, which meant
          everyday I was posting 4 TikTok&apos;s a day. 2 on the US account and
          2 on the UK account, and then I started seeing the numbers go up on my
          accounts.
        </p>
        <p>
          The key in this part of the process is <b>CONSISTENCY</b>
        </p>
        <p>
          I was now running my US account on my burner phone with a US sim
          inside, which allowed me to target the US.
        </p>
        <p>
          And, I was running my UK account on my main phone with a UK sim
          inside, which allowed me to target the UK.
        </p>
        <p>I was pushing hard to get success with this.</p>
        <p>
          Remaining consistent allowed me to start bringing in sales. It was a
          great feeling, finally, I got a taste of what these gurus talk about,
          but I wanted more.
        </p>
        <p>
          What I began to understand is getting people to the website is one
          part of the process, getting them to give you money is the next part.
        </p>
        <p>
          The latter is where I was falling short, and this is how I fixed it to
          make my sales sky rocket.
        </p>
        <p>
          Installing plugins allowed me to optimise the way the website looked.
        </p>
        <ul className="list-disc list-inside  mb-6">
          <li>
            <b>
              <a
                href="https://apps.shopify.com/judgeme"
                className="text-blue-500"
              >
                Judge.me{" "}
              </a>
              allowed me to showcase customer reviews with a customer photo,
              this creates social proof which potential customers can trust,
              which increases their willingness to purchase the product.
            </b>
          </li>
          <li>
            <b>
              <a
                href="https://apps.shopify.com/bundles-bear"
                className="text-blue-500"
              >
                Bundle Bear
              </a>{" "}
              allowed me to offer volume discounts, which increases my average
              order value. This made it easier for the customer to spend more at
              my store. Everyone loves a discount.
            </b>
          </li>
          <li>
            <b>
              <a
                href="https://apps.shopify.com/swatches-popup-cart"
                className="text-blue-500"
              >
                Slide Cart
              </a>{" "}
              allowed me to upsale other products that was closely related to
              the product I was selling. In this case it other pet related
              products, which again increased the average order value.
            </b>
          </li>
        </ul>
        <p>
          Now that my store was optimised, all I had to do was originally post
          TikToks that competitors were posting on a consistent basis and watch
          the sales come in.
        </p>
        <p>
          I made sure to avoid controversies in my videos, and solely focus on
          the value proposition of the product, as that will drive sales.
        </p>
        <p>
          As time went on, I noticed something very interesting about my store,
          a LOT of the customers were from Canada, so I took that information
          and made a Canada based TikTok account to bring in more traffic.
        </p>
        <p>
          I was now posting across 3 different TikTok pages daily, and with that
          being done I went viral, the sales flew in and it gave me hope.
        </p>
        <p>
          If I can do this once, I can do this again and again until I find a
          major winner.
        </p>
        <p>
          After 30 days, I made a grand total of{" "}
          <a className="text-green-500 font-bold">$1156.69</a>
        </p>
        <p>
          After subtracting costs from our total you can see we are left with
          <a className="text-green-500 font-bold"> $614.01</a> profit all from
          posting a few tiktoks.
        </p>
        <p>
          I did this as a complete beginner, so trust me when I say Dropshipping
          is not dead, it has just evolved from what it once was. It is still
          very easy to do, if you&apos;re prepared to work hard. I highly
          reccommend you try this out.
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
