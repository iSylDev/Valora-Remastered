import Image from "next/image"

const HeroBackgroundImages = () => {
  return (
    <div className="pointer-events-none">
      <Image src='/images/herosectiongradient.png' alt="" width={400} height={500} className="z-10 top-[20%] pointer-events-none left-[50%]  hidden lg:flex absolute opacity-80" />
      <Image src='/images/herosectiongradient.png' alt="" width={400} height={500} className="z-10 translate-y-15 pointer-events-none left-[50%]  hidden lg:flex absolute opacity-80" />
      <Image src='/images/herogradient.png' alt="" fill className="z-0 -translate-y-100 shrink-0 lg:hidden absolute opacity-70" />
    </div >
  )
}

export default HeroBackgroundImages