import { FiExternalLink, FiAward } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 60}>
            <div className="card flex h-full items-start gap-4 p-5">
              <span className="mt-0.5 rounded-lg gradient-bg p-2 text-white">
                <FiAward size={20} />
              </span>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-white">{cert.title}</h3>
                  {cert.href && (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Verify ${cert.title}`}
                      className="mt-0.5 shrink-0 text-white/40 transition-colors hover:text-white"
                    >
                      <FiExternalLink size={17} />
                    </a>
                  )}
                </div>
                <p className="mt-1 text-sm text-white/55">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-purple-300/80">
                  {cert.date}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
