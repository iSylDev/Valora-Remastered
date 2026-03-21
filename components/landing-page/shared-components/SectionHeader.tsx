

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"


const SectionHeader = ({ title, description, buttonText = 'See All' }: { title: string, description: string, buttonText?: string }) => {
  return (
    <div className="mb-9 flex flex-col lg:flex-row lg:justify-center">
      <h3 className="text-3xl font-semibold mb-1 lg:w-full lg:text-5xl lg:text-left">{title}</h3>
      <div>
        <p className="text-card-foreground md:w-[70%] mx-auto lg:mx-0 lg:w-full">{description}</p>
        <Button size='xl' className="mt-3">
          <p>{buttonText}</p>
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

export default SectionHeader