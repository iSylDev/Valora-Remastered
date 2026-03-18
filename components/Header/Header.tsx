import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";


const Header = () => {
  return (<header className="border-b border-b-black/10 py-5 px-5">
    <div className="flex justify-between items-center">
      <Image src='/images/logo.svg' alt="Logo" width={270} height={12} />

      <div className="hidden lg:flex lg:justify-between">
        <nav>

        </nav>
        <Button>
          Browse Recipes
        </Button>
      </div>

      <Button className="bg-primary/40 hover:bg-primary/50 px-2 py-4 rounded-xl!  hover:cursor-pointer">
        <Menu />
      </Button>
    </div>
    
  </header>);
}

export default Header;