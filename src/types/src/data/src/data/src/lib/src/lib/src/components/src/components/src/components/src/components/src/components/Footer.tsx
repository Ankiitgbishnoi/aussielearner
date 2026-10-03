export default function Footer() {
  return (
    <footer className="bg-[#06101d] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-xl">
                🚗
              </div>

              <div className="text-xl font-black">
                Aussie Learner
              </div>
            </div>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              An independent Australian driver-test practice and
              learning platform designed to help learners understand
              road rules and prepare for knowledge tests.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Learn</h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p>Practice Tests</p>
              <p>Road Rules</p>
              <p>Road Signs</p>
              <p>Progress</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Important</h3>

            <div className="mt-5 text-sm leading-6 text-slate-400">
              Aussie Learner is an independent practice resource and
              is not affiliated with or endorsed by VicRoads or any
              Australian state or territory road authority.
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Aussie Learner. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
