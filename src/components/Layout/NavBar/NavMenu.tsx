import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Link } from "react-router"
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";




export const NavMenu = (props: NavigationMenuProps) => {


return(
    <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start font-medium">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/blogs">Blogs</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/about">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/project">Project</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    {/* {
    user?.email && (
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/dashboard">Dashboard</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    )}  */}
       </NavigationMenuList>
  </NavigationMenu>
)

}