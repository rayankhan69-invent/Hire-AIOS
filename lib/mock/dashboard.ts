import {
  Briefcase,
  Users,
  CalendarClock,
  Sparkles,
  UserPlus,
  ArrowRightCircle,
  CheckCircle2,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

import type { StatCardData } from "@/types";

/** Top-of-page KPI cards. */
export const dashboardStats: StatCardData[] = [
  {
    label: "Total jobs",
    value: "37",
    delta: "+3 this week",
    trend: "up",
    icon: Briefcase,
  },
  {
    label: "Active candidates",
    value: "1,284",
    delta: "+8.2% this month",
    trend: "up",
    icon: Users,
  },
  {
    label: "Interviews today",
    value: "6",
    delta: "2 unconfirmed",
    trend: "flat",
    icon: CalendarClock,
  },
  {
    label: "AI shortlisted",
    value: "142",
    delta: "+21 this week",
    trend: "up",
    icon: Sparkles,
  },
];

export type ActivityType =
  | "application"
  | "stage_change"
  | "interview_scheduled"
  | "ai_shortlist"
  | "note"
  | "hired";

export const activityIconMap: Record<ActivityType, LucideIcon> = {
  application: UserPlus,
  stage_change: ArrowRightCircle,
  interview_scheduled: CalendarClock,
  ai_shortlist: Sparkles,
  note: MessageSquare,
  hired: CheckCircle2,
};

export type ActivityItem = {
  id: string;
  type: ActivityType;
  actorInitials: string;
  description: string;
  target: string;
  timestamp: string;
};

/** Recent activity feed, newest first. */
export const recentActivity: ActivityItem[] = [
  {
    id: "act-1",
    type: "ai_shortlist",
    actorInitials: "AI",
    description: "AI shortlisted 4 new candidates for",
    target: "Senior Product Designer",
    timestamp: "10 min ago",
  },
  {
    id: "act-2",
    type: "interview_scheduled",
    actorInitials: "AC",
    description: "Amelia Chen scheduled a final round with",
    target: "Priya Nair",
    timestamp: "42 min ago",
  },
  {
    id: "act-3",
    type: "stage_change",
    actorInitials: "MW",
    description: "Marcus Webb moved to",
    target: "Offer stage",
    timestamp: "1 hr ago",
  },
  {
    id: "act-4",
    type: "application",
    actorInitials: "DK",
    description: "Daniel Kim applied to",
    target: "Senior Product Designer",
    timestamp: "2 hr ago",
  },
  {
    id: "act-5",
    type: "note",
    actorInitials: "RS",
    description: "Rahul Shah left feedback on",
    target: "Sofia Reyes",
    timestamp: "3 hr ago",
  },
  {
    id: "act-6",
    type: "hired",
    actorInitials: "HS",
    description: "Hana Suzuki was marked as",
    target: "Hired — Staff Backend Engineer",
    timestamp: "Yesterday",
  },
  {
    id: "act-7",
    type: "application",
    actorInitials: "OB",
    description: "Owen Blake applied to",
    target: "Growth Marketing Lead",
    timestamp: "Yesterday",
  },
];

export type InterviewStatus = "confirmed" | "pending" | "rescheduled";

export type UpcomingInterview = {
  id: string;
  candidateName: string;
  candidateInitials: string;
  role: string;
  round: string;
  time: string;
  interviewer: string;
  status: InterviewStatus;
};

/** Upcoming interviews, soonest first. */
export const upcomingInterviews: UpcomingInterview[] = [
  {
    id: "int-1",
    candidateName: "Priya Nair",
    candidateInitials: "PN",
    role: "Senior Product Designer",
    round: "Final round",
    time: "Today · 2:00 PM",
    interviewer: "Amelia Chen",
    status: "confirmed",
  },
  {
    id: "int-2",
    candidateName: "Marcus Webb",
    candidateInitials: "MW",
    role: "Staff Backend Engineer",
    round: "Hiring manager call",
    time: "Today · 4:30 PM",
    interviewer: "Jordan Blake",
    status: "confirmed",
  },
  {
    id: "int-3",
    candidateName: "Sofia Reyes",
    candidateInitials: "SR",
    role: "Growth Marketing Lead",
    round: "Screening call",
    time: "Tomorrow · 9:00 AM",
    interviewer: "Rahul Shah",
    status: "pending",
  },
  {
    id: "int-4",
    candidateName: "Daniel Kim",
    candidateInitials: "DK",
    role: "Senior Product Designer",
    round: "Technical interview",
    time: "Tomorrow · 11:30 AM",
    interviewer: "Amelia Chen",
    status: "rescheduled",
  },
];
