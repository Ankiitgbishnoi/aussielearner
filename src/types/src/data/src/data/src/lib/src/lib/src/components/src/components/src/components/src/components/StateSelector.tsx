"use client";

import { useState } from "react";

const states = [
  ["VIC", "Victoria"],
  ["NSW", "New South Wales"],
  ["QLD", "Queensland"],
  ["SA", "South Australia"],
  ["WA", "Western Australia"],
  ["TAS", "Tasmania"],
  ["NT", "Northern Territory"],
  ["ACT", "Australian Capital Territory"],
];

export default function StateSelector() {
  const [selected, setSelected] = useState("VIC");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-green-600">
            Choose your location
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            Road rules can vary by state.
          </h2>

          <p className="mt-4 text-slate-600">
            Select your state or territory so your practice experience
            can use the appropriate question set.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {states.map(([code, name]) => (
            <button
              key={code}
              type="button"
              onClick={() => setSelected(code)}
              className={`rounded-2xl border p-5 text-left transition ${
                selected === code
                  ? "border-green-500 bg-green-50 shadow-lg shadow-green-100"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div className="text-xl font-black text-slate-950">
                {code}
              </div>

              <div className="mt-1 text-sm text-slate-500">
                {name}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          Selected:{" "}
          <span className="font-bold text-slate-900">
            {selected}
          </span>
        </div>
      </div>
    </section>
  );
}
