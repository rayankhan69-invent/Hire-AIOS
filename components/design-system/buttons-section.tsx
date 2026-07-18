import { ArrowRight, Download, Trash2 } from "lucide-react";

import { DesignSystemSection } from "@/components/design-system/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ButtonsSection() {
  return (
    <DesignSystemSection
      id="buttons"
      title="Buttons"
      description="One primary action per view. Secondary and outline for supporting actions, ghost for low-emphasis inline actions, destructive reserved for irreversible actions."
    >
      <Card>
        <CardContent className="space-y-6 p-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Download">
              <Download />
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button>
              Continue
              <ArrowRight />
            </Button>
            <Button variant="outline" disabled>
              Disabled
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 />
              Delete role
            </Button>
          </div>
        </CardContent>
      </Card>
    </DesignSystemSection>
  );
}
