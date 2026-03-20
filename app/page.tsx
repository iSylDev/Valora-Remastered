import HeroSection from "@/components/landing-page/hero-section/HeroSection";
import MoreReasonsSection from "@/components/landing-page/more-reasons-section/MoreReasonsSection";
import HeroBackgroundImages from "@/components/BackgroundImages/HeroBackgroundImages";
import MoreReasonBackgroundImages from "@/components/BackgroundImages/MoreReasonsBackgroundImages";



export default function HomePage() {
  return (
    <>
      <HeroBackgroundImages />
      <section className="flex flex-col py-7 px-8 lg:px-16 mx-auto lg:max-w-7xl">
        <HeroSection />
      </section>

      <div className="fit relative">
        <MoreReasonBackgroundImages />
        <section className="flex flex-col py-7 px-8 lg:px-16 mx-auto lg:max-w-7xl">
        <MoreReasonsSection />
        </section>
      </div>


    </>
  );
}
