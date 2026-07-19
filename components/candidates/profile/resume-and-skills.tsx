import { Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CandidateProfile } from "@/lib/mock/candidate-profile";

export function ResumeSummaryCard({ profile }: { profile: CandidateProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume summary</CardTitle>
        <CardDescription>AI-generated summary from the candidate&apos;s resume.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-foreground">{profile.summary}</p>
      </CardContent>
    </Card>
  );
}

export function SkillsCard({ profile }: { profile: CandidateProfile }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
        <CardDescription>
          Highlighted skills matched against the requirements for {profile.position}.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => {
            const isMatch = profile.matchedSkills.includes(skill);
            return (
              <Badge
                key={skill}
                variant={isMatch ? "spark" : "secondary"}
                className="gap-1 font-normal"
              >
                {isMatch ? <Sparkles className="h-3 w-3" /> : null}
                {skill}
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
