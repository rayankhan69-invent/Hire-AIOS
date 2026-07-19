import { PageHeader } from "@/components/shared/page-header";
import { ResumeUploader } from "@/components/uploads/resume-uploader";
import { initialUploads } from "@/lib/mock/uploads";

export default function ResumeUploadPage() {
  return (
    <>
      <PageHeader
        title="Upload resumes"
        description="Drag and drop resumes to parse and match them against your open roles with HireIQ AI."
      />
      <ResumeUploader initialUploads={initialUploads} />
    </>
  );
}
