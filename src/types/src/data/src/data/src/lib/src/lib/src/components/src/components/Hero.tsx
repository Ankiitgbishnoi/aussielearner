import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#07111f] pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero-car.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#06101e] via-[#06101e]/90 to-[#06101e]/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#06101e] via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300 backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            Australian driver test preparation
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Learn the rules.
            <span className="block text-[#4ade80]">
              Pass with confidence.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Practise driver knowledge tests, understand road rules and
            track your progress across Australian states and licence
            categories.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/tests"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#22c55e] px-7 py-4 font-bold text-[#06130b] shadow-xl shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-[#4ade80]"
            >
              Start Practising
              <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/road-rules"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Explore Road Rules
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
