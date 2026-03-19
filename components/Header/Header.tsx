import { Menu } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";


const Header = () => {
  return (<header className="flex justify-between items-center py-7 px-7">
    <Image src='/images/logo.svg' width={120} height={130} alt="Valora Logo" />
    <Link href='/sign-in' className={buttonVariants({size: "lg"})}>Sign In</Link>
  </header>);
}

export default Header;