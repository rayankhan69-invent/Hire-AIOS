import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { JobsTable } from "@/components/jobs/jobs-table";
import { jobs } from "@/lib/mock/jobs";

export default function JobsPage() {
  return (
    <>
      <PageHeader
        title="Jobs"
        description="Roles you're actively recruiting for, across all clients."
        actions={
          <Button size="sm" asChild>
            <Link href="/jobs/new">
              <PlusCircle />
              Post a role
            </Link>
          </Button>
        }
      />

      <JobsTable jobs={jobs} />
    </>
  );
}
