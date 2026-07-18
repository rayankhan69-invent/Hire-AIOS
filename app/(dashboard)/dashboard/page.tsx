import { Users, Briefcase, CalendarCheck, Target } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Inbox, PlusCircle } from "lucide-react";

const stats = [
  { label: "Active candidates", value: "1,284", delta: "+8.2% this month", trend: "up" as const, icon: Users },
  { label: "Open roles", value: "37", delta: "+3 this week", trend: "up" as const, icon: Briefcase },
  { label: "Interviews scheduled", value: "19", delta: "No change", trend: "flat" as const, icon: CalendarCheck },
  { label: "Avg. match score", value: "82%", delta: "-1.4% this month", trend: "down" as const, icon: Target },
];

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
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Pipeline activity</CardTitle>
            <CardDescription>Recent candidate movement across active roles.</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={Inbox}
              title="No activity yet"
              description="Once candidates move through your pipeline, updates will show up here in real time."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming interviews</CardTitle>
            <CardDescription>Next 7 days across your team.</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={CalendarCheck}
              title="Nothing scheduled"
              description="Interviews you schedule with candidates will appear here."
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
