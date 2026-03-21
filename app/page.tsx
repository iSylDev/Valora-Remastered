import HeroSection from "@/components/landing-page/hero-section/HeroSection";
import MoreReasonsSection from "@/components/landing-page/more-reasons-section/MoreReasonsSection";
import HeroBackgroundImages from "@/components/landing-page/BackgroundImages/HeroBackgroundImages";
import MoreReasonBackgroundImages from "@/components/landing-page/BackgroundImages/MoreReasonsBackgroundImages";
import TrendingSection from "@/components/landing-page/trending-now/TrendingSection";
import SearchByGenreSection from "@/components/landing-page/search-by-genre/GenreSection";
import FAQSection from "@/components/FAQ/FAQSection";



export default function HomePage() {
  return (
    <>
      <HeroBackgroundImages />
      <section className="py-7 px-8 lg:px-16 mx-auto lg:max-w-7xl">
        <HeroSection />
      </section>

      <div className="fit relative">
        <MoreReasonBackgroundImages />
        <section className="py-7 px-8 lg:px-16 mx-auto lg:max-w-7xl">
          <MoreReasonsSection />
        </section>
      </div>

      <section className="flex flex-col py-7 px-8 lg:px-16 mx-auto lg:max-w-7xl">
        <TrendingSection />
        <SearchByGenreSection />
        <FAQSection />
      </section>
      


    </>
  );
}
