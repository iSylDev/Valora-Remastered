import { Menu } from "lucide-react";
import { Button, buttonVariants } from '../../../components/ui/button'
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


const Header = () => {
  return (<header className="flex justify-between items-center py-7 px-7 lg:max-w-6xl mx-auto lg:px-6 pointer-events-none">
    <Image src='/images/logo.svg' width={120} height={130} alt="Valora Logo" />
    <Link href='/sign-in' className={buttonVariants({ size: "lg" })}>
      Sign In
    </Link>
  </header>);
}

export default Header;