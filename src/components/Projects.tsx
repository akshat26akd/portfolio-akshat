import { FiExternalLink, FiGithub } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article className="card flex h-full flex-col p-6 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
                <div className="flex shrink-0 gap-3 text-white/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="transition-colors hover:text-white"
                    >
                      <FiGithub size={19} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="transition-colors hover:text-white"
                    >
                      <FiExternalLink size={19} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-1 font-mono text-xs text-purple-300/80">
                {project.period}
              </p>

              <ul className="mt-4 flex-1 space-y-2">
                {project.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm leading-relaxed text-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-bg" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.split(",").map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
