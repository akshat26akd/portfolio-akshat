import Section from "./Section";
import Reveal from "./Reveal";

const highlights = [
  { value: "3+", label: "Years in DevOps" },
  { value: "25+", label: "Jenkins nodes managed" },
  { value: "40%", label: "Manual effort reduced" },
  { value: "35%", label: "Faster deployments" },
];

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-white/65 sm:text-lg">
            <p>
              I&apos;m Akshat, a DevOps Engineer from Sundernagar, Himachal
              Pradesh. I completed my B.Tech in Computer Science &amp;
              Engineering from Jaypee University of Information Technology,
              Waknaghat.
            </p>
            <p>
              I&apos;m currently based in{" "}
              <span className="text-white">Bengaluru</span>, working as a{" "}
              <span className="text-white">DevOps Engineer at Aumovio India</span>{" "}
              (formerly Continental), where I build and maintain CI/CD pipelines
              and manage hybrid on-premise and AWS cloud infrastructure.
            </p>
            <p>
              I specialize in building and optimizing{" "}
              <span className="text-white">CI/CD pipelines</span>, automating
              infrastructure with{" "}
              <span className="text-white">Python and shell scripting</span>,
              and managing hybrid environments across{" "}
              <span className="text-white">on-premise and AWS cloud</span>. I
              care about reliability, repeatability, and making systems easier
              for teams to operate.
            </p>
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="card p-5 text-center">
                <p className="text-3xl font-extrabold gradient-text">
                  {h.value}
                </p>
                <p className="mt-1 text-xs text-white/50">{h.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
