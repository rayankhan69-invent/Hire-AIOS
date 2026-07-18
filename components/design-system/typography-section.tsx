import { DesignSystemSection } from "@/components/design-system/section";
import { Card, CardContent } from "@/components/ui/card";

export function TypographySection() {
  return (
    <DesignSystemSection
      id="typography"
      title="Typography"
      description="Manrope for display and headings gives the product a distinct voice; Inter carries UI and body copy for maximum legibility at small sizes; JetBrains Mono is reserved for tabular or identifier data."
    >
      <Card>
        <CardContent className="space-y-5 p-6">
          <div className="space-y-1">
            <p className="font-display text-4xl font-semibold tracking-tight">Display / 4xl</p>
            <p className="text-xs text-muted-foreground">font-display · font-semibold · text-4xl — page-level hero moments</p>
          </div>
          <div className="space-y-1">
            <p className="font-display text-2xl font-semibold tracking-tight">Heading / 2xl</p>
            <p className="text-xs text-muted-foreground">font-display · font-semibold · text-2xl — page titles</p>
          </div>
          <div className="space-y-1">
            <p className="font-display text-lg font-semibold tracking-tight">Heading / lg</p>
            <p className="text-xs text-muted-foreground">font-display · font-semibold · text-lg — card and section titles</p>
          </div>
          <div className="space-y-1">
            <p className="text-base text-foreground">Body / base — Inter regular for primary reading content and form values.</p>
            <p className="text-xs text-muted-foreground">font-sans · text-base</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-foreground">Body / sm — the default size for UI copy, labels, and table cells.</p>
            <p className="text-xs text-muted-foreground">font-sans · text-sm</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Caption / xs — helper text, timestamps, metadata.</p>
            <p className="text-xs text-muted-foreground">font-sans · text-xs · text-muted-foreground</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-sm">CAND-2026-00481 · 82% match</p>
            <p className="text-xs text-muted-foreground">font-mono — IDs, scores, and other tabular data</p>
          </div>
        </CardContent>
      </Card>
    </DesignSystemSection>
  );
}
