import { notFound } from "next/navigation";

import { CandidateHeader } from "@/components/candidates/profile/candidate-header";
import {
  ProfileInfoCard,
  AiScoreCard,
  InterviewStatusCard,
} from "@/components/candidates/profile/sidebar-cards";
import { ResumeSummaryCard, SkillsCard } from "@/components/candidates/profile/resume-and-skills";
import { ExperienceCard, EducationCard } from "@/components/candidates/profile/experience-education";
import { TimelineCard } from "@/components/candidates/profile/timeline-card";
import { NotesCard } from "@/components/candidates/profile/notes-card";
import { getCandidateProfileById } from "@/lib/mock/candidate-profile";

export default function CandidateProfilePage({ params }: { params: { id: string } }) {
  const profile = getCandidateProfileById(params.id);

  if (!profile) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <CandidateHeader profile={profile} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:order-2">
          <ProfileInfoCard profile={profile} />
          <AiScoreCard profile={profile} />
          <InterviewStatusCard profile={profile} />
        </div>

        <div className="space-y-6 lg:order-1 lg:col-span-2">
          <ResumeSummaryCard profile={profile} />
          <SkillsCard profile={profile} />
          <ExperienceCard profile={profile} />
          <EducationCard profile={profile} />
          <TimelineCard profile={profile} />
          <NotesCard initialNotes={profile.notes} />
        </div>
      </div>
    </div>
  );
}
