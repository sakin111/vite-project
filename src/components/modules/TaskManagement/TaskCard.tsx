import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskCardProps {
    title: string;
    description: string;
    status: "todo" | "in-progress" | "done";
    dueDate?: string;
    assignee?: string;
    priority: "low" | "medium" | "high";
    className?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
    title,
    description,
    dueDate,
    assignee,
    priority,
    className,
}) => {
    const priorityColors = {
        low: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
        high: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
    };

    return (
        <Card className={cn("group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900", className)}>
            <div className="h-1.5 w-full bg-gradient-to-r from-[#1C6442] to-[#2a8f5e]" />
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start gap-2">
                    <Badge className={cn("text-[10px] font-bold uppercase tracking-wider", priorityColors[priority])}>
                        {priority}
                    </Badge>
                    <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1C6442] to-[#2a8f5e] border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] text-white font-bold">
                            {assignee?.charAt(0) || "U"}
                        </div>
                    </div>
                </div>
                <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-2 group-hover:text-[#1C6442] transition-colors">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 italic">
                    "{description}"
                </p>
            </CardContent>
            <CardFooter className="pt-0 flex items-center justify-between border-t border-slate-50 dark:border-slate-800 mt-2 py-3 bg-slate-50/50 dark:bg-slate-800/50">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#1C6442]" />
                    <span>{dueDate || "No deadline"}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <User className="w-3.5 h-3.5 text-[#1C6442]" />
                    <span>{assignee || "Unassigned"}</span>
                </div>
            </CardFooter>
        </Card>
    );
};

export default TaskCard;
