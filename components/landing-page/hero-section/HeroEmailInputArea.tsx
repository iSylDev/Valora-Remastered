import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";


const HeroEmailInputArea = () => {
  return (<div className="w-full px-4 mt-7 lg:px-0 ">
    <form className="flex flex-col gap-2 lg:flex-row md:w-[70%] max-w-120 mx-auto lg:mx-0" >
      <div className="flex items-center border border-border pr-3 pl-1 py-1 rounded-md mx-auto bg-foreground/10 w-full ">
        <Input placeholder="Email Address..." className="border-0 placeholder:text-sm z-50" />
        <Mail className="stroke-border" />
      </div>
      <Button type="button" size='xl' className="w-full rounded-md py-3! lg:w-fit lg:h-full z-50">
        <p>Get Started Now</p>
        <ArrowRight />
      </Button>
    </form>

    <p className="text-center mx-auto mt-5 font-extralight lg:text-left lg:w-[60%] lg:mr-auto lg:mx-0 z-50">Ready to watch? Enter your email to create or restart your membership.</p>
  </div>);
}

export default HeroEmailInputArea;