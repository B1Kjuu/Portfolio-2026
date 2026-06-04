"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Paper } from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { useEffect, useState } from "react";
import avatarImage from "./assets/avatar.png";
import firebaseIcon from "./techicons/Firebase.svg";
import gitIcon from "./techicons/Git.svg";
import javascriptIcon from "./techicons/Javascript.svg";
import javaIcon from "./techicons/Java.svg";
import muiIcon from "./techicons/MUI.svg";
import nextIcon from "./techicons/Next.svg";
import postmanIcon from "./techicons/Postman.svg";
import nodeIcon from "./techicons/Node.svg";
import pythonIcon from "./techicons/Python.svg";
import reactIcon from "./techicons/React.svg";
import CSharpIcon from "./techicons/Csharp.svg";
import redisIcon from "./techicons/Redis.svg";
import reduxIcon from "./techicons/Redux.svg";
import sqlIcon from "./techicons/SQL.svg";
import tailwindIcon from "./techicons/Tailwind.svg";
import arduinoIcon from "./techicons/arduino.svg";
import typescriptIcon from "./techicons/Typescript.svg";
import vscodeIcon from "./techicons/vscode.svg";
import AzureIcon from "./techicons/Microsoft Azure.svg";
import GoogleIcon from "./techicons/Google Chrome.svg";
import DaVinciIcon from "./techicons/DaVinci Resolve.svg";
import AffinityIcon from "./techicons/Affinity.svg";
import CanvaIcon from "./techicons/Canva.svg";
import PhotoshopIcon from "./techicons/Photoshop.svg";
import { FaVideo, FaPalette, FaPaintBrush, FaPhotoVideo } from 'react-icons/fa';
import { SiLinux, SiGooglechrome } from 'react-icons/si';
import { techProjects, type TechProject } from "@/lib/content";

function getExternalIcon(label: string) {
  switch (label.toLowerCase()) {
    case "html5":
      return "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg";
    case "css3":
      return "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg";
    case "c++":
      return "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg";
    case "c#":
      return "null";
    case "mysql":
      return "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg";
    case "arduino":
      return "https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Logo.svg";
    case "linux":
      return "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png";
    case "google chrome":
    case "chrome":
      return "https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png";
    case "davinci resolve":
      return "https://upload.wikimedia.org/wikipedia/commons/1/11/DaVinci_Resolve_17_icon.png";
    case "photoshop":
      return "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg";
    case "canva":
      return "https://upload.wikimedia.org/wikipedia/commons/9/9a/Canva_Logo.svg";
    case "affinity":
      return "https://upload.wikimedia.org/wikipedia/commons/c/cf/Affinity_%28App%29_Logo.svg ";
    default:
      return null;
  }
}

function getReactIcon(label: string) {
  switch (label.toLowerCase()) {
    case 'linux':
      return SiLinux;
    case 'google chrome':
    case 'chrome':
      return SiGooglechrome;
    case 'davinci resolve':
    case 'da vinci resolve':
    case 'davinci':
      return FaVideo;
    case 'photoshop':
      return FaPhotoVideo;
    case 'canva':
      return FaPalette;
    case 'affinity':
      return FaPaintBrush;
    default:
      return null;
  }
}

const resumeHref = "/CV_GUSI.pdf";

const projects: TechProject[] = techProjects;

const skillItems = [
  { label: "JavaScript", icon: javascriptIcon, type: "patch" },
  { label: "TypeScript", icon: typescriptIcon, type: "patch" },
  { label: "Python", icon: pythonIcon, type: "patch" },
  { label: "HTML5", icon: null, type: "pin", fallbackText: "HTML5" },
  { label: "CSS3", icon: null, type: "pin", fallbackText: "CSS3" },
  { label: "C++", icon: null, type: "pin", fallbackText: "C++" },
  { label: "C#", icon: CSharpIcon, type: "pin", fallbackText: "C#" },
  { label: "Node.js", icon: nodeIcon, type: "patch" },
  { label: "Tailwind", icon: tailwindIcon, type: "patch" },
  { label: "React", icon: reactIcon, type: "pin" },
  { label: "Git", icon: gitIcon, type: "patch" },
  { label: "Next.js", icon: nextIcon, type: "patch" },
  { label: "Material UI", icon: muiIcon, type: "patch" },
  { label: "SQL", icon: sqlIcon, type: "patch" },
  { label: "Redis", icon: redisIcon, type: "patch" },
  { label: "Redux", icon: reduxIcon, type: "patch" },
  { label: "Java", icon: javaIcon, type: "patch" },
  { label: "Firebase", icon: firebaseIcon, type: "patch" },
  { label: "Postman", icon: postmanIcon, type: "patch" },
  { label: "MySQL", icon: null, type: "pin", fallbackText: "MySQL" },
  { label: "Arduino", icon: arduinoIcon, type: "pin", fallbackText: "Arduino" },
];

const toolItems = [
  { label: "Google Chrome", icon: GoogleIcon, iconNode: <span className="text-[10px] font-bold tracking-widest text-[#181c2c]">CHROME</span> },
  { label: "VS Code", icon: vscodeIcon, iconNode: null },
  { label: "DaVinci Resolve", icon: DaVinciIcon, iconNode: <span className="text-[10px] font-bold tracking-widest text-[#181c2c]">DR</span> },
  { label: "Photoshop", icon: PhotoshopIcon, iconNode: <span className="text-[10px] font-bold tracking-widest text-[#181c2c]">PS</span> },
  { label: "Canva", icon: CanvaIcon, iconNode: <span className="text-[10px] font-bold tracking-widest text-[#181c2c]">CANVA</span> },
  { label: "Affinity", icon: AffinityIcon, iconNode: <span className="text-[10px] font-bold tracking-widest text-[#181c2c]">AFF</span> },
  { label: "Microsoft Azure", icon: AzureIcon, iconNode: null },
];

export default function TechPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [introState, setIntroState] = useState<"entering" | "exiting" | "hidden">("entering");
  const [exitState, setExitState] = useState<"idle" | "leaving">("idle");
  const [exitTarget, setExitTarget] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 420);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setIntroState("exiting"), 1100);
    const hideTimer = window.setTimeout(() => setIntroState("hidden"), 1650);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const beginTechExit = (target: string) => {
    if (exitState === "leaving") return;
    setExitTarget(target);
    setExitState("leaving");

    window.setTimeout(() => {
      router.push(target);
    }, 920);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#fdf9ef] text-[#1c1c16]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(rgba(199,198,205,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(199,198,205,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(199,198,205,0.15)_1px,transparent_1px)] bg-size-[20px_20px,40px_40px,40px_40px]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(139,69,19,0.03)_0%,transparent_40%),radial-gradient(circle_at_85%_75%,rgba(139,69,19,0.04)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.01)_0%,transparent_100%)]" />

      {introState !== "hidden" ? (
        <div
          className={`fixed inset-0 z-80 flex items-center justify-center bg-[#fdf9ef] px-6 ${introState === "entering" ? "tech-intro-enter" : "tech-intro-exit pointer-events-none"}`}
          aria-hidden={introState !== "entering" && introState !== "exiting"}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75)_0%,rgba(253,249,239,0.94)_38%,rgba(245,240,226,1)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(93,217,208,0.12)_0%,transparent_28%,transparent_72%,rgba(174,47,52,0.08)_100%)]" />
          <div className="relative w-full max-w-md -rotate-1 overflow-hidden rounded-[28px] border border-[#181c2c]/12 bg-[rgba(255,250,242,0.92)] p-6 shadow-[0_24px_60px_rgba(20,22,27,0.18)] backdrop-blur-md md:rotate-1">
            <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#5dd9d0]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[#ae2f34]/12 blur-3xl" />
            <div className="tech-intro-note absolute -right-3 -top-4 rotate-[-10deg] rounded-sm bg-[#fffdc2] px-3 py-1 text-[12px] font-semibold text-[#46464c] shadow-[2px_3px_0_0_rgba(24,28,44,0.85)]" style={{ fontFamily: "var(--font-scribble), cursive" }}>
              Loading...
            </div>

            <div className="relative flex items-center gap-4">
              <div className="tech-intro-icon flex h-16 w-16 items-center justify-center rounded-[18px] border-2 border-[#181c2c] bg-white shadow-[4px_4px_0_0_rgba(24,28,44,1)]">
                <CodeRoundedIcon sx={{ fontSize: 32, color: "#181c2c" }} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold tracking-[0.28em] text-[#003936]">TECH PORTFOLIO</p>
                <h2 className="mt-1 text-[24px] leading-tight font-extrabold text-[#181c2c]">Loading creative systems</h2>
                <p className="mt-1 text-[12px] text-[#5f6471]">Preparing projects, tools, and case studies</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 text-[11px] font-semibold text-[#46464c]">
              <span className="rounded-full border border-[#181c2c]/15 bg-white px-2.5 py-1">HTML</span>
              <span className="rounded-full border border-[#181c2c]/15 bg-white px-2.5 py-1">React</span>
              <span className="rounded-full border border-[#181c2c]/15 bg-white px-2.5 py-1">Motion</span>
              <span className="rounded-full border border-[#181c2c]/15 bg-white px-2.5 py-1">UI</span>
            </div>

            <div className="tech-load-bar mt-6 h-2.5 rounded-full border border-[#181c2c]/12 bg-white/70">
              <div className="tech-load-bar__fill h-full w-full rounded-full bg-[#181c2c]">
                <div className="tech-load-bar__paint h-full w-full rounded-full bg-[linear-gradient(90deg,#181c2c_0%,#2d3142_28%,#181c2c_58%,#0f766e_88%,#181c2c_100%)]" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-[#77767d]">
              <span>Initializing layout</span>
              <span>Loading...</span>
            </div>
          </div>
        </div>
      ) : null}

      {exitState === "leaving" ? (
        <div className="tech-exit-overlay fixed inset-0 z-80 flex items-center justify-center bg-[#fdf9ef] px-6 pointer-events-none" aria-hidden="true">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72)_0%,rgba(253,249,239,0.94)_38%,rgba(245,240,226,1)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(93,217,208,0.1)_0%,transparent_32%,transparent_74%,rgba(174,47,52,0.1)_100%)]" />
          <div className="relative w-full max-w-md rotate-1 overflow-hidden rounded-[28px] border border-[#181c2c]/12 bg-[rgba(255,250,242,0.92)] p-6 shadow-[0_24px_60px_rgba(20,22,27,0.18)] backdrop-blur-md">
            <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#5dd9d0]/18 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[#ae2f34]/12 blur-3xl" />
            <div className="tech-intro-note absolute -right-3 -top-4 rotate-[-10deg] rounded-sm bg-[#fffdc2] px-3 py-1 text-[12px] font-semibold text-[#46464c] shadow-[2px_3px_0_0_rgba(24,28,44,0.85)]" style={{ fontFamily: "var(--font-scribble), cursive" }}>
              Closing...
            </div>

            <div className="relative flex items-center gap-4">
              <div className="tech-intro-icon flex h-16 w-16 items-center justify-center rounded-[18px] border-2 border-[#181c2c] bg-white shadow-[4px_4px_0_0_rgba(24,28,44,1)]">
                <CodeRoundedIcon sx={{ fontSize: 32, color: "#181c2c" }} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold tracking-[0.28em] text-[#003936]">TECH PORTFOLIO</p>
                <h2 className="mt-1 text-[24px] leading-tight font-extrabold text-[#181c2c]">Wrapping things up</h2>
                <p className="mt-1 text-[12px] text-[#5f6471]">{exitTarget === "/editor" ? "Opening the editor" : "Returning home"}</p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 text-[11px] font-semibold text-[#46464c]">
              <span className="rounded-full border border-[#181c2c]/15 bg-white px-2.5 py-1">Save</span>
              <span className="rounded-full border border-[#181c2c]/15 bg-white px-2.5 py-1">Pack</span>
              <span className="rounded-full border border-[#181c2c]/15 bg-white px-2.5 py-1">Exit</span>
            </div>

            <div className="tech-load-bar mt-6 h-2.5 rounded-full border border-[#181c2c]/12 bg-white/70">
              <div className="tech-load-bar__fill tech-exit-bar__fill h-full w-full rounded-full bg-[#181c2c]">
                <div className="tech-load-bar__paint h-full w-full rounded-full bg-[linear-gradient(90deg,#181c2c_0%,#2d3142_28%,#181c2c_58%,#ae2f34_88%,#181c2c_100%)]" />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-[#77767d]">
              <span>Saving state</span>
              <span>Leaving tech</span>
            </div>
          </div>
        </div>
      ) : null}

      <nav className="sticky top-0 z-50 mx-2 mt-2 max-w-[calc(100%-16px)] -rotate-1 border-b border-dashed border-black/10 bg-[rgba(245,240,220,0.85)] px-6 py-4 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link className="-rotate-2 text-2xl text-[#ae2f34]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#home">
            b1kjuu.studio
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <a className="rotate-1 border-b-2 border-[#003936] pb-1 text-lg text-[#003936]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#home">Home</a>
            <a className="-rotate-1 px-2 py-1 text-lg text-[#46464c] hover:text-[#181c2c]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#about">About</a>
            <a className="rotate-2 px-2 py-1 text-lg text-[#46464c] hover:text-[#181c2c]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#projects">Projects</a>
            <a className="px-2 py-1 text-lg text-[#46464c] hover:text-[#181c2c]" style={{ fontFamily: "var(--font-marker), cursive" }} href="#resume">Resume</a>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              component="button"
              type="button"
              onClick={() => beginTechExit("/")}
              variant="outlined"
              className="-rotate-1 border-2! px-3! py-2! text-sm! md:text-base!"
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
              component="button"
              type="button"
              onClick={() => beginTechExit("/editor")}
              variant="contained"
              className="rotate-1 px-3! py-2! text-sm! md:text-base!"
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
            <div className="inline-flex max-w-55 -rotate-3 items-center gap-2 rounded-sm bg-[#fffdc2] px-4 py-3 text-2xl text-[#46464c] shadow-[2px_4px_6px_rgba(0,0,0,0.1)]" style={{ fontFamily: "var(--font-scribble), cursive" }}>
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
              className="group mt-4! px-6! py-3!"
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
              <svg className="mt-2 h-14 w-28 -rotate-12 text-[#ae2f34]/80" viewBox="0 0 120 60" fill="none" aria-hidden>
                <path
                  d="M8 18 C 28 6, 46 6, 68 16 C 79 21, 88 30, 94 40"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M88 32 L98 40 L88 47"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="absolute -top-3 left-1/2 z-20 h-7 w-24 -translate-x-1/2 -rotate-2 border border-white/50 bg-[repeating-linear-gradient(45deg,rgba(241,238,228,0.7),rgba(241,238,228,0.7)_5px,rgba(0,57,54,0.4)_5px,rgba(0,57,54,0.4)_10px)] shadow-sm" />

            <Paper className="relative z-10 max-w-88 border border-[#c7c6cd] bg-white p-5 pb-12 shadow-[4px_6px_15px_rgba(0,0,0,0.15)] md:max-w-md" elevation={0}>
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

            <div className="relative mx-auto max-w-4xl -rotate-1 border border-[#c7c6cd] bg-[#fcfaf2] p-8 shadow-[3px_4px_5px_rgba(24,28,44,0.15)] md:p-12">
            <div className="absolute left-0 -top-6.25 h-15 w-5 rounded-[10px] border-[3px] border-[#888]" />
            <div className="absolute right-10 -top-2.5 h-7 w-24 rotate-12 border border-black/10 bg-[rgba(27,172,163,0.45)]" />

            <div className="space-y-6 text-lg leading-relaxed text-[#1c1c16]">
              <p>I&apos;m a Frontend Developer and Computer Engineering student who loves creating engaging user experiences and bringing ideas to life through code. I&apos;m passionate about learning new technologies and continuously improving my skills.</p>
              <p>I&apos;m proficient in JavaScript, TypeScript, Python, HTML, CSS, and C++/C# &mdash; and I work with modern tools and frameworks.</p>
              <p>My key areas of interest include Web Development, AI, and Mobile Apps &mdash; always eager to explore emerging technologies.</p>
              <p>I love building projects with Node.js, React.js, and styling with Tailwind CSS and Material UI.</p>
              <p>I&apos;m also now offering Video Editing and Photo/Poster Editing services &mdash; bringing creative visuals to life!</p>
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
              return (
                <div key={skill.label} className={`relative z-10 flex items-center gap-2 rounded-md border-2 border-dashed border-[#77767d] bg-[#f7f3e9] px-6 py-3 shadow-[inset_0_0_5px_rgba(0,0,0,0.05),1px_2px_4px_rgba(0,0,0,0.1)] ${rotate}`}>
                  {skill.icon ? (
                    <Image alt="" src={skill.icon} width={20} height={20} className="h-5 w-5 object-contain" />
                  ) : (() => {
                    const ext = getExternalIcon(skill.label);
                    return ext ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={ext} alt={skill.label} className="h-5 w-5 object-contain" />
                    ) : (
                      <span className="px-1 text-center text-[10px] font-bold leading-tight text-[#c24a4a]" style={{ fontFamily: "var(--font-mono), monospace" }}>{skill.fallbackText ?? skill.label}</span>
                    );
                  })()}
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
                <div key={tool.label} className={`relative z-10 flex flex-col items-center justify-center rounded-md border border-[#c7c6cd] bg-linear-to-br from-white to-[#e6e2d8] px-4 py-3 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.8),2px_3px_5px_rgba(0,0,0,0.15)] ${idx === 0 ? "-rotate-1" : idx === 1 ? "rotate-3 scale-110" : idx === 2 ? "rotate-1" : "-rotate-2"}`}>
                  {tool.icon ? (
                    <Image alt="" src={tool.icon} width={22} height={22} className="h-6 w-6 object-contain" />
                  ) : tool.iconNode ? (
                    tool.iconNode
                  ) : (() => {
                    const Icon = getReactIcon(tool.label);
                    if (Icon) return <Icon className="h-6 w-6" />;
                    const ext = getExternalIcon(tool.label);
                    return ext ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={ext} alt={tool.label} className="h-6 w-6 object-contain" />
                    ) : (
                      <span className="text-[10px] font-bold text-[#1c1c16]" style={{ fontFamily: "var(--font-mono), monospace" }}>{tool.label}</span>
                    );
                  })()}
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
                <div className="flex h-12 w-40 items-end justify-center rounded-t-lg border-b-2 border-[#333] bg-linear-to-b from-[#888] to-[#555] pb-2 shadow-[0_5px_10px_rgba(0,0,0,0.3)]">
                  <div className="mb-1 h-2 w-16 rounded-full bg-[#333]" />
                </div>
                <div className="-mt-1 mx-auto h-3 w-48 rounded-full bg-[#444] shadow-md" />
              </div>

              <div className="relative z-10 mb-16 pt-12 text-center">
                <h2 className="inline-block -rotate-2 border-2 border-[#181c2c] bg-white px-4 py-2 text-[clamp(2rem,4vw,3rem)] text-[#181c2c] shadow-[6px_6px_0px_0px_#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                  My <span className="text-[#003936]">Recent</span> Works
                </h2>
                <p className="mt-6 rotate-1 text-2xl text-[#46464c]" style={{ fontFamily: "var(--font-scribble), cursive" }}>Stuff I built recently...</p>
              </div>

              <div className="relative z-10 grid gap-8 md:grid-cols-3">
                {projects.map((project, index) => {
                  const isGithub = Boolean(project.ghLink);
                  const projectLink = project.demoLink ?? project.ghLink ?? "#";

                  return (
                    <article
                      key={project.title}
                      className={`relative bg-white p-3 pb-7 shadow-[2px_4px_12px_rgba(0,0,0,0.1),0_0_20px_rgba(0,0,0,0.02)_inset] ${index % 3 === 0 ? "md:-rotate-3" : index % 3 === 1 ? "md:rotate-2" : "md:rotate-3"} border border-[#e6e2d8] transition-transform duration-300 hover:scale-[1.03]`}
                    >
                      <div className={`absolute -top-3 left-1/2 z-20 h-7 w-24 -translate-x-1/2 ${index % 3 === 1 ? "rotate-3 bg-[rgba(27,172,163,0.45)]" : index % 3 === 2 ? "bg-[rgba(241,238,228,0.8)] bg-[radial-gradient(#ae2f34_2px,transparent_2px)] bg-size-[10px_10px]" : "-rotate-2 bg-[repeating-linear-gradient(45deg,rgba(241,238,228,0.7),rgba(241,238,228,0.7)_5px,rgba(0,57,54,0.4)_5px,rgba(0,57,54,0.4)_10px)]"}`} />

                      <div className="mb-4 aspect-4/3 overflow-hidden border border-[#c7c6cd] bg-white p-1">
                        <img className="h-full w-full object-cover" src={
                              typeof project.image === "string"
                              ? project.image
                              : project.image.src
                          }
                          alt={project.title} />  
                      </div>

                      <h3 className={`mb-2 text-center text-xl text-[#181c2c] ${index % 2 ? "rotate-1" : "-rotate-2"}`} style={{ fontFamily: "var(--font-marker), cursive" }}>
                        {project.title}
                      </h3>

                      <p className="text-center text-lg text-[#46464c]" style={{ fontFamily: "var(--font-scribble), cursive" }}>
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap justify-center gap-2">
                        <Button
                          component="a"
                          href={projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          className="px-4! py-2! text-xs!"
                          sx={{
                            backgroundColor: "#181c2c",
                            color: "#fff",
                            borderRadius: "2px",
                            boxShadow: "3px 3px 0 0 #ae2f34",
                            '&:hover': { backgroundColor: "#2d3142" },
                          }}
                        >
                          {isGithub ? "View Code" : "Live Demo"}
                        </Button>
                        {project.demoLink && project.ghLink ? (
                          <Button
                            component="a"
                            href={project.ghLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            className="px-4! py-2! text-xs!"
                            sx={{
                              borderColor: "#181c2c",
                              color: "#181c2c",
                              borderRadius: "2px",
                              boxShadow: "3px 3px 0 0 #181c2c",
                              '&:hover': { backgroundColor: "#f7f3e9" },
                            }}
                          >
                            View Code
                          </Button>
                        ) : null}
                      </div>
                    </article>
                  );
                })}
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

          <div className="relative mx-4 -rotate-1 border border-[#c7c6cd] bg-[#fcfcf8] p-8 shadow-[5px_5px_15px_rgba(0,0,0,0.1)] md:p-12" style={{ backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)", backgroundPosition: "0 2rem" }}>
            <div className="absolute bottom-0 left-12 top-0 w-0.5 bg-[#ae2f34]/40 md:left-16" />
            <div className="absolute bottom-0 left-13 top-0 w-0.5 bg-[#ae2f34]/40 md:left-17" />

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
              className="-rotate-2 border-4! px-8! py-3! text-xl!"
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
            <a className="flex h-16 w-16 rotate-6 items-center justify-center border-4 border-[#181c2c] bg-white shadow-[6px_6px_0px_0px_#181c2c] transition-all hover:-translate-y-1 hover:-rotate-2" href="https://www.linkedin.com/in/gusi-joebeck-andrew" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <CodeRoundedIcon sx={{ fontSize: 34, color: "#181c2c" }} />
            </a>
            <a className="flex h-16 w-16 -rotate-6 items-center justify-center border-4 border-[#181c2c] bg-white shadow-[6px_6px_0px_0px_#181c2c] transition-all hover:-translate-y-1 hover:-rotate-12" href="https://www.facebook.com/b1kjuu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <WorkOutlineRoundedIcon sx={{ fontSize: 34, color: "#181c2c" }} />
            </a>
            <a className="flex h-16 w-16 rotate-3 items-center justify-center border-4 border-[#181c2c] bg-white shadow-[6px_6px_0px_0px_#181c2c] transition-all hover:-translate-y-1 hover:rotate-0" href="mailto:joebeckgusi25@gmail.com" aria-label="Email">
              <MailOutlineRoundedIcon sx={{ fontSize: 34, color: "#181c2c" }} />
            </a>
          </div>
        </div>
        <div className="relative z-10 mt-16 pt-8 text-center">
          <p className="rotate-1 text-sm text-[#46464c]" style={{ fontFamily: "var(--font-marker), cursive" }}>© 2026 Joebeck Andrew F. Gusi</p>
        </div>
      </footer>

      {showScrollTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 rotate-[-4deg] border-2 border-[#181c2c] bg-white px-4 py-3 text-sm font-black text-[#181c2c] shadow-[5px_5px_0_0_#181c2c] transition-transform hover:-translate-y-1 hover:-rotate-2"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      ) : null}
    </main>
  );
}
