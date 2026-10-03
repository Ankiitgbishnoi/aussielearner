"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08111f]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22c55e] text-xl shadow-lg shadow-green-500/20">
            🚗
          </div>

          <div>
            <div className="text-lg font-black tracking-tight text-white">
              Aussie Learner
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Learn • Practise • Drive
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/tests"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Tests
          </Link>

          <Link
            href="/road-rules"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Road Rules
          </Link>

          <Link
            href="/progress"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Progress
          </Link>

          <Link
            href="/tests"
            className="rounded-full bg-[#22c55e] px-5 py-3 text-sm font-bold text-[#06130b] transition hover:bg-[#4ade80]"
          >
            Start Test
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#08111f] px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/tests" onClick={() => setOpen(false)}>
              Tests
            </Link>

            <Link href="/road-rules" onClick={() => setOpen(false)}>
              Road Rules
            </Link>

            <Link href="/progress" onClick={() => setOpen(false)}>
              Progress
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
