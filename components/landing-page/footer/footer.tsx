import FooterNav from "./FooterNav";
import MediaLinks from "./MediaLinks/MediaLinks";


export default function Footer() {
  return (
    <footer className="flex flex-col border-t border-t-white/10 mt-9 pt-5 lg:flex-row lg:justify-between lg:items-center">
      <FooterNav />
      <MediaLinks />
    </footer>
  )
}