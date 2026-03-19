import HeroHeaderText from "./HeroHeaderText";
import { HeroShowcase } from "./HeroShowcase";


const HeroSection = () => {
  return ( <div className="w-full flex flex-col items-center justify-center">
    <HeroShowcase />
    <HeroHeaderText />
  </div> );
}
 
export default HeroSection;