import Image from "next/image"

const BackgroundImages = () => {
  return (
    <div>
      <Image src='/images/herosectiongradient.png' alt="" width={600} height={500} className="z-10 translate-y-15 pointer-events-none translate-x-150 hidden lg:flex absolute" />
      <Image src='/images/herogradient.png' alt="" fill className="z-20 -translate-y-23 shrink-0 lg:hidden absolute" />
    </div>
  )
}

export default BackgroundImages