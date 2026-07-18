import { Users, PlusCircle, SlidersHorizontal } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CandidatesPage() {
  return (
    <>
      <PageHeader
        title="Candidates"
        description="Every candidate in your agency's talent pool."
        actions={
          <>
            <Button variant="outline" size="sm">
              <SlidersHorizontal />
              Filters
            </Button>
            <Button size="sm">
              <PlusCircle />
              Add candidate
            </Button>
          </>
        }
      />

      <Card>
        <CardContent className="p-0">
          <EmptyState
            icon={Users}
            title="No candidates yet"
            description="Add candidates manually or import them in bulk to start matching them against your open roles."
            action={
              <Button size="sm">
                <PlusCircle />
                Add your first candidate
              </Button>
            }
            className="border-none"
          />
        </CardContent>
      </Card>
    </>
  );
}
