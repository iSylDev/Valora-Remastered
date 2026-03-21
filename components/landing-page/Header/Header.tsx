import { Menu } from "lucide-react";
import { Button, buttonVariants } from '../../../components/ui/button'
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


const Header = () => {
  return (<header className="flex justify-between items-center py-7 lg:max-w-7xl mx-auto px-6 lg:px-16 ">
    <Image src='/images/logo.svg' width={120} height={130} alt="Valora Logo" className="pointer-events-none" />
    <Link href='/sign-in' className={buttonVariants({ size: "xl" })}>
      Sign In
    </Link>
  </header>);
}

export default Header;