import Image from "next/image";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const stack = ["Jenkins", "AWS", "Docker", "Kubernetes", "Python", "Linux"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* background glow */}
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
        style={{ animationDelay: "-4s" }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pt-24 lg:pb-0">
        {/* Left: text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="chip mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Open to new opportunities
          </span>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-white/70 sm:text-2xl">
            {profile.role}
            <br />
            {profile.tagline}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/55 sm:text-lg lg:mx-0">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {stack.map((tech) => (
              <span
                key={tech}
                className="chip px-3 py-1 text-xs font-medium text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              className="rounded-md gradient-bg px-6 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition-transform hover:scale-105"
            >
              Get in touch
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 font-semibold text-white/80 transition-colors hover:border-purple-400/60 hover:text-white"
            >
              <FiDownload /> Resume
            </a>
          </div>
        </div>

        {/* Right: profile image, smaller on mobile */}
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div
              aria-hidden
              className="animate-float-slow absolute -inset-6 rounded-full bg-gradient-to-tr from-purple-500/30 to-blue-400/30 blur-3xl"
            />
            <div className="relative aspect-square w-36 overflow-hidden rounded-full border border-white/10 bg-white/5 p-2 shadow-2xl sm:w-64 lg:w-[26rem]">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/hero.jpg"
                  alt="Portrait of Akshat"
                  fill
                  priority
                  sizes="(max-width: 640px) 9rem, (max-width: 1024px) 16rem, 26rem"
                  className="scale-125 object-cover object-[center_0%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40 hover:text-white"
      >
        <FiArrowDown size={24} />
      </a>
    </section>
  );
}
