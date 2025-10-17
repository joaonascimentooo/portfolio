import Link from "next/link";

type Accent = "blue" | "purple" | "green";

export interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  accent?: Accent;
}

const accentStyles: Record<Accent, { border: string; pill: string; bar: string }> = {
  blue: {
    border: "hover:border-blue-500/50",
    pill: "border-blue-500/40 bg-blue-500/10 text-blue-300",
    bar: "from-blue-500 to-purple-500",
  },
  purple: {
    border: "hover:border-purple-500/50",
    pill: "border-purple-500/40 bg-purple-500/10 text-purple-300",
    bar: "from-purple-500 to-blue-500",
  },
  green: {
    border: "hover:border-green-500/50",
    pill: "border-green-500/40 bg-green-500/10 text-green-300",
    bar: "from-green-500 to-blue-500",
  },
};

export default function ProjectCard({ title, description, href, tags = [], accent = "blue" }: ProjectCardProps) {
  const styles = accentStyles[accent];
  return (
    <Link
      href={href}
      className={`group rounded-xl border border-gray-800 bg-gray-900/40 p-6 transition-colors overflow-hidden ${styles.border}`}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
  {/* Accent pill removed as requested */}
      </div>
      <p className="mt-2 text-gray-300">{description}</p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-300">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-800 px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className={`mt-4 h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${styles.bar} transition-transform duration-300 group-hover:scale-x-100`} />
    </Link>
  );
}
