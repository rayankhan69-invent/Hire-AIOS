import { PageHeader } from "@/components/shared/page-header";
import { JobForm } from "@/components/jobs/job-form";

export default function NewJobPage() {
  return (
    <>
      <PageHeader
        title="Post a role"
        description="Fill in the details below — you can edit everything later."
      />
      <JobForm mode="create" />
    </>
  );
}
