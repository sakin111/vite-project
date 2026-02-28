import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboardUsers } from "@/service/dashboard.service";
import type { User } from "@/service/dashboard.service";
import { Skeleton } from "@/components/ui/skeleton";

export default function TeamCollaboration() {
    const { data, isLoading, error } = useDashboardUsers();

    if (isLoading) {
        return <Skeleton className="h-[250px] w-full rounded-2xl" />;
    }

    if (error || !data) {
        return <div className="text-destructive text-sm p-6 text-center bg-destructive/5 rounded-2xl">Failed to load team data.</div>;
    }

    const users = Array.isArray(data) ? data : [];

    return (
        <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle className="text-sm font-semibold">Team Collaboration</CardTitle>
                <Button variant="outline" size="sm" className="h-7 px-2 rounded-lg text-[10px] gap-1">
                    <Plus className="h-3 w-3" /> Add Member
                </Button>
            </CardHeader>
            <CardContent className="space-y-5">
                {users.map((member: User, idx: number) => (
                    <div key={member.id || idx} className="flex items-center gap-3 group">
                        <Avatar className="h-10 w-10 ring-2 ring-background ring-offset-2 ring-offset-muted/20">
                            <AvatarImage src={member.avatar || `https://i.pravatar.cc/150?u=${idx}`} />
                            <AvatarFallback>{member.name?.[0] || "?"}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold truncate">{member.name}</p>
                            <p className="text-[10px] text-muted-foreground truncate italic">
                                {member.task || member.role || "Team Member"}
                            </p>
                        </div>
                        <Badge
                            variant="outline"
                            className={`text-[9px] px-1.5 py-0 rounded-full font-medium ${member.status === "Completed" ? "bg-green-100 text-green-700 border-green-200" :
                                member.status === "In Progress" ? "bg-orange-100 text-orange-700 border-orange-200" :
                                    "bg-red-100 text-red-700 border-red-200"
                                }`}
                        >
                            {member.status || "Pending"}
                        </Badge>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
