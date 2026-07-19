"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SkillsInput } from "@/components/jobs/skills-input";
import {
  departments,
  employmentTypes,
  experienceLevels,
  hiringManagers,
  type Department,
  type EmploymentType,
  type ExperienceLevel,
  type Job,
} from "@/lib/mock/jobs";

export type JobFormValues = {
  title: string;
  department: Department | "";
  employmentType: EmploymentType | "";
  experience: ExperienceLevel | "";
  skills: string[];
  description: string;
  hiringManagerId: string;
};

function toFormValues(job?: Job): JobFormValues {
  if (!job) {
    return {
      title: "",
      department: "",
      employmentType: "",
      experience: "",
      skills: [],
      description: "",
      hiringManagerId: "",
    };
  }
  return {
    title: job.title,
    department: job.department,
    employmentType: job.employmentType,
    experience: job.experience,
    skills: job.skills,
    description: job.description,
    hiringManagerId: job.hiringManagerId,
  };
}

export function JobForm({ mode, job }: { mode: "create" | "edit"; job?: Job }) {
  const router = useRouter();
  const [values, setValues] = React.useState<JobFormValues>(() => toFormValues(job));

  function update<K extends keyof JobFormValues>(key: K, value: JobFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend: this is a local-only mock. In a real build this would
    // persist to the server, then redirect on success.
    router.push("/jobs");
  }

  const selectedManager = hiringManagers.find((m) => m.id === values.hiringManagerId);

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Role details</CardTitle>
            <CardDescription>The basics candidates will see first.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="job-title">
                Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="job-title"
                placeholder="e.g. Senior Product Designer"
                value={values.title}
                onChange={(e) => update("title", e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="job-department">
                  Department <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={values.department}
                  onValueChange={(v) => update("department", v as Department)}
                >
                  <SelectTrigger id="job-department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="job-type">
                  Employment type <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={values.employmentType}
                  onValueChange={(v) => update("employmentType", v as EmploymentType)}
                >
                  <SelectTrigger id="job-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {employmentTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="job-experience">
                  Experience <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={values.experience}
                  onValueChange={(v) => update("experience", v as ExperienceLevel)}
                >
                  <SelectTrigger id="job-experience">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Required skills</CardTitle>
            <CardDescription>
              Used by HireIQ AI to match and rank incoming candidates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SkillsInput value={values.skills} onChange={(skills) => update("skills", skills)} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Description</CardTitle>
            <CardDescription>Responsibilities, requirements, and what success looks like.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              rows={9}
              placeholder="Describe the role…"
              value={values.description}
              onChange={(e) => update("description", e.target.value)}
              required
            />
          </CardContent>
        </Card>

        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" asChild type="button">
            <Link href="/jobs">Cancel</Link>
          </Button>
          <Button type="submit">
            {mode === "create" ? "Publish role" : "Save changes"}
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Hiring manager</CardTitle>
            <CardDescription>Who candidates and recruiters should coordinate with.</CardDescription>
          </CardHeader>
          <CardContent>
            <Select
              value={values.hiringManagerId}
              onValueChange={(v) => update("hiringManagerId", v)}
            >
              <SelectTrigger id="job-hiring-manager">
                <SelectValue placeholder="Assign a hiring manager" />
              </SelectTrigger>
              <SelectContent>
                {hiringManagers.map((manager) => (
                  <SelectItem key={manager.id} value={manager.id}>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarFallback className="text-[10px]">{manager.initials}</AvatarFallback>
                      </Avatar>
                      <span>{manager.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-spark" />
              Live preview
            </CardTitle>
            <CardDescription>How this role will appear in your job list.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-display text-base font-semibold leading-snug">
                {values.title || "Untitled role"}
              </p>
              <p className="text-xs text-muted-foreground">
                {[values.department, values.employmentType, values.experience]
                  .filter(Boolean)
                  .join(" · ") || "Department · Type · Experience"}
              </p>
            </div>

            {values.skills.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {values.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground">No skills added yet.</p>
            )}

            <div className="flex items-center gap-2 border-t border-border pt-3">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="text-xs">
                  {selectedManager?.initials ?? "?"}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xs font-medium leading-tight">
                  {selectedManager?.name ?? "Unassigned"}
                </p>
                {selectedManager ? (
                  <p className="text-xs leading-tight text-muted-foreground">{selectedManager.title}</p>
                ) : null}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
