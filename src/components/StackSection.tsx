export interface StackSectionProps {
  title: string;
  items: string[];
}

export default function StackSection({ title, items }: StackSectionProps) {
  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-5">
      <h3 className="font-semibold text-white mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2 text-sm text-gray-200">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-gray-800 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
