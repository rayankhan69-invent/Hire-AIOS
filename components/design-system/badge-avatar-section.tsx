import { DesignSystemSection } from "@/components/design-system/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function BadgeAvatarSection() {
  return (
    <DesignSystemSection
      id="badges-avatars"
      title="Badges &amp; avatars"
      description="Badge is for generic labels and counts — plan tiers, categories, notification counts. Avatars default to initials; a real photo is a progressive enhancement, never a requirement."
    >
      <Card>
        <CardContent className="space-y-8 p-6">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Badge variants</p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="spark">AI match</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Avatar sizes</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-[10px]">AC</AvatarFallback>
              </Avatar>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">AC</AvatarFallback>
              </Avatar>
              <Avatar className="h-9 w-9">
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="text-base">AC</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">AC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </Card>
    </DesignSystemSection>
  );
}
