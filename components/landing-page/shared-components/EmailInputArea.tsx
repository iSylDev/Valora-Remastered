import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight, Mail } from "lucide-react"
import { cn } from "@/lib/utils"



export default function EmailInputArea({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-card-foreground my-3 text-center w-[75%] mx-auto lg:mx-0 lg:text-left">Ready to watch? Enter your email to create or restart your membership</p>
      <form className="flex flex-col gap-2 md:flex-row w-full max-w-120 mx-auto lg:mx-0" >
        <div className="flex items-center border border-border pr-3 pl-1 py-1 rounded-md mx-auto bg-foreground/10 w-full ">
          <Input placeholder="Email Address..." className="border-0 placeholder:text-sm z-50" />
          <Mail className="stroke-border" />
        </div>
        <Button type="button" size='xl' className="w-full rounded-md py-3! md:w-fit lg:h-full z-50">
          <p>Get Started Now</p>
          <ChevronRight size={15} />
        </Button>
      </form>
    </div>
  )
}