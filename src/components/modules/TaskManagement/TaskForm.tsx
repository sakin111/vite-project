import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

const taskSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    priority: z.enum(["low", "medium", "high"]),
    status: z.enum(["todo", "in-progress", "done"]),
    dueDate: z.string().optional(),
});

type TaskFormValues = z.infer<typeof taskSchema>;

interface TaskFormProps {
    onSubmit: (data: TaskFormValues) => void;
    initialValues?: Partial<TaskFormValues>;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialValues }) => {
    const form = useForm<TaskFormValues>({
        resolver: zodResolver(taskSchema),
        defaultValues: {
            title: initialValues?.title || "",
            description: initialValues?.description || "",
            priority: initialValues?.priority || "medium",
            status: initialValues?.status || "todo",
            dueDate: initialValues?.dueDate || "",
        },
    });

    return (
        <Card className="border-none shadow-2xl bg-white dark:bg-slate-900 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#1C6442] to-[#2a8f5e] text-white p-6">
                <CardTitle className="flex items-center gap-2 text-xl font-bold">
                    <PlusCircle className="w-6 h-6" />
                    Create New Task
                </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#1C6442] font-bold">Task Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter task title" className="h-12 border-[#1C6442]/20 focus:border-[#1C6442] focus:ring-[#1C6442]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#1C6442] font-bold">Description</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="What needs to be done?" className="min-h-[100px] border-[#1C6442]/20 focus:border-[#1C6442] focus:ring-[#1C6442]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="priority"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#1C6442] font-bold">Priority</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-12 border-[#1C6442]/20">
                                                    <SelectValue placeholder="Select priority" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="low">Low</SelectItem>
                                                <SelectItem value="medium">Medium</SelectItem>
                                                <SelectItem value="high">High</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dueDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#1C6442] font-bold">Due Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" className="h-12 border-[#1C6442]/20" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button type="submit" className="w-full h-14 bg-gradient-to-r from-[#1C6442] to-[#2a8f5e] hover:from-[#144d32] hover:to-[#1c6442] text-white text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                            Create Task
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default TaskForm;
