import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useDashboardOverview } from "@/service/dashboard.service";
import { Skeleton } from "@/components/ui/skeleton";

export default function StatsCards() {
    const { data, isLoading, error } = useDashboardOverview();

    const stats = [
        {
            title: "Total Projects",
            value: data?.totalProjects ?? "0",
            trend: "+ increased from last month",
            theme: "bg-[#1C6442] text-white",
            iconColor: "text-white/80",
        },
        {
            title: "Ended Projects",
            value: data?.endedProjects ?? "0",
            trend: "+ increased from last month",
            theme: "bg-background text-foreground",
            iconColor: "text-muted-foreground",
        },
        {
            title: "Running Projects",
            value: data?.runningProjects ?? "0",
            trend: "+ increased from last month",
            theme: "bg-background text-foreground",
            iconColor: "text-muted-foreground",
        },
        {
            title: "Pending Project",
            value: data?.pendingProjects ?? "0",
            trend: "On Discuss",
            theme: "bg-background text-foreground",
            iconColor: "text-muted-foreground",
        },
    ];

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-32 rounded-2xl" />
                ))}
            </div>
        );
    }

    if (error) {
        return <div className="text-destructive text-sm p-4 text-center bg-destructive/10 rounded-xl">Failed to load overview data.</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
                <Card key={idx} className={`border-none shadow-sm rounded-2xl overflow-hidden ${stat.theme}`}>
                    <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-sm font-medium opacity-90">{stat.title}</span>
                            <div className={`p-1.5 rounded-full border border-current opacity-50 ${stat.iconColor}`}>
                                <ArrowUpRight className="h-3 w-3" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-3xl font-bold">{stat.value}</h3>
                            <p className={`text-[10px] sm:text-xs opacity-70 flex items-center gap-1`}>
                                <span className="inline-block w-3 h-3 rounded-sm bg-current opacity-20" />
                                {stat.trend}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
