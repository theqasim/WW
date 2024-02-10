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
          How To Dropship With TikTok Shop (FULL GUIDE)
        </h1>
        <div className="flex justify-center">
          <YouTube videoId="xx3WxSMxnwE" opts={opts} onReady={onReady} />
        </div>
        <h2 className="text-xl font-bold text-center">
          In this lesson I will be discussing the biggest opportunity in E
          Commerce currently.
        </h2>
        <h2 className="text-xl font-bold text-center">
          This is bigger than any trend we&apos;ve seen in ecommerce before,
          even bigger than Facebook ads in 2017, and TikTok Dropshipping in
          2023.
        </h2>
        <h2 className="text-xl font-bold text-center">
          The opportunity is TikTok Shop, for context my name is Qasim, and
          i&apos;ve been making money online since the age of 14.
        </h2>
        <h2 className="text-xl font-bold text-center">
          Whether you&apos;re selling digital or physical products, TikTok Shop
          is guaranteed to make you more money.
        </h2>
        <h2 className="text-xl font-bold text-center">
          So I&apos;m going to explain what TikTok shop is, why you should use
          it and how to use it right now.
        </h2>
        <h2 className="text-xl font-bold text-center">
          How Can You Dropship with TikTok Shop?
        </h2>
        <p>
          TikTok Shop is their newest addition to the platform, and instead of
          going down the traditional route of sending the viewer to a website to
          purchase your product, TikTok is allowing you to do it in their app
          removing the massive amounts of friction and it allows the viewer to
          do purchase items right there within the app.
        </p>
        <p>
          Now there are a few different ways you can utilise this feature to
          make money, the first of which being Live Shopping Videos.
        </p>
        <p>
          Viewers can now purchase products directly through a creators
          livestream, this level of intimacy of the viewer is converting very
          well and you&apos;re seeing huge brands like Myprotein begin to adopt
          this.
        </p>
        <p>
          The second way is shoppable videos, TikTok allows you to integrate
          videos directly into your TikTok videos, which really allows you to
          take advantage of impulse buyers, especially if your TikTok video is
          convincing enough.
        </p>
        <p>
          TikTok also builds you a page for FREE with all your products, so that
          increases the average order value without you having to do anything.
        </p>
        <p>
          The next method is essentially Tiktok&apos;s competition to Amazon,
          they have built an entire shopping tab on the app that allows viewers
          to purchase products directly in the app.
        </p>
        <p>
          Now you might be thinking, is this really a big deal? Or how does this
          benefit you? Trust me, the opportunity to make money here is immense.
        </p>
        <p>
          The major advantage you have is you&apos;re keeping the viewers within
          the app, so there&apos;s no friction of going to a website, hoping
          they think it looks legit enough to make a purchase, which is where
          most people lose sales.
        </p>
        <p>
          You&apos;re also leveraging the reputation of TikTok as the viewer
          purchasing your product on TikTok will deem it as trusted given its
          hosted on TikTok which increases your chances of making sales hugely.
        </p>
        <p>
          Paired with that, the process of building a website and a landing page
          is out the window as you&apos;re simply selecting a product and
          selling it.
        </p>
        <p>
          One of the major advantages TikTok Shop has over any ecommerce
          platform is the affiliate network they have built into their app.
        </p>
        <p>
          They have a hub where affiliates can request free products to use in
          their TikTok&apos;s so affiliates do not need to spend money to review
          your products and you can even invite affiliates to review your
          products.
        </p>
        <p>
          You can filter by follower count, age, demographic so you can find the
          perfect affiliates for your product.
        </p>
        <p>
          Once you find the right affiliate, get in contact with them, send them
          your product to use in their videos and watch the sales come in
          passively. The best part is you can do this thousands of times and
          have tons of money coming in through affiliates selling your products.
        </p>
        <p>
          TikTok also manages the affiliates payouts for you so you do not need
          to spend money on a team to payout affiliates and you purely focus on
          your business.
        </p>
        <p>
          But there are a few things you need to keep in mind when selling on
          TikTok.
        </p>
        <p>
          The first being how the fulfilment part of TikTok Shop works, your
          store is rated on a health score. If you get tons of refunds or
          disputes, your score gradually decreases until it reaches a point
          where TikTok closes down your store.
        </p>
        <p>
          So here are things you should follow to avoid that completely, firstly
          you need to ensure that your supplier is of high quality, we all know
          Dropshipping has a bad reputation online because typically you&apos;re
          ordering products from China that takes weeks to arrive.
        </p>
        <p>
          When they do arrive, they can be broken or damaged, so you need to
          ensure your supplier is high quality to avoid TikTok closing down your
          shop.
        </p>
        <p>
          I personally used CJDropshipping as my first supplier when I started
          ecommerce and it was great, super easy to use UI and the orders came
          in quicker than their quoted times. I&apos;d highly recommend it.
        </p>
        <p>
          If you do get a refund request, you can offer the customer a delivery
          extension which they can choose to either accept or reject.
        </p>
        <p>
          This is a great niche to do as you don&apos;t come up with the content
          yourself, you simply report what is happening in the world and bring
          in a ton of money.
        </p>
        <p>
          You have 48 hours to respond to refund disputes, if you do not respond
          TikTok will automatically refund the customer and take the money out
          of your balance.
        </p>
        <p>
          They&apos;re most viewed video has over 10m views, which is over
          $10,000 views with a $1 RPM.
        </p>
        <p>
          TikTok Shop does take commission for having your items on their app,
          for the first 180 days there is a 1.8% commission, and after that
          point it is 5%, so make sure to factor this in when calculating your
          profits.
        </p>
        <p>
          TikTok is actively pushing both sellers and buyers to use this
          platform, so much so that they offer 40% off + free shipping on a lot
          of items, without you having to do anything, and they pay the
          difference.
        </p>
        <p>
          That way the sellers gets sales and the entire revenue from the sale
          and the customer gets the product for a discounted rate.
        </p>
        <p>
          Another thing to keep in mind, if the shipping does not cost more than
          the product itself, TikTok covers the shipping costs.
        </p>
        <p>
          So let&apos;s say you sell a product for $40 and the shipping is $10,
          TikTok may be able to cover the shipping for the customer and offer
          them a discount without you losing out on any money.
        </p>
        <p>
          Considering everything that&apos;s been mentioned and the incentives
          that TikTok are going to roll out in the coming months, this is the
          best opportunity in the ecommerce space at the moment.
        </p>
        <h2 className="text-xl font-bold text-center">
          There is a video resource with this lesson, click{" "}
          <a className="text-blue-500" href="/videos/10kamonthin2024">
            here
          </a>{" "}
          to watch me breakdown a creators entire traffic funnel spanning across
          different platforms. Importantly, how you can copy their strategy too.
        </h2>
        <div className="text-gray-700 space-y-4">
          <p>With that being said, I wish you the best of luck 🤝</p>
        </div>
        <Backtolessons />
      </div>
    </div>
  );
};

export default VideoBlog;
