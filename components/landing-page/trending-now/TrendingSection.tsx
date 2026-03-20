import { Button } from "@/components/ui/button"
import TrendingGrid from "./TrendingGrid"
import { ArrowLeftCircle, ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeader from "../shared-components/SectionHeader"


const TrendingSection = () => {
  return (
    <div className="flex flex-col iems-center text-center mt-27 lg:text-left lg:mt-32">
      <SectionHeader title="Trending Now" description="Enjoy exclusive movies and series available only to subscribers with unlimited access, no ads, premium content, and early releases." />
      <TrendingGrid />
    </div>
  )
}

export default TrendingSection