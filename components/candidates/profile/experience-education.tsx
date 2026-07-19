import { Briefcase, GraduationCap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { CandidateProfile } from "@/lib/mock/candidate-profile";

export function ExperienceCard({ profile }: { profile: CandidateProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work experience</CardTitle>
        <CardDescription>Most recent roles first.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-6">
          {profile.experience.map((role) => (
            <li key={role.id} className="flex gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Briefcase className="h-4 w-4" />
              </span>
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <p className="text-sm font-medium">{role.title}</p>
                  <span className="text-xs text-muted-foreground">· {role.company}</span>
                </div>
                <p className="text-xs text-muted-foreground">{role.duration}</p>
                <p className="text-sm text-muted-foreground">{role.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function EducationCard({ profile }: { profile: CandidateProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {profile.education.map((edu) => (
            <li key={edu.id} className="flex gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <GraduationCap className="h-4 w-4" />
              </span>
              <div className="space-y-1">
                <p className="text-sm font-medium">{edu.degree}</p>
                <p className="text-xs text-muted-foreground">
                  {edu.institution} · {edu.years}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
