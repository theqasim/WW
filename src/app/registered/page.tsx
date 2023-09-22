"use client";

import Thankyou from "@/components/thankyou";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();


  useEffect(() => {
    if (!localStorage.getItem("formSubmitted")) {
      router.push("/");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gradient-to-t from-violet-600 to-cyan-300">
      <div className="flex flex-col items-center justify-center lg:w-2/4 shadow-lg p-5 bg-white rounded-md font-mons">
        <Thankyou />
        <div className="flex items-center justify-center w-3/4 mt-10"></div>
      </div>
    </main>
  );
}
