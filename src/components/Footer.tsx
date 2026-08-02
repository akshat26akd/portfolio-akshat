import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} {profile.name} · {profile.role} ·{" "}
          {profile.location}
        </p>
        <div className="flex gap-5 text-white/50">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <FiGithub size={19} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <FiLinkedin size={19} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="transition-colors hover:text-white"
          >
            <FiMail size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
