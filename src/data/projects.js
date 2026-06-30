// ── Edit this file to add, remove, or update featured projects ──
//
// `thumb` controls which placeholder visual shows in the project card:
//   "browser"   → mini browser-window mockup (good for websites)
//   "browser2"  → simplified browser mockup (fewer lines)
//   "ai-chat"   → AI chat bubble exchange (good for AI/prompting projects)
//   "glyph"     → a single large faded symbol (good for non-visual projects)
//
// For "glyph" thumbs, set `glyph` to the character to display (e.g. "✦").

export const projects = [
  {
    title: "Business landing page",
    description: "Responsive multi-section site for a local business — hero, services grid, testimonials, and contact form.",
    category: "Web",
    status: "Live",
    tech: ["HTML", "CSS", "JavaScript"],
    thumb: "browser",
  },
  {
    title: "AI prompting workshop",
    description: "Hands-on workshop for students and staff — prompt structure, chain-of-thought, and AI productivity.",
    category: "AI teaching",
    status: "3 sessions",
    tech: ["Prompt engineering", "Claude", "ChatGPT"],
    thumb: "ai-chat",
    chat: [
      { from: "user", text: "Write a function that…" },
      { from: "ai", text: "Here's the solution:" },
      { from: "user", text: "Now simplify it" },
    ],
  },
  {
    title: "Portfolio website",
    description: "Built from scratch — starting as static HTML/CSS, actively rebuilding in React with custom domain deployment.",
    category: "Web",
    status: "In progress",
    tech: ["HTML", "CSS", "React"],
    thumb: "browser2",
  },
  {
    title: "AI prompt library",
    description: "50+ reusable prompt templates for writing, code review, lesson planning, and email — documented with usage notes.",
    category: "AI",
    status: "Library",
    tech: ["Prompt design", "Notion"],
    thumb: "ai-chat",
    chat: [
      { from: "user", text: "Summarize this in 3 points" },
      { from: "ai", text: "1. … 2. … 3. …" },
      { from: "user", text: "Now make it formal" },
    ],
  },
  {
    title: "School event page",
    description: "Event site with schedule, speaker bios, and registration form. First project delivered to a real audience.",
    category: "Web",
    status: "Shipped",
    tech: ["HTML", "CSS", "Forms"],
    thumb: "glyph",
    glyph: "✦",
  },
  {
    title: "School records system",
    description: "Data-entry and records management app with search, clean forms, and CSV export — inspired by admin work.",
    category: "Academic",
    status: "Shipped",
    tech: ["JavaScript", "localStorage"],
    thumb: "glyph",
    glyph: "⌘",
  },
  {
    title: "ICT literacy curriculum",
    description: "Full computer literacy curriculum — keyboard, file management, internet safety — converted to reusable materials.",
    category: "Teaching",
    status: "Delivered",
    tech: ["Curriculum design", "Teaching"],
    thumb: "glyph",
    glyph: "◈",
  },
]
