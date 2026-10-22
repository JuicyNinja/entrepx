export const usd = (cents) =>
  cents == null ? "—" : (cents / 100).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export const shortDate = (d) =>
  d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "America/Denver" }) : "—";

export const STAGE_LABEL = {
  survey_complete: "New lead",
  contacted: "Contacted",
  discovery_booked: "Discovery booked",
  discovery_complete: "Discovery held",
  opportunity_presented: "Opportunity presented",
  proposal_sent: "Proposal sent",
  committed: "Committed",
  assessment_scheduled: "Assessment sent",
  assessment_complete: "Assessment complete",
  playbook_delivered: "Playbook delivered",
  member: "Member",
  nurture: "Nurture",
  closed_lost: "Closed lost",
  cancelled: "Cancelled",
};

export const TIER_LABEL = { foundation: "Foundation", contender: "Contender", empire_ready: "Empire-Ready" };

export const TERRITORY_STATUS = {
  available: { label: "Available", tone: "" },
  committed: { label: "Committed", tone: "o" },
  first_right_open: { label: "First right open", tone: "w" },
  optioned: { label: "Optioned", tone: "o" },
  owned: { label: "Owned", tone: "s" },
};

export const FAMILY_LABEL = {
  exterior_care: "Exterior care", mobile_auto: "Mobile auto", lawn_and_yard: "Lawn and yard",
  pest_and_wildlife: "Pest and wildlife", restoration: "Restoration", painting: "Painting",
  flooring_and_coatings: "Flooring and coatings", countertops: "Countertops", holiday_lighting: "Holiday lighting", other: "Other",
};
