import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tests } from "@/data/tests";

export default function TestsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-5 pb-24 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-green-600">
              Practice centre
            </p>

            <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
              Choose your test.
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Select the test that matches your state and licence
              category.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tests.map((test) => (
              <div
                key={test.id}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                    {test.jurisdiction}
                  </span>

                  <span className="text-sm font-semibold text-slate-400">
                    {test.questionCount} questions
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-black text-slate-950">
                  {test.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Minimum score: {test.passPercentage}%
                </p>

                <Link
                  href={`/tests/${test.id}`}
                  className="mt-7 block rounded-2xl bg-slate-950 px-5 py-4 text-center font-bold text-white transition hover:bg-slate-800"
                >
                  Start Test
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
