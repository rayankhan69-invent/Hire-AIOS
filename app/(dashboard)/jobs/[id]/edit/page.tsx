import { notFound } from "next/navigation";

import { PageHeader } from "@/components/shared/page-header";
import { JobForm } from "@/components/jobs/job-form";
import { getJobById } from "@/lib/mock/jobs";

export default function EditJobPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id);

  if (!job) {
    notFound();
  }

  return (
    <>
      <PageHeader title={`Edit ${job.title}`} description="Update the role details below." />
      <JobForm mode="edit" job={job} />
    </>
  );
}
