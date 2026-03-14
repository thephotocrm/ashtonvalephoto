import { useState, useEffect, useCallback } from "react";

const COOLDOWN_MS = 5 * 60 * 1000; // 5 minutes
const STORAGE_KEY = "abbie_street_last_submission";

function getRemaining(): number {
  try {
    const ts = localStorage.getItem(STORAGE_KEY);
    if (!ts) return 0;
    const elapsed = Date.now() - Number(ts);
    return Math.max(0, COOLDOWN_MS - elapsed);
  } catch {
    return 0;
  }
}

export function useSubmissionCooldown() {
  const [remainingMs, setRemainingMs] = useState(getRemaining);

  useEffect(() => {
    if (remainingMs <= 0) return;
    const id = setInterval(() => {
      const r = getRemaining();
      setRemainingMs(r);
      if (r <= 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, [remainingMs]);

  const markSubmitted = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // private browsing — ignore
    }
    setRemainingMs(COOLDOWN_MS);
  }, []);

  const isCoolingDown = remainingMs > 0;
  const remainingSeconds = Math.ceil(remainingMs / 1000);

  return { isCoolingDown, remainingSeconds, markSubmitted };
}
