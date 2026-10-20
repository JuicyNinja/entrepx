// 15 questions. Q1 segments the lead (unscored); Q2–Q15 score 0–3 each, 42 points max → 0–100.
export const QUESTIONS = [
  { dim: "Where you are", seg: true, q: "Where are you today?", o: ["Just exploring the idea of owning a business", "Looking seriously at franchises", "Comparing options and ready to decide soon", "I already own a business and want to grow it"] },
  { dim: "Timing", q: "When do you want to be open for business?", o: ["Someday, no timeline yet", "Within the next 12 months", "Within 6 months", "As soon as possible"] },
  { dim: "Time", q: "How many hours a week could you give your business in the first year?", o: ["Under 10, I would keep my job", "10 to 20", "20 to 40, part-time to start", "40 or more, I am all in"] },
  { dim: "Startup capital", q: "How much could you put toward starting the business?", hint: "Money for the startup itself, not your living expenses. A rough range is fine.", o: ["Under $10,000", "$10,000 to $25,000", "$25,000 to $75,000", "More than $75,000"] },
  { dim: "Reserve", q: "If the business paid you nothing at first, how many months could you cover your bills?", hint: "Savings set aside on top of your startup money.", o: ["Less than 3 months", "3 to 6 months", "6 to 12 months", "More than 12 months"] },
  { dim: "Risk", q: "How do you feel about financial risk?", o: ["I need a guaranteed paycheck", "Small, careful risks only", "Calculated risks with a plan behind them", "I am comfortable betting on myself"] },
  { dim: "Sales", q: "How do you feel about selling and asking for the sale?", o: ["I avoid it", "I can do it, but it is uncomfortable", "I have done it and I am decent at it", "I like it, and I am good at it"] },
  { dim: "Leadership", q: "What is your experience leading people?", o: ["None yet", "I have led projects or volunteers", "I have managed a small team", "I have managed managers or run a business"] },
  { dim: "Resilience", q: "When a plan falls apart, what do you usually do?", o: ["Wait for someone to tell me the next move", "Get frustrated, then try again", "Adjust quickly and keep going", "I usually had a plan B ready"] },
  { dim: "Discipline", q: "How structured are your days?", o: ["I rarely plan ahead", "I plan when I have to", "I plan most days", "My calendar runs my life"] },
  { dim: "Coachability", q: "How do you feel about coaching and accountability?", o: ["I prefer to figure things out alone", "I take advice when I am stuck", "I want regular coaching", "I look for mentors and someone to hold me accountable"] },
  { dim: "Support", q: "How does your household feel about you starting a business?", o: ["They are against it", "We have not talked about it yet", "They are supportive", "They are all in with me"] },
  { dim: "Industry", q: "What is your experience with home services or the trades?", o: ["None", "Only as a customer", "I have worked in the industry", "I have owned or run that kind of business"] },
  { dim: "Tools", q: "How comfortable are you with business software and apps?", o: ["I avoid them", "The basics only", "Comfortable", "I pick up new tools fast"] },
  { dim: "Goal", q: "What matters most to you about owning a business?", o: ["A steady paycheck", "Flexibility and time", "Building something that is mine", "Building something that scales and that I can sell"] },
];

export const TIERS = [
  { min: 75, name: "Empire-Ready", title: "You are ready to build.", verdict: "Your time, resources and mindset line up with what ownership takes. The fastest way forward is a placement and build plan.", lead: "You scored in the top tier. A discovery session is the fastest way to confirm the fit and map your path to ownership." },
  { min: 50, name: "Contender", title: "You have the drive. Let’s close the gaps.", verdict: "You have real strengths to build on. A plan for the areas below is what turns that into a business.", lead: "Contenders are where many owners start. On a discovery session we walk your results and the gaps worth closing first." },
  { min: 0, name: "Foundation", title: "The foundation comes first.", verdict: "Ownership is a fit for many people who start here. Getting a few areas in place first makes the difference.", lead: "A discovery session shows what to put in place, and when, before you invest a dollar." },
];

export function scoreSurvey(ans) {
  const scored = QUESTIONS.map((q, n) => ({ q, v: ans[n] })).filter((x) => !x.q.seg);
  const pts = scored.reduce((s, x) => s + x.v, 0);
  const score = Math.round((pts / (scored.length * 3)) * 100);
  const tier = TIERS.find((t) => score >= t.min);
  const sorted = scored.slice().sort((a, b) => a.v - b.v);
  const gaps = new Set(sorted.slice(0, 2).map((x) => x.q.dim));
  const strengths = new Set(sorted.slice(-2).filter((x) => x.v >= 2).map((x) => x.q.dim));
  return { scored, score, tier, gaps, strengths, segment: QUESTIONS[0].o[ans[0]] };
}
