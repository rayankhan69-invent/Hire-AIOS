export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Temporary";

export type ExperienceLevel =
  | "Entry-level"
  | "Mid-level"
  | "Senior"
  | "Lead"
  | "Director+";

export type JobStatus = "open" | "draft" | "closed";

export const departments = [
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Customer Success",
  "Operations",
  "Finance",
  "People",
] as const;

export type Department = (typeof departments)[number];

export const employmentTypes: EmploymentType[] = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Temporary",
];

export const experienceLevels: ExperienceLevel[] = [
  "Entry-level",
  "Mid-level",
  "Senior",
  "Lead",
  "Director+",
];

export type HiringManager = {
  id: string;
  name: string;
  initials: string;
  title: string;
};

export const hiringManagers: HiringManager[] = [
  { id: "hm-1", name: "Amelia Chen", initials: "AC", title: "Senior Recruiter" },
  { id: "hm-2", name: "Jordan Blake", initials: "JB", title: "Engineering Manager" },
  { id: "hm-3", name: "Rahul Shah", initials: "RS", title: "Talent Partner" },
  { id: "hm-4", name: "Nina Torres", initials: "NT", title: "VP Marketing" },
  { id: "hm-5", name: "Owen Mercer", initials: "OM", title: "Director of Sales" },
];

export type Job = {
  id: string;
  title: string;
  department: Department;
  employmentType: EmploymentType;
  experience: ExperienceLevel;
  location: string;
  skills: string[];
  description: string;
  hiringManagerId: string;
  status: JobStatus;
  postedDate: string;
  applicants: number;
  aiShortlisted: number;
};

export const jobs: Job[] = [
  {
    id: "job-1",
    title: "Senior Product Designer",
    department: "Design",
    employmentType: "Full-time",
    experience: "Senior",
    location: "Remote — US",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    description:
      "We're looking for a Senior Product Designer to own end-to-end design for our core product surfaces, from early concepts through polished, shippable UI. You'll partner closely with product and engineering to raise the bar on craft.",
    hiringManagerId: "hm-1",
    status: "open",
    postedDate: "2026-07-01",
    applicants: 48,
    aiShortlisted: 9,
  },
  {
    id: "job-2",
    title: "Staff Backend Engineer",
    department: "Engineering",
    employmentType: "Full-time",
    experience: "Lead",
    location: "New York, NY",
    skills: ["Node.js", "PostgreSQL", "System Design", "AWS"],
    description:
      "As a Staff Backend Engineer, you'll lead the architecture of our core services layer, mentor senior engineers, and drive technical decisions that scale with a fast-growing candidate and job dataset.",
    hiringManagerId: "hm-2",
    status: "open",
    postedDate: "2026-06-24",
    applicants: 63,
    aiShortlisted: 12,
  },
  {
    id: "job-3",
    title: "Growth Marketing Lead",
    department: "Marketing",
    employmentType: "Full-time",
    experience: "Senior",
    location: "Remote — US",
    skills: ["Lifecycle Marketing", "SEO", "Analytics", "A/B Testing"],
    description:
      "Own growth strategy across acquisition and lifecycle channels. You'll build and run experiments, own reporting on pipeline impact, and work closely with product marketing on positioning.",
    hiringManagerId: "hm-4",
    status: "open",
    postedDate: "2026-07-08",
    applicants: 31,
    aiShortlisted: 6,
  },
  {
    id: "job-4",
    title: "Customer Success Manager",
    department: "Customer Success",
    employmentType: "Full-time",
    experience: "Mid-level",
    location: "Austin, TX",
    skills: ["Onboarding", "Account Management", "SaaS", "Salesforce"],
    description:
      "Own a portfolio of enterprise agency accounts from onboarding through renewal, acting as the primary point of contact for adoption, expansion, and escalation.",
    hiringManagerId: "hm-1",
    status: "draft",
    postedDate: "2026-07-15",
    applicants: 0,
    aiShortlisted: 0,
  },
  {
    id: "job-5",
    title: "Data Analyst, Talent Insights",
    department: "Operations",
    employmentType: "Full-time",
    experience: "Mid-level",
    location: "Remote — US",
    skills: ["SQL", "Python", "Data Visualization", "A/B Testing"],
    description:
      "Partner with product and recruiting leadership to turn hiring pipeline data into decisions — building dashboards, running analyses, and surfacing trends in match quality and time-to-hire.",
    hiringManagerId: "hm-3",
    status: "open",
    postedDate: "2026-06-30",
    applicants: 22,
    aiShortlisted: 5,
  },
  {
    id: "job-6",
    title: "Sales Development Representative",
    department: "Sales",
    employmentType: "Full-time",
    experience: "Entry-level",
    location: "Chicago, IL",
    skills: ["Prospecting", "Cold Outreach", "CRM", "Salesforce"],
    description:
      "Generate qualified pipeline for our enterprise sales team by researching, prospecting, and running structured outbound campaigns to recruitment agency leaders.",
    hiringManagerId: "hm-5",
    status: "closed",
    postedDate: "2026-05-20",
    applicants: 87,
    aiShortlisted: 14,
  },
  {
    id: "job-7",
    title: "People Operations Specialist",
    department: "People",
    employmentType: "Contract",
    experience: "Mid-level",
    location: "Remote — US",
    skills: ["HRIS", "Compliance", "Benefits Administration"],
    description:
      "Support day-to-day People operations across onboarding, benefits administration, and compliance as we scale headcount through the back half of the year.",
    hiringManagerId: "hm-1",
    status: "open",
    postedDate: "2026-07-12",
    applicants: 15,
    aiShortlisted: 3,
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}

export function getHiringManagerById(id: string): HiringManager | undefined {
  return hiringManagers.find((manager) => manager.id === id);
}
