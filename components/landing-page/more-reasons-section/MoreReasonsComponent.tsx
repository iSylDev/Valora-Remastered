import Image from "next/image";

type MoreReasonsProps = {
  image: string;
  headerText: string;
  description: string;
}


export default function MoreReasonsComponent({ image, headerText, description }: MoreReasonsProps) {
  return (
    <div className="flex flex-col items-center gap-3 lg:items-start  z-50">
      <div className="w-16 h-16 flex items-center justify-center bg-white p-3 rounded-full overflow-hidden">
        <Image src={image} width={40} height={40} alt={headerText} />
      </div>

      <div className="text-center space-y-3 lg:text-left">
        <h3 className="text-xl font-medium">{headerText}</h3>
        <p className="text-card-foreground w-[75%] mx-auto lg:mx-0 lg:w-full">{description}</p>
      </div>
    </div>
  )
}