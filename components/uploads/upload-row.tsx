import Link from "next/link";
import { FileText, CheckCircle2, AlertCircle, X, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { UploadItem } from "@/lib/mock/uploads";

export function UploadRow({
  item,
  onRemove,
}: {
  item: UploadItem;
  onRemove: (id: string) => void;
}) {
  return (
    <li className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-md",
          item.status === "error"
            ? "bg-destructive/10 text-destructive"
            : item.status === "success"
              ? "bg-success/15 text-success"
              : "bg-secondary text-secondary-foreground"
        )}
      >
        {item.status === "error" ? (
          <AlertCircle className="h-4 w-4" />
        ) : item.status === "success" ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          <FileText className="h-4 w-4" />
        )}
      </span>

      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{item.fileName}</p>
            <p className="text-xs text-muted-foreground">
              {item.fileSize} · {item.uploadedAt}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 shrink-0 text-muted-foreground hover:text-foreground"
            onClick={() => onRemove(item.id)}
            aria-label={`Remove ${item.fileName}`}
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>

        {item.status === "uploading" ? (
          <div className="space-y-1">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-200 ease-out"
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">Uploading and parsing… {item.progress}%</p>
          </div>
        ) : null}

        {item.status === "error" ? (
          <p className="text-xs text-destructive">{item.errorReason}</p>
        ) : null}

        {item.status === "success" ? (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            <span className="inline-flex items-center gap-1 text-success">
              <Sparkles className="h-3 w-3" />
              Parsed: {item.candidateName ?? "Unknown candidate"}
            </span>
            {item.candidateId ? (
              <Link href={`/candidates/${item.candidateId}`} className="font-medium text-primary hover:underline">
                View candidate
              </Link>
            ) : (
              <span className="text-muted-foreground">Ready to add to your talent pool</span>
            )}
          </div>
        ) : null}
      </div>
    </li>
  );
}
