import Link from "next/link";
import { UploadCloud } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { CandidatesTable } from "@/components/candidates/candidates-table";
import { candidates } from "@/lib/mock/candidates";

export default function CandidatesPage() {
  return (
    <>
      <PageHeader
        title="Candidates"
        description="Every candidate in your agency's talent pool."
        actions={
          <Button size="sm" asChild>
            <Link href="/candidates/upload">
              <UploadCloud />
              Upload resumes
            </Link>
          </Button>
        }
      />

      <CandidatesTable candidates={candidates} />
    </>
  );
}
