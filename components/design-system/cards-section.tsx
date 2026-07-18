import { Target, ArrowUpRight } from "lucide-react";

import { DesignSystemSection } from "@/components/design-system/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/stat-card";

export function CardsSection() {
  return (
    <DesignSystemSection
      id="cards"
      title="Cards"
      description="A single elevation with a hairline border, no drop shadow by default — density and hierarchy come from spacing and type, not shadows."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Standard card</CardTitle>
            <CardDescription>Header, content, and an optional footer.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Used for settings panels, forms, and grouped content throughout the app.
            </p>
          </CardContent>
          <CardFooter className="justify-end gap-2 border-t border-border pt-4">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>

        <StatCard
          label="Avg. match score"
          value="82%"
          delta="-1.4% this month"
          trend="down"
          icon={Target}
        />

        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Actionable card</CardTitle>
            <CardDescription>Pairs content with a single clear next step.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" size="sm" className="px-0 text-primary hover:bg-transparent hover:underline">
              View report
              <ArrowUpRight />
            </Button>
          </CardContent>
        </Card>
      </div>
    </DesignSystemSection>
  );
}
