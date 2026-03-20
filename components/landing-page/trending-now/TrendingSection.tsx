import { Button } from "@/components/ui/button"
import TrendingGrid from "./TrendingGrid"
import { ArrowLeftCircle, ChevronLeft, ChevronRight } from "lucide-react"


const TrendingSection = () => {
  return (
    <div className="flex flex-col iems-center text-center mt-27 lg:text-left lg:mt-32">
      <div className="mb-9 flex flex-col lg:flex-row lg:justify-center">
        <h3 className="text-3xl font-semibold mb-1 lg:w-full lg:text-5xl lg:text-left">Trending Now</h3>
        <div>
          <p className="text-card-foreground md:w-[70%] mx-auto lg:mx-0 lg:w-full">When it comes to discovering new content, searching by genre can be a great way to find something that fits your preferences.</p>
          <Button size='xl' className="mt-3">
            <p>Find More</p>
            <ChevronRight />
          </Button>
        </div>
      </div>
      <TrendingGrid />
    </div>
  )
}

export default TrendingSection