import { Search, Bell, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuth } from "@/lib/AuthContext";

export default function DashboardHeader() {
    const { user } = useAuth();

    return (
        <header className="flex items-center justify-between px-4 h-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20 w-full border-b md:px-8">
            <div className="flex items-center gap-4 flex-1">
                <SidebarTrigger className="md:hidden h-9 w-9" />
                <div className="flex items-center flex-1 max-w-md relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search task"
                        className="pl-9 h-10 bg-muted/50 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-[#1C6442]"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 border rounded px-1.5 py-0.5 bg-background text-[10px] text-muted-foreground font-mono">
                        <span className="text-xs">⌘</span>F
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4 ml-4">
                    <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground rounded-full">
                        <MessageSquare className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground rounded-full">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-background" />
                    </Button>
                    <div className="flex items-center gap-3 pl-2 md:pl-4 border-l">
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-semibold leading-none">{user?.id}</p>
                            <p className="text-xs text-muted-foreground mt-1">{user?.email}</p>
                        </div>
                        <Avatar className="h-9 w-9 border-2 border-[#1C6442]/20">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>TM</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    );
}
