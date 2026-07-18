import { CalendarClock } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent } from "@/components/ui/card";

export default function InterviewsPage() {
  return (
    <>
      <PageHeader title="Interviews" description="Scheduled and completed interviews across your team." />
      <Card>
        <CardContent className="p-0">
          <EmptyState
            icon={CalendarClock}
            title="No interviews scheduled"
            description="Interviews you schedule with candidates will show up here."
            className="border-none"
          />
        </CardContent>
      </Card>
    </>
  );
}
