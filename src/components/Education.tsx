import Section from "./Section";
import Reveal from "./Reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-4">
        {education.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 70}>
            <div className="card flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <h3 className="text-base font-bold text-white sm:text-lg">
                  {edu.degree}
                </h3>
                {edu.specialization && (
                  <p className="mt-1 text-sm font-semibold text-white/60">
                    {edu.specialization}
                  </p>
                )}
                <p className="mt-1 text-sm text-white/60">
                  {edu.institution} · {edu.location}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-mono text-xs text-purple-300/80">
                  {edu.period}
                </p>
                <p className="mt-1 text-sm font-semibold gradient-text">
                  {edu.score}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
