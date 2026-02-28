import { Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboardProducts } from "@/service/dashboard.service";
import type { Product } from "@/service/dashboard.service";
import { Skeleton } from "@/components/ui/skeleton";

const colors = ["text-blue-500", "text-[#1C6442]", "text-purple-500", "text-orange-500", "text-pink-500"];

export default function RightPanel() {
    const { data, isLoading, error } = useDashboardProducts();

    if (isLoading) {
        return <Skeleton className="h-[400px] w-full rounded-2xl" />;
    }

    if (error || !data) {
        return <div className="text-destructive text-sm p-6 text-center bg-destructive/5 rounded-2xl">Failed to load projects.</div>;
    }

    const projects = Array.isArray(data) ? data : [];

    return (
        <div className="space-y-6">
            <Card className="border-none shadow-sm rounded-2xl">
                <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-semibold">Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold leading-tight">Meeting with Arc Company</h4>
                        <p className="text-[10px] text-muted-foreground">Time : 02.00 pm - 04.00 pm</p>
                        <Button className="w-full bg-[#1C6442] hover:bg-[#144d32] text-white rounded-xl h-10 gap-2 text-xs font-bold">
                            <Video className="h-4 w-4" /> Start Meeting
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-none shadow-sm rounded-2xl">
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                    <CardTitle className="text-sm font-semibold">Project</CardTitle>
                    <Button variant="outline" size="sm" className="h-6 px-2 text-[9px] rounded-lg">
                        + New
                    </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                    {projects.map((p: Product, idx: number) => (
                        <div key={p.id || idx} className="flex items-start gap-3">
                            <div className={`mt-0.5 ${colors[idx % colors.length]}`}>
                                <div className="h-3 w-3 rounded-[3px] border-2 border-current flex items-center justify-center p-[1px]">
                                    <div className="w-full h-full bg-current rounded-[1px] opacity-40 shadow-sm" />
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-bold leading-none">{p.name}</p>
                                <p className="text-[10px] text-muted-foreground mt-1.5">Due date: {p.dueDate || "N/A"}</p>
                            </div>
                        </div>
                    ))}
                    {projects.length === 0 && <p className="text-xs text-muted-foreground text-center">No projects found.</p>}
                </CardContent>
            </Card>
        </div>
    );
}
