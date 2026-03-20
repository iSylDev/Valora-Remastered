import Image from "next/image"

const BackgroundImages = () => {
  return (
    <>
      <Image src='/images/herosectiongradient.png' alt="" width={600} height={500} className="z-10 translate-y-15 pointer-events-none translate-x-150 hidden lg:flex absolute" />
      <Image src='/images/herogradient.png' alt="" fill className="z-0 -translate-y-100 shrink-0 lg:hidden absolute opacity-70" />
    </>
  )
}

export default BackgroundImages