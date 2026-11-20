import WorkExperience from "@/components/team/WorkExperience";
import type { WorkExperienceEntry } from "@/types/team";

export default function ProfileWorkExperience({
  entries,
}: {
  entries: WorkExperienceEntry[];
}) {
  if (entries.length === 0) return null;

  return (
    <div className="flex flex-col items-left px-6 md:px-20">
      <h2 className="text-2xl font-medium">{"Working Experience:"}</h2>
      {entries.map((entry, i) => (
        <WorkExperience
          key={i}
          startDate={entry.startDate}
          endDate={entry.endDate}
          role={entry.role}
          description={entry.description}
        />
      ))}
    </div>
  );
}
