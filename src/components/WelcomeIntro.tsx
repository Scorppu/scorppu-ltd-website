"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

const STORAGE_KEY = "scorppu-welcome-played";

export default function WelcomeIntro() {
  const [phase, setPhase] = useState<"pending" | "playing" | "done">("pending");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alreadyPlayed = false;

    try {
      alreadyPlayed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadyPlayed = false;
    }

    if (reduced || alreadyPlayed) {
      setPhase("done");
      return;
    }

    setPhase("playing");
    document.documentElement.classList.add("overflow-hidden");

    const finish = window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      document.documentElement.classList.remove("overflow-hidden");
      setPhase("done");
    }, 2300);

    return () => {
      window.clearTimeout(finish);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  if (phase === "pending" || phase === "done") {
    return null;
  }

  return (
    <div
      className="welcome-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[var(--ink-deep)] text-[var(--background)]"
      aria-hidden="true"
    >
      <div className="px-6 text-center">
        <p className="welcome-sub text-base tracking-[0.22em] text-[var(--accent)] uppercase md:text-lg">
          {portfolio.handle}
        </p>
        <h1 className="welcome-mark mt-4 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
          {portfolio.name}
        </h1>
        <div className="welcome-line mx-auto mt-6 h-px w-16 bg-[var(--accent)]" />
      </div>
    </div>
  );
}
