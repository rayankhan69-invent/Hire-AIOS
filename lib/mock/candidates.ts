import { jobs, hiringManagers, getJobById, getHiringManagerById } from "@/lib/mock/jobs";

export type ResumeStatus = "Not submitted" | "Received" | "Under review" | "Verified";
export type InterviewStatus = "Not scheduled" | "Scheduled" | "Completed" | "Cancelled";

export const resumeStatuses: ResumeStatus[] = [
  "Not submitted",
  "Received",
  "Under review",
  "Verified",
];

export const interviewStatuses: InterviewStatus[] = [
  "Not scheduled",
  "Scheduled",
  "Completed",
  "Cancelled",
];

/** Recruiters are drawn from the same team roster used for job hiring managers. */
export const recruiters = hiringManagers;

export type Candidate = {
  id: string;
  name: string;
  initials: string;
  jobId: string;
  resumeStatus: ResumeStatus;
  interviewStatus: InterviewStatus;
  aiScore: number;
  recruiterId: string;
  dateApplied: string;
};

export const candidates: Candidate[] = [
  { id: "cand-1", name: "Priya Nair", initials: "PN", jobId: "job-1", resumeStatus: "Verified", interviewStatus: "Completed", aiScore: 94, recruiterId: "hm-1", dateApplied: "2026-07-12" },
  { id: "cand-2", name: "Marcus Webb", initials: "MW", jobId: "job-2", resumeStatus: "Verified", interviewStatus: "Scheduled", aiScore: 88, recruiterId: "hm-2", dateApplied: "2026-07-10" },
  { id: "cand-3", name: "Sofia Reyes", initials: "SR", jobId: "job-3", resumeStatus: "Under review", interviewStatus: "Not scheduled", aiScore: 76, recruiterId: "hm-4", dateApplied: "2026-07-15" },
  { id: "cand-4", name: "Daniel Kim", initials: "DK", jobId: "job-1", resumeStatus: "Received", interviewStatus: "Not scheduled", aiScore: 69, recruiterId: "hm-1", dateApplied: "2026-07-17" },
  { id: "cand-5", name: "Hana Suzuki", initials: "HS", jobId: "job-2", resumeStatus: "Verified", interviewStatus: "Completed", aiScore: 91, recruiterId: "hm-2", dateApplied: "2026-06-28" },
  { id: "cand-6", name: "Owen Blake", initials: "OB", jobId: "job-3", resumeStatus: "Verified", interviewStatus: "Cancelled", aiScore: 54, recruiterId: "hm-4", dateApplied: "2026-07-03" },
  { id: "cand-7", name: "Grace Liu", initials: "GL", jobId: "job-5", resumeStatus: "Under review", interviewStatus: "Scheduled", aiScore: 82, recruiterId: "hm-3", dateApplied: "2026-07-09" },
  { id: "cand-8", name: "Ethan Brooks", initials: "EB", jobId: "job-2", resumeStatus: "Received", interviewStatus: "Not scheduled", aiScore: 61, recruiterId: "hm-2", dateApplied: "2026-07-16" },
  { id: "cand-9", name: "Maya Patel", initials: "MP", jobId: "job-1", resumeStatus: "Verified", interviewStatus: "Scheduled", aiScore: 89, recruiterId: "hm-1", dateApplied: "2026-07-11" },
  { id: "cand-10", name: "Liam O'Connor", initials: "LO", jobId: "job-6", resumeStatus: "Verified", interviewStatus: "Completed", aiScore: 73, recruiterId: "hm-5", dateApplied: "2026-06-25" },
  { id: "cand-11", name: "Ana Souza", initials: "AS", jobId: "job-3", resumeStatus: "Not submitted", interviewStatus: "Not scheduled", aiScore: 45, recruiterId: "hm-4", dateApplied: "2026-07-18" },
  { id: "cand-12", name: "Noah Bennett", initials: "NB", jobId: "job-5", resumeStatus: "Verified", interviewStatus: "Completed", aiScore: 85, recruiterId: "hm-3", dateApplied: "2026-07-02" },
  { id: "cand-13", name: "Isla Fraser", initials: "IF", jobId: "job-7", resumeStatus: "Under review", interviewStatus: "Not scheduled", aiScore: 58, recruiterId: "hm-1", dateApplied: "2026-07-14" },
  { id: "cand-14", name: "Ravi Kumar", initials: "RK", jobId: "job-2", resumeStatus: "Verified", interviewStatus: "Scheduled", aiScore: 92, recruiterId: "hm-2", dateApplied: "2026-07-13" },
  { id: "cand-15", name: "Chloe Dubois", initials: "CD", jobId: "job-1", resumeStatus: "Received", interviewStatus: "Not scheduled", aiScore: 66, recruiterId: "hm-1", dateApplied: "2026-07-16" },
  { id: "cand-16", name: "Malik Johnson", initials: "MJ", jobId: "job-6", resumeStatus: "Verified", interviewStatus: "Completed", aiScore: 79, recruiterId: "hm-5", dateApplied: "2026-06-20" },
  { id: "cand-17", name: "Elena Petrova", initials: "EP", jobId: "job-3", resumeStatus: "Verified", interviewStatus: "Scheduled", aiScore: 87, recruiterId: "hm-4", dateApplied: "2026-07-08" },
  { id: "cand-18", name: "Tomás Ibarra", initials: "TI", jobId: "job-5", resumeStatus: "Under review", interviewStatus: "Not scheduled", aiScore: 63, recruiterId: "hm-3", dateApplied: "2026-07-17" },
  { id: "cand-19", name: "Yuki Tanaka", initials: "YT", jobId: "job-2", resumeStatus: "Verified", interviewStatus: "Completed", aiScore: 96, recruiterId: "hm-2", dateApplied: "2026-06-22" },
  { id: "cand-20", name: "Zara Ahmed", initials: "ZA", jobId: "job-1", resumeStatus: "Not submitted", interviewStatus: "Not scheduled", aiScore: 41, recruiterId: "hm-1", dateApplied: "2026-07-18" },
  { id: "cand-21", name: "Felix Turner", initials: "FT", jobId: "job-7", resumeStatus: "Verified", interviewStatus: "Scheduled", aiScore: 71, recruiterId: "hm-1", dateApplied: "2026-07-10" },
  { id: "cand-22", name: "Aisha Bello", initials: "AB", jobId: "job-3", resumeStatus: "Verified", interviewStatus: "Cancelled", aiScore: 57, recruiterId: "hm-4", dateApplied: "2026-06-30" },
  { id: "cand-23", name: "Lucas Meyer", initials: "LM", jobId: "job-6", resumeStatus: "Under review", interviewStatus: "Not scheduled", aiScore: 68, recruiterId: "hm-5", dateApplied: "2026-07-15" },
  { id: "cand-24", name: "Nadia Hassan", initials: "NH", jobId: "job-5", resumeStatus: "Verified", interviewStatus: "Completed", aiScore: 90, recruiterId: "hm-3", dateApplied: "2026-07-01" },
];

export function getCandidatePosition(candidate: Candidate): string {
  return getJobById(candidate.jobId)?.title ?? "Unknown role";
}

export function getCandidateRecruiter(candidate: Candidate) {
  return getHiringManagerById(candidate.recruiterId);
}

/** Position filter options, derived from jobs referenced by at least one candidate. */
export const candidatePositions = jobs
  .filter((job) => candidates.some((c) => c.jobId === job.id))
  .map((job) => ({ id: job.id, title: job.title }));
