import Cta from "@/components/cta";
import GroupFeatures from "@/components/features";
import LessonsPreview from "@/components/lessonspreview";
import SellingPoint from "@/components/sellingpoint";

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
            <Cta textColor="text-white" />
          </div>
        </div>
      </section>
      <GroupFeatures />
      <SellingPoint />
      <LessonsPreview />
      <footer className="w-full py-6 bg-black text-white text-center">
        <p>© 2023 Web Wealth - All rights reserved.</p>
      </footer>
    </div>
  );
}
