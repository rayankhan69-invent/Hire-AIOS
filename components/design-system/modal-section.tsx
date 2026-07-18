import { UserPlus } from "lucide-react";

import { DesignSystemSection } from "@/components/design-system/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ModalSection() {
  return (
    <DesignSystemSection
      id="modal"
      title="Modal"
      description="Reserved for focused, single-purpose tasks — inviting a teammate, confirming a destructive action. Anything requiring more space belongs on its own page."
    >
      <Card>
        <CardContent className="p-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <UserPlus />
                Invite teammate
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite a teammate</DialogTitle>
                <DialogDescription>
                  They&apos;ll get an email to join Northstar Talent Partners on HireIQ AI.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="invite-email">Work email</Label>
                  <Input id="invite-email" type="email" placeholder="colleague@agency.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="invite-note">Personal note (optional)</Label>
                  <Textarea id="invite-note" placeholder="Add a note to the invite…" />
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Send invite</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </DesignSystemSection>
  );
}
