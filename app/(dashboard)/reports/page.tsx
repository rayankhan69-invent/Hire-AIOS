import { BarChart3 } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <>
      <PageHeader title="Reports" description="Hiring performance and pipeline analytics." />
      <Card>
        <CardContent className="p-0">
          <EmptyState
            icon={BarChart3}
            title="Not enough data yet"
            description="Reports will populate once you have active roles and candidate activity."
            className="border-none"
          />
        </CardContent>
      </Card>
    </>
  );
}
