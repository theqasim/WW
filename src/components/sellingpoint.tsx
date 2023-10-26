import Image from "next/image";

export default function SellingPoint() {
  return (
    <section className="w-full bg-black flex flex-col items-center py-10">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mt-10">
          Still not convinced?
        </h2>
        <p className="text-white mt-2">
          Here are the results from the people behind Web Wealth.
        </p>
      </div>
      <div className="flex flex-row">
        <Image
          src="/resources/proof-reg.png"
          alt=""
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
