import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight, Mail } from "lucide-react"
import { cn } from "@/lib/utils"



export default function EmailInputArea({ invert }: { invert?: boolean }) {
  return (
    <div className={cn('mt-50 flex flex-col', invert ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row')}>
      <p className="text-card-foreground my-3 text-center w-[65%] mx-auto">Ready to watch? Enter your email to create or restart your membership</p>
      <form className="flex flex-col gap-2 lg:flex-row md:w-[70%] max-w-120 mx-auto lg:mx-0" >
        <div className="flex items-center border border-border pr-3 pl-1 py-1 rounded-md mx-auto bg-foreground/10 w-full ">
          <Input placeholder="Email Address..." className="border-0 placeholder:text-sm z-50" />
          <Mail className="stroke-border" />
        </div>
        <Button type="button" size='xl' className="w-full rounded-md py-3! lg:w-fit lg:h-full z-50">
          <p>Get Started Now</p>
          <ChevronRight size={15} />
        </Button>
      </form>
    </div>
  )
}