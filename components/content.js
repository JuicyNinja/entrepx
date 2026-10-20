export const compareRows = [
  ["Ongoing cost", "$1,500/mo flat, no royalties", "6–9% of revenue plus monthly fees"],
  ["Your brand", "Yours, outright", "Rented from the franchisor"],
  ["Equity", "100% of your brand and business", "Brand equity builds for the franchisor"],
  ["Contract", "12 months, renews unless you cancel", "10 years is common"],
  ["Leadership", "Fractional CMO, CTO and COO", "Field rep, mostly at launch"],
  ["Tech", "Website, apps, CRM, phones, invoicing, run for you", "Required systems, often billed as a tech fee"],
  ["Startup fee", "Gets you to revenue: brand, systems, software, training, launch", "Buys the right to pay royalties; kit, training and equipment often extra"],
  ["Partner network", "Tax, bookkeeping, banking, financing, wealth strategy", "Usually on your own"],
  ["Selling", "Sell anytime, to anyone", "Franchisor approval and transfer fees"],
  ["If you leave", "Keep your brand and business with a small buyout", "De-brand, often with a non-compete"],
  ["Marketing", "Your own brand, built by your fractional CMO", "Mandatory ad fund for theirs"],
  ["Coaching", "A 3-year playbook and monthly accountability", "Mostly front-loaded at training"],
  ["Financing", "Extended financing options through partners", "Lender-dependent"],
];

export const steps = [
  ["Readiness survey", "15 questions. Your score, tier, strengths and gaps in 5 minutes.", "Free · 5 minutes"],
  ["Discovery session", "A 2-hour working session on your results, goals, the real numbers and the businesses that fit you.", "Free · 2 hours"],
  ["Assessment and placement", "15 areas of business, scored with an advisor. We size the business to your capital, reserve and pace.", "Once you commit"],
  ["Build and launch", "Your brand, website, sales system, software and business setup, built for you.", "~30 days, as fast as 2 weeks"],
  ["Coached to scale", "A 3-year playbook and a leadership team that tracks your numbers with you.", "Years 1–3"],
];

export const terms = [
  ["$0", "Royalties"],
  ["$1,500", "Flat per month"],
  ["12 mo", "Agreement"],
  ["100%", "Yours to keep or sell"],
];

export const team = [
  ["Fractional CMO", "Marketing and sales", ["Brand and positioning", "Website and local SEO", "Lead generation and ads", "Sales process and scripts", "Follow-up and reviews"]],
  ["Fractional CTO", "All of your tech", ["Choose, set up and connect every tool", "Web app and mobile app", "Data and reporting", "Security and backups", "Support when something breaks"]],
  ["Fractional COO", "Operations and coaching", ["Systems and SOPs", "KPIs and dashboards", "Hiring plan and roles", "Your 3-year playbook", "Monthly accountability"]],
];

export const tech = [
  ["Website", "Built on your brand, SEO-ready."],
  ["Web app", "Customer portal, booking, quotes."],
  ["Mobile app", "For you and your crew in the field."],
  ["Business email", "Your domain, set up right."],
  ["CRM", "Every lead and customer in one place."],
  ["Project management", "Jobs, schedules, checklists."],
  ["Phone system", "Business line, call tracking, texting."],
  ["Invoicing and payments", "Quotes, invoices, card payments."],
];

export const partners = [
  ["Local Growth Machines", "Marketing", "Campaigns, ads, local SEO and content."],
  ["CiviClaim", "Insurance billing", "Insurance billing for restoration and cleanup contractors."],
  ["SwagOptic", "Print and promo", "Business cards, signage, branded apparel and promo products."],
  ["ProTrak", "Ops software", "Project management and operations software for jobs, crews and schedules."],
];

export const stages = [
  ["Start", ["Banking", "Financing for equipment and vehicles", "Entity and legal", "Business insurance"]],
  ["Run", ["Bookkeeping", "Payroll and HR", "Tax services", "Insurance billing (CiviClaim)", "Ops software (ProTrak)"]],
  ["Grow", ["Marketing (Local Growth Machines)", "Print and promo (SwagOptic)", "Referral partners", "Hiring and training"]],
  ["Build wealth", ["Wealth strategy", "Tax planning", "Succession and estate", "Valuation and exit advisors"]],
];

export const playbook = [
  ["30 days", "Entity, insurance and banking. Brand and systems live. First marketing in market."],
  ["60 days", "Sales process running. First jobs closed and tracked. Weekly habits in place."],
  ["90 days", "Weakest areas from your assessment fixed first. Referral partners started."],
  ["Year 1", "Startup capital paid back, steady leads, first hire planned."],
  ["Year 2", "Owner-operator to owner. Team, KPIs and reporting carry the day-to-day."],
  ["Year 3", "Scale and build value: more crews, more territory or a second brand."],
];

export const industries = [
  {
    slug: "resin-countertops",
    name: "Resin Countertops",
    tagline: "Low startup, high margin per install, and a product people show off.",
    image: "/media/resin.jpg",
    video: "/media/resin-loop.mp4",
    alt: "Resin being poured onto a marbled countertop",
    exStartup: 25000,
    frStartup: 50000,
    ticket: 3245,
    margin: 0.72,
    royalty: 0.07,
    frFees: 500,
    otherFixed: 1000,
    ramp: [2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8, 8],
    note: "Low startup, high margin per install. Owner-operator margin.",
    fit: ["Hands-on craft and selling the result", "Learn or steady pace", "Comfortable in customers’ homes"],
  },
  {
    slug: "biohazard-cleanup",
    name: "Biohazard Cleanup",
    tagline: "Large average job, steady demand, and work that matters to families on a hard day.",
    image: "/media/biohazard.jpg",
    alt: "Technician in a protective suit loading equipment into a service van",
    exStartup: 35000,
    frStartup: 100000,
    ticket: 8500,
    margin: 0.85,
    royalty: 0.07,
    frFees: 450,
    otherFixed: 1000,
    ramp: [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5],
    note: "Large average job, owner-operator margin. Insurance-paid jobs can take 30 to 90 days to collect.",
    fit: ["Calm under pressure, discreet", "Steady pace with on-call nights", "Comfortable with insurance billing (CiviClaim helps)"],
  },
];

export function payback(ind) {
  const EX_FEE = 1500;
  let ex = -ind.exStartup, fr = -ind.frStartup, exM = null, frM = null;
  const rows = ind.ramp.map((jobs, i) => {
    const rev = jobs * ind.ticket, gp = rev * ind.margin;
    ex += gp - (EX_FEE + ind.otherFixed);
    fr += gp - rev * ind.royalty - (ind.frFees + ind.otherFixed);
    if (exM === null && ex >= 0) exM = i + 1;
    if (frM === null && fr >= 0) frM = i + 1;
    return { m: i + 1, ex, fr };
  });
  return { exMonth: exM, frMonth: frM, ex12: ex, fr12: fr, rows };
}

export const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");
