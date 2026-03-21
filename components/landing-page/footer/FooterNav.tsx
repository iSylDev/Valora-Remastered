import footerData from "./footerData";

export default function FooterNav() {
  return (
    <ul className="flex flex-col gap-3 text-card-foreground lg:flex-row text-sm lg:gap-5">
      {
        footerData.map(link => (
          <li key={link.label} className="hover:text-white transition-all duration-300">
            <a href={link.to}>{link.label}</a>
          </li>
        ))
      }
    </ul>
  )
}