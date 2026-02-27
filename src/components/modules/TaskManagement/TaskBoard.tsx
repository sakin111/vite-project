import React from "react";
import TaskCard from "./TaskCard";
import { cn } from "@/lib/utils";

interface Task {
    id: string;
    title: string;
    description: string;
    status: "todo" | "in-progress" | "done";
    dueDate: string;
    assignee: string;
    priority: "low" | "medium" | "high";
}

interface ColumnProps {
    title: string;
    tasks: Task[];
    status: "todo" | "in-progress" | "done";
}

const Column: React.FC<ColumnProps> = ({ title, tasks, status }) => {
    const statusGradients = {
        todo: "from-[#1C6442]/10 to-[#1C6442]/5",
        "in-progress": "from-amber-500/10 to-amber-500/5",
        done: "from-blue-500/10 to-blue-500/5",
    };

    const statusBorder = {
        todo: "border-[#1C6442]/30",
        "in-progress": "border-amber-500/30",
        done: "border-blue-500/30",
    };

    return (
        <div className={cn("flex flex-col gap-4 p-4 rounded-2xl border bg-gradient-to-b min-h-[500px] w-full max-w-sm", statusGradients[status], statusBorder[status])}>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#1C6442] dark:text-[#2a8f5e] flex items-center gap-2">
                    <span className={cn("w-2 h-2 rounded-full", status === 'todo' ? 'bg-[#1C6442]' : status === 'in-progress' ? 'bg-amber-500' : 'bg-blue-500')} />
                    {title}
                </h3>
                <span className="text-[10px] font-bold bg-[#1C6442] text-white px-2 py-0.5 rounded-full shadow-sm">
                    {tasks.length}
                </span>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] scrollbar-thin scrollbar-thumb-[#1C6442]/20 pr-1">
                {tasks.map((task) => (
                    <TaskCard key={task.id} {...task} />
                ))}
                {tasks.length === 0 && (
                    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-[#1C6442]/10 rounded-xl text-slate-400">
                        <p className="text-xs font-medium">No tasks yet</p>
                    </div>
                )}
            </div>
        </div>
    );
};

interface TaskBoardProps {
    tasks: Task[];
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {
    const todoTasks = tasks.filter((t) => t.status === "todo");
    const inProgressTasks = tasks.filter((t) => t.status === "in-progress");
    const doneTasks = tasks.filter((t) => t.status === "done");

    return (
        <div className="w-full h-full overflow-x-auto pb-6">
            <div className="flex flex-col md:flex-row gap-6 min-w-max md:min-w-0 justify-center">
                <Column title="To Do" tasks={todoTasks} status="todo" />
                <Column title="In Progress" tasks={inProgressTasks} status="in-progress" />
                <Column title="Completed" tasks={doneTasks} status="done" />
            </div>
        </div>
    );
};

export default TaskBoard;
