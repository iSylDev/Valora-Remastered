import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";


const Header = () => {
  return (<header>
    <div className="flex justify-between items-center">
      <Image src='/images/logo.svg' alt="Logo" width={250} height={12} />

      <div className="hidden lg:flex lg:justify-between">
        <nav>

        </nav>
        <Button>
          Browse Recipes
        </Button>
      </div>

      <Button className="bg-primary/40 px-3 py-5 rounded-sm">
        <Menu />
      </Button>
    </div>
  </header>);
}

export default Header;