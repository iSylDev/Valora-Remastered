import Image from "next/image"
import { mediaData } from "./mediaData"

export default function MediaLinks() {
  return (
    <div className="flex gap-5 mt-5 lg:mt-0">
      {
        mediaData.map(media => (
          <a key={media.label} href={media.to}>
            <Image src={media.src} alt={media.label} width={24} height={24} />
          </a>
        ))
      }
    </div>
  )
}