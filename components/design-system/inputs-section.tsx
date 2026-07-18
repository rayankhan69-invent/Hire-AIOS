import { Search } from "lucide-react";

import { DesignSystemSection } from "@/components/design-system/section";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export function InputsSection() {
  return (
    <DesignSystemSection
      id="inputs"
      title="Inputs"
      description="A single focus treatment (a two-pixel ring) is used everywhere for accessibility and consistency, from text fields to buttons."
    >
      <Card>
        <CardContent className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="ds-default">Default</Label>
            <Input id="ds-default" placeholder="jane@agency.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ds-search">With icon</Label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="ds-search" placeholder="Search candidates…" className="pl-9" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ds-helper">With helper text</Label>
            <Input id="ds-helper" placeholder="Northstar Talent Partners" />
            <p className="text-xs text-muted-foreground">This appears on your public careers page.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ds-error" className="text-destructive">Error state</Label>
            <Input
              id="ds-error"
              defaultValue="not-an-email"
              aria-invalid
              className="border-destructive focus-visible:ring-destructive"
            />
            <p className="text-xs text-destructive">Enter a valid work email address.</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ds-disabled">Disabled</Label>
            <Input id="ds-disabled" placeholder="Not editable" disabled />
          </div>

          <div className="flex items-center gap-2 pt-6">
            <Checkbox id="ds-checkbox" defaultChecked />
            <Label htmlFor="ds-checkbox" className="font-normal">
              Notify me about new applicants
            </Label>
          </div>

          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="ds-textarea">Textarea</Label>
            <Textarea id="ds-textarea" placeholder="Add a note about this candidate…" />
          </div>
        </CardContent>
      </Card>
    </DesignSystemSection>
  );
}
