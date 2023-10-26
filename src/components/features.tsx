export default function GroupFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 text-center mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            What we can offer you 👇
          </h2>
          {/* <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Join our exclusive Discord group and get access to these amazing
            features.
          </p> */}
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12">
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
            <p className="text-zinc-500">
              Get access to exclusive video content covering topics that will
              guide you on how to make money online.
            </p>
          </div>
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
            <h3 className="text-lg font-bold">Course Content</h3>
            <p className="text-zinc-500">
              You will get access to in-depth course content that covers a
              variety of topics taking you through each step.
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
            <h3 className="text-lg font-bold">1-to-1 Support</h3>
            <p className="text-zinc-500">
              Feeling lost on how to make money? Feel free to ask questions in
              the group and you will get detailed guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
