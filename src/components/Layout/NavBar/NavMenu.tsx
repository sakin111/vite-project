import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Link } from "react-router"
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import { useAuth } from "@/lib/AuthContext";




export const NavMenu = (props: NavigationMenuProps) => {
  const { user } = useAuth();


  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start font-medium text-slate-600 dark:text-slate-400">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/" className="hover:text-[#1C6442] transition-colors">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/blogs" className="hover:text-[#1C6442] transition-colors">Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/about" className="hover:text-[#1C6442] transition-colors">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {
          user && (
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/dashboard" className="text-[#1C6442] font-bold underline decoration-2 underline-offset-4">Dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
      </NavigationMenuList>
    </NavigationMenu>
  )

}