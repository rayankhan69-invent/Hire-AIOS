import { PlusCircle, ArrowRight, CalendarPlus } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { UpcomingInterviews } from "@/components/dashboard/upcoming-interviews";
import { dashboardStats, recentActivity, upcomingInterviews } from "@/lib/mock/dashboard";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="A snapshot of your agency's hiring pipeline."
        actions={
          <Button size="sm">
            <PlusCircle />
            New role
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div className="space-y-1.5">
              <CardTitle>Recent activity</CardTitle>
              <CardDescription>What&apos;s moved across your pipeline recently.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              View all
              <ArrowRight />
            </Button>
          </CardHeader>
          <CardContent>
            <RecentActivity items={recentActivity} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <div className="space-y-1.5">
              <CardTitle>Upcoming interviews</CardTitle>
              <CardDescription>Next 48 hours across your team.</CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground" aria-label="Schedule interview">
              <CalendarPlus className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <UpcomingInterviews items={upcomingInterviews} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
