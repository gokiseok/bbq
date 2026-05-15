import type { MetadataRoute } from "next";

type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

const BASE = "https://bbq.gokiseok.com";

// Single source of truth for routes. lastmod is set to the current build time
// (auto-injected each build) — no hardcoded dates.
const ROUTES: { path: string; priority: number; changeFrequency: Freq }[] = [
  // Korean
  { path: "/",              priority: 1.0,  changeFrequency: "weekly" },
  { path: "/group-dining",  priority: 0.95, changeFrequency: "weekly" },
  { path: "/menu",          priority: 0.9,  changeFrequency: "weekly" },
  { path: "/rooms",         priority: 0.9,  changeFrequency: "monthly" },
  { path: "/reservation",   priority: 0.85, changeFrequency: "monthly" },
  { path: "/access",        priority: 0.7,  changeFrequency: "monthly" },
  { path: "/faq",           priority: 0.7,  changeFrequency: "monthly" },
  // English mirror (priority -0.05 vs. Korean per locale weighting)
  { path: "/en",                priority: 0.95, changeFrequency: "weekly" },
  { path: "/en/group-dining",   priority: 0.9,  changeFrequency: "weekly" },
  { path: "/en/menu",           priority: 0.85, changeFrequency: "weekly" },
  { path: "/en/rooms",          priority: 0.85, changeFrequency: "monthly" },
  { path: "/en/reservation",    priority: 0.8,  changeFrequency: "monthly" },
  { path: "/en/access",         priority: 0.65, changeFrequency: "monthly" },
  { path: "/en/faq",            priority: 0.65, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
