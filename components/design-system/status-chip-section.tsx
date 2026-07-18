import { DesignSystemSection } from "@/components/design-system/section";
import { Card, CardContent } from "@/components/ui/card";
import { StatusChip, PipelineStatusChip } from "@/components/shared/status-chip";

export function StatusChipSection() {
  return (
    <DesignSystemSection
      id="status-chips"
      title="Status chips"
      description="Every chip pairs a color with a dot so status is legible even for color-blind users scanning a dense table. Five semantic variants cover every lifecycle in the product."
    >
      <Card>
        <CardContent className="space-y-8 p-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Semantic variants</p>
            <div className="flex flex-wrap items-center gap-2">
              <StatusChip label="Neutral" variant="neutral" />
              <StatusChip label="Info" variant="info" />
              <StatusChip label="Warning" variant="warning" />
              <StatusChip label="Success" variant="success" />
              <StatusChip label="Error" variant="error" />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Hiring pipeline presets
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <PipelineStatusChip status="new" />
              <PipelineStatusChip status="screening" />
              <PipelineStatusChip status="interviewing" />
              <PipelineStatusChip status="offer" />
              <PipelineStatusChip status="hired" />
              <PipelineStatusChip status="on-hold" />
              <PipelineStatusChip status="rejected" />
            </div>
          </div>
        </CardContent>
      </Card>
    </DesignSystemSection>
  );
}
