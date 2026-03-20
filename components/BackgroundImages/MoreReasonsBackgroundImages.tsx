import Image from "next/image"


const MoreReasonBackgroundImages = () => {
  return (
    <div className="pointer-events-none">
      <Image src='/images/more-reasons/gradientmobile.png' fill alt="Background Image" className="absolute -translate-y-70 z-0 lg:hidden" />
      <Image src='/images/more-reasons/gradientdesktop.png' height={600} width={500}  alt="Background Image" className="absolute -translate-y-[20%] z-0 hidden lg:flex" />
    </div>
  )
}

export default MoreReasonBackgroundImages