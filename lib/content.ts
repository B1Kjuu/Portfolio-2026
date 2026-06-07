import type { StaticImageData } from "next/image"; 
import P3KCARS from "../app/tech/assets/P3KCARS.png";
import PTSI from "../app/tech/assets/PTSI.png";
import RESORTIFYPH from "../app/tech/assets/RESORTIFYPH.png";
import IIA from "../app/tech/assets/IIA.png";
import HIKESAFE from "../app/tech/assets/HIKESAFE.png";
import HIKESAFEWEB from "../app/tech/assets/HIKESAFEWEB.png";
import EASYJOURNAL from "../app/tech/assets/EASYJOURNAL.png";
import INTERFACE2026 from "../app/tech/assets/INTERFACE2026.png";
import OLDPORTFOLIO from "../app/tech/assets/OLDPORTFOLIO.png";

export type TechProject = {
  title: string;
  description: string;
  note: string;
  image: string | StaticImageData;
  demoLink?: string;
  ghLink?: string;
};

export const techStats = [
  { value: "3+", label: "live products and portfolio builds" },
  { value: "90+", label: "Lighthouse scores targeted in production" },
  { value: "Full-stack", label: "React, Node, UI systems, and deployment" },
];

export const techProjects: TechProject[] = [
  {
    title: "P3KCARS",
    description: "Public website with responsive UI and clean navigation.",
    note: "Frontend build with a polished user-facing experience.",
    image: P3KCARS, 
    demoLink: "https://p3kcars.com",
  },
  {
    title: "PTSI",
    description: "Company site deployed to Firebase Hosting.",
    note: "Deployed with a lightweight, reliable web stack.",
    image: PTSI,
    demoLink: "https://ptsi-ca79a.web.app",
  },
  {
    title: "RESORTIFYPH",
    description: "Resort booking platform (under development).",
    note: "Designed to feel fast on mobile and desktop.",
    image: RESORTIFYPH,
    demoLink: "https://resortifyph.me",
  },
  {
    title: "IIA",
    description: "Organization website: content, resources, and membership info.",
    note: "Built to centralize event and org information.",
    image: IIA,
    demoLink: "https://iia-p.org",
  },
  {
    title: "HIKESAFE APP",
    description: "Safety-focused hiking app; code available on GitHub.",
    note: "This App is built using React Native, used for offline communication",
    image: HIKESAFE,
    ghLink: "https://github.com/B1kjuu/hikesafenew",
  },
  {
    title: "HIKESAFE WEBSITE",
    description: "Official Website of HIKESAFE. Showcasing our Thesis.",
    note: "Developed to showcase our thesis project.",
    image: HIKESAFEWEB,
    demoLink: "https://hike-safe-website-6lktg4co8-jubikks-projects.vercel.app",
  },
  {
    title: "EASYJOURNAL",
    description: "Simple journaling app; repository with implementation details.",
    note: "A lightweight personal writing tool.",
    image: EASYJOURNAL,
    ghLink: "https://github.com/B1kjuu/EasyJournal",
  },
  {
    title: "INTERFACE 2026",
    description: "A seminar website for INTERFACE 2026 with speaker profiles, roadmap, and registration details.",
    note: "Bridges the event content into a polished seminar experience.",
    image: INTERFACE2026,
    demoLink: "https://interface-2026-six.vercel.app",
  },
  {
    title: "OLD PORTFOLIO",
    description: "Archived Old Portfolio, forked from a template",
    note: "Templated Portfolio from one of the trending templates",
    image: OLDPORTFOLIO,
    demoLink: "https://b1kjuu-portfolio.vercel.app",
  },
];

export const techSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "HTML5",
  "Python",
];

export const editorStats = [
  { value: "Story-first", label: "visual edits with pacing and mood" },
  { value: "Photo + video", label: "color, framing, retouching, and motion" },
  { value: "Social-ready", label: "formatting for reels, shorts, and campaigns" },
];

export type EditorItem = {
  type: "folder" | "video";
  title: string;
  description?: string;
  note?: string;
  videoUrl?: string;
  items?: EditorItem[];
};

export const editorProjects : EditorItem[] = [
{
    type: "folder",
    title: "UGC",
    items: [
      {
type: "video",
        title: "Cody Chaffee",
        description: "Dynamic personal branding cut focusing on speaker authority. Features clean typography and seamless jump cuts to maintain viewer engagement.",
        note: "Optimized for TikTok/Reels.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/UGC/Cody%20Chaffee.mov"
      },
      {
        type: "video",
        title: "Fungy Mushroom Coffee",
        description: "High-energy product showcase. Utilizes rhythm-driven transitions, engaging sound design, and quick text callouts to highlight benefits.",
        note: "E-commerce direct response.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/UGC/Fungy%20Mushroom%20Coffee.mp4"
      },
      {
        type: "video",
        title: "King's Media",
        description: "Documentary-style assessment edit. Emphasizes retention-based pacing, visual hooks, and strategic B-roll placement.",
        note: "High-retention agency test.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/UGC/King_s%20Media.mp4"
      },
      {
        type: "video",
        title: "KneeMax",
        description: "Problem-solution ad structure. Combines clean motion graphics and fast-paced editing designed to drive immediate viewer action.",
        note: "Performance marketing.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/UGC/KneeMax_.mp4"
      },
      {
        type: "video",
        title: "Final Clip 1",
        description: "A/B test variation focusing on a strong visual hook. Built to stop the scroll within the critical first 3 seconds.",
        note: "First-3-seconds hook focus.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/UGC/RAW%20Clip%201_FInal.mp4"
      },
      {
        type: "video",
        title: "Final Clip 2",
        description: "Narrative-driven UGC edit. Focuses on authentic storytelling and user experience to build product trust.",
        note: "Story-driven ad.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/UGC/RAW%20Clip%20Snd_Final.mp4"
      },
      {
        type: "video",
        title: "Final Clip 3",
        description: "Fast-paced compilation featuring energetic cuts, dynamic zooms, and trend-conscious audio syncing.",
        note: "Social media deliverable.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/UGC/RAW%20Clip%20Trd_Final.mp4"
      },
      {
        type: "video",
        title: "Kelowna Finance",
        description: "Professional yet accessible financial content. Incorporates clean data visualizations, smooth pacing, and authoritative branding.",
        note: "B2C trust-building.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/UGC/kelowna_finance.mp4"
      },
    ]
  },
  {
    type: "folder",
    title: "Travel",
    items: [
      {
        type: "video",
        title: "Death Valley",
        description: "Cinematic landscape edit. Features advanced color grading, sky replacements, and subtle Fusion compositing for a premium feel.",
        note: "Highlighting the Travel on Death Valley.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/TRAVEL/Death%20Valley.mp4"
      },
      {
        type: "video",
        title: "MOTOVLOG",
        description: "High-octane action sequence. Relies heavily on speed-ramping, kinetic typography, and immersive spatial sound design.",
        note: "Action / Lifestyle edit.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/TRAVEL/MOTOVLOG%20trial.mp4"
      }
    ]
  },
  {
    type: "folder",
    title: "THESIS",
    items: [
      {
        type: "video",
        title: "HikeSafe",
        description: "Deployment Video of our thesis.",
        note: "Site is Espadang Bato",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/THESIS/demofinal.mp4"
      }
    ]
  },
  {
    type: "folder",
    title: "Short Fact Reels",
    items: [
      {
        type: "video",
        title: "Amsterdam Clock",
        description: "A short fact reel about the iconic Amsterdam clock and its history.",
        note: "Fun fact about Dutch timekeeping and culture.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/AMSTERDAM%20CLOCK.mp4"
      },
      {
        type: "video",
        title: "Clean Windows = Better Visibility",
        description: "A quick tip reel on why keeping your windows clean improves visibility and safety.",
        note: "Practical life hack for drivers and homeowners.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/Clean%20windows%20=%20better%20visibility.mp4"
      },
      {
        type: "video",
        title: "Dental Formula - Water Additive",
        description: "A short reel highlighting a dental water additive formula for better oral hygiene.",
        note: "Pet or human dental health product feature.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/DENTAL%20FORMULA%20-%20WATER%20ADDITIVE.mp4"
      },
      {
        type: "video",
        title: "F1 Car",
        description: "A fast-paced fact reel breaking down insane engineering stats of a Formula 1 car.",
        note: "Great for motorsport and engineering enthusiasts.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/F1%20CAR.mp4"
      },
      {
        type: "video",
        title: "Firefighter Wiggle",
        description: "A reel explaining the signature wiggle technique firefighters use when navigating through smoke.",
        note: "Safety and rescue technique breakdown.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/FIREFIGHTER%20WIGGLE.mp4"
      },
      {
        type: "video",
        title: "Happy Saffron",
        description: "A short fact reel on saffron's mood-boosting properties and its use as a natural antidepressant.",
        note: "Covers the science behind saffron and mental wellness.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/HAPPY%20SAFFRON.mp4"
      },
      {
        type: "video",
        title: "Have You Lost a Hat Too? #Melbourne",
        description: "A fun reel about Melbourne's notoriously windy streets and the hats they claim.",
        note: "Relatable moment for Melbourne locals and visitors.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/Have%20you%20lost%20a%20hat%20too%23melbour.mp4"
      },
      {
        type: "video",
        title: "How Do Astronauts POOP in Space!",
        description: "A hilarious yet informative reel on the engineering challenge of using the bathroom in zero gravity.",
        note: "One of the most asked questions about space life — answered.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/How%20Do%20Astronauts%20POOP%20in%20Space!.mp4"
      },
      {
        type: "video",
        title: "Mud Water",
        description: "A short reel about MudWtr, the coffee alternative made from mushrooms and adaptogens.",
        note: "Health and wellness product spotlight.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/MUD%20WATER.mp4"
      },
      {
        type: "video",
        title: "Meet Brick",
        description: "The ultimate solution to reclaim your focus — a physical device that blocks distracting apps.",
        note: "Productivity and digital wellness product feature.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/Meet%20Brick,%20the%20ultimate%20solution%20to%20reclaim%20your%20focus.mp4"
      },
      {
        type: "video",
        title: "On Sale - $500 Off! Saunas",
        description: "A promotional reel for high-quality, non-toxic saunas now on sale with $500 off.",
        note: "Limited-time offer on ready-to-use home saunas.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/On%20sale%20-%20$500%20off!All%20our%20saunas%20are--%20Made%20of%20high%20quality,%20non-toxic%20materials-%20Delivered%20rea.mp4"
      },
      {
        type: "video",
        title: "Shrimp Salad",
        description: "A quick and satisfying shrimp salad recipe or food fact reel packed with flavor tips.",
        note: "Great for food lovers and quick meal inspiration.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/SHRIMP%20SALAD.mp4"
      },
      {
        type: "video",
        title: "Why Are People Still Eating GOLD! 💀💸",
        description: "A shocking fact reel on the bizarre trend of consuming edible gold and whether it's worth it.",
        note: "Covers the health, history, and cost of eating gold.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/Why%20Are%20People%20Still%20Eating%20GOLD!%20%F0%9F%92%80%F0%9F%92%B8.mp4"
      },
      {
        type: "video",
        title: "Why Is the Stadium SHAKING!",
        description: "A fascinating reel explaining the science behind stadium vibrations during massive crowd events.",
        note: "Structural engineering meets crowd psychology.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/SHORT%20FACTS%20REELS/Why%20Is%20the%20Stadium%20SHAKING!.mp4"
      },
    ]
  },
  {
    type: "folder",
    title: "Real Estate",
    items: [
      {
        type: "video",
        title: "Corona del Mar",
        description: "A real estate showcase video highlighting the beauty and luxury of Corona del Mar properties.",
        note: "Coastal luxury real estate feature in Corona del Mar, CA.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/REAL%20ESTATE/Corona%20del%20Mar.mp4"
      },
      {
        type: "video",
        title: "Trial",
        description: "A trial edit for a real estate video project.",
        note: "Test/trial cut for review and feedback.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/REAL%20ESTATE/TRIaL.mp4"
      },
    ]
  },
  {
    type: "folder",
    title: "Long Form",
    items: [
      {
        type: "video",
        title: "CKC Trial",
        description: "A long-form trial edit for a CKC project.",
        note: "Trial cut for client review.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/LONG%20FORM%20/CKC_TRIAL.mp4"
      },
      {
        type: "video",
        title: "East Coast Living Throughout the Seasons",
        description: "A long-form documentary-style video capturing the essence of East Coast life across all four seasons.",
        note: "Lifestyle and travel feature along the East Coast.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/LONG%20FORM%20/Copy%20of%20East%20Coast%20living%20throughout%20the%20seasons.mp4"
      },
      {
        type: "video",
        title: "Hack-A-Shaq",
        description: "A long-form sports video diving into the infamous Hack-a-Shaq strategy in NBA history.",
        note: "In-depth basketball tactics and history breakdown.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/LONG%20FORM%20/Hack-A-Shaq.mp4"
      },
      {
        type: "video",
        title: "LeBron vs Kobe - Every Time They Faced Off",
        description: "A comprehensive long-form breakdown of every head-to-head matchup between LeBron James and Kobe Bryant.",
        note: "Epic NBA rivalry deep dive covering all their meetings.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/LONG%20FORM%20/LeBron%20vs%20Kobe%20-%20Every%20Time%20They%20Faced%20Off.mp4"
      },
      {
        type: "video",
        title: "Test Edit 2",
        description: "A second test edit for an ongoing long-form video project.",
        note: "Internal test cut for review.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/LONG%20FORM%20/Test%20Edit%202.mp4.mp4"
      },
      {
        type: "video",
        title: "Test Job",
        description: "A test job edit submitted for review and quality check.",
        note: "Trial production piece for client or internal approval.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/LONG%20FORM%20/Test%20job.mp4"
      },
      {
        type: "video",
        title: "VSL Final",
        description: "The final cut of a Video Sales Letter (VSL) designed to convert viewers into customers.",
        note: "Polished VSL ready for campaign deployment.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/LONG%20FORM%20/VSL%20FINAL.mp4"
      },
      {
        type: "video",
        title: "3 forgotten tricks from the 1950s on how to be a beautiful woman",
        description: "Test Vintage-style Edit for a client.",
        note: "vintage-style edit about 1950s",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/LONG%20FORM%20/3%20forgotten%20tricks%20from%20the%201950s%20on%20how%20to%20be%20a%20beautiful%20woman.mp4"
      },
    ]
  },
  {
    type: "folder",
    title: "AI Generated",
    items: [
      {
        type: "video",
        title: "Bunny as a Chef",
        description: "An AI-generated video of an adorable bunny living its best life as a chef.",
        note: "Tagged #rabbit #pets #mycuterabbit — great for pet-loving audiences.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/Bunny%20as%20A%20Chef%20%23rabbit%20%23pets%20%23mycuterabbit.mp4"
      },
      {
        type: "video",
        title: "Bunny Goes Super Saiyan 😮",
        description: "An AI-generated clip of a bunny powering up Dragon Ball Z style — watch until the end!",
        note: "Viral-style AI animation blending cute pets with anime culture.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/Bunny%20goes%20Super%20Saiyan%20%F0%9F%98%AE%20(Watch%20until%20the%20End!!).mp4"
      },
      {
        type: "video",
        title: "Cat vs Alien",
        description: "An AI-generated showdown between a fearless cat and an extraterrestrial invader.",
        note: "Action-packed AI animation for sci-fi and pet content fans.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/CAT%20vs%20ALIEN.mp4"
      },
      {
        type: "video",
        title: "Celebration!",
        description: "A festive AI-generated video bursting with celebratory energy and visuals.",
        note: "Great for milestone posts, holidays, or hype content.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/CELEBRATION!.mp4"
      },
      {
        type: "video",
        title: "The Bunny That Found a Mysterious Phone",
        description: "An AI-generated short about a curious bunny who stumbles upon a mysterious phone.",
        note: "Tagged #shorts #funny #pets #bunny — built for viral short-form reach.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/Copy%20of%20The%20Bunny%20That%20Found%20a%20Mysterious%20Phone%20%23shorts%20%23funny%20%23pets%20%23bunny.mp4"
      },
      {
        type: "video",
        title: "Dodge It",
        description: "An AI-generated action reel featuring high-speed dodging sequences and dramatic visuals.",
        note: "Fast-paced AI animation built for entertainment and engagement.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/DODGE%20IT.mp4"
      },
      {
        type: "video",
        title: "Dulla",
        description: "An AI-generated character piece featuring a bold and expressive AI persona named Dulla.",
        note: "Original AI character showcase.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/DULLA.mp4"
      },
      {
        type: "video",
        title: "Dudi Dudi Dum Dummm",
        description: "A fun and quirky AI-generated bunny video set to a catchy rhythm.",
        note: "Tagged #rabbit #bunny #pets — lighthearted content for pet audiences.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/Dudi%20dudi%20dum%20dummm%20%23rabbit%20%23bunny%20%23pets.mp4"
      },
      {
        type: "video",
        title: "Egg Breaking",
        description: "An AI-generated satisfying and dramatic egg-breaking sequence.",
        note: "Oddly satisfying AI visual content.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/EGG%20BREAKING.mp4"
      },
      {
        type: "video",
        title: "Family, Cake, and Business Boundaries",
        description: "An AI-generated storytelling piece exploring the clash between family dynamics and professional boundaries.",
        note: "Relatable narrative-driven AI content for lifestyle audiences.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/Family,%20Cake,%20and%20Business%20Boundaries.mp4"
      },
      {
        type: "video",
        title: "Fat Bunny Becomes a Dimensional Chef King",
        description: "An AI-generated epic short where a chubby bunny rises to become the ruler of a culinary dimension.",
        note: "Tagged #shorts #bunny #cutebunny — wild AI storytelling at its best.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/Fat%20Bunny%20Becomes%20a%20Dimensional%20Chef%20King%20%23shorts%20%23bunny%20%23cutebunny.mp4"
      },
      {
        type: "video",
        title: "Fluffy Bunny vs. Alligator with a Bat!",
        description: "An AI-generated battle clip of a fluffy bunny squaring off against an alligator armed with a bat.",
        note: "Tagged #shorts #aibunny #bunny #cutebunny — absurd and entertaining AI action.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/Fluffy%20Bunny%20vs.%20Alligator%20with%20a%20Bat_!%20%23shorts%20%23aibunny%20%23bunny%20%23cutebunny.mp4"
      },
      {
        type: "video",
        title: "Is That All You Got",
        description: "A bold AI-generated hype video with an intense, challenging energy.",
        note: "Great for motivational or combat-themed AI content.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/IS%20THAT%20ALL%20YOU%20GOT.mp4"
      },
      {
        type: "video",
        title: "King Charles",
        description: "An AI-generated regal piece featuring a dramatic portrayal of King Charles.",
        note: "Royal-themed AI generated content with a cinematic feel.",
        videoUrl: "https://b1kjuumedia2026.blob.core.windows.net/videos/AI%20GENERATED/KING%20CHARLES.mp4"
      },
    ]
  }
];

export const editorTools = [
  "Adobe Premiere Pro",
  "Adobe Photoshop",
  "Affinity",
  "Lightroom",
  "DaVinci Resolve",
  "Canva",
  "CapCut",
  "Figma",
];
