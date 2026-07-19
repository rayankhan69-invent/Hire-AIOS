import { cn } from "@/lib/utils";
import { activityIconMap, type ActivityItem } from "@/lib/mock/dashboard";

const iconStyles: Record<ActivityItem["type"], string> = {
  application: "bg-secondary text-secondary-foreground",
  stage_change: "bg-signal/10 text-signal",
  interview_scheduled: "bg-signal/10 text-signal",
  ai_shortlist: "bg-spark/15 text-spark",
  note: "bg-secondary text-secondary-foreground",
  hired: "bg-success/15 text-success",
};

export function RecentActivity({ items }: { items: ActivityItem[] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((item) => {
        const Icon = activityIconMap[item.type];
        return (
          <li key={item.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                iconStyles[item.type]
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-foreground">
                {item.description}{" "}
                <span className="font-medium">{item.target}</span>
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{item.timestamp}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
