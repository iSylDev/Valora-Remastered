import { Menu } from "lucide-react";
import { Button } from "../ui/button";


const Header = () => {
  return (<header>
    <div className="flex justify-between">
      {/* <Image /> */}
      <h3>Healthy Recipe Finder</h3>

      <div className="hidden lg:flex lg:justify-between">
        <nav>

        </nav>
        <Button>
          Browse Recipes
        </Button>
      </div>

      <Menu />
    </div>
  </header>);
}

export default Header;