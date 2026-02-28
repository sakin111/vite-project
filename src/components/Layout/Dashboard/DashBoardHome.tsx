import { lazy, Suspense } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Layout from "../Layout"
import DashboardHeader from "./components/DashboardHeader"
import { DashboardSkeleton } from "./components/DashboardSkeleton"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"


const StatsCards = lazy(() => import("./components/StatsCards"))
const ProjectAnalytics = lazy(() => import("./components/ProjectAnalytics"))
const TeamCollaboration = lazy(() => import("./components/TeamCollaboration"))
const ProjectProgress = lazy(() => import("./components/ProjectProgress"))
const TimeTracker = lazy(() => import("./components/TimeTracker"))
const RightPanel = lazy(() => import("./components/RightPanel"))

export default function DashboardHome() {
  return (
    <Layout hideNav hideFooter>
      <SidebarProvider className="bg-[#f8fafc]/50">
        <AppSidebar />
        <SidebarInset className="bg-transparent overflow-hidden">
          <DashboardHeader />

          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <Suspense fallback={<DashboardSkeleton />}>
              <div className="max-w-7xl mx-auto space-y-8">

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-sm text-muted-foreground font-medium">
                      Plan, prioritize, and accomplish your tasks with ease.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button className="bg-[#1C6442] hover:bg-[#144d32] text-white rounded-xl h-11 px-6 gap-2 font-bold shadow-lg shadow-[#1C6442]/20">
                      <Plus className="h-5 w-5" /> Add Project
                    </Button>
                    <Button variant="outline" className="border-border rounded-xl h-11 px-6 font-bold shadow-sm">
                      Import Data
                    </Button>
                  </div>
                </div>

                {/* Stats Grid */}
                <StatsCards />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-start">

                  {/* Left & Middle Column */}
                  <div className="lg:col-span-8 space-y-6">
                    <ProjectAnalytics />
                    <TeamCollaboration />
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-4 space-y-6">
                    <RightPanel />
                    <ProjectProgress />
                    <TimeTracker />
                  </div>

                </div>
              </div>
            </Suspense>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </Layout>
  )
}
