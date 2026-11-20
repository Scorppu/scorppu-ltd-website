import { YouTubeEmbed } from "@next/third-parties/google";
import type { Hobby } from "@/types/team";

export default function ProfileHobbies({ hobbies }: { hobbies: Hobby[] }) {
  if (hobbies.length === 0) return null;

  return (
    <div className="flex flex-col items-center px-6 md:px-20">
      <h2 className="text-2xl font-medium mb-6 self-start">
        {"Interests And Hobbies"}
      </h2>
      {hobbies.map(({ name, description, youtubeVideoId }) => (
        <div
          key={name}
          className="bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 overflow-hidden mb-6 w-full max-w-3xl"
        >
          <div className="px-6 pt-6 pb-4">
            <h3 className="text-lg font-semibold mb-1">{name}</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">{description}</p>
          </div>
          {youtubeVideoId && (
            <div className="px-6 pb-6">
              <div className="w-full">
                <YouTubeEmbed videoid={youtubeVideoId} params="controls=1&start=0" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
