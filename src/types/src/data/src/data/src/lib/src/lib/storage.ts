import { TestResult } from "@/types";

const RESULT_KEY = "aussie-learner-results";

export function saveResult(result: TestResult) {
  if (typeof window === "undefined") return;

  const existing = getResults();

  localStorage.setItem(
    RESULT_KEY,
    JSON.stringify([...existing, result]),
  );
}

export function getResults(): TestResult[] {
  if (typeof window === "undefined") return [];

  const stored = localStorage.getItem(RESULT_KEY);

  if (!stored) return [];

  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}
