import {
  getJobById,
  getHiringManagerById,
  type Department,
} from "@/lib/mock/jobs";
import {
  candidates,
  getCandidatePosition,
  getCandidateRecruiter,
  type Candidate,
} from "@/lib/mock/candidates";

function hashId(id: string): number {
  const digits = id.match(/\d+/)?.[0];
  return digits ? parseInt(digits, 10) : 0;
}

const companyPool = [
  "Northline Systems",
  "Bluecrest Technologies",
  "Vantage Digital",
  "Harborlight Studio",
  "Crestpoint Analytics",
  "Meridian Labs",
  "Solstice Partners",
  "Fieldstone Group",
];

const universityPool = [
  "University of Michigan",
  "UC Berkeley",
  "Georgia Institute of Technology",
  "University of Toronto",
  "New York University",
  "University of Washington",
  "Boston University",
  "University of Texas at Austin",
];

type DepartmentProfile = {
  summaryVariants: string[];
  skillsPool: string[];
  seniorTitle: string;
  juniorTitle: string;
  degree: string;
};

const departmentContent: Record<Department, DepartmentProfile> = {
  Engineering: {
    summaryVariants: [
      "Backend-focused engineer with a track record of designing scalable services and mentoring engineers through complex system migrations.",
      "Full-stack engineer who enjoys owning problems end to end, from data modeling through production rollout, with a strong bias toward simple, maintainable systems.",
    ],
    skillsPool: ["Node.js", "PostgreSQL", "System Design", "AWS", "Kubernetes", "GraphQL", "Python", "Redis"],
    seniorTitle: "Senior Backend Engineer",
    juniorTitle: "Backend Engineer",
    degree: "B.S. in Computer Science",
  },
  Product: {
    summaryVariants: [
      "Product-minded generalist who partners closely with design and engineering to ship features that move core adoption metrics.",
      "Outcome-driven product professional with experience running discovery, prioritization, and cross-functional delivery for B2B platforms.",
    ],
    skillsPool: ["Roadmapping", "User Research", "SQL", "A/B Testing", "Stakeholder Management", "Agile"],
    seniorTitle: "Senior Product Manager",
    juniorTitle: "Product Manager",
    degree: "B.A. in Business Administration",
  },
  Design: {
    summaryVariants: [
      "Product designer with 6+ years leading 0-to-1 design for B2B SaaS platforms, specializing in design systems and rapid prototyping.",
      "Systems-minded product designer who bridges craft and scale, having built and maintained a design system used across a multi-product suite.",
    ],
    skillsPool: ["Figma", "Design Systems", "User Research", "Prototyping", "Interaction Design", "Accessibility"],
    seniorTitle: "Senior Product Designer",
    juniorTitle: "Product Designer",
    degree: "B.F.A. in Design",
  },
  Marketing: {
    summaryVariants: [
      "Growth marketer who has scaled acquisition channels through structured experimentation and close partnership with product and sales.",
      "Lifecycle-focused marketer with a strong analytics foundation, experienced in owning pipeline targets across paid and organic channels.",
    ],
    skillsPool: ["Lifecycle Marketing", "SEO", "Analytics", "A/B Testing", "Paid Acquisition", "Content Strategy"],
    seniorTitle: "Growth Marketing Manager",
    juniorTitle: "Marketing Associate",
    degree: "B.A. in Marketing",
  },
  Sales: {
    summaryVariants: [
      "Results-driven sales development rep with a consistent record of exceeding pipeline generation targets through structured outbound.",
      "Relationship-first sales professional experienced in prospecting, discovery calls, and handing off qualified opportunities to closing reps.",
    ],
    skillsPool: ["Prospecting", "Cold Outreach", "CRM", "Salesforce", "Negotiation", "Discovery Calls"],
    seniorTitle: "Senior Sales Development Rep",
    juniorTitle: "Sales Development Rep",
    degree: "B.A. in Business Communications",
  },
  "Customer Success": {
    summaryVariants: [
      "Customer success professional focused on driving adoption and renewal for enterprise accounts through proactive relationship management.",
      "Success manager experienced in onboarding, QBRs, and cross-functional escalation handling for a portfolio of mid-market accounts.",
    ],
    skillsPool: ["Onboarding", "Account Management", "SaaS", "Salesforce", "Renewals", "Customer Advocacy"],
    seniorTitle: "Senior Customer Success Manager",
    juniorTitle: "Customer Success Manager",
    degree: "B.A. in Communications",
  },
  Operations: {
    summaryVariants: [
      "Analytical operator who turns messy pipeline data into clear, decision-ready dashboards for recruiting and revenue leadership.",
      "Data analyst with a strong SQL and Python foundation, experienced translating ambiguous questions into reliable, repeatable reporting.",
    ],
    skillsPool: ["SQL", "Python", "Data Visualization", "A/B Testing", "Tableau", "Excel"],
    seniorTitle: "Senior Data Analyst",
    juniorTitle: "Data Analyst",
    degree: "B.S. in Statistics",
  },
  Finance: {
    summaryVariants: [
      "Finance professional with experience supporting forecasting, reporting, and budget planning across a fast-growing organization.",
      "Detail-oriented analyst who partners with department leaders to keep spend accountable and forecasts grounded in real data.",
    ],
    skillsPool: ["Financial Modeling", "Excel", "Forecasting", "Budgeting", "SQL"],
    seniorTitle: "Senior Financial Analyst",
    juniorTitle: "Financial Analyst",
    degree: "B.S. in Finance",
  },
  People: {
    summaryVariants: [
      "People operations specialist experienced across onboarding, benefits administration, and HRIS management for scaling teams.",
      "HR generalist with a compliance-first mindset, comfortable owning process end to end from offer letter through onboarding.",
    ],
    skillsPool: ["HRIS", "Compliance", "Benefits Administration", "Onboarding", "Employee Relations"],
    seniorTitle: "Senior People Operations Specialist",
    juniorTitle: "People Operations Coordinator",
    degree: "B.A. in Human Resources",
  },
};

export type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
};

export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  years: string;
};

export type ScoreBreakdown = {
  skillsMatch: number;
  experienceMatch: number;
  cultureFit: number;
};

export type TimelineEvent = {
  id: string;
  label: string;
  description: string;
  timestamp: string;
  kind: "application" | "resume" | "interview" | "ai" | "note";
};

export type InterviewRound = {
  id: string;
  round: string;
  date: string;
  interviewer: string;
  status: "Upcoming" | "Completed" | "Cancelled";
  feedback?: string;
};

export type Note = {
  id: string;
  authorName: string;
  authorInitials: string;
  timestamp: string;
  content: string;
};

export type CandidateProfile = {
  candidate: Candidate;
  position: string;
  department: Department;
  email: string;
  phone: string;
  location: string;
  summary: string;
  skills: string[];
  matchedSkills: string[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  scoreBreakdown: ScoreBreakdown;
  timeline: TimelineEvent[];
  interviewRounds: InterviewRound[];
  notes: Note[];
};

function formatLongDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    new Date(iso)
  );
}

export function buildCandidateProfile(candidate: Candidate): CandidateProfile {
  const job = getJobById(candidate.jobId);
  const department = job?.department ?? "Operations";
  const content = departmentContent[department];
  const hash = hashId(candidate.id);

  const company1 = companyPool[hash % companyPool.length]!;
  const company2 = companyPool[(hash + 3) % companyPool.length]!;
  const university = universityPool[hash % universityPool.length]!;
  const summary = content.summaryVariants[hash % content.summaryVariants.length]!;

  const jobSkills = job?.skills ?? [];
  const extraSkills = content.skillsPool.filter((s) => !jobSkills.includes(s));
  const skills = [
    ...jobSkills.slice(0, 3),
    ...extraSkills.slice(0, 3),
  ].filter((skill, index, arr) => arr.indexOf(skill) === index);
  const matchedSkills = skills.filter((s) => jobSkills.includes(s));

  const recruiter = getCandidateRecruiter(candidate);
  const position = getCandidatePosition(candidate);
  const firstName = candidate.name.split(" ")[0]?.toLowerCase() ?? "candidate";

  const experience: ExperienceEntry[] = [
    {
      id: `${candidate.id}-exp-1`,
      title: content.seniorTitle,
      company: company1,
      duration: "2023 — Present",
      description: `Leads key initiatives on the ${department.toLowerCase()} team, partnering cross-functionally to ship work that holds up at scale.`,
    },
    {
      id: `${candidate.id}-exp-2`,
      title: content.juniorTitle,
      company: company2,
      duration: "2020 — 2023",
      description: `Owned day-to-day execution across core ${department.toLowerCase()} workflows, building the foundation for the role above.`,
    },
  ];

  const education: EducationEntry[] = [
    {
      id: `${candidate.id}-edu-1`,
      degree: content.degree,
      institution: university,
      years: `${2016 + (hash % 4)} — ${2020 + (hash % 4)}`,
    },
  ];

  const baseScore = candidate.aiScore;
  const scoreBreakdown: ScoreBreakdown = {
    skillsMatch: Math.min(99, Math.max(30, baseScore + ((hash % 5) - 2))),
    experienceMatch: Math.min(99, Math.max(30, baseScore - ((hash % 7) - 3))),
    cultureFit: Math.min(99, Math.max(30, baseScore + ((hash % 6) - 3))),
  };

  const timeline: TimelineEvent[] = [
    {
      id: `${candidate.id}-tl-applied`,
      label: "Application received",
      description: `${candidate.name} applied to ${position}.`,
      timestamp: formatLongDate(candidate.dateApplied),
      kind: "application",
    },
    {
      id: `${candidate.id}-tl-ai`,
      label: "AI match scored",
      description: `HireIQ AI scored this application ${baseScore}% for ${position}.`,
      timestamp: formatLongDate(candidate.dateApplied),
      kind: "ai",
    },
  ];

  if (candidate.resumeStatus !== "Not submitted") {
    timeline.push({
      id: `${candidate.id}-tl-resume`,
      label: `Resume ${candidate.resumeStatus.toLowerCase()}`,
      description: `Resume status updated to "${candidate.resumeStatus}".`,
      timestamp: formatLongDate(candidate.dateApplied),
      kind: "resume",
    });
  }

  if (candidate.interviewStatus !== "Not scheduled") {
    timeline.push({
      id: `${candidate.id}-tl-interview`,
      label: `Interview ${candidate.interviewStatus.toLowerCase()}`,
      description: recruiter
        ? `${recruiter.name} updated the interview status to "${candidate.interviewStatus}".`
        : `Interview status updated to "${candidate.interviewStatus}".`,
      timestamp: formatLongDate(candidate.dateApplied),
      kind: "interview",
    });
  }

  const interviewRounds: InterviewRound[] = [];
  if (candidate.interviewStatus === "Scheduled") {
    interviewRounds.push({
      id: `${candidate.id}-round-1`,
      round: "Screening call",
      date: "Upcoming",
      interviewer: recruiter?.name ?? "Unassigned",
      status: "Upcoming",
    });
  } else if (candidate.interviewStatus === "Completed") {
    interviewRounds.push(
      {
        id: `${candidate.id}-round-1`,
        round: "Screening call",
        date: formatLongDate(candidate.dateApplied),
        interviewer: recruiter?.name ?? "Unassigned",
        status: "Completed",
        feedback: "Strong communicator, clear about motivations and expectations.",
      },
      {
        id: `${candidate.id}-round-2`,
        round: "Panel interview",
        date: formatLongDate(candidate.dateApplied),
        interviewer: "Hiring panel",
        status: "Completed",
        feedback: `Solid technical depth for ${position}; team recommended advancing.`,
      }
    );
  } else if (candidate.interviewStatus === "Cancelled") {
    interviewRounds.push({
      id: `${candidate.id}-round-1`,
      round: "Screening call",
      date: formatLongDate(candidate.dateApplied),
      interviewer: recruiter?.name ?? "Unassigned",
      status: "Cancelled",
      feedback: "Candidate requested to postpone; follow up next cycle.",
    });
  }

  const notes: Note[] = recruiter
    ? [
        {
          id: `${candidate.id}-note-1`,
          authorName: recruiter.name,
          authorInitials: recruiter.initials,
          timestamp: formatLongDate(candidate.dateApplied),
          content: `Reached out to ${firstName} — resume looks like a strong fit for ${position}. Moving forward with next steps.`,
        },
      ]
    : [];

  return {
    candidate,
    position,
    department,
    email: `${firstName}@example.com`,
    phone: "+1 (555) 010-0198",
    location: job?.location ?? "Remote — US",
    summary,
    skills,
    matchedSkills,
    experience,
    education,
    scoreBreakdown,
    timeline,
    interviewRounds,
    notes,
  };
}

export function getCandidateProfileById(id: string): CandidateProfile | undefined {
  const candidate = candidates.find((c) => c.id === id);
  if (!candidate) return undefined;
  return buildCandidateProfile(candidate);
}
