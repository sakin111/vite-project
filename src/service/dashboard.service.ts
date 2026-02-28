import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export interface DashboardOverview {
    totalProjects: number;
    endedProjects: number;
    runningProjects: number;
    pendingProjects: number;
}

export interface AnalyticsData {
    day: string;
    value: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: string;
    status: "Completed" | "In Progress" | "Pending";
    task?: string;
}

export interface Product {
    id: string;
    name: string;
    dueDate: string;
    status: string;
}

export const useDashboardOverview = () => {
    return useQuery({
        queryKey: ["dashboard", "overview"],
        queryFn: async () => {
            const res = await axiosInstance.get("/api/overview");
            return res.data as DashboardOverview;
        },
    });
};

export const useDashboardAnalytics = () => {
    return useQuery({
        queryKey: ["dashboard", "analytics"],
        queryFn: async () => {
            const res = await axiosInstance.get("/api/analytics");
            return res.data as AnalyticsData[];
        },
    });
};

export const useDashboardUsers = () => {
    return useQuery({
        queryKey: ["dashboard", "users"],
        queryFn: async () => {
            const res = await axiosInstance.get("/api/users");
            return res.data?.users || res.data as User[];
        },
    });
};

export const useDashboardProducts = () => {
    return useQuery({
        queryKey: ["dashboard", "products"],
        queryFn: async () => {
            const res = await axiosInstance.get("/api/products");
            return res.data?.products || res.data as Product[];
        },
    });
};

export const useAllDashboardData = () => {
    return useQuery({
        queryKey: ["dashboard", "all"],
        queryFn: async () => {
            const res = await axiosInstance.get("/api/dashboard");
            return res.data;
        },
    });
};
