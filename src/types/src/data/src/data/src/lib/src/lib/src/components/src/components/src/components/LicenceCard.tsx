import Link from "next/link";
import { LicenceCategory } from "@/types";

interface Props {
  category: LicenceCategory;
  title: string;
  description: string;
  image: string;
}

export default function LicenceCard({
  category,
  title,
  description,
  image,
}: Props) {
  return (
    <Link
      href={`/tests?licence=${category}`}
      className="group relative min-h-[270px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-green-300">
          {category}
        </div>

        <h3 className="text-2xl font-black text-white">
          {title}
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
          {description}
        </p>
      </div>
    </Link>
  );
}
