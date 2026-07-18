import { ColorSwatch } from "@/components/design-system/color-swatch";
import { DesignSystemSection } from "@/components/design-system/section";

const brandColors = [
  { name: "Signal", token: "--signal", className: "bg-signal", usage: "Primary actions, links, active nav state" },
  { name: "Spark", token: "--spark", className: "bg-spark", usage: "AI highlights — match scores, notifications" },
  { name: "Success", token: "--success", className: "bg-success", usage: "Positive states — hired, completed" },
  { name: "Destructive", token: "--destructive", className: "bg-destructive", usage: "Errors, rejections, destructive actions" },
];

const surfaceColors = [
  { name: "Background", token: "--background", className: "bg-background border border-border", textClassName: "text-foreground", usage: "App canvas" },
  { name: "Card", token: "--card", className: "bg-card border border-border", textClassName: "text-foreground", usage: "Elevated surfaces" },
  { name: "Secondary", token: "--secondary", className: "bg-secondary", textClassName: "text-secondary-foreground", usage: "Subtle fills, chips" },
  { name: "Muted", token: "--muted", className: "bg-muted", textClassName: "text-muted-foreground", usage: "Disabled, low-emphasis fills" },
  { name: "Border", token: "--border", className: "bg-border", textClassName: "text-foreground", usage: "Dividers, outlines" },
  { name: "Sidebar", token: "--sidebar", className: "bg-sidebar", usage: "Fixed ink-navy nav surface" },
];

export function ColorPaletteSection() {
  return (
    <DesignSystemSection
      id="colors"
      title="Color palette"
      description="Signal blue for action, spark amber reserved for AI moments, and a fixed ink-navy sidebar for identity. Every color is a CSS variable in app/globals.css, so light and dark mode are two value sets, not two component trees."
    >
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Brand</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {brandColors.map((c) => (
            <ColorSwatch key={c.token} {...c} />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Surfaces &amp; neutrals</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {surfaceColors.map((c) => (
            <ColorSwatch key={c.token} {...c} />
          ))}
        </div>
      </div>
    </DesignSystemSection>
  );
}
