"use client";

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function SkillsInput({
  value,
  onChange,
  placeholder = "Type a skill and press Enter…",
  className,
}: {
  value: string[];
  onChange: (skills: string[]) => void;
  placeholder?: string;
  className?: string;
}) {
  const [draft, setDraft] = React.useState("");

  function addSkill(raw: string) {
    const skill = raw.trim();
    if (!skill) return;
    if (value.some((s) => s.toLowerCase() === skill.toLowerCase())) {
      setDraft("");
      return;
    }
    onChange([...value, skill]);
    setDraft("");
  }

  function removeSkill(skill: string) {
    onChange(value.filter((s) => s !== skill));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSkill(draft);
    } else if (e.key === "Backspace" && draft === "" && value.length > 0) {
      const last = value[value.length - 1];
      if (last) removeSkill(last);
    }
  }

  return (
    <div
      className={cn(
        "flex min-h-10 flex-wrap items-center gap-1.5 rounded-md border border-input bg-background px-3 py-2 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background",
        className
      )}
    >
      {value.map((skill) => (
        <Badge key={skill} variant="secondary" className="gap-1 py-1 pl-2.5 pr-1">
          {skill}
          <button
            type="button"
            onClick={() => removeSkill(skill)}
            className="rounded-full p-0.5 text-secondary-foreground/60 hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
            aria-label={`Remove ${skill}`}
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      <input
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => addSkill(draft)}
        placeholder={value.length === 0 ? placeholder : undefined}
        className="min-w-[120px] flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}
