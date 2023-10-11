"use client";

import React from "react";
import Plyr from "plyr";
import { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";

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
          How to start Dropshipping with $0 (FREE COURSE)
        </h1>

        {/* <div className="flex items-center justify-center space-x-2 mb-6">
          <img
            src="/profile.png"
            alt="Author Name"
            className="w-16 h-16 rounded-full border-4 border-indigo-500"
          />
          <span className="text-gray-700 text-xl font-medium">Qasim</span>
        </div> */}

        <video ref={videoRef} controls className="w-full mb-6">
          <source
            src="https://www.dropbox.com/scl/fi/rju41l1rmcd68aqundh2s/How-I-would-start-Dropshipping-with-0.mp4?rlkey=7ssy5ez50kh6mjnlpsx2rbhfq&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-2xl font-bold text-center mb-4">
          Here&apos;s what you will learn:
        </h2>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            <b>How to pick products that make $5,000+ a week.</b>
          </li>
          <li>
            <b>How to build and run a Dropshipping store</b>
          </li>
          <li>
            <b>
              How to fulfil orders (without ever having to handle the products
              yourself)
            </b>
          </li>
          <li>
            <b>Secret tips I use to get ahead of competitors.</b>
          </li>
          <li>
            <b>The easiest scaling method to grow your store.</b>
          </li>
        </ul>

        <div className="text-gray-700 space-y-4">
          <h3 className="font-semibold text-xl mb-2">
            1. How to pick products that make $5,000+ a week:
          </h3>
          <p>
            Go to <b>CJdropshipping or Aliexpress</b> and browse products to
            find a product you believe could be good for dropshipping. <br></br>
            <br></br>Look through the categories to identify a niche you believe
            would be of interest. <br></br>
            <br></br>Analyse the selling points of the product and reflect to
            understand whether this product would be of interest to the market.{" "}
            <b>
              E.G a cool automatic water gun in winter would not be a great
              product
            </b>
            .<br></br>
            <br></br> Research the competitors of the product you have picked by
            google searching the key terms of the product name, on the
            “shopping” section of the search you will see a bunch of people
            selling the product. The title of the product often isn&apos;t used,
            I&apos;d suggest saving the image from the listing and using Google
            Images to find the competitors as they will likely be using the same
            assets under different names. <br></br>
            <br></br>By looking at the competitors of the product, you can
            understand how they&apos;re marketing the product, what pain points
            they are using to sell the product (will cover more on this later)
            and overall, what your store could look like when selling this
            product. This is also a good way to identify potential{" "}
            <b>upsale items</b> as your competitors will have worked this out by
            now. <br></br>
            <br></br>Do not spend a ton of time trying to find the “perfect”
            product. Trial and error is a key element of Dropshipping.
          </p>

          <h3 className="font-semibold text-xl mb-2">
            2. How to build and run a Dropshipping store:
          </h3>
          <p>
            Once you&apos;ve picked a product, you need to build a store.{" "}
            <br></br>
            <br></br>Head over to{" "}
            <a
              href="https://themes.shopify.com/themes?price%5B%5D=free&sort_by=most_relevant"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              here
            </a>{" "}
            these store templates are <b>FREE</b>. My personal favourite at the
            moment is the Sense theme so I&apos;d recommend going with that.{" "}
            <br></br>
            <br></br>Now you need to make an account to create your store, click
            this to get 3 months worth of a Shopify Subscription for £1.
            You&apos;re getting a website capable of processing payments paired
            with a well designed theme for £1, you&apos;re welcome:{" "}
            <a
              href="https://shopify.pxf.io/4PoAnL"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              Exclusive £1 Offer
            </a>{" "}
            <br></br>
            <br></br>Once youu&apos;ve signed up and changed your theme to the
            Sense theme. <b>You need to begin designing your store</b>, I&apos;d
            suggest taking inspiration from your competitors. Do not reinvent
            the wheel, simply take what works, improve on it if you can, and get
            your store up. <br></br>
            <br></br>You will be able to see the final price of the product if
            you purchase the orders from the supplier. Click the “list” button
            and it will prompt you to connect your Shopify store to the platform
            which will setup a direct connection between your listing and the
            supplier. Meaning, every time an order for that product is placed on
            your store, an order is made on the suppliers website. <br></br>
            <br></br>Once you&apos;re happy with the store and the product page,
            we can move onto the next step, fulfilling orders.
          </p>

          <h3 className="font-semibold text-xl mb-2">
            3. How to fulfil orders:
          </h3>
          <p>
            Fulfilling orders is <b>very easy</b>, especially once you&apos;ve
            connected your store. <br></br>
            <br></br>The majority of these suppliers are structured the same in
            terms of how orders are managed. When you get new orders, head over
            to the suppliers website, refresh the order list and you will see
            your new Shopify orders. Each order will have the customer&apos;s
            details ready, so all you need to do is choose the shipping method
            (varying in price and estimated duration). <br></br>
            <br></br>After choosing the shipping method, you will purchase the
            items for the order that will be shipped directly to the customers
            of your store. The best part is that{" "}
            <b>you&apos;re not using any of your own money</b>, the customer has
            already purchased the item so you&apos;re simply taking money from
            the order to purchase the item, and keeping the profit. <br></br>
            <br></br>This whole process takes a few minutes each day and you can
            select orders in bulk, so do not worry about fulfilling your stores
            orders.
          </p>

          <h3 className="font-semibold text-xl mb-2">
            4. Secret tips I use to get ahead of competitors:
          </h3>
          <p>
            Not being the first one to sell a product can be seen as a negative,{" "}
            <b>but there is a silver lining</b>. You have tons of evidence of
            what works and what doesn&apos;t by analysing your competitors
            strategies. <br></br>
            <br></br>For example, if you&apos;re going to promote your store on
            TikTok, you can find competitors&apos; TikTok accounts and look at
            their views. The ones with the most success are ones you should be
            posting or replicating. Once you choose a few TikTok&apos;s to post
            on your account, we need to remove the watermark. Head over to{" "}
            <a
              href="https://snaptik.app"
              target="_blank"
              className="text-cyan-500 hover:text-cyan-400"
            >
              this website
            </a>{" "}
            to remove TikTok watermarks so you can post the video to your TikTok
            accounts.
          </p>

          <h3 className="font-semibold text-xl mb-2">
            5. The easiest scaling method to grow your store:
          </h3>
          <p>
            Double down on what works, and cut off what doesn&apos;t. Do not
            become attached to a particular way of marketing, you need to
            remember that the goal is to bring in sales,{" "}
            <b>by any means necessary</b>. Scaling with TikTok organic can be
            done through posting more content that gets a higher AVD (Average
            View Duration) Scaling with TikTok ads can be allocating more ad
            spend to higher converting ad creatives/campaigns.{" "}
          </p>
          <h3 className="font-semibold text-xl mb-2">Final Notes:</h3>
          <p>
            The vital element of Dropshipping is <b>speed</b>, if a product does
            not work, move onto the next one. If you set yourself 1 week to
            build a store, it will take you a week. But, if you set yourself a
            day to do it, the store will be done in a day. Do not prolong any
            process of this. <br></br>
            <br></br>With that being said, I wish you the best of luck 🤝
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBlog;
