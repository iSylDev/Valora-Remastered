import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

type TrendingCardProps = {
  src: string
  alt: string
}


const TrendingCard = ({ src, alt }: TrendingCardProps) => {
  return (
    <Card className="w-[16rem] h-100 overflow-hidden relative rounded-none p-0 border-0">
      <Image src={src} alt={alt} fill className="object-cover object-center" />
    </Card>
  )
}

export default TrendingCard