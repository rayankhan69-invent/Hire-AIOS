export type UploadStatus = "uploading" | "success" | "error";

export type UploadItem = {
  id: string;
  fileName: string;
  fileSize: string;
  status: UploadStatus;
  progress: number;
  uploadedAt: string;
  candidateName?: string;
  candidateId?: string;
  errorReason?: string;
};

/** Seeded upload history — shown as "Recent uploads" until new files are added in this session. */
export const initialUploads: UploadItem[] = [
  {
    id: "up-1",
    fileName: "Priya_Nair_Resume.pdf",
    fileSize: "412 KB",
    status: "success",
    progress: 100,
    uploadedAt: "2 days ago",
    candidateName: "Priya Nair",
    candidateId: "cand-1",
  },
  {
    id: "up-2",
    fileName: "Marcus_Webb_CV.docx",
    fileSize: "268 KB",
    status: "success",
    progress: 100,
    uploadedAt: "3 days ago",
    candidateName: "Marcus Webb",
    candidateId: "cand-2",
  },
  {
    id: "up-3",
    fileName: "notes.txt",
    fileSize: "4 KB",
    status: "error",
    progress: 0,
    uploadedAt: "4 days ago",
    errorReason: "Unsupported file type. Upload a PDF, DOC, or DOCX.",
  },
  {
    id: "up-4",
    fileName: "Sofia_Reyes_Resume.pdf",
    fileSize: "530 KB",
    status: "success",
    progress: 100,
    uploadedAt: "5 days ago",
    candidateName: "Sofia Reyes",
    candidateId: "cand-3",
  },
  {
    id: "up-5",
    fileName: "portfolio_full_res.pdf",
    fileSize: "14.8 MB",
    status: "error",
    progress: 0,
    uploadedAt: "6 days ago",
    errorReason: "File exceeds the 10MB limit.",
  },
];
