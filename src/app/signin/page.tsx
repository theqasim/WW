"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

const SignInPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 ">
        <div>
          <h2 className=" text-center text-2xl font-extrabold font-mons text-gray-900">
            To access this lesson, you need to be a member of Web Wealth, click
            the button below to confirm you&apos;re a member.
          </h2>
        </div>
        <div>
          <button
            onClick={() => signIn("discord", { callbackUrl: `/lessons` })}
            className="group relative w-full shadow-md font-mons flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            🚀 Sign in with Discord
          </button>
          <p className=" text-center mt-8 font-extrabold font-mons text-gray-900">
            If you want to join Web Wealth click this link{" "}
            <a href="/" className="text-sky-500 hover:text-sky-400">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
