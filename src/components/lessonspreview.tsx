import Cta from "./cta";

export default function LessonsPreview() {
  return (
    <section className="w-full bg-white">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-semibold mt-5 text-center">
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
              How to make $10/month with ChatGPT
            </p>
          </div>
        </div>
        <p className="text-black dark:text-white mt-4 text-center">
          Become a member to get full access to our lesson library.
        </p>
        <Cta />
      </div>
    </section>
  );
}
