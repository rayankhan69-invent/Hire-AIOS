import { Briefcase, LayoutDashboard, Users } from "lucide-react";

import { DesignSystemSection } from "@/components/design-system/section";
import { Card, CardContent } from "@/components/ui/card";

/**
 * A static mock of the three nav-item states side by side. The real
 * Sidebar (components/layout/sidebar.tsx) derives active state from the
 * route via usePathname, so this illustrates default / hover / active
 * together for documentation purposes only.
 */
export function SidebarStylesSection() {
  return (
    <DesignSystemSection
      id="sidebar"
      title="Sidebar styles"
      description="The sidebar is a fixed ink-navy surface (--sidebar) independent of light/dark theme, so the product keeps a consistent identity either way. Active items get a signal-blue left rail and icon; hover is a soft white overlay, never a color shift."
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="bg-sidebar p-4">
          <div className="max-w-xs space-y-1">
            <div className="relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground/70">
              <LayoutDashboard className="h-4 w-4 shrink-0" />
              <span className="flex-1">Default</span>
            </div>
            <div className="relative flex items-center gap-3 rounded-md bg-white/5 px-3 py-2 text-sm font-medium text-sidebar-foreground">
              <Users className="h-4 w-4 shrink-0" />
              <span className="flex-1">Hover</span>
            </div>
            <div className="relative flex items-center gap-3 rounded-md bg-sidebar-accent/15 px-3 py-2 text-sm font-medium text-white">
              <span className="absolute -ml-3 h-5 w-0.5 rounded-full bg-sidebar-accent" aria-hidden />
              <Briefcase className="h-4 w-4 shrink-0 text-sidebar-accent" />
              <span className="flex-1">Active</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </DesignSystemSection>
  );
}
