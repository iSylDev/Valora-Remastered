import Image from "next/image";

type MoreReasonsProps = {
  image: string;
  headerText: string;
  description: string;
}


export default function MoreReasonsComponent({ image, headerText, description }: MoreReasonsProps) {
  <div>
    <div className="w-12 h-12 rounded-full">
      <Image src={image} fill alt={headerText} />
    </div>

    <div>
      <h3>{headerText}</h3>
      <p>{description}</p>
    </div>
  </div>
}