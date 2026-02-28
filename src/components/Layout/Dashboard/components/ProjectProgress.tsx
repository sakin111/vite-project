import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboardOverview } from "@/service/dashboard.service";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectProgress() {
    const { data, isLoading } = useDashboardOverview();

    if (isLoading) {
        return <Skeleton className="h-48 w-full rounded-2xl" />;
    }

    const total = data?.totalProjects || 0;
    const ended = data?.endedProjects || 0;
    const percentage = total > 0 ? Math.round((ended / total) * 100) : 0;

    return (
        <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold">Project Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center pt-2">
                <div className="relative w-40 h-24">
                    <svg className="w-full h-full transform -rotate-180" viewBox="0 0 100 60">
                        <path
                            d="M 10 50 A 40 40 0 0 1 90 50"
                            fill="none"
                            stroke="hsl(var(--muted))"
                            strokeWidth="8"
                            strokeLinecap="round"
                            className="opacity-20"
                        />
                        <path
                            d="M 10 50 A 40 40 0 0 1 90 50"
                            fill="none"
                            stroke="#1C6442"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="125.6"
                            strokeDashoffset={125.6 - (125.6 * (percentage / 100))}
                            className="transition-all duration-1000 ease-out"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                        <span className="text-3xl font-bold tracking-tighter">{percentage}%</span>
                        <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Project Ended</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-4 w-full justify-center">
                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-[#1C6442]" />
                        <span className="text-[10px] font-medium">Completed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-[#1C6442]/60" />
                        <span className="text-[10px] font-medium">In Progress</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-muted" />
                        <span className="text-[10px] font-medium">Pending</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
