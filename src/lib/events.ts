import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

export type EventItem = {
  title: string;
  date: string; // ISO or readable
  time?: string;
  timezone?: string;
  city?: string;
  country?: string;
  venue?: string;
  url?: string;
  source?: string;
  link_url?: string;
  link_text?: string;
};

export function loadEvents(): EventItem[] {
  const filePath = path.join(process.cwd(), "src/data/events.yml");
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = YAML.parse(raw);

  // Adjust if your YAML structure differs (e.g., { events: [...] })
  const events: EventItem[] = Array.isArray(parsed)
    ? parsed
    : (parsed?.events ?? []);

  // Sort newest first
  events.sort((a, b) => (a.date < b.date ? 1 : -1));
  return events;
}
