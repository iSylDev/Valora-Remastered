import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../ui/carousel'
import Image from "next/image"

export function HeroShowcase() {
  return (
    <div className="relative w-full h-fit max-h-150 lg:w-[40%] pointer-events-none">
      <div className="flex items-center justify-center relative w-full h-full px-4 mt-5">

        {/* Left Card - Fluid Width */}
        <Card className="p-0 rounded-xl shrink-0 overflow-hidden relative shadow-lg z-20 
          w-[48vw] min-w-40 max-w-52.5 md:max-w-63 aspect-3/4 translate-x-[77%] transition-transform duration-500">
          <Image src="/images/heroimage2.png" fill className="object-cover" alt="" />
        </Card>

        {/* Middle Card - The Largest Fluid Card */}
        <Card className="p-0 rounded-xl shrink-0 z-50 overflow-hidden relative shadow-2xl 
          w-[52vw] min-w-40 max-w-60 md:max-w-70 aspect-3/4 transition-transform duration-500">
          <Image src="/images/rebel-ridge.png" fill className="object-cover" alt="" />
        </Card>

        {/* Right Card - Fluid Width */}
        <Card className="p-0 rounded-xl shrink-0 overflow-hidden relative shadow-lg z-20 
          w-[48vw] min-w-40 max-w-52.5 md:max-w-63 aspect-3/4 -translate-x-[77%] transition-transform duration-500">
          <Image src="/images/heroimage3.png" fill className="object-cover" alt="" />
        </Card>

        {/* Splash Image - Proportional placement */}
        <Image src='/images/splash.png' alt="splash" width={30} height={40} className="min-w-7.5 absolute -translate-x-[570%] z-50 -bottom-3" />
      </div>
    </div>
  )
}
export default HeroShowcase
