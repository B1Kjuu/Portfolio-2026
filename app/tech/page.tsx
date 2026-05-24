"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Paper } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import avatarImage from "./assets/avatar.png";
import firebaseIcon from "./techicons/Firebase.svg";
import gitIcon from "./techicons/Git.svg";
import javascriptIcon from "./techicons/Javascript.svg";
import nextIcon from "./techicons/Next.svg";
import nodeIcon from "./techicons/Node.svg";
import pythonIcon from "./techicons/Python.svg";
import reactIcon from "./techicons/React.svg";
import sqlIcon from "./techicons/SQL.svg";
import tailwindIcon from "./techicons/Tailwind.svg";
import typescriptIcon from "./techicons/Typescript.svg";
import vscodeIcon from "./techicons/vscode.svg";

const resumeHref = new URL("./assets/CV_GUSI.pdf", import.meta.url).toString();

const projects = [
  {
    title: "P3KCARS",
    copy: "Public website with responsive UI.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXCVest0QBAjcHvrEKTcl0Ootm3k1YHezx2nG-qEW-KnIlz7Ju96dboPw9k5oK_JPbJtc9vpLM2uTbl4Jp5T5xYJkkF8YXNdJfU_R_aGOludGtKBp1HgWFr5rqn1xJAZejUowdKJof99VEhyjSdQH6v-Hn6S9s-R0D0P58zGT3QSHY2921wWVXOA_JhdWbEhWoo4lfLUZUnFMdAB-_WwQWZGvyFTc6SWCEuR_Jif19tTxPPlWbqx9Zy4pE5Hxb8O2WhxzOPHs5I8zC",
    rotate: "md:-rotate-3",
    tape: "stripes",
    stamp: "TOP SECRET",
  },
  {
    title: "PTSI",
    copy: "Company site on Firebase.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCShALeDeXQWKf5tZgngPE_HQouyQ9YKnViRe2pYPUax7YAxejzF9SS3ENwczvdVJuVeCn7qqH_ZR3eDjhRW24BIfLQ4-MwnhB0-RizlIhX2AlD-QJkggRsfSXFUjHerwisE4Eg32X0cyQcrWDp4YT99d8uHpwTsAm-cmLXubyTks3mwQ1fJ55g-ONi0MrRDHvRB-J81c7VdX0Pq8foIyadgZaf14Ie7VPHf76xtfwx5i1dAH6CSKkp3_EP5w-NrkawMiXzLvpdDvtI",
    rotate: "md:rotate-2",
    tape: "teal",
    stamp: "",
  },
  {
    title: "RESORTIFYPH",
    copy: "Resort booking platform.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA58_CjyjrU-PfnKV3ramk9hrGCCU5xk4vw0fN_yAXtoaVaQqZUfBrmWVH3Y6qTlAG5QUZPJHpm25m_AUnvxd8LcoCi5AZR-6GfddDKNsKjXaI7mVuRgSXKuOIR5YrgIXGwHfhUeH_RnonVLbMAgILG6I63SfiJdgOzCZIUm8mmV0tfDaELxCv97PPgIQxPRVek55R5KWdaAsTsDruZmwkluAm-Z330BBmJJdsJS1NZYmoYeUYdI0aNMtl5acQrne9MQMqKvQjraxV4",
    rotate: "md:rotate-3",
    tape: "dots",
    stamp: "",
  },
];

const skillItems = [
  { label: "JavaScript", icon: javascriptIcon, type: "patch" },
  { label: "TypeScript", icon: typescriptIcon, type: "patch" },
  { label: "React", icon: reactIcon, type: "pin" },
  { label: "Node.js", icon: nodeIcon, type: "patch" },
  { label: "Tailwind", icon: tailwindIcon, type: "patch" },
  { label: "HTML5", icon: null, type: "pin" },
  { label: "Python", icon: pythonIcon, type: "patch" },
  { label: "Next.js", icon: nextIcon, type: "patch" },
  { label: "SQL", icon: sqlIcon, type: "patch" },
];

const toolItems = [
  { label: "VS Code", icon: vscodeIcon, iconNode: null },
  { label: "Git", icon: gitIcon, iconNode: null },
  { label: "Figma", icon: null, iconNode: <DesignServicesRoundedIcon sx={{ fontSize: 22, color: "#6d0010" }} /> },
  { label: "Firebase", icon: firebaseIcon, iconNode: null },
];

export default function TechPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#fdf9ef] text-[#1c1c16]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(rgba(199,198,205,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(199,198,205,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(199,198,205,0.15)_1px,transparent_1px)] bg-[size:20px_20px,40px_40px,40px_40px]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(139,69,19,0.03)_0%,transparent_40%),radial-gradient(circle_at_85%_75%,rgba(139,69,19,0.04)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.01)_0%,transparent_100%)]" />

      <nav className="sticky top-0 z-50 mx-2 mt-2 max-w-[calc(100%-16px)] rotate-[-1deg] border-b border-dashed border-black/10 bg-[rgba(245,240,220,0.85)] px-6 py-4 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link className="-rotate-2 text-2xl text-[#ae2f34]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#home">
            Joebeck.dev
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <a className="rotate-1 border-b-2 border-[#003936] pb-1 text-lg text-[#003936]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#home">Home</a>
            <a className="-rotate-1 px-2 py-1 text-lg text-[#46464c] hover:text-[#181c2c]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#about">About</a>
            <a className="rotate-2 px-2 py-1 text-lg text-[#46464c] hover:text-[#181c2c]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#projects">Projects</a>
            <a className="px-2 py-1 text-lg text-[#46464c] hover:text-[#181c2c]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#resume">Resume</a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              component={Link}
              href="/"
              variant="outlined"
              className="-rotate-1 !border-2 !px-3 !py-2 !text-sm md:!text-base"
              style={{ fontFamily: "var(--font-marker), cursive" }}
              sx={{
                borderColor: "#181c2c",
                color: "#181c2c",
                boxShadow: "3px 3px 0 0 #181c2c",
                borderRadius: "2px",
              }}
            >
              Back
            </Button>
            <Button
              component={Link}
              href="/editor"
              variant="contained"
              className="rotate-1 !px-3 !py-2 !text-sm md:!text-base"
              style={{ fontFamily: "var(--font-marker), cursive" }}
              sx={{
                backgroundColor: "#181c2c",
                color: "#ffffff",
                boxShadow: "3px 3px 0 0 #ae2f34",
                borderRadius: "2px",
                '&:hover': { backgroundColor: "#2d3142" },
              }}
            >
              Editor
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative mx-auto max-w-7xl space-y-24 px-6 py-12 md:py-24">
        <div className="pointer-events-none absolute left-10 top-20 z-0 text-4xl text-[#77767d]/30" style={{ fontFamily: "var(--font-doodle), cursive" }}>★</div>
        <div className="pointer-events-none absolute right-20 top-40 z-0 rotate-12 text-5xl text-[#ae2f34]/20" style={{ fontFamily: "var(--font-doodle), cursive" }}>⚡</div>
        <div className="pointer-events-none absolute left-1/4 top-80 z-0 rotate-45 text-6xl text-[#003936]/20" style={{ fontFamily: "var(--font-doodle), cursive" }}>+</div>

        <section className="relative z-10 mt-12 flex flex-col items-center gap-12 md:flex-row" id="home">
          <div className="flex-1 space-y-6">
            <div className="inline-flex max-w-[220px] rotate-[-3deg] items-center gap-2 rounded-sm bg-[#fffdc2] px-4 py-3 text-2xl text-[#46464c] shadow-[2px_4px_6px_rgba(0,0,0,0.1)]" style={{ fontFamily: "var(--font-scribble), cursive" }}>
              Hi There! <WavingHandRoundedIcon fontSize="small" />
            </div>

            <h1 className="text-[clamp(2.2rem,8vw,3.8rem)] font-extrabold leading-tight text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              I&apos;M <span className="relative inline-block text-[#003936]">JOEBECK ANDREW F. GUSI
                <svg className="absolute -bottom-4 -left-2 h-8 w-[110%] text-[#5dd9d0]/70" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden>
                  <path d="M0 10 Q 25 20 50 10 T 100 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            <p className="relative text-[clamp(1.5rem,4vw,2rem)] text-[#ff6b6b]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              Full-Stack Developer &amp; Creative Technologist
              <span className="absolute -right-2 -top-6 hidden rotate-12 text-xl text-[#77767d] md:block" style={{ fontFamily: "var(--font-scribble), cursive" }}>
                &quot;Maker of things&quot;
              </span>
            </p>

            <Button
              component="a"
              href="#projects"
              variant="contained"
              className="group !mt-4 !px-6 !py-3"
              style={{ fontFamily: "var(--font-mono), monospace" }}
              sx={{
                backgroundColor: "#ffffff",
                color: "#181c2c",
                borderRadius: "2px",
                border: "2px solid #181c2c",
                boxShadow: "6px 6px 0 0 #181c2c",
                '&:hover': { backgroundColor: "#f7f3e9" },
              }}
              endIcon={<KeyboardArrowRightRoundedIcon />}
            >
              View Projects
            </Button>
          </div>

          <div className="relative mt-12 flex flex-1 justify-center md:mt-0 md:rotate-1">
            <div className="absolute -left-16 top-1/2 hidden -translate-y-1/2 rotate-12 text-3xl text-[#ae2f34] md:block" style={{ fontFamily: "var(--font-scribble), cursive" }}>
              That&apos;s me!
            </div>
            <div className="absolute -top-3 left-1/2 z-20 h-7 w-24 -translate-x-1/2 rotate-[-2deg] border border-white/50 bg-[repeating-linear-gradient(45deg,rgba(241,238,228,0.7),rgba(241,238,228,0.7)_5px,rgba(0,57,54,0.4)_5px,rgba(0,57,54,0.4)_10px)] shadow-sm" />

            <Paper className="relative z-10 max-w-sm border border-[#c7c6cd] bg-white p-4 pb-12 shadow-[4px_6px_15px_rgba(0,0,0,0.15)]" elevation={0}>
              <div className="absolute -right-4 -top-4 z-30 rotate-[-15deg] rounded-md border-[3px] border-[#1baca3] bg-white/70 px-2 py-1 text-xs font-bold text-[#1baca3]">VERIFIED AWESOME</div>
              <Image alt="Portrait of Joebeck Andrew F. Gusi" src={avatarImage} className="aspect-square w-full object-cover saturate-105" priority />
              <p className="mt-6 text-center text-3xl text-[#46464c] -rotate-2" style={{ fontFamily: "var(--font-scribble), cursive" }}>Me in my element.</p>
            </Paper>

          </div>
        </section>

        <section className="relative z-10" id="about">
          <div className="relative mb-12 text-center">
            <h2 className="relative inline-block text-[clamp(2rem,5vw,3rem)] font-extrabold text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              LET ME <span className="text-[#003936]">INTRODUCE</span> MYSELF
              <svg className="absolute -bottom-2 left-0 h-4 w-full text-[#5dd9d0]/60" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden>
                <path d="M0 5 Q 25 0 50 8 T 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </h2>
            <div className="absolute right-1/4 top-0 rotate-12 text-2xl text-[#ae2f34]" style={{ fontFamily: "var(--font-scribble), cursive" }}>Who am I?</div>
          </div>

          <div className="relative mx-auto max-w-4xl rotate-[-1deg] border border-[#c7c6cd] bg-[#fcfaf2] p-8 shadow-[3px_4px_5px_rgba(24,28,44,0.15)] md:p-12">
            <div className="absolute -left-0 top-[-25px] h-[60px] w-5 rounded-[10px] border-[3px] border-[#888]" />
            <div className="absolute right-10 top-[-10px] h-7 w-24 rotate-12 border border-black/10 bg-[rgba(27,172,163,0.45)]" />

            <div className="space-y-6 text-lg leading-relaxed text-[#1c1c16]">
              <p>I&apos;m a Frontend Developer and Computer Engineering student who loves creating engaging user experiences and bringing ideas to life through code. I&apos;m passionate about learning new technologies and continuously improving my skills.</p>
              <p>
                I&apos;m proficient in <span className="inline-block rotate-1 rounded-sm border border-[#003936]/30 bg-[#003936]/20 px-2 py-1 text-sm text-[#003936]" style={{ fontFamily: "var(--font-marker), cursive" }}>JavaScript</span>, <span className="inline-block -rotate-1 rounded-sm border border-[#003936]/30 bg-[#003936]/20 px-2 py-1 text-sm text-[#003936]" style={{ fontFamily: "var(--font-marker), cursive" }}>TypeScript</span>, <span className="inline-block rotate-2 rounded-sm border border-[#003936]/30 bg-[#003936]/20 px-2 py-1 text-sm text-[#003936]" style={{ fontFamily: "var(--font-marker), cursive" }}>Python</span>, and work with modern tools and frameworks.
              </p>
              <p>
                My key areas of interest include <span className="font-bold text-[#ae2f34] underline decoration-wavy decoration-[#ae2f34]/50">Web Development</span>, <span className="font-bold text-[#ae2f34] underline decoration-wavy decoration-[#ae2f34]/50">AI</span>, and <span className="font-bold text-[#ae2f34] underline decoration-wavy decoration-[#ae2f34]/50">Mobile Apps</span> - always eager to explore emerging technologies.
              </p>
              <p>
                I love building projects with <span className="inline-block rounded-sm border border-[#dee1f8] bg-[#dee1f8]/50 px-2 py-1 text-sm text-[#2d3142]" style={{ fontFamily: "var(--font-marker), cursive" }}>Node.js</span>, <span className="inline-block -rotate-2 rounded-sm border border-[#dee1f8] bg-[#dee1f8]/50 px-2 py-1 text-sm text-[#2d3142]" style={{ fontFamily: "var(--font-marker), cursive" }}>React.js</span>, and styling with <span className="inline-block rotate-1 rounded-sm border border-[#dee1f8] bg-[#dee1f8]/50 px-2 py-1 text-sm text-[#2d3142]" style={{ fontFamily: "var(--font-marker), cursive" }}>Tailwind CSS</span>.
              </p>
            </div>

            <div className="mx-auto mt-8 w-3/4 rotate-2 bg-[#fffdc2] p-4 shadow-md">
              <p className="text-center text-2xl text-[#ff6b6b]" style={{ fontFamily: "var(--font-scribble), cursive" }}>
                &quot;When will you know you&apos;re ready, you won&apos;t. It&apos;s a leap of faith.&quot;
                <br />
                <span className="text-lg text-[#77767d]">- Miles Morales</span>
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 space-y-12" id="skills">
          <div className="relative text-center">
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              Professional <span className="text-[#003936]">Skillset</span>
            </h2>
            <div className="absolute -top-4 left-1/3 -rotate-12 text-xl text-[#77767d]" style={{ fontFamily: "var(--font-scribble), cursive" }}>My toolkit</div>
          </div>

          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6 rounded-xl border border-dashed border-[#c7c6cd] bg-[#f1eee4]/40 p-8">
            {skillItems.map((skill, index) => {
              const rotate = index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-3";
              if (skill.type === "pin") {
                return (
                  <div key={skill.label} className={`relative z-20 flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full border border-[#c7c6cd] bg-gradient-to-br from-white to-[#e6e2d8] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),2px_3px_5px_rgba(0,0,0,0.15)] ${rotate}`}>
                    {skill.icon ? (
                      <Image alt="" src={skill.icon} width={26} height={26} className="h-7 w-7 object-contain" />
                    ) : (
                      <span className="text-lg text-[#c24a4a]" style={{ fontFamily: "var(--font-marker), cursive" }}>H5</span>
                    )}
                    <span className="mt-1 text-[10px] font-bold text-[#1c1c16]" style={{ fontFamily: "var(--font-mono), monospace" }}>{skill.label}</span>
                  </div>
                );
              }

              return (
                <div key={skill.label} className={`relative z-10 flex items-center gap-2 rounded-md border-2 border-dashed border-[#77767d] bg-[#f7f3e9] px-6 py-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.05),1px_2px_4px_rgba(0,0,0,0.1)] ${rotate}`}>
                  {skill.icon ? <Image alt="" src={skill.icon} width={20} height={20} className="h-5 w-5 object-contain" /> : null}
                  <span className="font-bold text-[#1c1c16]" style={{ fontFamily: "var(--font-mono), monospace" }}>{skill.label}</span>
                </div>
              );
            })}
          </div>

          <div className="relative mt-16 text-center">
            <h3 className="relative mb-8 inline-block text-3xl text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              Tools I use
              <svg className="absolute -bottom-2 -left-2 h-3 w-[120%] text-[#181c2c]/30" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden>
                <path d="M0 5 Q 50 10 100 0" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </h3>

            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-8">
              {toolItems.map((tool, idx) => (
                <div key={tool.label} className={`relative z-10 flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full border border-[#c7c6cd] bg-gradient-to-br from-white to-[#e6e2d8] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),2px_3px_5px_rgba(0,0,0,0.15)] ${idx === 0 ? "-rotate-1" : idx === 1 ? "rotate-3 scale-110" : idx === 2 ? "rotate-1" : "-rotate-2"}`}>
                  {tool.icon ? <Image alt="" src={tool.icon} width={22} height={22} className="h-6 w-6 object-contain" /> : tool.iconNode}
                  <span className="mt-1 text-[10px] font-bold text-[#1c1c16]" style={{ fontFamily: "var(--font-mono), monospace" }}>{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto mt-24 max-w-5xl" id="projects">
          <div className="relative rounded-xl border border-[#8b4513] bg-[#d2b48c] p-2 shadow-xl">
            <div className="relative overflow-hidden rounded-lg border border-[#bda27c] bg-[#f4e4c1] p-8 md:p-12">
              <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-2">
                <div className="flex h-12 w-40 items-end justify-center rounded-t-lg border-b-2 border-[#333] bg-gradient-to-b from-[#888] to-[#555] pb-2 shadow-[0_5px_10px_rgba(0,0,0,0.3)]">
                  <div className="mb-1 h-2 w-16 rounded-full bg-[#333]" />
                </div>
                <div className="-mt-1 mx-auto h-3 w-48 rounded-full bg-[#444] shadow-md" />
              </div>

              <div className="relative z-10 mb-16 pt-12 text-center">
                <h2 className="inline-block rotate-[-2deg] border-2 border-[#181c2c] bg-white px-4 py-2 text-[clamp(2rem,4vw,3rem)] text-[#181c2c] shadow-[6px_6px_0px_0px_#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                  My <span className="text-[#003936]">Recent</span> Works
                </h2>
                <p className="mt-6 rotate-1 text-2xl text-[#46464c]" style={{ fontFamily: "var(--font-scribble), cursive" }}>Stuff I built recently...</p>
              </div>

              <div className="relative z-10 grid gap-8 md:grid-cols-3">
                {projects.map((project, index) => (
                  <article key={project.title} className={`relative bg-white p-3 pb-9 shadow-[2px_4px_12px_rgba(0,0,0,0.1),0_0_20px_rgba(0,0,0,0.02)_inset] ${project.rotate} border border-[#e6e2d8] transition-transform duration-300 hover:scale-105`}>
                    {project.stamp ? (
                      <div className="absolute -top-2 right-2 z-30 rotate-[20deg] rounded-lg border-4 border-[#ba1a1a] bg-white/60 px-3 py-1 text-xs tracking-[2px] text-[#ba1a1a] opacity-70">{project.stamp}</div>
                    ) : null}

                    <div className={`absolute -top-3 left-1/2 z-20 h-7 w-24 -translate-x-1/2 ${project.tape === "teal" ? "rotate-3 bg-[rgba(27,172,163,0.45)]" : project.tape === "dots" ? "bg-[rgba(241,238,228,0.8)] [background-image:radial-gradient(#ae2f34_2px,transparent_2px)] [background-size:10px_10px]" : "rotate-[-2deg] bg-[repeating-linear-gradient(45deg,rgba(241,238,228,0.7),rgba(241,238,228,0.7)_5px,rgba(0,57,54,0.4)_5px,rgba(0,57,54,0.4)_10px)]"}`} />

                    <div className="mb-4 aspect-[4/3] overflow-hidden border border-[#c7c6cd] bg-white p-1">
                      <img alt={project.title} className="h-full w-full object-cover" src={project.image} />
                    </div>
                    <h3 className={`mb-2 text-center text-xl text-[#181c2c] ${index % 2 ? "rotate-1" : "-rotate-2"}`} style={{ fontFamily: "var(--font-marker), cursive" }}>{project.title}</h3>
                    <p className="text-center text-lg text-[#46464c]" style={{ fontFamily: "var(--font-scribble), cursive" }}>{project.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto mt-24 max-w-4xl space-y-8" id="resume">
          <div className="relative mb-12 text-center">
            <h2 className="inline-block rotate-1 border-2 border-[#181c2c] bg-white px-4 py-2 text-[clamp(2rem,5vw,3rem)] text-[#181c2c] shadow-[6px_6px_0px_0px_#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              Professional <span className="text-[#003936]">Experience</span>
            </h2>
          </div>

          <div className="relative mx-4 rotate-[-1deg] border border-[#c7c6cd] bg-[#fcfcf8] p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.1)] md:p-12" style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)", backgroundPosition: "0 2rem" }}>
            <div className="absolute bottom-0 left-12 top-0 w-0.5 bg-[#ae2f34]/40 md:left-16" />
            <div className="absolute bottom-0 left-[52px] top-0 w-0.5 bg-[#ae2f34]/40 md:left-[68px]" />

            <div className="relative z-10 mt-8 space-y-12 pl-8 md:pl-16">
              <div>
                <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <h3 className="inline-block -rotate-1 bg-[#181c2c]/10 px-2 text-2xl text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>Front-End Developer</h3>
                  <span className="mt-2 inline-block rotate-2 border border-[#77767d] bg-white px-2 py-1 text-sm text-[#ae2f34] md:mt-0" style={{ fontFamily: "var(--font-marker), cursive" }}>July 2025 - Present</span>
                </div>
                <p className="mb-4 text-2xl text-[#46464c]" style={{ fontFamily: "var(--font-scribble), cursive" }}>@ 8box Solutions Inc.</p>
                <ul className="space-y-3 text-base leading-relaxed text-[#1c1c16]">
                  <li className="flex gap-2"><span className="text-[#ae2f34]">&gt;</span><span>Develop and maintain responsive web applications using React and modern JavaScript frameworks.</span></li>
                  <li className="flex gap-2"><span className="text-[#ae2f34]">&gt;</span><span>Collaborate with cross-functional teams to translate UI/UX designs into clean, reusable code components.</span></li>
                  <li className="flex gap-2"><span className="text-[#ae2f34]">&gt;</span><span>Optimize website performance and implement accessibility features, achieving 90+ Lighthouse scores.</span></li>
                </ul>
              </div>

              <div>
                <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <h3 className="inline-block rotate-1 bg-[#181c2c]/10 px-2 text-2xl text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>Freelance Developer</h3>
                  <span className="mt-2 inline-block -rotate-2 border border-[#77767d] bg-white px-2 py-1 text-sm text-[#ae2f34] md:mt-0" style={{ fontFamily: "var(--font-marker), cursive" }}>2021 - 2023</span>
                </div>
                <p className="mb-4 text-2xl text-[#46464c]" style={{ fontFamily: "var(--font-scribble), cursive" }}>Self-Employed</p>
                <ul className="space-y-3 text-base leading-relaxed text-[#1c1c16]">
                  <li className="flex gap-2"><span className="text-[#ae2f34]">&gt;</span><span>Designed and developed custom responsive websites for 10+ clients across diverse industries.</span></li>
                  <li className="flex gap-2"><span className="text-[#ae2f34]">&gt;</span><span>Implemented modern front-end technologies (HTML5, CSS3, JavaScript) and frameworks.</span></li>
                </ul>
              </div>

              <div className="pt-8">
                <h3 className="mb-6 mt-4 text-2xl text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>Education</h3>
                <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
                  <h4 className="text-xl text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>BS Computer Engineering</h4>
                  <span className="mt-2 text-sm text-[#003936] md:mt-0" style={{ fontFamily: "var(--font-marker), cursive" }}>Oct 2022 - Present</span>
                </div>
                <p className="inline-block bg-yellow-100 px-1 text-base">Polytechnic University of the Philippines</p>
                <p className="mt-2 text-xl text-[#46464c]" style={{ fontFamily: "var(--font-scribble), cursive" }}>Major in System Development.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              component="a"
              href={resumeHref}
              download
              variant="outlined"
              startIcon={<DownloadRoundedIcon />}
              className="-rotate-2 !border-4 !px-8 !py-3 !text-xl"
              style={{ fontFamily: "var(--font-marker), cursive" }}
              sx={{
                borderColor: "#181c2c",
                color: "#181c2c",
                boxShadow: "6px 6px 0 0 #ae2f34",
                borderRadius: "2px",
                '&:hover': { backgroundColor: "#181c2c", color: "#fff" },
              }}
            >
              Grab my CV!
            </Button>
          </div>
        </section>
      </div>

      <footer className="relative mt-24 overflow-hidden border-t-8 border-dashed border-[#c7c6cd] bg-[#ece8de] px-6 py-16">
        <div className="pointer-events-none absolute bottom-5 left-10 rotate-45 text-6xl text-[#77767d]/20" style={{ fontFamily: "var(--font-doodle), cursive" }}>✂️</div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="relative text-center md:text-left">
            <p className="rotate-1 text-3xl text-[#181c2c]" style={{ fontFamily: "var(--font-marker), cursive" }}>Find Me On</p>
            <p className="-rotate-1 text-2xl text-[#46464c]" style={{ fontFamily: "var(--font-scribble), cursive" }}>Let&apos;s build something cool together.</p>
          </div>
          <div className="mt-8 flex gap-6 md:mt-0">
            <a className="flex h-16 w-16 rotate-6 items-center justify-center border-4 border-[#181c2c] bg-white shadow-[6px_6px_0px_0px_#181c2c] transition-all hover:-translate-y-1 hover:rotate-12" href="#" aria-label="Code profile">
              <CodeRoundedIcon sx={{ fontSize: 34, color: "#181c2c" }} />
            </a>
            <a className="flex h-16 w-16 -rotate-6 items-center justify-center border-4 border-[#181c2c] bg-white shadow-[6px_6px_0px_0px_#181c2c] transition-all hover:-translate-y-1 hover:-rotate-12" href="#" aria-label="Work profile">
              <WorkOutlineRoundedIcon sx={{ fontSize: 34, color: "#181c2c" }} />
            </a>
            <a className="flex h-16 w-16 rotate-3 items-center justify-center border-4 border-[#181c2c] bg-white shadow-[6px_6px_0px_0px_#181c2c] transition-all hover:-translate-y-1 hover:rotate-0" href="#" aria-label="Mail link">
              <MailOutlineRoundedIcon sx={{ fontSize: 34, color: "#181c2c" }} />
            </a>
          </div>
        </div>
        <div className="relative z-10 mt-16 pt-8 text-center">
          <p className="rotate-1 text-sm text-[#46464c]" style={{ fontFamily: "var(--font-marker), cursive" }}>© 2026 Joebeck Andrew F. Gusi</p>
        </div>
      </footer>
    </main>
  );
}
