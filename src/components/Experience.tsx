import Section from "./Section";
import Reveal from "./Reveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative space-y-8 border-l border-white/10 pl-6 sm:pl-8">
        {experiences.map((exp, i) => (
          <Reveal key={`${exp.company}-${exp.role}`} delay={i * 80}>
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full gradient-bg ring-4 ring-[#0a0a0f] sm:-left-[39px]" />
              <div className="card p-5 sm:p-6">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-xs text-purple-300/80">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-white/70">
                  {exp.company} · {exp.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed text-white/60"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-bg" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
