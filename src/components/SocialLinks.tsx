import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const links = [
  { label: "LinkedIn", href: profile.linkedin, Icon: FiLinkedin },
  { label: "GitHub", href: profile.github, Icon: FiGithub },
  { label: "Email", href: `mailto:${profile.email}`, Icon: FiMail },
  { label: "Resume", href: profile.resume, Icon: FiFileText },
];

export default function SocialLinks() {
  return (
    <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="group flex h-12 w-12 items-center justify-between overflow-hidden rounded-r-lg border-y border-r border-l-4 border-white/10 border-l-purple-500/50 bg-[#14141c]/90 text-white/75 shadow-[0_0_18px_-6px_rgba(168,85,247,0.6)] backdrop-blur transition-all duration-300 hover:w-40 hover:border-transparent hover:gradient-bg hover:text-white"
            >
              <span className="ml-4 hidden whitespace-nowrap text-sm font-medium group-hover:inline">
                {label}
              </span>
              <Icon size={20} className="mx-3.5 shrink-0" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
