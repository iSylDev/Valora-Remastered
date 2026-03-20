import { Button } from "@/components/ui/button"
import TrendingGrid from "./TrendingGrid"
import { ArrowLeftCircle, ChevronLeft, ChevronRight } from "lucide-react"


const TrendingSection = () => {
  return (
    <div className="flex flex-col iems-center text-center mt-27">
      <div className="mb-9">
        <h3 className="text-3xl font-semibold mb-1">Trending Now</h3>
        <p className="text-center text-card-foreground">When it comes to discovering new content, searching by genre can be a great way to find something that fits your preferences.</p>
        <Button size='xl' className="mt-3">
          <p>Find More</p>
          <ChevronRight />
        </Button>
      </div>
      <TrendingGrid />
    </div>
  )
}

export default TrendingSection