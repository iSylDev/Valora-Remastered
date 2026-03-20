import Image from "next/image";

type MoreReasonsProps = {
  image: string;
  headerText: string;
  description: string;
}


export default function MoreReasonsComponent({ image, headerText, description }: MoreReasonsProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-fit bg-white p-3 rounded-full overflow-hidden">
        <Image src={image} width={40} height={40} alt={headerText} />
      </div>

      <div className="text-center space-y-3">
        <h3 className="text-xl">{headerText}</h3>
        <p className="text-card-foreground">{description}</p>
      </div>
    </div>
  )
}