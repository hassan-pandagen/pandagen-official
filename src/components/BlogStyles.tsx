export function BlogHeader({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-6 leading-tight">{children}</h2>;
}

export function BlogText({ children }: { children: React.ReactNode }) {
  return <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">{children}</p>;
}

export function BlogList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 mb-10 bg-white/5 p-8 rounded-2xl border border-white/10">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-300">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BlogHighlight({ children }: { children: React.ReactNode }) {
  return <span className="text-neon font-semibold">{children}</span>;
}

export function BlogQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-neon pl-6 my-10 italic text-xl text-gray-400">
      "{children}"
    </blockquote>
  );
}
