"use client";

import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { editorProjects } from "@/lib/content";
import { Button } from "react95/dist/Button/Button";
import { Frame } from "react95/dist/Frame/Frame";
import { Window } from "react95/dist/Window/Window";
import { WindowContent } from "react95/dist/Window/WindowContent";
import { WindowHeader } from "react95/dist/Window/WindowHeader";
import styleReset from "react95/dist/common/styleReset";
import original from "react95/dist/themes/original";
import { createGlobalStyle, ThemeProvider, StyleSheetManager } from "styled-components";
import chromeIcon from "../tech/techicons/Google Chrome.svg";
import gitIcon from "../tech/techicons/Git.svg";
import nextIcon from "../tech/techicons/Next.svg";
import nodeIcon from "../tech/techicons/Node.svg";
import reactIcon from "../tech/techicons/React.svg";
import tailwindIcon from "../tech/techicons/Tailwind.svg";
import typescriptIcon from "../tech/techicons/Typescript.svg";
import vscodeIcon from "../tech/techicons/vscode.svg";

type ProjectState = {
  title: string;
  description: string;
  note: string;
  videoUrl: string;
};

type DesktopWindow = {
  id: string;
  title: string;
  description: string;
  note: string;
  videoUrl: string;
  isOpen: boolean;
  isMaximized: boolean;
  zIndex: number;
  x?: number;
  y?: number;
  kind?: "project";
};

type MobileApp = {
  title: string;
  description: string;
  note: string;
  videoUrl: string;
  icon: StaticImageData;
};

const appIcons = [reactIcon, nextIcon, typescriptIcon, tailwindIcon, nodeIcon, gitIcon, chromeIcon, vscodeIcon];
const dockIcons = [chromeIcon, vscodeIcon, reactIcon, nextIcon];
const BIOS_MEMORY_MAX = 131072;
const BIOS_MEMORY_STEP = 4096;
const BIOS_MEMORY_INTERVAL_MS = 42;
const BIOS_LINES = [
  "American Megatrends BIOS v1.20A",
  "Copyright (C) 1985-1998, AMI",
  "CPU : Pentium II 450MHz",
  "Memory Test : {{MEMORY}}K",
  "Pri Master  : Portfolio IDE Disk",
  "Pri Slave   : None",
  "USB Device  : Keyboard Detected",
  "Initializing Plug and Play Cards ... Done",
  "Verifying DMI Pool Data ...",
  "Boot from C: \\WINDOWS\\COMMAND.COM",
];

const STARTUP_LINES = [
  "Starting Windows 95...",
  "Loading virtual device drivers",
  "Initializing portfolio shell",
  "Launching desktop",
];

const SHUTDOWN_LINES = [
  "Saving settings...",
  "Closing portfolio applications...",
  "Flushing write cache...",
  "Preparing to power off...",
];

const formatMobileTime = (date: Date) =>
  date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body, input, select, textarea, button {
    font-family: 'ms_sans_serif', Arial, sans-serif;
  }
`;

export default function EditorPage() {
  const shouldForwardProp = (prop: string) =>
    !["active", "primary", "square", "noPadding", "fixed", "position", "variant", "fullWidth", "shadow"].includes(prop);
  const [currentTime, setCurrentTime] = useState(() => formatMobileTime(new Date()));
  const [activeMobileProject, setActiveMobileProject] = useState<ProjectState | null>(null);
  const [mobileLaunchState, setMobileLaunchState] = useState<"starting" | "ready" | "exiting">("starting");
  const [mobileBootVisible, setMobileBootVisible] = useState(true);
  const [mobileExitVisible, setMobileExitVisible] = useState(false);
  const [sheetOffset, setSheetOffset] = useState(0);
  const [sheetDragging, setSheetDragging] = useState(false);
  const [winTopZ, setWinTopZ] = useState(10);
  const [windows, setWindows] = useState<Record<string, DesktopWindow>>({});
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [startMenuHover, setStartMenuHover] = useState<"programs" | null>(null);
  const [isShuttingDown, setIsShuttingDown] = useState(false);
  const [shutdownPhase, setShutdownPhase] = useState<"saving" | "poweroff">("saving");
  const [shutdownProgress, setShutdownProgress] = useState(0);
  const [isDesktopBooting, setIsDesktopBooting] = useState(false);
  const [bootPhase, setBootPhase] = useState<"bios" | "loading">("bios");
  const [biosLineCount, setBiosLineCount] = useState(0);
  const [biosMemoryK, setBiosMemoryK] = useState(0);
  const [showBiosCursor, setShowBiosCursor] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [isDesktopViewport, setIsDesktopViewport] = useState(false);
  const dragRef = useRef<{ id: string; startX: number; startY: number; startLeft: number; startTop: number } | null>(null);
  const startMenuRef = useRef<HTMLDivElement | null>(null);
  const startMenuHoverTimer = useRef<number | null>(null);
  const mobileBootTimerRef = useRef<number | null>(null);
  const mobileBootHideTimerRef = useRef<number | null>(null);
  const mobileExitTimerRef = useRef<number | null>(null);
  const sheetDragRef = useRef<{ startY: number; startOffset: number } | null>(null);
  const sheetOffsetRef = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateViewport = () => setIsDesktopViewport(media.matches);
    updateViewport();
    media.addEventListener("change", updateViewport);

    return () => {
      media.removeEventListener("change", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (isDesktopViewport) return;
    setMobileLaunchState("starting");
    setMobileBootVisible(true);
    setMobileExitVisible(false);
    if (mobileBootTimerRef.current !== null) {
      window.clearTimeout(mobileBootTimerRef.current);
    }
    if (mobileBootHideTimerRef.current !== null) {
      window.clearTimeout(mobileBootHideTimerRef.current);
    }
    mobileBootTimerRef.current = window.setTimeout(() => setMobileLaunchState("ready"), 1300);
    mobileBootHideTimerRef.current = window.setTimeout(() => setMobileBootVisible(false), 1950);
    return () => {
      if (mobileBootTimerRef.current !== null) {
        window.clearTimeout(mobileBootTimerRef.current);
      }
      if (mobileBootHideTimerRef.current !== null) {
        window.clearTimeout(mobileBootHideTimerRef.current);
      }
    };
  }, [isDesktopViewport]);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(formatMobileTime(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 60_000);

    const initialWins = editorProjects.reduce((acc, project, index) => {
      const id = `file-${index}`;
      acc[id] = {
        id,
        title: project.title,
        description: project.description,
        note: project.note,
        videoUrl: (project as any).videoUrl || "",
        isOpen: false,
        isMaximized: false,
        zIndex: 10,
        x: 100 + index * 24,
        y: 80 + index * 18,
        kind: "project",
      };
      return acc;
    }, {} as Record<string, DesktopWindow>);

    // Add portfolio windows
    initialWins["about"] = {
      id: "about",
      title: "About Me",
      description: "About the developer",
      note: "About content",
      videoUrl: "",
      isOpen: false,
      isMaximized: false,
      zIndex: 10,
      x: 140,
      y: 120,
    };
    initialWins["resume"] = {
      id: "resume",
      title: "Resume",
      description: "Curriculum Vitae",
      note: "Resume PDF available",
      videoUrl: "",
      isOpen: false,
      isMaximized: false,
      zIndex: 10,
      x: 160,
      y: 140,
    };
    initialWins["skills"] = {
      id: "skills",
      title: "Skills",
      description: "Technical skills and tools",
      note: "",
      videoUrl: "",
      isOpen: false,
      isMaximized: false,
      zIndex: 10,
      x: 180,
      y: 160,
    };
    initialWins["contact"] = {
      id: "contact",
      title: "Contact",
      description: "Get in touch",
      note: "contact info",
      videoUrl: "",
      isOpen: false,
      isMaximized: false,
      zIndex: 10,
      x: 200,
      y: 180,
    };

    setWindows(initialWins);

    const timers: number[] = [];
    let memoryTimer: number | null = null;
    let cursorTimer: number | null = null;
    if (window.matchMedia("(min-width: 768px)").matches) {
      setIsDesktopBooting(true);
      setBootPhase("bios");
      setBiosLineCount(0);
      setBiosMemoryK(0);
      setShowBiosCursor(true);
      setBootProgress(0);

      memoryTimer = window.setInterval(() => {
        setBiosMemoryK((previous) => {
          const next = Math.min(BIOS_MEMORY_MAX, previous + BIOS_MEMORY_STEP);
          if (next >= BIOS_MEMORY_MAX && memoryTimer !== null) {
            window.clearInterval(memoryTimer);
            memoryTimer = null;
          }
          return next;
        });
      }, BIOS_MEMORY_INTERVAL_MS);

      cursorTimer = window.setInterval(() => {
        setShowBiosCursor((value) => !value);
      }, 380);

      BIOS_LINES.forEach((_, index) => {
        timers.push(window.setTimeout(() => setBiosLineCount(index + 1), 110 + index * 145));
      });

      const biosDuration = 110 + BIOS_LINES.length * 145 + 220;
      timers.push(window.setTimeout(() => {
        setBootPhase("loading");
        setBootProgress(8);
      }, biosDuration));
      timers.push(window.setTimeout(() => setBootProgress(34), biosDuration + 240));
      timers.push(window.setTimeout(() => setBootProgress(61), biosDuration + 560));
      timers.push(window.setTimeout(() => setBootProgress(84), biosDuration + 900));
      timers.push(window.setTimeout(() => setBootProgress(100), biosDuration + 1240));
      timers.push(window.setTimeout(() => setIsDesktopBooting(false), biosDuration + 1420));
    } else {
      setIsDesktopBooting(false);
      setBootPhase("loading");
      setBiosLineCount(BIOS_LINES.length);
      setBiosMemoryK(BIOS_MEMORY_MAX);
      setShowBiosCursor(false);
      setBootProgress(100);
    }

    return () => {
      clearInterval(interval);
      timers.forEach((timerId) => window.clearTimeout(timerId));
      if (memoryTimer !== null) {
        window.clearInterval(memoryTimer);
      }
      if (cursorTimer !== null) {
        window.clearInterval(cursorTimer);
      }
    };
  }, []);

  useEffect(() => {
    sheetOffsetRef.current = sheetOffset;
  }, [sheetOffset]);

  useEffect(() => {
    if (!activeMobileProject) {
      setSheetOffset(0);
      setSheetDragging(false);
      sheetDragRef.current = null;
    }
  }, [activeMobileProject]);

  useEffect(() => {
    if (!sheetDragging) return;

    const handlePointerMove = (event: PointerEvent) => {
      const dragState = sheetDragRef.current;
      if (!dragState) return;
      const nextOffset = Math.max(0, Math.min(340, dragState.startOffset + (event.clientY - dragState.startY)));
      setSheetOffset(nextOffset);
    };

    const handlePointerUp = () => {
      const currentOffset = sheetOffsetRef.current;
      sheetDragRef.current = null;
      setSheetDragging(false);
      if (currentOffset > 120) {
        setActiveMobileProject(null);
        setSheetOffset(0);
        return;
      }
      setSheetOffset(0);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [sheetDragging]);

  const openWin = (id: string) => {
    const nextZ = winTopZ + 1;
    setWinTopZ(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        zIndex: nextZ,
        x: prev[id]?.x ?? Math.max(40, window.innerWidth / 2 - 430),
        y: prev[id]?.y ?? 28,
      },
    }));
  };

  const focusWin = (id: string) => {
    const nextZ = winTopZ + 1;
    setWinTopZ(nextZ);
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], zIndex: nextZ } }));
  };

  const closeWin = (id: string) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], isOpen: false } }));
  };

  const beginShutdown = () => {
    if (isShuttingDown) return;
    setIsStartMenuOpen(false);
    setStartMenuHover(null);
    setShutdownPhase("saving");
    setShutdownProgress(0);
    setIsShuttingDown(true);

    window.setTimeout(() => setShutdownProgress(14), 140);
    window.setTimeout(() => setShutdownProgress(36), 380);
    window.setTimeout(() => setShutdownProgress(57), 680);
    window.setTimeout(() => setShutdownProgress(76), 980);
    window.setTimeout(() => setShutdownProgress(92), 1260);
    window.setTimeout(() => setShutdownProgress(100), 1520);
    window.setTimeout(() => setShutdownPhase("poweroff"), 1700);
    window.setTimeout(() => router.replace("/#explore"), 2850);
  };

  const beginMobileExit = () => {
    if (mobileLaunchState === "exiting") return;
    setActiveMobileProject(null);
    setSheetOffset(0);
    setSheetDragging(false);
    setMobileLaunchState("exiting");
    setMobileBootVisible(false);
    setMobileExitVisible(true);
    if (mobileBootTimerRef.current !== null) {
      window.clearTimeout(mobileBootTimerRef.current);
      mobileBootTimerRef.current = null;
    }
    if (mobileBootHideTimerRef.current !== null) {
      window.clearTimeout(mobileBootHideTimerRef.current);
      mobileBootHideTimerRef.current = null;
    }
    if (mobileExitTimerRef.current !== null) {
      window.clearTimeout(mobileExitTimerRef.current);
    }
    mobileExitTimerRef.current = window.setTimeout(() => router.replace("/#explore"), 960);
  };

  const mobileApps: MobileApp[] = editorProjects.map((project, index) => ({
    title: project.title,
    description: project.description,
    note: project.note,
    videoUrl: (windows[`file-${index}`]?.videoUrl as string) || "",
    icon: appIcons[index % appIcons.length],
  }));

  const desktopIcons = [
    { label: "My Computer", icon: vscodeIcon, target: "file-0" },
    { label: "Network Neighborhood", icon: chromeIcon, target: "file-1" },
    { label: "Inbox", icon: nextIcon, target: "file-2" },
    { label: "Recycle Bin", icon: gitIcon, target: "file-0" },
    { label: "The Microsoft Network", icon: reactIcon, target: "file-1" },
    { label: "My Briefcase", icon: tailwindIcon, target: "file-2" },
  ];

  const startMenuItems = [
    { label: "Projects", hasSubmenu: true },
    { label: "About Me" },
    { label: "Resume" },
    { label: "Skills" },
    { label: "Contact" },
    { label: "Open Portfolio..." },
    { label: "Shut Down Portfolio..." },
  ];

  const programMenuItems = [
    { label: "Featured Reel" },
    { label: "Portrait Series" },
    { label: "Promo Story Pack" },
    { label: "Project Archive" },
    { label: "Resume PDF" },
    { label: "Portfolio Explorer" },
  ];

  const openProgramMenu = () => {
    if (startMenuHoverTimer.current !== null) {
      window.clearTimeout(startMenuHoverTimer.current);
      startMenuHoverTimer.current = null;
    }
    setStartMenuHover("programs");
  };

  const closeProgramMenu = () => {
    if (startMenuHoverTimer.current !== null) {
      window.clearTimeout(startMenuHoverTimer.current);
    }
    startMenuHoverTimer.current = window.setTimeout(() => {
      setStartMenuHover(null);
      startMenuHoverTimer.current = null;
    }, 120);
  };

  // Close start menu when clicking outside
  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      if (!isStartMenuOpen) return;
      const el = startMenuRef.current;
      if (el && !el.contains(e.target as Node)) {
        setIsStartMenuOpen(false);
        setStartMenuHover(null);
      }
    };
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, [isStartMenuOpen]);

  // Window drag handlers
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      const dx = e.clientX - d.startX;
      const dy = e.clientY - d.startY;
      setWindows((prev) => ({
        ...prev,
        [d.id]: {
          ...prev[d.id],
          x: Math.max(8, d.startLeft + dx),
          y: Math.max(8, d.startTop + dy),
        },
      }));
    };

    const handlePointerUp = () => {
      dragRef.current = null;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [sheetDragging]);

  return (
    <div className="h-screen w-screen overflow-hidden select-none text-black font-sans">
      {isDesktopViewport && isShuttingDown ? (
        <div className="fixed inset-0 z-70">
          {shutdownPhase === "saving" ? (
            <div className="flex h-full w-full items-center justify-center bg-[#0000A8] px-6 text-white">
              <div className="w-full max-w-160">
                <div className="mb-8 text-center">
                  <p className="text-[18px] tracking-[0.06em]">Microsoft</p>
                  <p className="text-[44px] leading-none font-bold tracking-tight">Windows 95</p>
                </div>

                <p className="text-center text-[22px] font-semibold">Windows is shutting down...</p>

                <div className="mx-auto mt-7 w-full max-w-130 border border-[#d4d4d4] bg-[#000078] p-1">
                  <div className="h-4 w-full bg-[#000078]">
                    <div
                      className="h-full bg-[#d9d9d9] transition-[width] duration-300 ease-out"
                      style={{ width: `${shutdownProgress}%` }}
                    />
                  </div>
                </div>

                <div className="mx-auto mt-6 w-full max-w-130 space-y-1 font-mono text-[12px] text-[#e4e4e4]">
                  {SHUTDOWN_LINES.map((line, index) => (
                    <p key={line} className={shutdownProgress >= (index + 1) * 24 ? "opacity-100" : "opacity-35"}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-black px-6 text-[#f59d1a]">
              <div className="text-center">
                <p className="text-[36px] leading-tight">It is now safe to turn off your computer.</p>
                <p className="mt-6 font-mono text-[14px] text-[#f6bb55] animate-pulse">_</p>
              </div>
            </div>
          )}
        </div>
      ) : null}

      {isDesktopViewport && isDesktopBooting ? (
        <div className="fixed inset-0 z-60">
          {bootPhase === "bios" ? (
            <div className="h-full w-full bg-black px-8 py-6 font-mono text-[13px] leading-6 text-[#e7e7e7]">
              <p>PORTFOLIO BIOS (C) 1998 Setup Utility</p>
              <p className="mt-1">640K System RAM Passed</p>
              <p className="mb-3">1024K Extended RAM Passed</p>

              {BIOS_LINES.slice(0, biosLineCount).map((line) => {
                const renderedLine = line.includes("{{MEMORY}}")
                  ? `Memory Test : ${String(biosMemoryK).padStart(6, "0")}K${biosMemoryK >= BIOS_MEMORY_MAX ? " OK" : ""}`
                  : line;
                return (
                  <p key={line} className="whitespace-pre-wrap">
                    {renderedLine}
                  </p>
                );
              })}

              <p className="mt-2 text-[#cfcfcf]">
                {biosLineCount < BIOS_LINES.length ? "" : "Press DEL to enter SETUP   "}
                <span>{showBiosCursor ? "_" : " "}</span>
              </p>
            </div>
          ) : (
            <div className="h-full w-full bg-black text-[#d9d9d9]">
              <div className="mx-auto flex h-full w-full max-w-215 flex-col items-center justify-center px-8">
                <div className="text-center">
                  <p className="font-sans text-[18px] tracking-[0.04em]">Microsoft</p>
                  <p className="font-sans text-[56px] leading-none font-bold tracking-tight">Windows 95</p>
                </div>

                <div className="mt-12 w-full max-w-140 border border-[#777] bg-black p-1">
                  <div className="h-4 w-full bg-black">
                    <div
                      className="h-full bg-[#bfbfbf] transition-[width] duration-300 ease-out"
                      style={{ width: `${bootProgress}%` }}
                    />
                  </div>
                </div>

                <div className="mt-6 w-full max-w-140 space-y-1 font-mono text-[12px] text-[#bcbcbc]">
                  {STARTUP_LINES.map((line, index) => (
                    <p key={line} className={bootProgress >= (index + 1) * 22 ? "opacity-100" : "opacity-35"}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}

      <div className="md:hidden flex h-full items-center justify-center bg-[#09090b] px-2 py-3">
        <div className="relative h-full w-full max-h-[calc(100vh-24px)] max-w-97.5 rounded-[54px] border-4 border-[#1f1f23] bg-[#000000] p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)]">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[44px] bg-[#000000]">
            <div className="relative flex h-10 items-center justify-center bg-[#000000]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#131313] ring-1 ring-white/10" />
                <span className="h-1.5 w-16 rounded-full bg-[#242428]" />
              </div>
            </div>

            <div
              className="relative flex-1 overflow-hidden rounded-[34px] bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200')" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1)_0%,transparent_40%),linear-gradient(180deg,rgba(8,14,29,0.2)_0%,rgba(7,12,24,0.4)_100%)]" />

              {mobileBootVisible ? (
                <div
                  className={`absolute inset-0 z-40 flex items-center justify-center bg-[#151922] ${mobileLaunchState === "starting" ? "ios-launch-fade-in" : "ios-launch-fade-out pointer-events-none"}`}
                  aria-hidden={mobileLaunchState !== "starting" && mobileLaunchState !== "exiting"}
                >
                  <div className="flex flex-col items-center gap-6 px-6">
                    <div className="ios-launch-icon flex h-18 w-18 items-center justify-center rounded-[22px] bg-white/10 shadow-[0_22px_40px_-18px_rgba(0,0,0,0.95)] ring-1 ring-white/10 backdrop-blur-md">
                      <Image src={reactIcon} alt="Loading app icon" width={52} height={52} className="h-13 w-13 rounded-2xl opacity-95" />
                    </div>
                    <div className="space-y-1.5 text-center text-white">
                      <p className="text-[17px] font-semibold tracking-[0.06em]">iPhone</p>
                      <p className="text-[12px] text-white/60">Loading portfolio</p>
                    </div>
                    <div className="ios-launch-bar h-1.5 w-34 rounded-full bg-white/12">
                      <div className="ios-launch-bar__fill h-full w-full rounded-full bg-white/88" />
                      <div className="ios-launch-bar__shine absolute inset-y-0 left-0 w-1/4 rounded-full bg-white/45 blur-[6px]" />
                    </div>
                  </div>
                </div>
              ) : null}

              {mobileExitVisible ? (
                <div
                  className="absolute inset-0 z-35 bg-[#141922] pointer-events-none ios-launch-fade-in"
                  aria-hidden="true"
                >
                  <div className="flex h-full items-center justify-center px-6">
                    <div className="space-y-5 text-center text-white">
                      <p className="text-[17px] font-semibold tracking-[0.08em]">Closing apps</p>
                      <div className="ios-launch-bar h-1.5 w-36 rounded-full bg-white/12">
                        <div className="ios-exit-bar__fill h-full w-[72%] rounded-full bg-white/88" />
                      </div>
                      <p className="text-[12px] text-white/55">Returning to Explore</p>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-6 items-center px-3 text-[11px] font-semibold text-white tabular-nums">
                <div className="flex w-1/3 items-center gap-1.5 whitespace-nowrap">
                  <span className="tracking-[0.14em]">•••••</span>
                  <span>LTE</span>
                </div>
                <div className="w-1/3 text-center">{currentTime}</div>
                <div className="flex w-1/3 items-center justify-end gap-1.5 whitespace-nowrap">
                  <span>100%</span>
                  <div className="flex h-2.5 w-5 items-center rounded-[3px] border border-white/85 p-px">
                    <div className="h-full w-full rounded-xs bg-white" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex-1 overflow-y-auto px-4 pb-44 pt-14">
                  <div className="grid grid-cols-4 gap-x-3 gap-y-6">
                    {mobileApps.map((app, index) => (
                      <button
                        key={app.title}
                        type="button"
                        onClick={() =>
                          setActiveMobileProject({
                            title: app.title,
                            description: app.description,
                            note: app.note,
                            videoUrl: app.videoUrl,
                          })
                        }
                        className="flex flex-col items-center gap-1.5"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/12 p-1.5 shadow-[0_10px_20px_-9px_rgba(0,0,0,0.7)] ring-1 ring-white/18 backdrop-blur-sm">
                          <Image
                            src={app.icon}
                            alt={`${app.title} icon`}
                            width={46}
                            height={46}
                            className="h-10 w-10 rounded-2xl"
                          />
                        </span>
                        <span className="w-full px-0.5 text-center text-[11px] leading-[1.2] text-white line-clamp-2" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.65)" }}>
                          {index === 0 ? "Project 1" : app.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="rounded-2xl border border-white/14 bg-white/18 px-3 py-2 shadow-[0_18px_35px_-22px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                    <div className="flex items-center justify-around gap-2">
                      {dockIcons.map((icon, index) => (
                        <span key={index} className="flex h-13 w-13 items-center justify-center rounded-xl bg-white/80 p-1.5 shadow-[0_10px_18px_-12px_rgba(0,0,0,0.7)]">
                          <Image src={icon} alt="Dock app" width={42} height={42} className="h-9 w-9 rounded-[10px]" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="absolute inset-0 z-30"
                  style={{
                    pointerEvents: activeMobileProject ? "auto" : "none",
                    opacity: activeMobileProject ? 1 : 0,
                  }}
                >
                  {activeMobileProject ? (
                    <div className="absolute inset-0 bg-black/45" onClick={() => setActiveMobileProject(null)} />
                  ) : null}

                  {activeMobileProject ? (
                    <div
                      className={`absolute inset-x-0 bottom-0 transition-transform duration-300 ease-out ${sheetDragging ? "duration-0" : ""}`}
                      style={{ transform: `translateY(${sheetOffset}px)` }}
                    >
                      <div className="rounded-t-[22px] bg-[#f2f2f7] shadow-[0_-16px_40px_rgba(0,0,0,0.45)]">
                        <div
                          className="flex justify-center pt-2.5"
                          onPointerDown={(event) => {
                            sheetDragRef.current = { startY: event.clientY, startOffset: sheetOffsetRef.current };
                            setSheetDragging(true);
                            (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
                          }}
                        >
                          <div className="h-1.5 w-12 rounded-full bg-[#c7c7cc]" />
                        </div>

                        <div className="flex items-start justify-between gap-3 border-b border-[#d9d9de] px-4 pb-3 pt-3">
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a8a91]">Preview</p>
                            <h2 className="mt-1 truncate text-[18px] font-semibold tracking-tight text-[#111]">
                              {activeMobileProject.title}
                            </h2>
                            <p className="mt-0.5 truncate text-[11px] text-[#6b6b72]">{activeMobileProject.note}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveMobileProject(null)}
                            className="rounded-full bg-[#e6e6eb] px-3 py-1.5 text-[12px] font-semibold text-[#007aff]"
                          >
                            Done
                          </button>
                        </div>

                        <div className="bg-black">
                          {activeMobileProject.videoUrl ? (
                            <video
                              key={activeMobileProject.videoUrl}
                              src={activeMobileProject.videoUrl}
                              autoPlay
                              muted
                              loop
                              playsInline
                              controls
                              className="h-auto w-full max-h-[44vh] object-contain"
                            />
                          ) : (
                            <div className="flex h-48 items-center justify-center text-[12px] text-white/70">
                              No preview available
                            </div>
                          )}
                        </div>

                        <div className="max-h-[24vh] overflow-y-auto px-4 py-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8a91]">Project Details</p>
                          <p className="mt-2 rounded-2xl border border-[#e0e0e5] bg-white px-3 py-3 text-[13px] leading-relaxed text-[#333] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                            {activeMobileProject.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="flex h-12 items-center justify-center bg-[#000000]">
              <button
                type="button"
                aria-label="Home"
                onClick={beginMobileExit}
                className="h-8.5 w-8.5 rounded-full border border-[#4b4b4f] bg-[#0a0a0a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
              />
            </div>
          </div>
        </div>
      </div>

      {isDesktopViewport ? (
      <div className="retro-screen fixed inset-0 overflow-hidden select-none bg-[#008080]">
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <ThemeProvider theme={original}>
            <GlobalStyles />

            <div className="absolute inset-0 z-0" style={{ backgroundColor: '#008080' }} />

            <div className="absolute inset-0 z-10 px-4 pt-4 pb-11">
              <div className="relative flex h-full flex-col">
                <div className="grid grid-flow-row auto-rows-min grid-cols-1 gap-4 self-start pl-1 pt-1">
                  {desktopIcons.map((desktopIcon) => (
                    <button
                      key={desktopIcon.label}
                      type="button"
                      onClick={() => openWin(desktopIcon.target)}
                      className="flex flex-col items-center gap-1 text-center cursor-pointer"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-[3px] border border-transparent bg-[#f6f6f6]/10 p-1 shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.35),inset_1px_1px_0_rgba(255,255,255,0.18),2px_2px_0_rgba(0,0,0,0.35)]">
                        <Image src={desktopIcon.icon} alt={desktopIcon.label} width={48} height={48} className="h-11 w-11 object-contain" />
                      </div>
                      <span className="max-w-22 text-[11px] leading-tight text-white [text-shadow:1px_1px_0_rgba(0,0,0,0.45)]">{desktopIcon.label}</span>
                    </button>
                  ))}
                </div>

                <div className="pointer-events-none absolute left-16 right-8 top-12">
                  <div className="pointer-events-auto relative mx-auto w-full max-w-180">
                    {Object.values(windows)
                        .filter((win) => win.isOpen)
                        .map((win) => {
                          const isActive = win.zIndex === Math.max(...Object.values(windows).map((item) => item.zIndex));
                          const left = typeof win.x === 'number' ? win.x : Math.max(40, window.innerWidth / 2 - 430);
                          const top = typeof win.y === 'number' ? win.y : 28;

                          return (
                            <Window
                              key={win.id}
                              style={{
                                position: "absolute",
                                left,
                                top,
                                width: 860,
                                maxWidth: "calc(100vw - 4rem)",
                                zIndex: win.zIndex,
                              }}
                            >
                              <WindowHeader
                                active={isActive}
                                className="flex items-center justify-between px-1 py-0.5"
                                onPointerDown={(e) => {
                                  if ((e.target as HTMLElement).closest("button")) return;
                                  // begin dragging
                                  try {
                                    (e.currentTarget as Element).setPointerCapture(e.pointerId);
                                  } catch (_) {}
                                  focusWin(win.id);
                                  dragRef.current = { id: win.id, startX: e.clientX, startY: e.clientY, startLeft: left, startTop: top };
                                }}
                              >
                                <span className="truncate text-[12px]">{win.title} - Windows Media Player</span>
                                <div className="flex items-center gap-1">
                                  <Button size="sm" onPointerDown={(e) => e.stopPropagation()} onClick={() => setWindows((prev) => ({ ...prev, [win.id]: { ...prev[win.id], isMaximized: !prev[win.id].isMaximized } }))}>
                                    {win.isMaximized ? "🗗" : "🗖"}
                                  </Button>
                                  <Button size="sm" onPointerDown={(e) => e.stopPropagation()} onClick={() => closeWin(win.id)}>
                                    ✕
                                  </Button>
                                </div>
                              </WindowHeader>

                              <WindowContent className="bg-[#c0c0c0] p-3">
                                <div className="flex gap-3">
                                  <div className="min-w-0 flex-1">
                                    <div className="mb-2 flex items-center gap-2 text-[11px]">
                                      <span>File</span>
                                      <span>Edit</span>
                                      <span>View</span>
                                      <span>Play</span>
                                      <span>Help</span>
                                    </div>

                                    <Frame variant="field" className="bg-[#efefef] p-3">
                                      <p className="text-xs font-bold">Project Description:</p>
                                      <p className="mt-1 text-xs italic">{win.description}</p>
                                      <p className="mt-2 text-[11px] text-gray-700">Note: {win.note}</p>
                                    </Frame>

                                    <Frame variant="field" className="mt-3 overflow-hidden bg-black p-1">
                                      {win.videoUrl ? (
                                        <video src={win.videoUrl} controls autoPlay playsInline className="h-80 w-full object-contain bg-black" />
                                      ) : (
                                        <div className="flex h-80 items-center justify-center bg-black text-[12px] text-white/70">
                                          No preview available
                                        </div>
                                      )}
                                    </Frame>
                                  </div>

                                  <div className="flex w-56 flex-col gap-2">
                                    <Frame variant="field" className="bg-[#efefef] p-2 text-[11px] leading-relaxed">
                                      <p className="font-bold">Now Playing</p>
                                      <p className="mt-1">Classic desktop shell with a retro media preview and draggable window chrome.</p>
                                    </Frame>

                                    <Frame variant="field" className="flex-1 bg-[#efefef] p-2 text-[11px] leading-relaxed">
                                      <p className="font-bold">Details</p>
                                      <p className="mt-1">Open projects from the desktop. This view is styled to feel closer to Windows 95 than a modern modal.</p>
                                    </Frame>
                                  </div>
                                </div>

                                <div className="mt-3 flex items-center justify-between text-[11px]">
                                  <span>▶ Loading Stream Pipeline...</span>
                                  <span>{currentTime}</span>
                                </div>
                              </WindowContent>
                            </Window>
                          );
                        })}
                  </div>
                </div>

                <div
                  className="absolute inset-x-0 bottom-0 z-20 flex items-stretch border-t border-t-white/30 bg-[#c0c0c0] px-2 py-1"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -1px 0 rgba(0,0,0,0.22)" }}
                >
                  <div className="relative flex w-full items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsStartMenuOpen((value) => !value);
                          setStartMenuHover(null);
                        }}
                        className="min-w-14 border-2 border-white border-b-[#7f7f7f] border-r-[#7f7f7f] bg-[#c0c0c0] px-3 py-1 text-sm font-bold text-black shadow-[inset_-1px_-1px_0_rgba(0,0,0,0.3),inset_1px_1px_0_rgba(255,255,255,0.85)]"
                      >
                        Start
                      </button>
                    </div>
                    <div className="min-w-20 rounded-sm border border-[#7f7f7f] bg-[#c0c0c0] px-2 py-1 text-center text-[11px] font-bold tracking-[0.04em] tabular-nums shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.85),inset_1px_1px_0_rgba(0,0,0,0.18)]">
                      {currentTime}
                    </div>

                    {isStartMenuOpen ? (
                      <>
                        <div ref={startMenuRef} className="absolute bottom-9 left-0 z-30 flex w-70.5 overflow-visible border-2 border-black bg-[#c0c0c0] shadow-[4px_4px_0_rgba(0,0,0,0.35)]">
                          <div className="flex w-9 items-end justify-center bg-[#000080] py-2 text-[12px] font-black leading-none text-white [writing-mode:vertical-rl] transform-[rotate(180deg)]">
                            Portfolio
                          </div>
                          <div className="relative flex-1 p-1">
                            <div className="flex flex-col gap-0.5">
                              {startMenuItems.map((item) => (
                                <button
                                  key={item.label}
                                  type="button"
                                  onMouseEnter={() => (item.hasSubmenu ? openProgramMenu() : setStartMenuHover(null))}
                                  onMouseLeave={() => {
                                    if (item.hasSubmenu) {
                                      closeProgramMenu();
                                      return;
                                    }
                                    setStartMenuHover(null);
                                  }}
                                  onClick={() => {
                                    if (item.label === "Projects") {
                                      openProgramMenu();
                                      return;
                                    }
                                    if (item.label === "Open Portfolio...") {
                                      // open developer portfolio
                                      window.location.href = '/';
                                      return;
                                    }
                                    if (item.label === "Shut Down Portfolio...") {
                                      beginShutdown();
                                      return;
                                    }
                                    // map other items to windows
                                    if (item.label === 'About Me') openWin('about');
                                    if (item.label === 'Resume') openWin('resume');
                                    if (item.label === 'Skills') openWin('skills');
                                    if (item.label === 'Contact') openWin('contact');
                                    setIsStartMenuOpen(false);
                                    setStartMenuHover(null);
                                  }}
                                  className="flex items-center justify-between px-2 py-1.5 text-left text-[12px] hover:bg-[#000080] hover:text-white"
                                >
                                  <span>{item.label}</span>
                                  {item.hasSubmenu ? <span className="ml-3 text-[10px]">▶</span> : null}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {startMenuHover === "programs" ? (
                          <div
                            className="absolute bottom-9 left-70 z-40 w-56 overflow-hidden border-2 border-black bg-[#c0c0c0] shadow-[4px_4px_0_rgba(0,0,0,0.35)]"
                            onMouseEnter={openProgramMenu}
                            onMouseLeave={closeProgramMenu}
                          >
                            <div className="border-b border-[#7f7f7f] bg-[#000080] px-2 py-1 text-[11px] font-bold text-white">
                              Programs
                            </div>
                            <div className="flex flex-col gap-0.5 p-1">
                              {programMenuItems.map((item, index) => (
                                <button
                                  key={item.label}
                                  type="button"
                                  onClick={() => {
                                    if (index < editorProjects.length) {
                                      openWin(`file-${index}`);
                                    } else if (item.label === 'Resume PDF') {
                                      window.open('/CV_GUSI.pdf', '_blank');
                                    }
                                    setIsStartMenuOpen(false);
                                    setStartMenuHover(null);
                                  }}
                                  className="flex items-center justify-between px-2 py-1.5 text-left text-[12px] hover:bg-[#000080] hover:text-white"
                                >
                                  <span>{item.label}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
        </ThemeProvider>
        </StyleSheetManager>
      </div>
      ) : null}
    </div>
  );
}
