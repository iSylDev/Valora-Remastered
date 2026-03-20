import Image from "next/image"

const HeroBackgroundImages = () => {
  return (
    <>
      <Image src='/images/herosectiongradient.png' alt="" width={600} height={500} className="z-10 translate-y-15 pointer-events-none translate-x-[110%] xl:translate-x-[140%] hidden lg:flex absolute" />
      <Image src='/images/herogradient.png' alt="" fill className="z-0 -translate-y-100 shrink-0 lg:hidden absolute opacity-70" />
    </>
  )
}

export default HeroBackgroundImages