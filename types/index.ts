export type UserSummary = {
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
  initials: string;
};

export type StatTrend = "up" | "down" | "flat";

export type StatCardData = {
  label: string;
  value: string;
  delta?: string;
  trend?: StatTrend;
  icon?: React.ElementType;
};
