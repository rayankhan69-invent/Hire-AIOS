import { Briefcase, PlusCircle, SlidersHorizontal } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function JobsPage() {
  return (
    <>
      <PageHeader
        title="Jobs"
        description="Roles you're actively recruiting for, across all clients."
        actions={
          <>
            <Button variant="outline" size="sm">
              <SlidersHorizontal />
              Filters
            </Button>
            <Button size="sm">
              <PlusCircle />
              Post a role
            </Button>
          </>
        }
      />

      <Card>
        <CardContent className="p-0">
          <EmptyState
            icon={Briefcase}
            title="No open roles yet"
            description="Post a role to start sourcing and matching candidates against it."
            action={
              <Button size="sm">
                <PlusCircle />
                Post your first role
              </Button>
            }
            className="border-none"
          />
        </CardContent>
      </Card>
    </>
  );
}
