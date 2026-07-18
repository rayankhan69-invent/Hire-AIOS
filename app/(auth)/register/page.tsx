import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          Create your agency account
        </h1>
        <p className="text-sm text-muted-foreground">
          Set up HireIQ AI for your team in a couple of minutes.
        </p>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Amelia" autoComplete="given-name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Chen" autoComplete="family-name" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="agency-name">Agency name</Label>
          <Input id="agency-name" placeholder="Northstar Talent Partners" autoComplete="organization" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" placeholder="you@agency.com" autoComplete="email" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Create a password" autoComplete="new-password" />
          <p className="text-xs text-muted-foreground">
            Use at least 8 characters, with a mix of letters and numbers.
          </p>
        </div>

        <Button type="submit" className="w-full">
          Create account
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground">
        By creating an account, you agree to HireIQ AI&apos;s{" "}
        <Link href="#" className="underline underline-offset-2 hover:text-foreground">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#" className="underline underline-offset-2 hover:text-foreground">
          Privacy Policy
        </Link>
        .
      </p>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
