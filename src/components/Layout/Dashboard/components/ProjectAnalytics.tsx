import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboardAnalytics } from "@/service/dashboard.service";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectAnalytics() {
    const { data, isLoading, error } = useDashboardAnalytics();

    if (isLoading) {
        return <Skeleton className="h-[300px] w-full rounded-2xl" />;
    }

    if (error || !data) {
        return <div className="text-destructive text-sm p-8 text-center bg-destructive/5 rounded-2xl">Failed to load analytics.</div>;
    }

    const maxValue = Math.max(...data.map(d => d.value), 1);

    return (
        <Card className="border-none shadow-sm rounded-2xl">
            <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold">Project Analytics</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="flex items-end justify-between h-48 gap-2">
                    {data.map((item, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                            <div className="w-full relative group">
                                <div className="w-full bg-muted/30 rounded-full h-32 absolute bottom-0" />
                                <div
                                    className={`w-full rounded-full transition-all duration-500 absolute bottom-0 ${item.value === maxValue ? "bg-[#1C6442]" : "bg-[#1C6442]/40"
                                        }`}
                                    style={{ height: `${(item.value / maxValue) * 100}%` }}
                                >
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[10px] px-2 py-1 rounded shadow-lg transition-opacity z-10 whitespace-nowrap">
                                        {item.value}%
                                    </div>
                                </div>
                            </div>
                            <span className="text-xs text-muted-foreground font-medium">{item.day}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
