import { cn } from "@/lib/utils";

export function ColorSwatch({
  name,
  token,
  className,
  textClassName = "text-white",
  usage,
}: {
  name: string;
  token: string;
  className: string;
  textClassName?: string;
  usage: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className={cn("flex h-16 items-end p-3", className)}>
        <span className={cn("font-mono text-[11px]", textClassName)}>{token}</span>
      </div>
      <div className="space-y-0.5 bg-card p-3">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{usage}</p>
      </div>
    </div>
  );
}
