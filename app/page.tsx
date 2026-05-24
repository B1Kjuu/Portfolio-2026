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
  return (
    <Paper
      component={Link}
      href={href}
      elevation={0}
      className={`group relative flex min-h-[21rem] flex-col overflow-hidden border border-[rgba(119,118,125,0.35)] bg-[#fdf9ef] p-6 transition-transform duration-200 active:scale-[0.985] md:min-h-[22rem] md:p-8 ${cardClassName}`}
      sx={{
        borderRadius: "8px",
        boxShadow: shadowColor,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div className={`absolute -top-4 z-20 h-7 rounded-[2px] border border-black/10 shadow-[0_3px_4px_rgba(0,0,0,0.12)] ${tapeClassName}`} />
      <div className="absolute inset-y-0 right-4 hidden h-40 w-14 rounded-2xl border-2 border-[rgba(231,226,216,0.7)] md:block" />
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[rgba(232,223,207,0.35)] blur-2xl" />

      <div className="relative z-10 mb-5 flex items-center gap-4">
        <div className={`grid h-14 w-14 place-items-center rounded-full ${iconClassName}`}>{icon}</div>
        <Typography
          component="h2"
          className="m-0! text-[clamp(1.9rem,7vw,2.6rem)]! font-extrabold! leading-[1.05]! text-[#181c2c]"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          {title}
        </Typography>
      </div>

      <div className="absolute left-5 top-5 max-h-[5.2rem] max-w-68 overflow-hidden text-[0.55rem] leading-[1.35] text-[#1c1c16] opacity-[0.08] md:text-[0.7rem]">
        {snippet.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>

      <Typography component="p" className="relative z-10 mb-6 max-w-[19ch] font-(--font-body)! text-[1.05rem]! leading-[1.55]! text-[#46464c] md:max-w-[24ch]">
        {description}
      </Typography>

      <Button
        endIcon={<ArrowForwardRoundedIcon fontSize="small" />}
        className="relative z-10 mt-auto self-start rounded-full! border-2! px-4! py-3! text-[0.8rem]! shadow-[4px_4px_0_0_rgba(24,28,44,0.12)]! transition-transform group-active:translate-x-1 group-active:translate-y-1 group-active:shadow-none"
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

      <div className="hidden md:block">
        <div className="relative min-h-screen bg-[linear-gradient(180deg,#fdf9ef_0%,#fdf9ef_100%)] px-4 py-10 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#ece8de_1px,transparent_1px),linear-gradient(90deg,#ece8de_1px,transparent_1px)] bg-size-[20px_20px] opacity-70" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,217,208,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,107,107,0.14),transparent_28%)]" />

          <section className="relative mx-auto flex min-h-svh w-full max-w-[980px] flex-col justify-center gap-8">
            <header className="relative z-10 text-center">
              <div className="absolute -right-3 -top-6 rotate-12 text-[#003936]/40">
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

              <Typography component="p" className="mb-3 font-(--font-mono)! text-[0.8rem]! tracking-[0.16em]! uppercase text-[#5f6471]">
                b1kjuu.studio
              </Typography>

              <Typography
                component="h1"
                className="mx-auto! mb-3! max-w-[14ch]! text-[clamp(3.2rem,6vw,4.9rem)]! font-extrabold! leading-[1.05]! tracking-[-0.03em] text-[#181c2c]"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Hello there! <WavingHandRoundedIcon className="ml-1 align-middle text-[0.9em]! text-[#c24a4a]" />
              </Typography>

              <Typography component="p" className="mx-auto max-w-[34ch] font-(--font-body)! text-[1.15rem]! leading-[1.55]! text-[#46464c]">
                Which side of my work would you like to explore today?
              </Typography>
            </header>

            <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
              <DesktopPathCard
                accent="#0f766e"
                href="/tech"
                icon={<TerminalRoundedIcon fontSize="large" />}
                snippet={[
                  "const portfolio = {",
                  '  role: "Developer",',
                  '  skills: ["React", "Node", "UI/UX"],',
                  '  status: "Building"',
                  "}",
                ]}
                title="The Developer"
                description="Dive into lines of code, system architectures, and the digital tools I've built from the ground up."
                cta="Explore Code"
                tapeClassName="right-8 w-16 -rotate-6 bg-[rgba(178,208,204,0.92)] md:w-[4.9rem]"
                cardClassName="rotate-[0.5deg] md:rotate-[0.35deg]"
                iconClassName="bg-[#003936] text-[#7cf6ec]"
                shadowColor="4px 4px 0 0 rgba(24,28,44,0.1)"
              />

              <DesktopPathCard
                accent="#ae2f34"
                href="/editor"
                icon={<MovieRoundedIcon fontSize="large" />}
                snippet={[
                  "timeline = {",
                  '  medium: "Video + Photo",',
                  '  style: "Story-first",',
                  '  pace: "Intentional"',
                  "}",
                ]}
                title="The Editor"
                description="Explore my visual storytelling, editing reels, and photography."
                cta="View Reel"
                tapeClassName="left-8 w-16 rotate-6 bg-[rgba(232,186,188,0.92)] md:w-[4.9rem]"
                cardClassName="-rotate-[0.5deg] md:-rotate-[0.35deg]"
                iconClassName="bg-[#ff6b6b] text-[#410006]"
                shadowColor="4px 4px 0 0 rgba(255,179,176,0.9)"
              />
            </div>

            <div className="relative z-10 pt-0 text-center">
              <Typography
                component={Link}
                href="/tech"
                className="inline-block px-2 py-1 text-[1.15rem]! text-[#46464c]! underline decoration-[#ff6b6b] decoration-2 underline-offset-4 transition-colors hover:text-[#181c2c]"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Just browsing? Go to the full index.
              </Typography>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
