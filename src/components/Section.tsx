import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`pb-20 pt-4 sm:pb-24 sm:pt-6 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
              <span className="gradient-text">{title}</span>
            </h2>
            <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
          </div>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
