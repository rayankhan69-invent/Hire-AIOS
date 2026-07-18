import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * StatusChip communicates the state of a record (a candidate, a role, an
 * interview) at a glance. It differs from Badge in intent: Badge labels or
 * counts something, StatusChip always represents a state in a lifecycle and
 * always pairs a color with a dot indicator for quick scanning in tables
 * and lists.
 */
const statusChipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium leading-none",
  {
    variants: {
      variant: {
        neutral: "border-border bg-secondary text-secondary-foreground",
        info: "border-transparent bg-signal/10 text-signal",
        warning: "border-transparent bg-spark/15 text-spark",
        success: "border-transparent bg-success/15 text-success",
        error: "border-transparent bg-destructive/10 text-destructive",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

const dotVariants = cva("h-1.5 w-1.5 shrink-0 rounded-full", {
  variants: {
    variant: {
      neutral: "bg-muted-foreground/60",
      info: "bg-signal",
      warning: "bg-spark",
      success: "bg-success",
      error: "bg-destructive",
    },
  },
  defaultVariants: { variant: "neutral" },
});

export interface StatusChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusChipVariants> {
  label: string;
}

function StatusChip({ label, variant, className, ...props }: StatusChipProps) {
  return (
    <span className={cn(statusChipVariants({ variant }), className)} {...props}>
      <span className={cn(dotVariants({ variant }))} aria-hidden />
      {label}
    </span>
  );
}

/**
 * Hiring-domain presets so call sites don't have to know which variant maps
 * to which pipeline stage. Extend this map as new statuses are introduced.
 */
export type PipelineStatus =
  | "new"
  | "screening"
  | "interviewing"
  | "offer"
  | "hired"
  | "on-hold"
  | "rejected";

const pipelineStatusMap: Record<PipelineStatus, { label: string; variant: StatusChipProps["variant"] }> = {
  new: { label: "New", variant: "neutral" },
  screening: { label: "Screening", variant: "info" },
  interviewing: { label: "Interviewing", variant: "warning" },
  offer: { label: "Offer sent", variant: "warning" },
  hired: { label: "Hired", variant: "success" },
  "on-hold": { label: "On hold", variant: "neutral" },
  rejected: { label: "Rejected", variant: "error" },
};

function PipelineStatusChip({
  status,
  className,
}: {
  status: PipelineStatus;
  className?: string;
}) {
  const config = pipelineStatusMap[status];
  return <StatusChip label={config.label} variant={config.variant} className={className} />;
}

export { StatusChip, PipelineStatusChip, statusChipVariants };
