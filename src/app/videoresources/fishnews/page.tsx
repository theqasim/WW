import Link from "next/link";

export default function Component() {
  return (
    <>
      <div className="bg-gray-50/90"></div>
      <div className="container mx-auto px-4 py-10 text-center md:px-6 md:py-12 lg:px-8 lg:py-16 xl:px-10 xl:py-20">
        <h1 className="text-3xl font-bold md:text-5xl">
          Fish News TikTok Resources
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-500 md:text-xl dark:text-gray-400">
          All the resources you will need to create Fish News TikTok's to go
          viral and make money.
        </p>
      </div>
      <div className="divide-y">
        <div className="container grid items-center gap-10 px-4 py-10 md:gap-16 md:px-6 lg:gap-20 lg:py-12">
          <div className="grid items-start gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div className="space-y-4 md:space-y-3">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-center">
                Spongebob Fish News Green Screen
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                The greenscreen footage of tehe fish presenting the news in the
                TikToks.{" "}
              </p>
            </div>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://drive.google.com/file/d/13PmMH2tgqT6TYP1HLMhAbxXDA5tzCsm9/view?usp=share_link"
            >
              Download
            </Link>
          </div>
          <div className="grid items-start gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div className="space-y-4 md:space-y-3">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-center">
                Fish News Background
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                The background for the Tiktok videos which will act as the news
                room.{" "}
              </p>
            </div>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://drive.google.com/file/d/1zfbiUfCecmYbfXGDJrQ4OO_m1agDHova/view?usp=share_link"
            >
              Download
            </Link>
          </div>
        </div>
        <div className="container grid items-center gap-10 px-4 py-10 md:gap-16 md:px-6 lg:gap-20 lg:py-12">
          <div className="grid items-start gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div className="space-y-4 md:space-y-3">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-center">
                Fish News Desk
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                The desk for the fish to "sit at" in the TikTok video.
              </p>
            </div>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://drive.google.com/file/d/1xpHMQ-aUhi4TICUJL27RyH8VVwEmSycJ/view?usp=share_link"
            >
              Download
            </Link>
          </div>
          <div className="grid items-start gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div className="space-y-4 md:space-y-3">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl text-center">
                Fish News Presentor Audio
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                The audio to feed into speechify to create the voice to use in
                your Tiktoks.{" "}
              </p>
            </div>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-50 dark:focus-visible:ring-gray-300"
              href="https://drive.google.com/file/d/1MHXn1TQW9_A3uTjnZRTlF9OolBN9yPrm/view?usp=share_link"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
