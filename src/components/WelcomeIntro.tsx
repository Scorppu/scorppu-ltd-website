"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import SignatureMark from "@/components/SignatureMark";

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
    }, 2450);

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
      className="welcome-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[var(--ink-deep)]"
      aria-hidden="true"
    >
      <div className="welcome-mark flex flex-col items-start px-6">
        <SignatureMark size="intro" inverted />
        <p className="welcome-sub mt-3 text-2xl font-medium tracking-tight text-white sm:text-3xl">
          {portfolio.name}
        </p>
        <div className="welcome-line mt-4 h-px w-16 bg-white/45" />
      </div>
    </div>
  );
}
