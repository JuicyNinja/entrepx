import { opportunities } from "../components/opportunities";
import { industries } from "../components/content";

const BASE = "https://www.entrepx.com";

export default function sitemap() {
  const pages = ["", "/how-it-works", "/what-you-get", "/partners", "/build-value", "/entrepx-vs-franchise", "/opportunities", "/survey", "/book"];
  return [
    ...pages.map((p) => ({ url: BASE + p, changeFrequency: "weekly", priority: p === "" ? 1 : 0.8 })),
    ...opportunities.map((o) => ({ url: `${BASE}/opportunities/${o.slug}`, changeFrequency: "monthly", priority: 0.6 })),
    ...industries.map((i) => ({ url: `${BASE}/industries/${i.slug}`, changeFrequency: "monthly", priority: 0.5 })),
  ];
}
