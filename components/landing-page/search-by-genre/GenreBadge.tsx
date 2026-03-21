import { Badge } from "@/components/ui/badge";
import Image from "next/image";


export default function SearchByGenreBadge({imageUrl, label}: { imageUrl: string, label: string }) {
  return (
    <Badge variant='secondary' className="h-11 flex gap-2 px-3 items-center md:h-13 pr-8 md:pr-12 lg:h-14 lg:gap-4 hover:cursor-pointer">
      <div className="bg-white h-7 w-7 rounded-full p-1 md:h-9 md:w-9 ">
        <div className="relative h-full w-full">
          <Image
            src={imageUrl}
            alt="Family"
            fill
          />
        </div>
      </div>
      <p className="md:text-[14px]">{label}</p>
    </Badge>
  )
}
