import Cta from "@/components/cta";

export default function Component() {
  return (
    <div>
      <section className="w-full py-12 bg-black text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Join Web Wealth - The Exclusive Community for Online
                Entrepreneurs
              </h1>
              <p className="mx-auto max-w-[700px]">
                Get access to FREE courses on a variety of topics all geared
                towards making you money online. Expedite your journey to
                success and join today..
              </p>
            </div>
            <Cta textColor="text-white"></Cta>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 text-center mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Exclusive Discord Group Features
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Join our exclusive Discord group and get access to these amazing
              features.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
            <div className="flex flex-col items-center space-y-2 p-4 border border-zinc-200 rounded-lg rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:border-zinc-800">
              <svg
                className=" h-8 w-8"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              <h3 className="text-lg font-bold">24/7 Chat Support</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Get round the clock support from our dedicated team.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 border border-zinc-200 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:border-zinc-800">
              <svg
                className=" h-8 w-8"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m22 8-6 4 6 4V8Z" />
                <rect height="12" rx="2" ry="2" width="14" x="2" y="6" />
              </svg>
              <h3 className="text-lg font-bold">Exclusive Video Content</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Get access to exclusive video content and tutorials.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 border border-zinc-200 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:border-zinc-800">
              <svg
                className=" h-8 w-8"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <h3 className="text-lg font-bold">Event Calendar</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                Stay updated with all the upcoming events and activities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Here are a few lessons you can get access to for FREE
          </h2>
          <div className="flex flex-col space-y-6 md:space-x-6 md:flex-row md:space-y-0">
            <div className="p-4 bg-black dark:bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
              <img
                alt="Lesson preview"
                className="object-cover rounded-lg mb-2 mx-auto"
                src="/resources/logo.png"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
                height={200}
              />
              <p className="text-white dark:text-black font-semibold mb-1">
                How to Make Money as a Teen with $0
              </p>
            </div>
            <div className="p-4 bg-black dark:bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
              <img
                alt="Lesson preview"
                className="object-cover rounded-lg mb-2 mx-auto"
                src="/resources/logo.png"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
                height={200}
              />
              <p className="text-white dark:text-black font-semibold mb-1">
                How to Start Dropshipping with $0
              </p>
            </div>
            <div className="p-4 bg-black dark:bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-center">
              <img
                alt="Lesson preview"
                className="object-cover rounded-lg mb-2 mx-auto"
                src="/resources/logo.png"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
                height={200}
              />
              <p className="text-white dark:text-black font-semibold mt-3">
                How to make $10/month with AI Side Hustles{" "}
              </p>
            </div>
          </div>
          <p className="text-black dark:text-white mt-4 text-center">
            Become a member to get full access to our lesson library.
          </p>
          <Cta></Cta>
        </div>
      </section>
      <footer className="w-full py-6 bg-black text-white text-center">
        <p>© 2023 Web Wealth - All rights reserved.</p>
      </footer>
    </div>
  );
}
