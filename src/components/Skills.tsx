import Section from "./Section";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-8">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 80}>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/30">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map(({ name, Icon, color }) => (
                  <div
                    key={name}
                    className="card group flex flex-1 min-w-[110px] flex-col items-center gap-2 py-5 hover:-translate-y-1"
                  >
                    <Icon
                      size={22}
                      style={{ color }}
                      className="transition-transform group-hover:scale-110"
                    />
                    <span className="text-center text-xs font-medium text-white/70">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
