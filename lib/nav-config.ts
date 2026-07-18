import {
  LayoutDashboard,
  Users,
  Briefcase,
  CalendarClock,
  MessagesSquare,
  BarChart3,
  Settings,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type NavItemConfig = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export type NavSectionConfig = {
  title?: string;
  items: NavItemConfig[];
};

export const primaryNav: NavSectionConfig[] = [
  {
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Candidates", href: "/candidates", icon: Users },
      { label: "Jobs", href: "/jobs", icon: Briefcase },
      { label: "Interviews", href: "/interviews", icon: CalendarClock },
      { label: "Messages", href: "/messages", icon: MessagesSquare, badge: "3" },
      { label: "Reports", href: "/reports", icon: BarChart3 },
    ],
  },
  {
    title: "Workspace",
    items: [
      { label: "Settings", href: "/settings", icon: Settings },
      { label: "Design System", href: "/design-system", icon: Palette },
    ],
  },
];
