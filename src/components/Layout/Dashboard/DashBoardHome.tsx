import TaskBoard from "@/components/modules/TaskManagement/TaskBoard";
import TaskForm from "@/components/modules/TaskManagement/TaskForm";
import { useState } from "react";

const DashBoardHome = () => {
    const [tasks, setTasks] = useState([
        {
            id: "1",
            title: "Design System Overhaul",
            description: "Implementing the new evergreen gradient theme across all components.",
            status: "in-progress" as const,
            dueDate: "2026-03-05",
            assignee: "Alex Chen",
            priority: "high" as const,
        },
        {
            id: "2",
            title: "Auth Integration",
            description: "Setting up AuthProvider and securing API routes with JWT cookies.",
            status: "done" as const,
            dueDate: "2026-02-28",
            assignee: "Sarah Miller",
            priority: "medium" as const,
        },
        {
            id: "3",
            title: "Client Feedback Loop",
            description: "Gathering initial feedback on the task management module prototype.",
            status: "todo" as const,
            dueDate: "2026-03-10",
            assignee: "John Doe",
            priority: "low" as const,
        },
    ]);

    const handleCreateTask = (data: any) => {
        const newTask = {
            ...data,
            id: Math.random().toString(36).substr(2, 9),
            assignee: "Current User",
        };
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="pt-24 px-6 md:px-12 max-w-screen-2xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
                        Project <span className="text-[#1C6442] bg-gradient-to-r from-[#1C6442] to-[#2a8f5e] bg-clip-text text-transparent italic">Board</span>
                    </h1>
                    <p className="text-slate-500 mt-2 font-medium">Manage your progress with surgical precision and elegant design.</p>
                </div>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                <div className="xl:col-span-3">
                    <TaskBoard tasks={tasks} />
                </div>
                <div className="xl:col-span-1">
                    <TaskForm onSubmit={handleCreateTask} />
                </div>
            </div>
        </div>
    );
};

export default DashBoardHome;
