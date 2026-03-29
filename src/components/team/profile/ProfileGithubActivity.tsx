"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaTrash,
  FaRocket,
  FaComment,
  FaArrowUp,
  FaPlus,
  FaExclamationCircle,
  FaBullhorn,
} from "react-icons/fa";

// ─── Types ────────────────────────────────────────────────────────────────────

interface GitHubCommit {
  sha: string;
  message: string;
}

interface GitHubEventPayload {
  action?: string;
  ref?: string;
  ref_type?: string;
  commits?: GitHubCommit[];
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  payload: GitHubEventPayload;
  created_at: string;
}

interface ParsedEvent {
  id: string;
  icon: React.ReactNode;
  label: string;
  repoName: string;
  repoUrl: string;
  branch?: string; // 👈 add this
  commitMsg?: string;
  timeAgo: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTimeAgo(dateStr: string): string {
  const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ICON_SIZE = 14;

function parseEvent(event: GitHubEvent): ParsedEvent | null {
  const repoName = event.repo.name.split("/")[1];
  const repoUrl = `https://github.com/${event.repo.name}`;
  const base = {
    id: event.id,
    repoName,
    repoUrl,
    timeAgo: formatTimeAgo(event.created_at),
  };

  switch (event.type) {
    case "PushEvent": {
      const commits = event.payload.commits ?? [];
      const commitMsg = commits.at(-1)?.message.split("\n")[0];
      const branch = event.payload.ref?.replace("refs/heads/", "");
      return {
        ...base,
        icon: <FaArrowUp size={ICON_SIZE} />,
        label: `Pushed to ${repoName}`,
        branch,
        commitMsg,
      };
    }
    case "PullRequestEvent":
      return {
        ...base,
        icon: <FaCodeBranch size={ICON_SIZE} />,
        label: `${event.payload.action === "opened" ? "Opened PR in" : "PR activity in"} ${repoName}`,
      };
    case "CreateEvent":
      return {
        ...base,
        icon: <FaPlus size={ICON_SIZE} />,
        label: `Created ${event.payload.ref_type ?? "ref"} in ${repoName}`,
      };
    case "DeleteEvent":
      return {
        ...base,
        icon: <FaTrash size={ICON_SIZE} />,
        label: `Deleted ${event.payload.ref_type ?? "ref"} in ${repoName}`,
      };
    case "IssuesEvent":
      return {
        ...base,
        icon: <FaExclamationCircle size={ICON_SIZE} />,
        label: `${capitalize(event.payload.action ?? "activity")} issue in ${repoName}`,
      };
    case "IssueCommentEvent":
      return {
        ...base,
        icon: <FaComment size={ICON_SIZE} />,
        label: `Commented in ${repoName}`,
      };
    case "WatchEvent":
      return {
        ...base,
        icon: <FaStar size={ICON_SIZE} />,
        label: `Starred ${repoName}`,
      };
    case "ForkEvent":
      return {
        ...base,
        icon: <FaCodeBranch size={ICON_SIZE} />,
        label: `Forked ${repoName}`,
      };
    case "ReleaseEvent":
      return {
        ...base,
        icon: <FaRocket size={ICON_SIZE} />,
        label: `Released in ${repoName}`,
      };
    case "PublicEvent":
      return {
        ...base,
        icon: <FaBullhorn size={ICON_SIZE} />,
        label: `Made ${repoName} public`,
      };
    default:
      return null;
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function EventCard({ event }: { event: ParsedEvent }) {
  return (
    <a
      href={event.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-stone-50 rounded-lg border border-stone-200 p-4 flex items-start gap-3 hover:border-stone-400 hover:bg-stone-100 transition-colors duration-200 group"
    >
      <span className="mt-0.5 text-stone-400 group-hover:text-stone-600 transition-colors duration-200 flex-shrink-0">
        {event.icon}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <p className="text-sm text-stone-700 font-medium truncate">
          {event.label}
          {event.branch && (
            <span className="text-stone-400 font-normal">
              {" "}
              / {event.branch}
            </span>
          )}
        </p>
        {event.commitMsg && (
          <p className="text-xs text-stone-400 italic truncate">
            {`"${event.commitMsg}"`}
          </p>
        )}
        <p className="text-xs text-stone-400">{event.timeAgo}</p>
      </div>
    </a>
  );
}
function SkeletonCard() {
  return (
    <div className="bg-stone-50 rounded-lg border border-stone-200 p-4 flex items-start gap-3 animate-pulse">
      <div className="mt-0.5 w-3.5 h-3.5 bg-stone-200 rounded flex-shrink-0" />
      <div className="flex flex-col gap-1.5 flex-grow">
        <div className="h-3.5 bg-stone-200 rounded w-3/4" />
        <div className="h-3 bg-stone-200 rounded w-1/3" />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface ProfileGitHubActivityProps {
  username: string;
  maxEvents?: number;
}

export default function ProfileGitHubActivity({
  username,
  maxEvents = 10,
}: ProfileGitHubActivityProps) {
  const [events, setEvents] = useState<ParsedEvent[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    const controller = new AbortController();

    async function fetchActivity() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/events/public?per_page=30`,
          {
            headers: { Accept: "application/vnd.github+json" },
            signal: controller.signal,
          },
        );

        if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);

        const data: GitHubEvent[] = await res.json();

        const parsed = data
          .map(parseEvent)
          .filter((e): e is ParsedEvent => e !== null)
          .slice(0, maxEvents);

        setEvents(parsed);
        setStatus("success");
      } catch (err) {
        if ((err as Error).name !== "AbortError") setStatus("error");
      }
    }

    fetchActivity();
    return () => controller.abort(); // cleanup on unmount
  }, [username, maxEvents]);

  // Don't render the section at all until we know there's content
  if (status === "success" && events.length === 0) return null;

  return (
    <div className="flex flex-col items-left px-6 md:px-20">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-2xl font-medium">{"GitHub Activity"}</h2>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-400 hover:text-stone-700 transition-colors duration-200"
          aria-label="GitHub profile"
        >
          <FaGithub size={22} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        {status === "loading" &&
          Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}

        {status === "error" && (
          <p className="text-sm text-stone-400 col-span-2">
            Could not load GitHub activity.
          </p>
        )}

        {status === "success" &&
          events.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  );
}
