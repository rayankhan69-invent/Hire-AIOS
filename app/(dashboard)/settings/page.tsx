import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" description="Manage your profile and agency workspace." />

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>This is how you appear to your team and candidates.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="text-lg">AC</AvatarFallback>
            </Avatar>
            <div className="space-x-2">
              <Button variant="outline" size="sm">Upload photo</Button>
              <Button variant="ghost" size="sm">Remove</Button>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full name</Label>
              <Input id="full-name" defaultValue="Amelia Chen" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Senior Recruiter" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" defaultValue="amelia@northstar-talent.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2 border-t border-border pt-6">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Agency workspace</CardTitle>
          <CardDescription>Details shared across your team and on candidate-facing pages.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="agency-name">Agency name</Label>
              <Input id="agency-name" defaultValue="Northstar Talent Partners" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="agency-domain">Careers domain</Label>
              <Input id="agency-domain" defaultValue="jobs.northstar-talent.com" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2 border-t border-border pt-6">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </>
  );
}
