import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function HeroShowcase() {

  return (
    <div className="flex items-center justify-center relative h-100">
      {/* Left Card - Exact same w/h as the Right Card */}
      <Card className="p-0 rounded-xl shrink-0 overflow-hidden translate-x-42 w-52.5 h-73 relative shadow-lg">
        <Image src="/images/heroimage2.png" fill className="object-cover" alt="" />
      </Card>

      {/* Middle Card - Notice it is wider and taller */}
      <Card className="p-0 rounded-xl shrink-0 z-50 overflow-hidden w-55 h-82 relative ">
        <Image src="/images/rebel-ridge.png" fill className="object-cover" alt="" />
      </Card>

      {/* Right Card - Exact same w/h as the Left Card */}
      <Card className="p-0 rounded-xl shrink-0 overflow-hidden -translate-x-42 w-52.5 h-73 relative shadow-lg">
        <Image src="/images/heroimage3.png" fill className="object-cover" alt="" />
      </Card>
      <Image src='/images/herogradient.png' alt="" fill className="z-10" />
    </div>
  )
}
