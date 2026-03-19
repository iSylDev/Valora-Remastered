
import HeroEmailInputArea from "./HeroEmailInputArea";
import HeroHeaderText from "./HeroHeaderText";
import { HeroShowcase } from "./HeroShowcase";


const HeroSection = () => {
  return (<div className="w-full flex flex-col items-center justify-center lg:flex-row-reverse mx-auto lg:justify-between">
    <HeroShowcase />
    <div className="w-full lg:w-[60%]">
      <HeroHeaderText />
      <HeroEmailInputArea />
    </div>
  </div>);
}

export default HeroSection;