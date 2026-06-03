"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Button, Paper, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import WavingHandRoundedIcon from "@mui/icons-material/WavingHandRounded";

function DesktopPathCard({
  accent,
  href,
  icon,
  snippet,
  title,
  description,
  cta,
  tapeClassName,
  cardClassName,
  iconClassName,
  shadowColor,
}: {
  accent: string;
  href: string;
  icon: ReactNode;
  snippet: string[];
  title: string;
  description: string;
  cta: string;
  tapeClassName: string;
  cardClassName: string;
  iconClassName: string;
  shadowColor: string;
}) {
  const isTealCard = accent === "#0f766e";

  return (
    <Paper
      component={Link}
      href={href}
      elevation={0}
      className={`group relative flex min-h-78 flex-col overflow-hidden border-2 border-[#181c2c] bg-[#fdf9ef] p-6 transition-transform duration-300 hover:-translate-y-2 active:scale-[0.985] md:min-h-82 md:p-7 ${cardClassName}`}
      sx={{
        borderRadius: "2px",
        boxShadow: shadowColor,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div className={`absolute -top-3 z-20 h-6 w-16 rounded-xs shadow-[0_2px_4px_rgba(0,0,0,0.15)] ${tapeClassName}`} />
      <div className="absolute inset-y-0 right-4 hidden w-14 rounded-2xl bg-white/45 md:block" />
      <div className="absolute -right-8 top-1/2 hidden h-28 w-28 -translate-y-1/2 rounded-full bg-white/35 blur-2xl md:block" />

      <div className="relative z-10 mb-6 flex items-center justify-center">
        <div
          className={`relative grid h-24 w-24 place-items-center rounded-[18px] border-2 border-dashed border-[#c7c6cd] bg-[#f7f3e9] transition-transform duration-300 group-hover:scale-110 ${iconClassName}`}
        >
          {icon}
          <span
            className={`absolute h-3 w-3 rounded-full border border-[#181c2c] ${isTealCard ? "right-0 top-0 bg-[#5dd9d0]" : "left-0 bottom-0 bg-[#ffb3b0]"}`}
          />
        </div>
      </div>

      <Typography
        component="h2"
        className="mx-auto mb-2 text-center text-[clamp(2rem,4vw,2.4rem)] font-extrabold leading-[1.1] text-[#181c2c]"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
          {title}
      </Typography>

      <div className="absolute left-5 top-5 max-h-[5.2rem] max-w-68 overflow-hidden text-[0.55rem] leading-[1.35] text-[#1c1c16] opacity-[0.08] md:text-[0.7rem]">
        {snippet.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      <Typography component="p" className="relative z-10 mx-auto mb-6 max-w-[28ch] text-center text-[1.05rem] leading-[1.55] text-[#46464c] md:max-w-[25ch]">
        {description}
      </Typography>

      <Button
        endIcon={<ArrowForwardRoundedIcon fontSize="small" />}
        className="relative z-10 mx-auto mt-auto rounded-xs! border-2! px-5! py-2.5! text-[0.95rem]! shadow-[4px_4px_0_0_rgba(24,28,44,0.12)]! transition-transform group-active:translate-x-1 group-active:translate-y-1 group-active:shadow-none"
        component="span"
        variant="outlined"
        sx={{
          borderColor: accent,
          color: accent,
          backgroundColor: accent === "#ae2f34" ? "rgba(255, 241, 241, 0.9)" : "rgba(247, 243, 233, 0.95)",
        }}
      >
        {cta}
      </Button>
      {/* canonicalize rounded utility */}
    </Paper>
  );
}

function MobilePathCard({
  href,
  tape,
  title,
  description,
  cta,
  icon,
  iconWrap,
  cardRotate,
  ctaClass,
}: {
  href: string;
  tape: "teal" | "pink";
  title: string;
  description: string;
  cta: string;
  icon: ReactNode;
  iconWrap: string;
  cardRotate: string;
  ctaClass: string;
}) {
  return (
    <Link href={href} className="group relative block w-full">
      <div
        className={`absolute -top-3 z-20 h-6 border border-black/5 shadow-sm backdrop-blur-[2px] ${
          tape === "teal"
            ? "right-6 w-16 -rotate-2 bg-[rgba(27,172,163,0.6)]"
            : "left-6 w-20 rotate-[1.5deg] bg-[rgba(255,107,107,0.6)]"
        }`}
      />

      <div
        className={`relative flex flex-col overflow-hidden rounded-lg border border-[#c7c6cd] bg-[#fdf9ef] p-6 shadow-[4px_4px_0px_0px_rgba(24,28,44,0.1)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${cardRotate}`}
      >
        <div className="mb-4 flex items-center gap-4">
          <div className={`grid place-items-center rounded-full p-3 ${iconWrap}`}>{icon}</div>
          <h2 className="m-0 text-[32px] leading-[1.2] font-bold text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
            {title}
          </h2>
        </div>

        <p className="mb-6 text-base leading-normal text-[#46464c]" style={{ fontFamily: "var(--font-body), sans-serif" }}>
          {description}
        </p>

        <div
          className={`mt-auto flex items-center justify-between rounded border-2 px-4 py-3 text-sm font-normal transition-all ${ctaClass}`}
          style={{ fontFamily: "var(--font-mono), monospace" }}
        >
          <span>{cta}</span>
          <ArrowForwardRoundedIcon sx={{ fontSize: 16, fontWeight: 700 }} />
        </div>

        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#e6e2d8] opacity-20 blur-xl" />
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fdf9ef] text-[#1c1c16]">
      <div className="md:hidden">
        <div className="min-h-[max(884px,100dvh)] bg-[linear-gradient(#ece8de_1px,transparent_1px),linear-gradient(90deg,#ece8de_1px,transparent_1px)] bg-size-[20px_20px] px-6 py-12">
          <section className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-6">
            <header className="relative z-10 mb-2 w-full text-center">
              <h1 className="mb-3 text-[36px] font-extrabold leading-[1.1] text-[#181c2c]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                Hello there! <WavingHandRoundedIcon className="ml-1 align-middle text-3xl text-[#ae2f34]" />
              </h1>
              <p className="mx-auto max-w-xs text-lg leading-[1.6] text-[#46464c]" style={{ fontFamily: "var(--font-body), sans-serif" }}>
                Which side of my work would you like to explore today?
              </p>

              <div className="absolute -right-4 -top-8 rotate-12 text-[#003936] opacity-40">
                <svg fill="none" height="40" viewBox="0 0 100 100" width="40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path
                    d="M20 50 C 30 20, 70 20, 80 50 C 90 80, 50 90, 20 80 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="10 5"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </header>

            <MobilePathCard
              href="/tech"
              tape="teal"
              title="The Developer"
              description="Dive into lines of code, system architectures, and the digital tools I've built from the ground up."
              cta="Explore Code"
              icon={<TerminalRoundedIcon sx={{ fontSize: 32 }} />}
              iconWrap="bg-[#003936] text-[#7cf6ec]"
              cardRotate="rotate-[0.5deg]"
              ctaClass="border-[#181c2c] bg-[#181c2c] text-white shadow-[4px_4px_0_0_rgba(0,57,54,0.3)]"
            />

            <MobilePathCard
              href="/editor"
              tape="pink"
              title="The Editor"
              description="Watch the stories I've crafted through cuts, color grading, and careful pacing."
              cta="View Reel"
              icon={<MovieRoundedIcon sx={{ fontSize: 32 }} />}
              iconWrap="bg-[#ff6b6b] text-[#6d0010]"
              cardRotate="-rotate-[0.5deg]"
              ctaClass="border-[#181c2c] bg-[#f1eee4] text-[#181c2c] shadow-[4px_4px_0_0_rgba(174,47,52,0.2)]"
            />

            <div className="z-10 mt-5 pb-6 text-center">
              <Link
                className="relative inline-block px-2 py-1 text-xl leading-[1.2] text-[#46464c] transition-colors hover:text-[#181c2c]"
                style={{ fontFamily: "var(--font-accent), sans-serif" }}
                href="/tech"
              >
                Just browsing? Go to the full index.
                <span className="absolute -bottom-0.5 left-0 -z-10 h-1 w-full -rotate-1 rounded-full bg-[#ff6b6b]" />
              </Link>
            </div>
          </section>
        </div>
      </div>

      <div className="hidden md:flex min-h-screen items-center justify-center p-4 text-[#1c1c16] bg-grid-paper">
        <main className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12 relative z-10">
          <div id="explore" className="text-center space-y-4 max-w-2xl mx-auto relative rotate-sm-neg scroll-mt-24">
            <div className="absolute -top-6 -left-8 w-16 h-16 opacity-50 text-[#ae2f34] pointer-events-none">
              <svg fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M10 50 C 30 20, 70 80, 90 50" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                <path d="M40 30 C 50 10, 80 40, 70 70" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
              </svg>
            </div>
            <h1 className="text-[36px] leading-[1.1] font-extrabold text-[#181c2c] md:text-[48px]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              Which side of my work would you like to explore?
            </h1>
            <p className="text-[20px] leading-[1.2] text-[#5f6471]" style={{ fontFamily: "var(--font-accent), sans-serif" }}>
              Choose a path below to see my collected works.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch justify-center gap-8 md:flex-row md:gap-16">
            <Link href="/tech" className="group relative block w-full cursor-pointer transition-transform duration-300 hover:-translate-y-2 focus:outline-none md:w-1/2 max-w-md mx-auto">
              <div className="absolute -top-3 -right-3 w-16 h-6 washi-tape-teal z-20 shadow-sm backdrop-blur-sm" />
              <div className="bg-[#ffffff] block-shadow-teal rotate-sm p-6 h-full flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 group-hover:block-shadow-teal hover:border-[#003936] group-focus:ring-4 ring-[#5dd9d0] ring-offset-2 ring-offset-[#fdf9ef]">
                <div className="absolute inset-0 opacity-5 pointer-events-none text-left p-4 text-[10px] leading-tight text-[#2d3142] overflow-hidden" style={{ fontFamily: "var(--font-mono), monospace" }}>
                  const portfolio = {'{'}<br />
                  &nbsp;&nbsp;role: &quot;Developer&quot;,<br />
                  &nbsp;&nbsp;skills: [&quot;React&quot;, &quot;Node&quot;, &quot;UI/UX&quot;],<br />
                  &nbsp;&nbsp;passion: &quot;Creating tactile digital experiences&quot;,<br />
                  &nbsp;&nbsp;status: &quot;Building&quot;<br />
                  {'}'};<br /><br />
                  function initialize() {'{'}<br />
                  &nbsp;&nbsp;render(portfolio);<br />
                  {'}'}
                </div>
                <div className="w-24 h-24 mb-6 rounded-full bg-[#fdf9ef] border-2 border-dashed border-[#c7c6cd] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl text-[#003936]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    terminal
                  </span>
                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#5dd9d0] rounded-full border border-[#181c2c]" />
                </div>
                <h2 className="text-[32px] leading-[1.2] font-bold text-[#181c2c] mb-2 relative z-10" style={{ fontFamily: "var(--font-display), sans-serif" }}>The Developer</h2>
                <p className="text-[16px] leading-normal text-[#46464c] mb-6 relative z-10" style={{ fontFamily: "var(--font-body), sans-serif" }}>
                  Full-Stack &amp; Creative Tech. Dive into my code, architecture, and interactive experiments.
                </p>
                <div className="mt-auto relative z-10">
                  <span className="inline-block px-4 py-2 bg-[#f1eee4] text-[14px] text-[#181c2c] border border-[#c7c6cd] rotate-sm-neg" style={{ fontFamily: "var(--font-mono), monospace" }}>
                    Explore Code -&gt;
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/editor" className="group relative block w-full cursor-pointer transition-transform duration-300 hover:-translate-y-2 focus:outline-none md:w-1/2 max-w-md mx-auto">
              <div className="absolute -top-3 -left-3 w-16 h-6 washi-tape-coral z-20 shadow-sm backdrop-blur-sm" />
              <div className="bg-[#ffffff] block-shadow-coral rotate-sm-neg p-6 h-full flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:border-[#ae2f34] group-focus:ring-4 ring-[#ffb3b0] ring-offset-2 ring-offset-[#fdf9ef]">
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none text-[#2d3142] rotate-90 scale-150">
                  <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    movie
                  </span>
                </div>
                <div className="w-24 h-24 mb-6 rounded-full bg-[#fdf9ef] border-2 border-dashed border-[#c7c6cd] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-4xl text-[#ae2f34]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    movie_edit
                  </span>
                  <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#ffb3b0] rounded-full border border-[#181c2c]" />
                </div>
                <h2 className="text-[32px] leading-[1.2] font-bold text-[#181c2c] mb-2 relative z-10" style={{ fontFamily: "var(--font-display), sans-serif" }}>The Editor</h2>
                <p className="text-[16px] leading-normal text-[#46464c] mb-6 relative z-10" style={{ fontFamily: "var(--font-body), sans-serif" }}>
                  Video &amp; Photo Design. Explore my visual storytelling, editing reels, and photography.
                </p>
                <div className="mt-auto relative z-10">
                  <span className="inline-block px-4 py-2 bg-[#f1eee4] text-[14px] text-[#181c2c] border border-[#c7c6cd] rotate-sm" style={{ fontFamily: "var(--font-mono), monospace" }}>
                    View Reel -&gt;
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center rotate-sm">
            <p className="text-[20px] leading-[1.2] text-[#77767d]" style={{ fontFamily: "var(--font-accent), sans-serif" }}>
              Just browsing? <Link className="text-[#181c2c] underline decoration-[#ae2f34] decoration-2 transition-colors hover:text-[#ae2f34]" href="/tech">Go to the full index</Link>
            </p>
          </div>
        </main>
      </div>
    </main>
  );
}
