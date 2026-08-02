import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-white/65">
              I&apos;m always open to discussing DevOps, cloud infrastructure,
              automation, or new opportunities. Reach out and I&apos;ll get back
              to you.
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <FiMail className="text-purple-300" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <FiPhone className="text-purple-300" /> {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <FiMapPin className="text-purple-300" /> {profile.location}
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <FiLinkedin className="text-purple-300" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
                >
                  <FiGithub className="text-purple-300" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            action="https://getform.io/f/3d823566-484c-4f6d-99f7-399bebfd271b"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-md border border-white/15 bg-white/[0.03] p-3 text-sm text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="rounded-md border border-white/15 bg-white/[0.03] p-3 text-sm text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={6}
              required
              className="resize-none rounded-md border border-white/15 bg-white/[0.03] p-3 text-sm text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md gradient-bg px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition-transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
