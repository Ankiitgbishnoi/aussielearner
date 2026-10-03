import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import LicenceCard from "@/components/LicenceCard";
import StateSelector from "@/components/StateSelector";
import Footer from "@/components/Footer";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
} from "lucide-react";

const licences = [
  {
    category: "PEDESTRIAN" as const,
    title: "Pedestrian",
    description: "Learn safe pedestrian behaviour and road awareness.",
    image: "/images/pedestrian.jpg",
  },
  {
    category: "BIKE" as const,
    title: "Bike",
    description: "Practise bicycle road rules and safe riding knowledge.",
    image: "/images/bicycle.jpg",
  },
  {
    category: "CAR" as const,
    title: "Car",
    description: "Prepare for your car learner knowledge test.",
    image: "/images/car.jpg",
  },
  {
    category: "MOTORCYCLE" as const,
    title: "Motorcycle",
    description: "Build motorcycle road-rule knowledge.",
    image: "/images/motorcycle.jpg",
  },
  {
    category: "MR" as const,
    title: "MR",
    description: "Practise medium rigid vehicle knowledge.",
    image: "/images/truck.jpg",
  },
  {
    category: "HR" as const,
    title: "HR",
    description: "Prepare for heavy rigid knowledge testing.",
    image: "/images/truck.jpg",
  },
  {
    category: "HC" as const,
    title: "HC",
    description: "Practise heavy combination vehicle knowledge.",
    image: "/images/truck.jpg",
  },
  {
    category: "MC" as const,
    title: "MC",
    description: "Prepare for multi-combination vehicle testing.",
    image: "/images/truck.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {[
              {
                icon: ClipboardCheck,
                title: "Realistic Tests",
                text: "Practise structured knowledge tests.",
              },
              {
                icon: BookOpen,
                title: "Learn the Rules",
                text: "Understand the rules behind each topic.",
              },
              {
                icon: CheckCircle2,
                title: "Results at the End",
                text: "Complete the test before seeing your score.",
              },
              {
                icon: BarChart3,
                title: "Track Progress",
                text: "See where you need more practice.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <item.icon className="h-7 w-7 text-green-600" />

                <h3 className="mt-5 font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="font-bold uppercase tracking-[0.2em] text-green-600">
                Choose your test
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
                What are you learning for?
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Select your vehicle or road-user category and start
                practising.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {licences.map((licence) => (
                <LicenceCard
                  key={licence.category}
                  {...licence}
                />
              ))}
            </div>
          </div>
        </section>

        <StateSelector />

        <section className="bg-[#07111f] py-24">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <p className="font-bold uppercase tracking-[0.2em] text-green-400">
              Ready?
            </p>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-6xl">
              Start your next practice test.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Answer every question first. Your final score and
              detailed report appear when the test is complete.
            </p>

            <a
              href="/tests"
              className="mt-9 inline-flex rounded-full bg-green-500 px-8 py-4 font-black text-[#06130b] transition hover:bg-green-400"
            >
              Start Practising
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
