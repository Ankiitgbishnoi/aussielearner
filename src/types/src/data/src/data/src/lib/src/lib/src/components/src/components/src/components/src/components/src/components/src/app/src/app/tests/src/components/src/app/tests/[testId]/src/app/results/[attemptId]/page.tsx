"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

import { TestResult } from "@/types";

interface Props {
  params: {
    attemptId: string;
  };
}

export default function ResultsPage({ params }: Props) {
  const [result, setResult] =
    useState<TestResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(
      `aussie-result-${params.attemptId}`,
    );

    if (!stored) return;

    try {
      setResult(JSON.parse(stored));
    } catch {
      setResult(null);
    }
  }, [params.attemptId]);

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
        <div className="text-center">
          <h1 className="text-3xl font-black text-slate-950">
            Result not found
          </h1>

          <Link
            href="/tests"
            className="mt-6 inline-block rounded-full bg-slate-950 px-6 py-3 font-bold text-white"
          >
            Back to Tests
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] bg-[#07111f] p-10 text-center text-white shadow-2xl">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
            {result.passed ? (
              <CheckCircle2 className="h-12 w-12 text-green-400" />
            ) : (
              <XCircle className="h-12 w-12 text-red-400" />
            )}
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Test complete
          </p>

          <h1 className="mt-3 text-6xl font-black">
            {result.score}%
          </h1>

          <p
            className={`mt-4 text-xl font-black ${
              result.passed
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {result.passed ? "PASS" : "REVIEW REQUIRED"}
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <ResultCard
            title="Total"
            value={result.total}
          />

          <ResultCard
            title="Correct"
            value={result.correct}
            green
          />

          <ResultCard
            title="Incorrect"
            value={result.incorrect}
            red
          />
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black text-slate-950">
            Your report
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            You answered {result.correct} questions correctly
            and {result.incorrect} incorrectly.
          </p>

          <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-green-500"
              style={{
                width: `${result.score}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/tests"
            className="flex-1 rounded-full bg-slate-950 px-6 py-4 text-center font-black text-white"
          >
            Take Another Test
          </Link>

          <Link
            href="/progress"
            className="flex-1 rounded-full border border-slate-200 bg-white px-6 py-4 text-center font-black text-slate-950"
          >
            View Progress
          </Link>
        </div>
      </div>
    </main>
  );
}

function ResultCard({
  title,
  value,
  green,
  red,
}: {
  title: string;
  value: number;
  green?: boolean;
  red?: boolean;
}) {
  return (
    <div className="rounded-3xl bg-white p-7 text-center shadow-sm">
      <div
        className={`text-4xl font-black ${
          green
            ? "text-green-600"
            : red
              ? "text-red-500"
              : "text-slate-950"
        }`}
      >
        {value}
      </div>

      <div className="mt-2 text-sm font-bold uppercase tracking-wider text-slate-400">
        {title}
      </div>
    </div>
  );
}
