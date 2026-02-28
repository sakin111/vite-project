import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Leaf,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,

  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"

import { useAuth } from "@/lib/AuthContext"
import { cn } from "@/lib/utils"

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard", active: true },
  { title: "Tasks", icon: CheckSquare, url: "#" },
  { title: "Calendar", icon: Calendar, url: "#" },
  { title: "Analytics", icon: BarChart3, url: "#" },
  { title: "Team", icon: Users, url: "#" },
]

const generalItems = [
  { title: "Settings", icon: Settings, url: "#" },
  { title: "Help", icon: HelpCircle, url: "#" },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { logout } = useAuth()
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50" {...props}>
      <SidebarHeader className="h-16 flex items-center px-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-[#1C6442] rounded-lg flex items-center justify-center text-white">
            <Leaf className="h-5 w-5" />
          </div>
          {!isCollapsed && <span className="text-xl font-bold tracking-tight">Donezo</span>}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 pt-4">
        <div className="mb-8 rotate-0">
          {!isCollapsed && <p className="px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Menu</p>}
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={cn(
                    "h-11 rounded-xl px-3 transition-all duration-200",
                    item.active ? "bg-muted text-[#1C6442] font-bold" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <a href={item.url}>
                    <item.icon className={cn("h-5 w-5", item.active && "text-[#1C6442]")} />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
                {item.active && !isCollapsed && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#1C6442] rounded-r-full" />
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>

        <div>
          {!isCollapsed && <p className="px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">General</p>}
          <SidebarMenu>
            {generalItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title} className="h-11 rounded-xl px-3 text-muted-foreground hover:text-foreground">
                  <a href={item.url}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={logout}
                className="h-11 rounded-xl px-3 text-muted-foreground hover:text-red-600 hover:bg-red-50/50"
                tooltip="Logout"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
