import { MoreHorizontal } from "lucide-react";

import { DesignSystemSection } from "@/components/design-system/section";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PipelineStatusChip, type PipelineStatus } from "@/components/shared/status-chip";

const candidates: {
  name: string;
  initials: string;
  role: string;
  matchScore: string;
  status: PipelineStatus;
  applied: string;
}[] = [
  { name: "Priya Nair", initials: "PN", role: "Senior Product Designer", matchScore: "94%", status: "interviewing", applied: "Jul 12" },
  { name: "Marcus Webb", initials: "MW", role: "Staff Backend Engineer", matchScore: "88%", status: "offer", applied: "Jul 10" },
  { name: "Sofia Reyes", initials: "SR", role: "Growth Marketing Lead", matchScore: "76%", status: "screening", applied: "Jul 15" },
  { name: "Daniel Kim", initials: "DK", role: "Senior Product Designer", matchScore: "69%", status: "new", applied: "Jul 17" },
  { name: "Hana Suzuki", initials: "HS", role: "Staff Backend Engineer", matchScore: "91%", status: "hired", applied: "Jun 28" },
  { name: "Owen Blake", initials: "OB", role: "Growth Marketing Lead", matchScore: "54%", status: "rejected", applied: "Jul 3" },
];

export function TableSection() {
  return (
    <DesignSystemSection
      id="tables"
      title="Tables"
      description="Uppercase, low-emphasis column headers and hairline row dividers keep dense data scannable without visual noise."
    >
      <Card className="overflow-hidden p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Match</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Applied</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((c) => (
              <TableRow key={c.name}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{c.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{c.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{c.role}</TableCell>
                <TableCell className="font-mono text-xs">{c.matchScore}</TableCell>
                <TableCell>
                  <PipelineStatusChip status={c.status} />
                </TableCell>
                <TableCell className="text-muted-foreground">{c.applied}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8" aria-label={`Actions for ${c.name}`}>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View profile</DropdownMenuItem>
                      <DropdownMenuItem>Schedule interview</DropdownMenuItem>
                      <DropdownMenuItem>Move to next stage</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </DesignSystemSection>
  );
}
