// Generated from the EntrepX home services lineup. Figures are illustrative industry benchmarks, not projections.
export const tiers = [[0, "Starter", "Under $10K"], [1, "Class 1", "$10K–25K"], [2, "Class 2", "$25K–50K"], [3, "Class 3", "$50K–100K"], [4, "Class 4", "Over $100K"]];
export const tierName = (t) => (t === 0 ? "Starter" : "Class " + t);
export const opportunities = [
{
"slug": "pet-waste-removal",
"name": "Pet waste removal",
"family": "Lawn and yard",
"lo": 1,
"hi": 4,
"tier": 0,
"vehicle": "Own car or small truck",
"ticketText": "$15–30 per visit ($80–120/mo)",
"ticket": 25,
"jobs": 400,
"unit": "visits",
"months": 12,
"monthly": 10000,
"runRate": 120000,
"mlo": 70,
"mhi": 80,
"repeat": "High",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Cheapest start; route density matters more than equipment.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "Someone who wants a simple route business with almost no startup cost",
"pros": [
"Weekly subscriptions mean predictable revenue",
"Opens on under $10K of equipment",
"High margin per job",
"No special license to start"
],
"cons": [
"Unglamorous work, and revenue only grows by adding stops",
"Small tickets need volume and tight routes"
],
"adds": [
"yard-maintenance",
"trash-can-cleaning",
"lawn-health"
],
"path": "Add yard maintenance to the same customers, then a second route",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 200 visits a month by month 12.",
"Reach steady volume, around 400 visits a month. Add trash can cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add yard maintenance to the same customers, then a second route."
],
"deepDive": ""
},
{
"slug": "yard-maintenance",
"name": "Yard maintenance (mow, trim, edge)",
"family": "Lawn and yard",
"lo": 10,
"hi": 30,
"tier": 1,
"vehicle": "Truck plus open trailer",
"ticketText": "$40–70 per weekly visit",
"ticket": 55,
"jobs": 280,
"unit": "visits",
"months": 7,
"monthly": 15400,
"runRate": 107800,
"mlo": 40,
"mhi": 55,
"repeat": "High",
"license": "Low",
"season": "Apr–Oct",
"franchise": "",
"note": "Commercial mower $8K–15K is most of the cost. Pair with snow removal for winter.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A hands-on outdoor worker who likes routine and building routes",
"pros": [
"Customers stay for years once they’re on the route",
"Customers come back on a schedule",
"No special license to start"
],
"cons": [
"Mowing is crowded and price-shopped; winter needs a plan",
"Small tickets need volume and tight routes"
],
"adds": [
"lawn-health",
"residential-snow-removal",
"sprinkler-and-irrigation-service",
"landscape-lighting-install"
],
"path": "Add snow removal for winter, then lawn health once licensed",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 140 visits a month by month 12.",
"Reach steady volume, around 280 visits a month in season. Add residential snow removal for the same customers and plan your first hire.",
"Step from operator to owner. Add snow removal for winter, then lawn health once licensed."
],
"deepDive": ""
},
{
"slug": "lawn-health",
"name": "Lawn health (fertilizer, weed control, aeration)",
"family": "Lawn and yard",
"lo": 8,
"hi": 20,
"tier": 1,
"vehicle": "Truck with spreader/spray rig",
"ticketText": "$50–80 per application, 5–7 per year; aeration $100–200",
"ticket": 70,
"jobs": 250,
"unit": "visits",
"months": 8,
"monthly": 17500,
"runRate": 140000,
"mlo": 50,
"mhi": 65,
"repeat": "High",
"license": "High",
"season": "Mar–Nov",
"franchise": "",
"note": "State applicator license for fertilizer and weed control; aerator $3K–8K.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A detail-minded owner willing to earn an applicator license",
"pros": [
"Program sales: 5–7 paid visits per customer per year",
"High margin per job"
],
"cons": [
"State license and chemical rules come first",
"Seasonal: busiest mar–Nov",
"Small tickets need volume and tight routes"
],
"adds": [
"yard-maintenance",
"sprinkler-and-irrigation-service",
"mosquito-and-tick-control"
],
"path": "Add mosquito and tick on the same license, then a second truck",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 125 visits a month by month 12.",
"Reach steady volume, around 250 visits a month in season. Add yard maintenance for the same customers and plan your first hire.",
"Step from operator to owner. Add mosquito and tick on the same license, then a second truck."
],
"deepDive": ""
},
{
"slug": "sprinkler-and-irrigation-service",
"name": "Sprinkler and irrigation service",
"family": "Lawn and yard",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Truck",
"ticketText": "$75–150 start-up/winterize, $150–500 repairs",
"ticket": 180,
"jobs": 90,
"unit": "visits",
"months": 6,
"monthly": 16200,
"runRate": 97200,
"mlo": 50,
"mhi": 65,
"repeat": "High",
"license": "Medium",
"season": "Spring and fall",
"franchise": "",
"note": "Backflow testing certification adds a recurring line.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A problem-solver who likes troubleshooting more than heavy labor",
"pros": [
"Spring start-ups and fall blowouts book themselves every year",
"Customers come back on a schedule",
"High margin per job"
],
"cons": [
"Six busy months, then very quiet",
"Reviews and steady marketing decide who wins locally",
"Check your state’s licensing before you start"
],
"adds": [
"yard-maintenance",
"landscape-lighting-install",
"lawn-health"
],
"path": "Add backflow testing and landscape lighting to even out the year",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 45 visits a month by month 12.",
"Reach steady volume, around 90 visits a month in season. Add yard maintenance for the same customers and plan your first hire.",
"Step from operator to owner. Add backflow testing and landscape lighting to even out the year."
],
"deepDive": ""
},
{
"slug": "landscape-lighting-install",
"name": "Landscape lighting install",
"family": "Lawn and yard",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Truck",
"ticketText": "$2,000–6,000 per home",
"ticket": 3500,
"jobs": 4,
"unit": "jobs",
"months": 12,
"monthly": 14000,
"runRate": 168000,
"mlo": 45,
"mhi": 60,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Low-voltage only; annual service visits for bulbs and timers.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A design-minded installer who enjoys showing customers the finished result",
"pros": [
"Big tickets with modest gear",
"No special license to start",
"Works all year"
],
"cons": [
"Few repeat sales; needs steady marketing",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"permanent-led-roofline-lighting",
"holiday-lighting-install",
"sprinkler-and-irrigation-service"
],
"path": "Pair with permanent LED lighting for one outdoor-lighting brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 2 jobs a month by month 12.",
"Reach steady volume, around 4 jobs a month. Add holiday lighting install for the same customers and plan your first hire.",
"Step from operator to owner. Pair with permanent LED lighting for one outdoor-lighting brand."
],
"deepDive": ""
},
{
"slug": "residential-snow-removal",
"name": "Residential snow removal",
"family": "Lawn and yard",
"lo": 8,
"hi": 20,
"tier": 1,
"vehicle": "Plow truck (plow $6K–10K on your truck)",
"ticketText": "$40–75 per push or $300–600 per season",
"ticket": 55,
"jobs": 250,
"unit": "visits",
"months": 4,
"monthly": 13750,
"runRate": 55000,
"mlo": 50,
"mhi": 65,
"repeat": "High",
"license": "Low",
"season": "Nov–Mar",
"franchise": "",
"note": "Season contracts; natural winter pair for yard maintenance crews.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "An outdoor operator who already owns a truck and wants winter income",
"pros": [
"Season contracts paid up front",
"Customers come back on a schedule",
"High margin per job",
"No special license to start"
],
"cons": [
"Weather decides your revenue; 3 a.m. starts",
"Small tickets need volume and tight routes"
],
"adds": [
"yard-maintenance",
"holiday-lighting-install"
],
"path": "Run as the winter half of a yard maintenance brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 125 visits a month by month 12.",
"Reach steady volume, around 250 visits a month in season. Add holiday lighting install for the same customers and plan your first hire.",
"Step from operator to owner. Run as the winter half of a yard maintenance brand."
],
"deepDive": ""
},
{
"slug": "landscaping-and-hardscape",
"name": "Landscaping and hardscape",
"family": "Lawn and yard",
"lo": 40,
"hi": 120,
"tier": 3,
"vehicle": "Truck plus equipment trailer",
"ticketText": "$5,000–30,000 per project",
"ticket": 12000,
"jobs": 4,
"unit": "jobs",
"months": 8,
"monthly": 48000,
"runRate": 384000,
"mlo": 30,
"mhi": 45,
"repeat": "Low",
"license": "Medium",
"season": "Spring–fall",
"franchise": "",
"note": "Skid steer or mini excavator drives the cost.",
"basis": "Sourced",
"trak": "RemodelTrak",
"fit": "An experienced builder ready to run crews and bigger projects",
"pros": [
"Large projects and strong referral value",
"A service customers already understand and buy"
],
"cons": [
"High capital and a crew from day one",
"Seasonal: busiest spring–fall",
"Little repeat business, so marketing never stops"
],
"adds": [
"landscape-lighting-install",
"sprinkler-and-irrigation-service",
"yard-maintenance"
],
"path": "Add maintenance contracts so installs feed recurring revenue",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 2 jobs a month by month 12.",
"Reach steady volume, around 4 jobs a month in season. Add landscape lighting install for the same customers and plan your first hire.",
"Step from operator to owner. Add maintenance contracts so installs feed recurring revenue."
],
"deepDive": ""
},
{
"slug": "tree-service",
"name": "Tree service",
"family": "Lawn and yard",
"lo": 60,
"hi": 200,
"tier": 4,
"vehicle": "Truck plus chipper",
"ticketText": "$500–2,500 per job",
"ticket": 1200,
"jobs": 22,
"unit": "jobs",
"months": 12,
"monthly": 26400,
"runRate": 316800,
"mlo": 40,
"mhi": 55,
"repeat": "Low",
"license": "Medium",
"season": "Year-round",
"franchise": "",
"note": "Chipper, stump grinder, climbing gear; insurance is expensive.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A safety-first operator with climbing or arborist experience",
"pros": [
"Steady demand and storm-driven spikes",
"Works all year"
],
"cons": [
"Highest equipment cost and insurance on the list",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"residential-snow-removal",
"landscaping-and-hardscape"
],
"path": "Add plant health care and storm-response contracts",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 11 jobs a month by month 12.",
"Reach steady volume, around 22 jobs a month. Add residential snow removal for the same customers and plan your first hire.",
"Step from operator to owner. Add plant health care and storm-response contracts."
],
"deepDive": ""
},
{
"slug": "window-cleaning",
"name": "Window cleaning",
"family": "Exterior care",
"lo": 2,
"hi": 8,
"tier": 0,
"vehicle": "Car or van with ladder rack",
"ticketText": "$250–600 per home",
"ticket": 400,
"jobs": 40,
"unit": "jobs",
"months": 9,
"monthly": 16000,
"runRate": 144000,
"mlo": 50,
"mhi": 70,
"repeat": "Medium",
"license": "Low",
"season": "Spring–fall",
"franchise": "Window Genie: $136K–$306K, 7% royalty",
"note": "Pairs with gutters, washing and holiday lights.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A people-friendly owner who wants a low-cost start and repeat customers",
"pros": [
"Low cost, clean work, customers rebook twice a year",
"High margin per job",
"No special license to start"
],
"cons": [
"Ladders and heights; slower in winter",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"gutter-cleaning",
"window-screen-repair",
"pressure-and-soft-washing",
"holiday-lighting-install"
],
"path": "Build an exterior-care membership with gutters, washing and lights",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 20 jobs a month by month 12.",
"Reach steady volume, around 40 jobs a month in season. Add gutter cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Build an exterior-care membership with gutters, washing and lights."
],
"deepDive": ""
},
{
"slug": "window-screen-repair",
"name": "Window screen repair",
"family": "Exterior care",
"lo": 2,
"hi": 6,
"tier": 0,
"vehicle": "Van or car",
"ticketText": "$25–60 per screen, $200–500 per home",
"ticket": 300,
"jobs": 25,
"unit": "jobs",
"months": 8,
"monthly": 7500,
"runRate": 60000,
"mlo": 60,
"mhi": 75,
"repeat": "Low",
"license": "Low",
"season": "Spring–fall",
"franchise": "",
"note": "Easy upsell on window cleaning visits.",
"basis": "Estimate",
"trak": "HandyTrak",
"fit": "A window cleaner adding an easy upsell",
"pros": [
"Very low cost; sells itself on window jobs",
"High margin per job",
"No special license to start"
],
"cons": [
"Small standalone market",
"Seasonal: busiest spring–fall",
"Little repeat business, so marketing never stops"
],
"adds": [
"window-cleaning",
"gutter-cleaning"
],
"path": "Keep as an add-on inside an exterior-care brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 12 jobs a month by month 12.",
"Reach steady volume, around 25 jobs a month in season. Add window cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Keep as an add-on inside an exterior-care brand."
],
"deepDive": ""
},
{
"slug": "gutter-cleaning",
"name": "Gutter cleaning",
"family": "Exterior care",
"lo": 4,
"hi": 10,
"tier": 0,
"vehicle": "Truck with ladder rack",
"ticketText": "$150–350 per home",
"ticket": 230,
"jobs": 60,
"unit": "jobs",
"months": 6,
"monthly": 13800,
"runRate": 82800,
"mlo": 50,
"mhi": 65,
"repeat": "Medium",
"license": "Low",
"season": "Spring and fall",
"franchise": "",
"note": "Easy add-on to windows and washing.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "Someone comfortable on ladders who wants spring and fall routes",
"pros": [
"Easy to add to windows and washing",
"Opens on under $10K of equipment",
"High margin per job",
"No special license to start"
],
"cons": [
"Seasonal and weather-dependent",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"window-cleaning",
"seamless-gutter-install",
"pressure-and-soft-washing",
"holiday-lighting-install"
],
"path": "Upgrade to gutter guards and seamless gutter installs",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 30 jobs a month by month 12.",
"Reach steady volume, around 60 jobs a month in season. Add window cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Upgrade to gutter guards and seamless gutter installs."
],
"deepDive": ""
},
{
"slug": "seamless-gutter-install",
"name": "Seamless gutter install",
"family": "Exterior care",
"lo": 15,
"hi": 35,
"tier": 2,
"vehicle": "Truck plus trailer for gutter machine",
"ticketText": "$1,500–4,000 per home",
"ticket": 2500,
"jobs": 10,
"unit": "jobs",
"months": 8,
"monthly": 25000,
"runRate": 200000,
"mlo": 40,
"mhi": 55,
"repeat": "Low",
"license": "Medium",
"season": "Spring–fall",
"franchise": "",
"note": "Gutter machine $8K–20K; gutter guards add margin.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A gutter cleaner ready for bigger tickets",
"pros": [
"Bigger tickets with a clear sales pitch",
"A service customers already understand and buy"
],
"cons": [
"Machine and trailer to buy; few repeat jobs",
"Seasonal: busiest spring–fall",
"Check your state’s licensing before you start"
],
"adds": [
"gutter-cleaning",
"roofing"
],
"path": "Partner with roofers for steady install referrals",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 5 jobs a month by month 12.",
"Reach steady volume, around 10 jobs a month in season. Add gutter cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Partner with roofers for steady install referrals."
],
"deepDive": ""
},
{
"slug": "pressure-and-soft-washing",
"name": "Pressure and soft washing",
"family": "Exterior care",
"lo": 3,
"hi": 15,
"tier": 0,
"vehicle": "Truck plus skid or trailer",
"ticketText": "$250–500 per house wash",
"ticket": 375,
"jobs": 50,
"unit": "jobs",
"months": 8,
"monthly": 18750,
"runRate": 150000,
"mlo": 40,
"mhi": 60,
"repeat": "Medium",
"license": "Low",
"season": "Spring–fall",
"franchise": "",
"note": "Roof soft wash $350–700 lifts the ticket.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A self-starter who likes visible before-and-after results",
"pros": [
"Low cost to start and strong photos for marketing",
"No special license to start"
],
"cons": [
"Seasonal, and the low end is price-competitive",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"window-cleaning",
"gutter-cleaning",
"deck-and-fence-staining",
"concrete-and-paver-sealing",
"trash-can-cleaning"
],
"path": "Add roof soft wash, sealing and staining for bigger tickets",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 25 jobs a month by month 12.",
"Reach steady volume, around 50 jobs a month in season. Add window cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add roof soft wash, sealing and staining for bigger tickets."
],
"deepDive": ""
},
{
"slug": "trash-can-cleaning",
"name": "Trash can cleaning",
"family": "Exterior care",
"lo": 8,
"hi": 30,
"tier": 1,
"vehicle": "Truck plus wash trailer",
"ticketText": "$15–30 per can per month",
"ticket": 25,
"jobs": 600,
"unit": "visits",
"months": 12,
"monthly": 15000,
"runRate": 180000,
"mlo": 55,
"mhi": 70,
"repeat": "High",
"license": "Low",
"season": "Year-round, peaks in summer",
"franchise": "",
"note": "Monthly subscription routes; wastewater must be captured.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A route-minded owner who wants subscriptions",
"pros": [
"Monthly subscriptions and route density",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Wastewater rules; small revenue per stop",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"pressure-and-soft-washing",
"pet-waste-removal"
],
"path": "Add HOA and commercial dumpster pads",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 300 visits a month by month 12.",
"Reach steady volume, around 600 visits a month. Add pressure and soft washing for the same customers and plan your first hire.",
"Step from operator to owner. Add HOA and commercial dumpster pads."
],
"deepDive": ""
},
{
"slug": "deck-and-fence-staining",
"name": "Deck and fence staining",
"family": "Exterior care",
"lo": 3,
"hi": 10,
"tier": 0,
"vehicle": "Truck or van",
"ticketText": "$800–2,500 per job",
"ticket": 1500,
"jobs": 14,
"unit": "jobs",
"months": 5,
"monthly": 21000,
"runRate": 105000,
"mlo": 50,
"mhi": 65,
"repeat": "Medium",
"license": "Low",
"season": "May–Sep",
"franchise": "",
"note": "Restain every 2–3 years; pairs with pressure washing.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A careful finisher who likes outdoor work",
"pros": [
"Good tickets on light gear; repeats every 2–3 years",
"Opens on under $10K of equipment",
"High margin per job",
"No special license to start"
],
"cons": [
"Short summer season",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"pressure-and-soft-washing",
"fence-installation",
"exterior-painting"
],
"path": "Fold into exterior painting to fill the calendar",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 7 jobs a month by month 12.",
"Reach steady volume, around 14 jobs a month in season. Add pressure and soft washing for the same customers and plan your first hire.",
"Step from operator to owner. Fold into exterior painting to fill the calendar."
],
"deepDive": ""
},
{
"slug": "concrete-and-paver-sealing",
"name": "Concrete and paver sealing",
"family": "Exterior care",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Truck plus trailer",
"ticketText": "$500–2,000 per job",
"ticket": 1200,
"jobs": 15,
"unit": "jobs",
"months": 7,
"monthly": 18000,
"runRate": 126000,
"mlo": 50,
"mhi": 65,
"repeat": "Medium",
"license": "Low",
"season": "Spring–fall",
"franchise": "",
"note": "Clean, sand and seal; resealed every 2–3 years.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A pressure washer looking for bigger tickets",
"pros": [
"Good margin and a natural reseal cycle",
"No special license to start"
],
"cons": [
"Seasonal and weather-dependent",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"pressure-and-soft-washing",
"driveway-sealcoating"
],
"path": "Combine with sealcoating for one hard-surface brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 8 jobs a month by month 12.",
"Reach steady volume, around 15 jobs a month in season. Add pressure and soft washing for the same customers and plan your first hire.",
"Step from operator to owner. Combine with sealcoating for one hard-surface brand."
],
"deepDive": ""
},
{
"slug": "driveway-sealcoating",
"name": "Driveway sealcoating",
"family": "Exterior care",
"lo": 8,
"hi": 25,
"tier": 1,
"vehicle": "Truck plus sealcoat skid",
"ticketText": "$300–800 per driveway",
"ticket": 500,
"jobs": 45,
"unit": "jobs",
"months": 5,
"monthly": 22500,
"runRate": 112500,
"mlo": 50,
"mhi": 60,
"repeat": "Medium",
"license": "Low",
"season": "May–Sep",
"franchise": "",
"note": "Sealcoat skid unit $5K–15K; reseal every 2–3 years.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A hard worker who wants a short, intense season",
"pros": [
"Fast jobs and neighborhood clustering",
"No special license to start"
],
"cons": [
"Very short season",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"concrete-and-paver-sealing",
"residential-snow-removal"
],
"path": "Pair with snow removal for a year-round driveway brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 22 jobs a month by month 12.",
"Reach steady volume, around 45 jobs a month in season. Add concrete and paver sealing for the same customers and plan your first hire.",
"Step from operator to owner. Pair with snow removal for a year-round driveway brand."
],
"deepDive": ""
},
{
"slug": "solar-panel-cleaning",
"name": "Solar panel cleaning",
"family": "Exterior care",
"lo": 3,
"hi": 10,
"tier": 0,
"vehicle": "Truck",
"ticketText": "$150–350 per home",
"ticket": 250,
"jobs": 40,
"unit": "jobs",
"months": 8,
"monthly": 10000,
"runRate": 80000,
"mlo": 55,
"mhi": 70,
"repeat": "Medium",
"license": "Low",
"season": "Spring–fall",
"franchise": "",
"note": "Add-on for exterior cleaning crews.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "An exterior cleaner adding a niche",
"pros": [
"Few competitors; 1–2 cleans a year",
"Opens on under $10K of equipment",
"High margin per job",
"No special license to start"
],
"cons": [
"Small market on its own",
"Seasonal: busiest spring–fall"
],
"adds": [
"window-cleaning",
"pressure-and-soft-washing",
"gutter-cleaning"
],
"path": "Keep inside an exterior-care membership",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 20 jobs a month by month 12.",
"Reach steady volume, around 40 jobs a month in season. Add window cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Keep inside an exterior-care membership."
],
"deepDive": ""
},
{
"slug": "holiday-lighting-install",
"name": "Holiday lighting install",
"family": "Exterior care",
"lo": 8,
"hi": 25,
"tier": 1,
"vehicle": "Truck",
"ticketText": "$1,000–3,000 per home",
"ticket": 1800,
"jobs": 40,
"unit": "jobs",
"months": 3,
"monthly": 72000,
"runRate": 216000,
"mlo": 50,
"mhi": 60,
"repeat": "High",
"license": "Low",
"season": "Oct–Jan",
"franchise": "",
"note": "Fills the winter gap for exterior cleaning crews; renewals are annual.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "An exterior crew that wants a strong fourth quarter",
"pros": [
"Big tickets and annual renewals",
"No special license to start"
],
"cons": [
"Three-month season, storage and takedown",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"permanent-led-roofline-lighting",
"window-cleaning",
"gutter-cleaning"
],
"path": "Convert customers to permanent LED lighting",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 20 jobs a month by month 12.",
"Reach steady volume, around 40 jobs a month in season. Add window cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Convert customers to permanent LED lighting."
],
"deepDive": ""
},
{
"slug": "permanent-led-roofline-lighting",
"name": "Permanent LED roofline lighting",
"family": "Exterior care",
"lo": 8,
"hi": 20,
"tier": 1,
"vehicle": "Truck or van",
"ticketText": "$2,000–5,000 per home",
"ticket": 3500,
"jobs": 6,
"unit": "jobs",
"months": 12,
"monthly": 21000,
"runRate": 252000,
"mlo": 45,
"mhi": 60,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Track plus app-controlled LEDs; installs year-round, unlike holiday lighting.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A tech-friendly installer who likes a clean finished product",
"pros": [
"High ticket and installs all year",
"No special license to start"
],
"cons": [
"Product cost up front; few repeat sales",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"holiday-lighting-install",
"landscape-lighting-install"
],
"path": "Build an outdoor-lighting brand with landscape lighting",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 3 jobs a month by month 12.",
"Reach steady volume, around 6 jobs a month. Add holiday lighting install for the same customers and plan your first hire.",
"Step from operator to owner. Build an outdoor-lighting brand with landscape lighting."
],
"deepDive": ""
},
{
"slug": "exterior-painting",
"name": "Exterior painting",
"family": "Painting and finishes",
"lo": 8,
"hi": 25,
"tier": 1,
"vehicle": "Truck or van",
"ticketText": "$4,000–10,000 per home",
"ticket": 6500,
"jobs": 5,
"unit": "jobs",
"months": 6,
"monthly": 32500,
"runRate": 195000,
"mlo": 40,
"mhi": 55,
"repeat": "Low",
"license": "Medium",
"season": "May–Oct",
"franchise": "",
"note": "Airless sprayer, ladders, lift rental; contractor license above state thresholds.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "An organized owner who can run a small crew",
"pros": [
"Large jobs and strong referral value",
"A service customers already understand and buy"
],
"cons": [
"Weather and season; labor-heavy",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"interior-painting",
"deck-and-fence-staining",
"cabinet-painting-and-refinishing"
],
"path": "Add interior painting and cabinets for winter",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 2 jobs a month by month 12.",
"Reach steady volume, around 5 jobs a month in season. Add deck and fence staining for the same customers and plan your first hire.",
"Step from operator to owner. Add interior painting and cabinets for winter."
],
"deepDive": ""
},
{
"slug": "interior-painting",
"name": "Interior painting",
"family": "Painting and finishes",
"lo": 3,
"hi": 12,
"tier": 0,
"vehicle": "Van",
"ticketText": "$2,000–6,000 per job",
"ticket": 3800,
"jobs": 6,
"unit": "jobs",
"months": 12,
"monthly": 22800,
"runRate": 273600,
"mlo": 45,
"mhi": 60,
"repeat": "Low",
"license": "Medium",
"season": "Year-round",
"franchise": "",
"note": "Fills winter for exterior painters; contractor license above thresholds.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A tidy, detail-focused finisher",
"pros": [
"Low gear cost and year-round work",
"A few jobs make the month"
],
"cons": [
"Price-competitive; labor-heavy",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"exterior-painting",
"cabinet-painting-and-refinishing",
"drywall-repair"
],
"path": "Add cabinets and exteriors for bigger tickets",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 3 jobs a month by month 12.",
"Reach steady volume, around 6 jobs a month. Add exterior painting for the same customers and plan your first hire.",
"Step from operator to owner. Add cabinets and exteriors for bigger tickets."
],
"deepDive": ""
},
{
"slug": "cabinet-painting-and-refinishing",
"name": "Cabinet painting and refinishing",
"family": "Painting and finishes",
"lo": 8,
"hi": 20,
"tier": 1,
"vehicle": "Van",
"ticketText": "$3,000–8,000 per kitchen",
"ticket": 5000,
"jobs": 4,
"unit": "jobs",
"months": 12,
"monthly": 20000,
"runRate": 240000,
"mlo": 50,
"mhi": 65,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Spray rig and a spray booth or shop space.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A patient finisher who cares about a factory-smooth result",
"pros": [
"High ticket compared with a full remodel",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Needs a spray setup and real skill",
"Little repeat business, so marketing never stops"
],
"adds": [
"interior-painting",
"resin-countertops"
],
"path": "Bundle with resin countertops for a kitchen-refresh brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 2 jobs a month by month 12.",
"Reach steady volume, around 4 jobs a month. Add interior painting for the same customers and plan your first hire.",
"Step from operator to owner. Bundle with resin countertops for a kitchen-refresh brand."
],
"deepDive": ""
},
{
"slug": "tub-and-shower-refinishing",
"name": "Tub and shower refinishing",
"family": "Painting and finishes",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Van",
"ticketText": "$400–700 per tub",
"ticket": 550,
"jobs": 25,
"unit": "jobs",
"months": 12,
"monthly": 13750,
"runRate": 165000,
"mlo": 60,
"mhi": 70,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Ventilation and respirator required; done in a day.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A meticulous solo operator",
"pros": [
"Done in a day; strong margin",
"No special license to start",
"Works all year"
],
"cons": [
"Fumes and safety gear; niche demand",
"Little repeat business, so marketing never stops"
],
"adds": [
"tile-and-grout-cleaning",
"resin-countertops"
],
"path": "Add countertop and tile refinishing",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 12 jobs a month by month 12.",
"Reach steady volume, around 25 jobs a month. Add tile and grout cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add countertop and tile refinishing."
],
"deepDive": ""
},
{
"slug": "garage-floor-coatings",
"name": "Garage floor coatings",
"family": "Painting and finishes",
"lo": 15,
"hi": 40,
"tier": 2,
"vehicle": "Van or trailer",
"ticketText": "$3,000–6,000 per garage",
"ticket": 4500,
"jobs": 7,
"unit": "jobs",
"months": 12,
"monthly": 31500,
"runRate": 378000,
"mlo": 50,
"mhi": 65,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "GarageExperts: $136K–$246K, 4–6% royalty",
"note": "Grinder and HEPA vac are most of the cost.",
"basis": "Sourced",
"trak": "RemodelTrak",
"fit": "A hard-working installer who likes a visible transformation",
"pros": [
"High ticket on modest gear",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Little repeat business; heavy grinding work",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"garage-storage-and-organization",
"concrete-and-paver-sealing"
],
"path": "Add garage storage and commercial floors",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 4 jobs a month by month 12.",
"Reach steady volume, around 7 jobs a month. Add concrete and paver sealing for the same customers and plan your first hire.",
"Step from operator to owner. Add garage storage and commercial floors."
],
"deepDive": ""
},
{
"slug": "resin-countertops",
"name": "Resin countertops",
"family": "Painting and finishes",
"lo": 25,
"hi": 25,
"tier": 2,
"vehicle": "Van or truck",
"ticketText": "$3,245 average job",
"ticket": 3245,
"jobs": 7,
"unit": "jobs",
"months": 12,
"monthly": 22715,
"runRate": 272580,
"mlo": 72,
"mhi": 72,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "EntrepX example: $25K startup, payback month 5 vs. 7 franchised.",
"basis": "EntrepX data",
"trak": "RemodelTrak",
"fit": "A hands-on maker who likes craft and selling the result",
"pros": [
"Low startup and high margin per install",
"A few jobs make the month",
"No special license to start",
"Works all year"
],
"cons": [
"Skill takes practice; few repeat sales",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"cabinet-painting-and-refinishing",
"tub-and-shower-refinishing"
],
"path": "Expand into full kitchen refresh with cabinets",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 4 jobs a month by month 12.",
"Reach steady volume, around 7 jobs a month. Add cabinet painting and refinishing for the same customers and plan your first hire.",
"Step from operator to owner. Expand into full kitchen refresh with cabinets."
],
"deepDive": "/industries/resin-countertops"
},
{
"slug": "hardwood-floor-refinishing",
"name": "Hardwood floor refinishing",
"family": "Painting and finishes",
"lo": 15,
"hi": 40,
"tier": 2,
"vehicle": "Van",
"ticketText": "$3–5 per sq ft ($2,000–5,000 per job)",
"ticket": 3500,
"jobs": 6,
"unit": "jobs",
"months": 12,
"monthly": 21000,
"runRate": 252000,
"mlo": 45,
"mhi": 60,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Drum or orbital sander, edger, dust containment.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A skilled finisher who doesn’t mind physical work",
"pros": [
"Steady demand from home sales and remodels",
"A few jobs make the month",
"No special license to start",
"Works all year"
],
"cons": [
"Dust control and a learning curve",
"Little repeat business, so marketing never stops"
],
"adds": [
"interior-painting",
"garage-floor-coatings"
],
"path": "Add new floor installs",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 3 jobs a month by month 12.",
"Reach steady volume, around 6 jobs a month. Add interior painting for the same customers and plan your first hire.",
"Step from operator to owner. Add new floor installs."
],
"deepDive": ""
},
{
"slug": "residential-cleaning",
"name": "Residential cleaning",
"family": "Interior care",
"lo": 1,
"hi": 10,
"tier": 0,
"vehicle": "Car",
"ticketText": "$150–250 per clean",
"ticket": 200,
"jobs": 80,
"unit": "jobs",
"months": 12,
"monthly": 16000,
"runRate": 192000,
"mlo": 30,
"mhi": 50,
"repeat": "High",
"license": "Low",
"season": "Year-round",
"franchise": "Molly Maid: $144K–$204K, 3–6.5% royalty",
"note": "Labor-heavy once you add crews; recurring weekly or biweekly.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "An organizer who wants to build and lead a team",
"pros": [
"Recurring weekly and biweekly customers",
"Opens on under $10K of equipment",
"No special license to start",
"Works all year"
],
"cons": [
"Hiring and keeping cleaners is the business",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"carpet-and-upholstery-cleaning",
"window-cleaning",
"home-organizing"
],
"path": "Add move-out, deep cleans and a second team",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 40 jobs a month by month 12.",
"Reach steady volume, around 80 jobs a month. Add carpet and upholstery cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add move-out, deep cleans and a second team."
],
"deepDive": ""
},
{
"slug": "carpet-and-upholstery-cleaning",
"name": "Carpet and upholstery cleaning",
"family": "Interior care",
"lo": 5,
"hi": 40,
"tier": 1,
"vehicle": "Van (truck-mount unit $20K–60K later)",
"ticketText": "$200–400 per job",
"ticket": 300,
"jobs": 45,
"unit": "jobs",
"months": 12,
"monthly": 13500,
"runRate": 162000,
"mlo": 50,
"mhi": 65,
"repeat": "Medium",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Start portable, move to truck-mount; IICRC certification recommended.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A steady worker who likes quick, satisfying jobs",
"pros": [
"Repeat yearly customers and easy add-ons",
"High margin per job",
"No special license to start"
],
"cons": [
"Truck-mount upgrade is costly",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"tile-and-grout-cleaning",
"air-duct-cleaning",
"water-damage-restoration"
],
"path": "Move into water damage once certified",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 22 jobs a month by month 12.",
"Reach steady volume, around 45 jobs a month. Add tile and grout cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Move into water damage once certified."
],
"deepDive": ""
},
{
"slug": "tile-and-grout-cleaning",
"name": "Tile and grout cleaning",
"family": "Interior care",
"lo": 3,
"hi": 10,
"tier": 0,
"vehicle": "Van",
"ticketText": "$300–800 per job",
"ticket": 550,
"jobs": 20,
"unit": "jobs",
"months": 12,
"monthly": 11000,
"runRate": 132000,
"mlo": 55,
"mhi": 70,
"repeat": "Medium",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Add-on to carpet cleaning; regrouting and sealing lift the ticket.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A carpet cleaner adding a higher-margin service",
"pros": [
"Strong margin on small gear",
"Opens on under $10K of equipment",
"No special license to start",
"Works all year"
],
"cons": [
"Small standalone market",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"carpet-and-upholstery-cleaning",
"tub-and-shower-refinishing"
],
"path": "Add regrouting and sealing",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 10 jobs a month by month 12.",
"Reach steady volume, around 20 jobs a month. Add carpet and upholstery cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add regrouting and sealing."
],
"deepDive": ""
},
{
"slug": "dryer-vent-cleaning",
"name": "Dryer vent cleaning",
"family": "Interior care",
"lo": 3,
"hi": 10,
"tier": 0,
"vehicle": "Van",
"ticketText": "$120–200 per visit",
"ticket": 160,
"jobs": 60,
"unit": "jobs",
"months": 12,
"monthly": 9600,
"runRate": 115200,
"mlo": 60,
"mhi": 75,
"repeat": "Medium",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Low cost, fire-safety angle, annual reminders.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A friendly solo operator who wants a simple start",
"pros": [
"Low cost, safety-driven, annual reminders",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Small tickets need volume",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"air-duct-cleaning",
"chimney-sweep-and-repair"
],
"path": "Bundle with duct cleaning for an air-safety brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 30 jobs a month by month 12.",
"Reach steady volume, around 60 jobs a month. Add air duct cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Bundle with duct cleaning for an air-safety brand."
],
"deepDive": ""
},
{
"slug": "air-duct-cleaning",
"name": "Air duct cleaning",
"family": "Interior care",
"lo": 10,
"hi": 30,
"tier": 1,
"vehicle": "Van or truck",
"ticketText": "$400–800 per home",
"ticket": 600,
"jobs": 25,
"unit": "jobs",
"months": 12,
"monthly": 15000,
"runRate": 180000,
"mlo": 50,
"mhi": 60,
"repeat": "Medium",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Vacuum collection system $3K–25K; NADCA certification.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A methodical owner comfortable in attics and crawlspaces",
"pros": [
"Good ticket and healthy margin",
"No special license to start",
"Works all year"
],
"cons": [
"Industry has a scammy reputation to overcome",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"dryer-vent-cleaning",
"chimney-sweep-and-repair",
"carpet-and-upholstery-cleaning"
],
"path": "Add HVAC partners and commercial work",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 12 jobs a month by month 12.",
"Reach steady volume, around 25 jobs a month. Add dryer vent cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add HVAC partners and commercial work."
],
"deepDive": ""
},
{
"slug": "chimney-sweep-and-repair",
"name": "Chimney sweep and repair",
"family": "Interior care",
"lo": 8,
"hi": 25,
"tier": 1,
"vehicle": "Truck",
"ticketText": "$200–400 sweep, $1K–5K repairs",
"ticket": 300,
"jobs": 40,
"unit": "jobs",
"months": 7,
"monthly": 12000,
"runRate": 84000,
"mlo": 50,
"mhi": 60,
"repeat": "Medium",
"license": "Medium",
"season": "Fall–winter",
"franchise": "",
"note": "CSIA certification; pairs with dryer vents.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A safety-focused owner comfortable on roofs",
"pros": [
"Annual inspections and repair upsells",
"A service customers already understand and buy"
],
"cons": [
"Seasonal, with roof work",
"Reviews and steady marketing decide who wins locally",
"Check your state’s licensing before you start"
],
"adds": [
"dryer-vent-cleaning",
"air-duct-cleaning"
],
"path": "Add masonry repair and liner installs",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 20 jobs a month by month 12.",
"Reach steady volume, around 40 jobs a month in season. Add dryer vent cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add masonry repair and liner installs."
],
"deepDive": ""
},
{
"slug": "hot-tub-service-and-cleaning",
"name": "Hot tub service and cleaning",
"family": "Interior care",
"lo": 3,
"hi": 10,
"tier": 0,
"vehicle": "Truck or van",
"ticketText": "$100–200 per service, $40–80/mo plans",
"ticket": 150,
"jobs": 60,
"unit": "visits",
"months": 12,
"monthly": 9000,
"runRate": 108000,
"mlo": 50,
"mhi": 65,
"repeat": "High",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Drain, clean, balance; monthly plans.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A route-minded owner who likes water chemistry",
"pros": [
"Monthly plans with steady customers",
"Opens on under $10K of equipment",
"High margin per job",
"No special license to start"
],
"cons": [
"Smaller market than pools",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"pool-cleaning-and-service"
],
"path": "Pair with pool service",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 30 visits a month by month 12.",
"Reach steady volume, around 60 visits a month. Add pool cleaning and service for the same customers and plan your first hire.",
"Step from operator to owner. Pair with pool service."
],
"deepDive": ""
},
{
"slug": "pool-cleaning-and-service",
"name": "Pool cleaning and service",
"family": "Lawn and yard",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Truck",
"ticketText": "$120–200/mo weekly service",
"ticket": 160,
"jobs": 60,
"unit": "visits",
"months": 6,
"monthly": 9600,
"runRate": 57600,
"mlo": 45,
"mhi": 60,
"repeat": "High",
"license": "Low",
"season": "Seasonal in Utah",
"franchise": "",
"note": "Route business; CPO certification recommended.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A route-minded owner in a pool-heavy area",
"pros": [
"Weekly routes with strong retention",
"No special license to start"
],
"cons": [
"Short season in Utah",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"hot-tub-service-and-cleaning",
"sprinkler-and-irrigation-service"
],
"path": "Add repairs, openings and closings",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 30 visits a month by month 12.",
"Reach steady volume, around 60 visits a month in season. Add hot tub service and cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add repairs, openings and closings."
],
"deepDive": ""
},
{
"slug": "mobile-car-wash",
"name": "Mobile car wash (waterless/rinseless)",
"family": "Mobile auto",
"lo": 1,
"hi": 4,
"tier": 0,
"vehicle": "Own car or small SUV",
"ticketText": "$40–80 per wash, $100–200/mo plans",
"ticket": 60,
"jobs": 150,
"unit": "visits",
"months": 12,
"monthly": 9000,
"runRate": 108000,
"mlo": 65,
"mhi": 80,
"repeat": "High",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Lowest-cost auto start; office parks and apartment complexes.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "Someone starting on a small budget with a car they already own",
"pros": [
"Lowest-cost auto start; workplace and apartment routes",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Small tickets need volume",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"mobile-auto-detailing",
"headlight-restoration",
"windshield-chip-repair"
],
"path": "Upgrade to detailing, then ceramic coating",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 75 visits a month by month 12.",
"Reach steady volume, around 150 visits a month. Add mobile auto detailing for the same customers and plan your first hire.",
"Step from operator to owner. Upgrade to detailing, then ceramic coating."
],
"deepDive": ""
},
{
"slug": "mobile-auto-detailing",
"name": "Mobile auto detailing",
"family": "Mobile auto",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Van or truck with water tank",
"ticketText": "$150–350 per detail",
"ticket": 250,
"jobs": 50,
"unit": "jobs",
"months": 12,
"monthly": 12500,
"runRate": 150000,
"mlo": 50,
"mhi": 70,
"repeat": "Medium",
"license": "Low",
"season": "Year-round, weather-dependent",
"franchise": "",
"note": "Monthly maintenance plans create recurring revenue.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A detail-obsessed owner who likes visible results",
"pros": [
"Repeat maintenance plans and strong photos",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Weather and long days",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"ceramic-coating-and-paint-correction",
"headlight-restoration",
"paintless-dent-repair"
],
"path": "Add ceramic coating and fleet accounts",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 25 jobs a month by month 12.",
"Reach steady volume, around 50 jobs a month. Add headlight restoration for the same customers and plan your first hire.",
"Step from operator to owner. Add ceramic coating and fleet accounts."
],
"deepDive": ""
},
{
"slug": "headlight-restoration",
"name": "Headlight restoration",
"family": "Mobile auto",
"lo": 1,
"hi": 3,
"tier": 0,
"vehicle": "Own car",
"ticketText": "$60–120 per pair",
"ticket": 90,
"jobs": 60,
"unit": "jobs",
"months": 12,
"monthly": 5400,
"runRate": 64800,
"mlo": 70,
"mhi": 85,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Starter add-on for detailers; done in 30–45 minutes.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A starter-tier owner or a detailer adding upsells",
"pros": [
"Tiny startup and fast jobs",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Small tickets; best as an add-on",
"Little repeat business, so marketing never stops"
],
"adds": [
"mobile-car-wash",
"mobile-auto-detailing"
],
"path": "Keep inside a mobile auto brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 30 jobs a month by month 12.",
"Reach steady volume, around 60 jobs a month. Add mobile car wash for the same customers and plan your first hire.",
"Step from operator to owner. Keep inside a mobile auto brand."
],
"deepDive": ""
},
{
"slug": "ceramic-coating-and-paint-correction",
"name": "Ceramic coating and paint correction",
"family": "Mobile auto",
"lo": 8,
"hi": 20,
"tier": 1,
"vehicle": "Van",
"ticketText": "$800–2,500 per vehicle",
"ticket": 1600,
"jobs": 8,
"unit": "jobs",
"months": 12,
"monthly": 12800,
"runRate": 153600,
"mlo": 55,
"mhi": 70,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Polishers, lights and training; best with a garage or canopy.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A skilled detailer ready for premium work",
"pros": [
"Premium tickets",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Needs training and a covered space",
"Little repeat business, so marketing never stops"
],
"adds": [
"mobile-auto-detailing",
"paintless-dent-repair"
],
"path": "Add paint protection film",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 4 jobs a month by month 12.",
"Reach steady volume, around 8 jobs a month. Add mobile auto detailing for the same customers and plan your first hire.",
"Step from operator to owner. Add paint protection film."
],
"deepDive": ""
},
{
"slug": "windshield-chip-repair",
"name": "Windshield chip repair",
"family": "Mobile auto",
"lo": 1,
"hi": 4,
"tier": 0,
"vehicle": "Own car",
"ticketText": "$50–100 per chip",
"ticket": 75,
"jobs": 80,
"unit": "jobs",
"months": 12,
"monthly": 6000,
"runRate": 72000,
"mlo": 70,
"mhi": 85,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Often billed to insurance; fleets are steady customers.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A starter-tier owner who likes quick wins",
"pros": [
"Tiny startup; insurance often pays",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Small tickets need volume",
"Little repeat business, so marketing never stops"
],
"adds": [
"mobile-car-wash",
"headlight-restoration"
],
"path": "Add fleet contracts and full windshield partners",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 40 jobs a month by month 12.",
"Reach steady volume, around 80 jobs a month. Add mobile car wash for the same customers and plan your first hire.",
"Step from operator to owner. Add fleet contracts and full windshield partners."
],
"deepDive": ""
},
{
"slug": "paintless-dent-repair",
"name": "Paintless dent repair",
"family": "Mobile auto",
"lo": 3,
"hi": 10,
"tier": 0,
"vehicle": "Car or van",
"ticketText": "$75–250 per dent, $1,500+ hail jobs",
"ticket": 175,
"jobs": 50,
"unit": "jobs",
"months": 12,
"monthly": 8750,
"runRate": 105000,
"mlo": 65,
"mhi": 80,
"repeat": "Low",
"license": "Low",
"season": "Year-round, hail season spikes",
"franchise": "",
"note": "PDR tools $2K–5K; skill takes months to learn.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A patient, skilled technician",
"pros": [
"High margin and hail-season spikes",
"Opens on under $10K of equipment",
"No special license to start",
"Works all year"
],
"cons": [
"Months of training before you’re good",
"Little repeat business, so marketing never stops"
],
"adds": [
"mobile-paint-and-bumper-repair",
"mobile-auto-detailing"
],
"path": "Chase hail work and dealer accounts",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 25 jobs a month by month 12.",
"Reach steady volume, around 50 jobs a month. Add mobile paint and bumper repair for the same customers and plan your first hire.",
"Step from operator to owner. Chase hail work and dealer accounts."
],
"deepDive": ""
},
{
"slug": "mobile-paint-and-bumper-repair",
"name": "Mobile paint and bumper repair",
"family": "Mobile auto",
"lo": 8,
"hi": 20,
"tier": 1,
"vehicle": "Van",
"ticketText": "$300–800 per repair",
"ticket": 550,
"jobs": 25,
"unit": "jobs",
"months": 12,
"monthly": 13750,
"runRate": 165000,
"mlo": 50,
"mhi": 65,
"repeat": "Low",
"license": "Medium",
"season": "Year-round",
"franchise": "",
"note": "Scratch, scuff and bumper repair on site; some states license auto body work.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "An auto-body tech who wants to go mobile",
"pros": [
"Good tickets without a shop",
"High margin per job",
"Works all year"
],
"cons": [
"Skill and paint matching; some states license",
"Little repeat business, so marketing never stops"
],
"adds": [
"paintless-dent-repair",
"mobile-auto-detailing"
],
"path": "Add dealer and fleet accounts",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 12 jobs a month by month 12.",
"Reach steady volume, around 25 jobs a month. Add paintless dent repair for the same customers and plan your first hire.",
"Step from operator to owner. Add dealer and fleet accounts."
],
"deepDive": ""
},
{
"slug": "mobile-oil-change-and-maintenance",
"name": "Mobile oil change and maintenance",
"family": "Mobile auto",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Van or truck",
"ticketText": "$80–150 per oil change",
"ticket": 115,
"jobs": 90,
"unit": "visits",
"months": 12,
"monthly": 10350,
"runRate": 124200,
"mlo": 45,
"mhi": 60,
"repeat": "High",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Oil caddy, lift jacks, used-oil disposal; fleets and subscriptions.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A mechanically minded owner who likes routines",
"pros": [
"Recurring service intervals and fleets",
"No special license to start",
"Works all year"
],
"cons": [
"Disposal rules and thin margins on parts",
"Small tickets need volume and tight routes"
],
"adds": [
"mobile-mechanic",
"mobile-tire-service"
],
"path": "Add brakes, batteries and fleet contracts",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 45 visits a month by month 12.",
"Reach steady volume, around 90 visits a month. Add mobile mechanic for the same customers and plan your first hire.",
"Step from operator to owner. Add brakes, batteries and fleet contracts."
],
"deepDive": ""
},
{
"slug": "mobile-mechanic",
"name": "Mobile mechanic (brakes, batteries, diagnostics)",
"family": "Mobile auto",
"lo": 10,
"hi": 25,
"tier": 1,
"vehicle": "Van or truck",
"ticketText": "$250–600 per brake job",
"ticket": 425,
"jobs": 30,
"unit": "jobs",
"months": 12,
"monthly": 12750,
"runRate": 153000,
"mlo": 45,
"mhi": 60,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Scan tools and parts inventory; ASE certification builds trust.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "An experienced mechanic who wants to work for himself",
"pros": [
"Strong demand and no shop rent",
"No special license to start",
"Works all year"
],
"cons": [
"Parts sourcing and liability",
"Little repeat business, so marketing never stops"
],
"adds": [
"mobile-oil-change-and-maintenance",
"mobile-tire-service"
],
"path": "Add fleets and a second van",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 15 jobs a month by month 12.",
"Reach steady volume, around 30 jobs a month. Add mobile oil change and maintenance for the same customers and plan your first hire.",
"Step from operator to owner. Add fleets and a second van."
],
"deepDive": ""
},
{
"slug": "mobile-tire-service",
"name": "Mobile tire service",
"family": "Mobile auto",
"lo": 25,
"hi": 60,
"tier": 2,
"vehicle": "Outfitted van or trailer",
"ticketText": "$80–150 per install, $25–40 per tire",
"ticket": 110,
"jobs": 70,
"unit": "jobs",
"months": 12,
"monthly": 7700,
"runRate": 92400,
"mlo": 40,
"mhi": 55,
"repeat": "Medium",
"license": "Low",
"season": "Seasonal swaps spring/fall",
"franchise": "",
"note": "Tire changer, balancer and compressor in the van.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A mechanically minded owner ready for a bigger rig",
"pros": [
"Busy spring and fall swap seasons",
"No special license to start",
"Works all year"
],
"cons": [
"High rig cost for the ticket size",
"Small tickets need volume and tight routes"
],
"adds": [
"mobile-oil-change-and-maintenance",
"mobile-mechanic"
],
"path": "Add fleet and dealership contracts",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 35 jobs a month by month 12.",
"Reach steady volume, around 70 jobs a month. Add mobile oil change and maintenance for the same customers and plan your first hire.",
"Step from operator to owner. Add fleet and dealership contracts."
],
"deepDive": ""
},
{
"slug": "handyman-services",
"name": "Handyman services",
"family": "Repair and install",
"lo": 2,
"hi": 10,
"tier": 0,
"vehicle": "Truck or van",
"ticketText": "$150–500 per job",
"ticket": 325,
"jobs": 35,
"unit": "jobs",
"months": 12,
"monthly": 11375,
"runRate": 136500,
"mlo": 50,
"mhi": 60,
"repeat": "Low",
"license": "Medium",
"season": "Year-round",
"franchise": "",
"note": "State limits on job size without a contractor license.",
"basis": "Sourced",
"trak": "HandyTrak",
"fit": "A jack-of-all-trades who likes variety",
"pros": [
"Low cost and endless demand",
"Works all year"
],
"cons": [
"Job-size limits without a contractor license",
"Little repeat business, so marketing never stops"
],
"adds": [
"tv-mounting-and-smart-home-install",
"drywall-repair",
"aging-in-place-safety-installs",
"furniture-assembly"
],
"path": "Specialize into a trade pack once the best jobs are clear",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 18 jobs a month by month 12.",
"Reach steady volume, around 35 jobs a month. Add tv mounting and smart home install for the same customers and plan your first hire.",
"Step from operator to owner. Specialize into a trade pack once the best jobs are clear."
],
"deepDive": ""
},
{
"slug": "tv-mounting-and-smart-home-install",
"name": "TV mounting and smart home install",
"family": "Repair and install",
"lo": 2,
"hi": 8,
"tier": 0,
"vehicle": "Car or van",
"ticketText": "$150–400 per job",
"ticket": 275,
"jobs": 35,
"unit": "jobs",
"months": 12,
"monthly": 9625,
"runRate": 115500,
"mlo": 60,
"mhi": 75,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Mounts, cameras, doorbells, Wi-Fi; retailers refer installs.",
"basis": "Estimate",
"trak": "HandyTrak",
"fit": "A tech-friendly installer",
"pros": [
"Clean work and retailer referrals",
"Opens on under $10K of equipment",
"High margin per job",
"No special license to start"
],
"cons": [
"Competition from big-box install services",
"Little repeat business, so marketing never stops"
],
"adds": [
"furniture-assembly",
"handyman-services",
"permanent-led-roofline-lighting"
],
"path": "Add home networks, cameras and AV",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 18 jobs a month by month 12.",
"Reach steady volume, around 35 jobs a month. Add furniture assembly for the same customers and plan your first hire.",
"Step from operator to owner. Add home networks, cameras and AV."
],
"deepDive": ""
},
{
"slug": "furniture-assembly",
"name": "Furniture assembly",
"family": "Repair and install",
"lo": 1,
"hi": 3,
"tier": 0,
"vehicle": "Car",
"ticketText": "$75–250 per job",
"ticket": 160,
"jobs": 40,
"unit": "jobs",
"months": 12,
"monthly": 6400,
"runRate": 76800,
"mlo": 65,
"mhi": 80,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Starter tier; pairs with TV mounting.",
"basis": "Estimate",
"trak": "HandyTrak",
"fit": "A starter-tier owner who wants simple, steady work",
"pros": [
"Almost no startup cost",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Small tickets and app competition",
"Little repeat business, so marketing never stops"
],
"adds": [
"tv-mounting-and-smart-home-install",
"home-organizing"
],
"path": "Bundle with TV mounting and moving-day services",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 20 jobs a month by month 12.",
"Reach steady volume, around 40 jobs a month. Add home organizing for the same customers and plan your first hire.",
"Step from operator to owner. Bundle with TV mounting and moving-day services."
],
"deepDive": ""
},
{
"slug": "drywall-repair",
"name": "Drywall repair",
"family": "Repair and install",
"lo": 2,
"hi": 6,
"tier": 0,
"vehicle": "Van",
"ticketText": "$200–800 per job",
"ticket": 500,
"jobs": 20,
"unit": "jobs",
"months": 12,
"monthly": 10000,
"runRate": 120000,
"mlo": 55,
"mhi": 70,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Patch, texture and paint; feeds from water damage and moving.",
"basis": "Estimate",
"trak": "HandyTrak",
"fit": "A finisher who takes pride in invisible repairs",
"pros": [
"Steady demand from moves and water damage",
"Opens on under $10K of equipment",
"High margin per job",
"No special license to start"
],
"cons": [
"Messy work with a skill curve",
"Little repeat business, so marketing never stops"
],
"adds": [
"interior-painting",
"water-damage-restoration",
"handyman-services"
],
"path": "Partner with restoration companies for buildback",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 10 jobs a month by month 12.",
"Reach steady volume, around 20 jobs a month. Add interior painting for the same customers and plan your first hire.",
"Step from operator to owner. Partner with restoration companies for buildback."
],
"deepDive": ""
},
{
"slug": "aging-in-place-safety-installs",
"name": "Aging-in-place safety installs",
"family": "Repair and install",
"lo": 3,
"hi": 10,
"tier": 0,
"vehicle": "Van",
"ticketText": "$300–2,000 per home",
"ticket": 1100,
"jobs": 10,
"unit": "jobs",
"months": 12,
"monthly": 11000,
"runRate": 132000,
"mlo": 50,
"mhi": 60,
"repeat": "Low",
"license": "Medium",
"season": "Year-round",
"franchise": "",
"note": "Grab bars, rails, ramps; CAPS certification; referrals from home health.",
"basis": "Estimate",
"trak": "HandyTrak",
"fit": "A caring installer who works well with older clients and families",
"pros": [
"Referrals from home health and care agencies",
"Opens on under $10K of equipment",
"Works all year"
],
"cons": [
"Licensing for larger modifications",
"Little repeat business, so marketing never stops"
],
"adds": [
"handyman-services",
"drywall-repair"
],
"path": "Add ramps and bathroom modifications",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 5 jobs a month by month 12.",
"Reach steady volume, around 10 jobs a month. Add handyman services for the same customers and plan your first hire.",
"Step from operator to owner. Add ramps and bathroom modifications."
],
"deepDive": ""
},
{
"slug": "garage-storage-and-organization",
"name": "Garage storage and organization",
"family": "Repair and install",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Van or truck",
"ticketText": "$1,500–5,000 per garage",
"ticket": 3200,
"jobs": 6,
"unit": "jobs",
"months": 12,
"monthly": 19200,
"runRate": 230400,
"mlo": 45,
"mhi": 60,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Overhead racks, slat wall, cabinets; pairs with floor coatings.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "An organized installer who likes clean transformations",
"pros": [
"Good tickets; pairs with floors",
"No special license to start",
"Works all year"
],
"cons": [
"Few repeat sales",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"garage-floor-coatings",
"home-organizing"
],
"path": "Bundle with floor coatings for one garage brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 3 jobs a month by month 12.",
"Reach steady volume, around 6 jobs a month. Add garage floor coatings for the same customers and plan your first hire.",
"Step from operator to owner. Bundle with floor coatings for one garage brand."
],
"deepDive": ""
},
{
"slug": "appliance-repair",
"name": "Appliance repair",
"family": "Repair and install",
"lo": 3,
"hi": 15,
"tier": 0,
"vehicle": "Van",
"ticketText": "$250–400 per call",
"ticket": 325,
"jobs": 60,
"unit": "jobs",
"months": 12,
"monthly": 19500,
"runRate": 234000,
"mlo": 50,
"mhi": 60,
"repeat": "Low",
"license": "Medium",
"season": "Year-round",
"franchise": "",
"note": "Tools $1.5K–5K plus parts inventory.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A technical troubleshooter",
"pros": [
"Steady demand and no seasonality",
"Opens on under $10K of equipment",
"Works all year"
],
"cons": [
"Parts sourcing and training",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"dryer-vent-cleaning",
"handyman-services"
],
"path": "Add warranty-company contracts",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 30 jobs a month by month 12.",
"Reach steady volume, around 60 jobs a month. Add dryer vent cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add warranty-company contracts."
],
"deepDive": ""
},
{
"slug": "garage-door-repair-and-install",
"name": "Garage door repair and install",
"family": "Repair and install",
"lo": 8,
"hi": 25,
"tier": 1,
"vehicle": "Van or truck",
"ticketText": "$300–1,500 per job",
"ticket": 900,
"jobs": 30,
"unit": "jobs",
"months": 12,
"monthly": 27000,
"runRate": 324000,
"mlo": 50,
"mhi": 60,
"repeat": "Low",
"license": "Medium",
"season": "Year-round",
"franchise": "",
"note": "Springs and openers inventory; high emergency demand.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A mechanically minded owner who handles urgent calls",
"pros": [
"Emergency demand and good tickets",
"Works all year"
],
"cons": [
"Heavy spring work is dangerous without training",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"garage-floor-coatings",
"garage-storage-and-organization"
],
"path": "Add openers, smart access and new installs",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 15 jobs a month by month 12.",
"Reach steady volume, around 30 jobs a month. Add garage floor coatings for the same customers and plan your first hire.",
"Step from operator to owner. Add openers, smart access and new installs."
],
"deepDive": ""
},
{
"slug": "fence-installation",
"name": "Fence installation",
"family": "Repair and install",
"lo": 20,
"hi": 50,
"tier": 2,
"vehicle": "Truck plus trailer",
"ticketText": "$4,000–8,000 per job",
"ticket": 6000,
"jobs": 6,
"unit": "jobs",
"months": 8,
"monthly": 36000,
"runRate": 288000,
"mlo": 35,
"mhi": 50,
"repeat": "Low",
"license": "Medium",
"season": "Spring–fall",
"franchise": "",
"note": "Post driver, auger, saws; materials are a big pass-through.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A builder who likes outdoor projects",
"pros": [
"Big tickets and strong demand",
"A service customers already understand and buy"
],
"cons": [
"Materials-heavy with thinner margins",
"Seasonal: busiest spring–fall",
"Little repeat business, so marketing never stops",
"More capital at risk than most"
],
"adds": [
"deck-and-fence-staining",
"landscaping-and-hardscape"
],
"path": "Add staining contracts and gates",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 3 jobs a month by month 12.",
"Reach steady volume, around 6 jobs a month in season. Add deck and fence staining for the same customers and plan your first hire.",
"Step from operator to owner. Add staining contracts and gates."
],
"deepDive": ""
},
{
"slug": "home-organizing",
"name": "Home organizing",
"family": "Interior care",
"lo": 1,
"hi": 3,
"tier": 0,
"vehicle": "Car",
"ticketText": "$75–150 per hour",
"ticket": 650,
"jobs": 20,
"unit": "jobs",
"months": 12,
"monthly": 13000,
"runRate": 156000,
"mlo": 60,
"mhi": 75,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Starter tier; moves and downsizing drive demand.",
"basis": "Estimate",
"trak": "HandyTrak",
"fit": "An organized people-person",
"pros": [
"Almost no startup cost",
"High margin per job",
"No special license to start",
"Works all year"
],
"cons": [
"Hourly work caps revenue",
"Little repeat business, so marketing never stops"
],
"adds": [
"garage-storage-and-organization",
"residential-cleaning",
"furniture-assembly"
],
"path": "Add move management and garage systems",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 10 jobs a month by month 12.",
"Reach steady volume, around 20 jobs a month. Add garage storage and organization for the same customers and plan your first hire.",
"Step from operator to owner. Add move management and garage systems."
],
"deepDive": ""
},
{
"slug": "pest-control",
"name": "Pest control",
"family": "Pest and wildlife",
"lo": 10,
"hi": 50,
"tier": 2,
"vehicle": "Truck with spray rig",
"ticketText": "$100–175 quarterly, $250 initial",
"ticket": 140,
"jobs": 110,
"unit": "visits",
"months": 12,
"monthly": 15400,
"runRate": 184800,
"mlo": 50,
"mhi": 70,
"repeat": "High",
"license": "High",
"season": "Year-round",
"franchise": "",
"note": "State applicator license required; quarterly plans are the model.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A licensed or license-ready owner who likes routes",
"pros": [
"Quarterly plans and strong retention",
"High margin per job",
"Works all year"
],
"cons": [
"State license required first",
"Small tickets need volume and tight routes",
"More capital at risk than most"
],
"adds": [
"mosquito-and-tick-control",
"wildlife-and-rodent-exclusion",
"lawn-health"
],
"path": "Add mosquito, wildlife and termite work",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 55 visits a month by month 12.",
"Reach steady volume, around 110 visits a month. Add mosquito and tick control for the same customers and plan your first hire.",
"Step from operator to owner. Add mosquito, wildlife and termite work."
],
"deepDive": ""
},
{
"slug": "mosquito-and-tick-control",
"name": "Mosquito and tick control",
"family": "Pest and wildlife",
"lo": 8,
"hi": 25,
"tier": 1,
"vehicle": "Truck",
"ticketText": "$60–90 per treatment (~$500–700 per season)",
"ticket": 75,
"jobs": 300,
"unit": "visits",
"months": 5,
"monthly": 22500,
"runRate": 112500,
"mlo": 55,
"mhi": 70,
"repeat": "High",
"license": "High",
"season": "May–Sep",
"franchise": "Mosquito Joe: $150K–$192K, 10% royalty (7% above $500K)",
"note": "Seasonal program sales; same license as pest control.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A licensed applicator who wants a seasonal program",
"pros": [
"Program sales and high retention",
"High margin per job"
],
"cons": [
"Five-month season; license required",
"Small tickets need volume and tight routes"
],
"adds": [
"pest-control",
"lawn-health"
],
"path": "Run as the summer line of a pest or lawn health brand",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 150 visits a month by month 12.",
"Reach steady volume, around 300 visits a month in season. Add pest control for the same customers and plan your first hire.",
"Step from operator to owner. Run as the summer line of a pest or lawn health brand."
],
"deepDive": ""
},
{
"slug": "wildlife-and-rodent-exclusion",
"name": "Wildlife and rodent exclusion",
"family": "Pest and wildlife",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Truck with ladder rack",
"ticketText": "$500–2,500 per home",
"ticket": 1500,
"jobs": 10,
"unit": "jobs",
"months": 12,
"monthly": 15000,
"runRate": 180000,
"mlo": 55,
"mhi": 70,
"repeat": "Medium",
"license": "Medium",
"season": "Year-round",
"franchise": "",
"note": "Seal-ups and one-way doors; licensing varies by state and species.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A problem-solver comfortable in attics and on roofs",
"pros": [
"Good tickets and urgent demand",
"High margin per job",
"Works all year"
],
"cons": [
"Licensing varies; dirty work",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"pest-control",
"attic-insulation"
],
"path": "Add attic cleanup and insulation",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 5 jobs a month by month 12.",
"Reach steady volume, around 10 jobs a month. Add pest control for the same customers and plan your first hire.",
"Step from operator to owner. Add attic cleanup and insulation."
],
"deepDive": ""
},
{
"slug": "bed-bug-heat-treatment",
"name": "Bed bug heat treatment",
"family": "Pest and wildlife",
"lo": 30,
"hi": 60,
"tier": 2,
"vehicle": "Truck plus trailer",
"ticketText": "$1,500–3,000 per home",
"ticket": 2250,
"jobs": 8,
"unit": "jobs",
"months": 12,
"monthly": 18000,
"runRate": 216000,
"mlo": 55,
"mhi": 70,
"repeat": "Low",
"license": "Medium",
"season": "Year-round",
"franchise": "",
"note": "Heater and fan package is the cost; no chemicals needed.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A detail-oriented operator who handles sensitive situations",
"pros": [
"High ticket with no chemicals",
"High margin per job",
"Works all year"
],
"cons": [
"Equipment cost and uneven demand",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"pest-control"
],
"path": "Add apartment and hotel contracts",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 4 jobs a month by month 12.",
"Reach steady volume, around 8 jobs a month. Add pest control for the same customers and plan your first hire.",
"Step from operator to owner. Add apartment and hotel contracts."
],
"deepDive": ""
},
{
"slug": "junk-removal",
"name": "Junk removal",
"family": "Hauling and moving",
"lo": 3,
"hi": 15,
"tier": 0,
"vehicle": "Truck plus dump trailer ($4K–30K)",
"ticketText": "$300–600 per load",
"ticket": 450,
"jobs": 50,
"unit": "jobs",
"months": 12,
"monthly": 22500,
"runRate": 270000,
"mlo": 30,
"mhi": 50,
"repeat": "Low",
"license": "Low",
"season": "Year-round",
"franchise": "1-800-GOT-JUNK: $169K–$258K, 8% royalty + 8% brand fund",
"note": "Net margin 30–50% per source; disposal fees are the main variable cost.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A strong, friendly worker who likes fast jobs",
"pros": [
"Steady demand and simple pricing",
"Opens on under $10K of equipment",
"No special license to start",
"Works all year"
],
"cons": [
"Disposal costs and a truck to buy",
"Little repeat business, so marketing never stops"
],
"adds": [
"dumpster-trailer-rental",
"moving-services",
"home-organizing"
],
"path": "Add dumpster trailers and estate cleanouts",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 25 jobs a month by month 12.",
"Reach steady volume, around 50 jobs a month. Add moving services for the same customers and plan your first hire.",
"Step from operator to owner. Add dumpster trailers and estate cleanouts."
],
"deepDive": ""
},
{
"slug": "dumpster-trailer-rental",
"name": "Dumpster trailer rental",
"family": "Hauling and moving",
"lo": 30,
"hi": 90,
"tier": 3,
"vehicle": "Heavy pickup or 1-ton truck",
"ticketText": "$300–500 per rental",
"ticket": 400,
"jobs": 40,
"unit": "jobs",
"months": 12,
"monthly": 16000,
"runRate": 192000,
"mlo": 45,
"mhi": 60,
"repeat": "Medium",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "Two or three dump trailers to start; contractors repeat.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "An owner who wants equipment working for him",
"pros": [
"Contractors rent again and again",
"No special license to start",
"Works all year"
],
"cons": [
"Trailer capital and disposal fees",
"Reviews and steady marketing decide who wins locally"
],
"adds": [
"junk-removal"
],
"path": "Add more trailers, then roll-offs",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 20 jobs a month by month 12.",
"Reach steady volume, around 40 jobs a month. Add junk removal for the same customers and plan your first hire.",
"Step from operator to owner. Add more trailers, then roll-offs."
],
"deepDive": ""
},
{
"slug": "moving-services",
"name": "Moving services",
"family": "Hauling and moving",
"lo": 10,
"hi": 50,
"tier": 2,
"vehicle": "Box truck (lease or buy)",
"ticketText": "$800–2,500 per local move",
"ticket": 1600,
"jobs": 15,
"unit": "jobs",
"months": 12,
"monthly": 24000,
"runRate": 288000,
"mlo": 25,
"mhi": 40,
"repeat": "Low",
"license": "Medium",
"season": "Spring–summer peak",
"franchise": "",
"note": "USDOT number for interstate; labor-heavy.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A crew leader who can manage labor",
"pros": [
"Big tickets and summer peaks",
"Works all year"
],
"cons": [
"Labor-heavy and thin margins",
"Little repeat business, so marketing never stops",
"More capital at risk than most"
],
"adds": [
"junk-removal",
"home-organizing",
"furniture-assembly"
],
"path": "Add packing, storage and senior moves",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 8 jobs a month by month 12.",
"Reach steady volume, around 15 jobs a month. Add junk removal for the same customers and plan your first hire.",
"Step from operator to owner. Add packing, storage and senior moves."
],
"deepDive": ""
},
{
"slug": "mobile-pet-grooming",
"name": "Mobile pet grooming",
"family": "Pet care",
"lo": 50,
"hi": 120,
"tier": 3,
"vehicle": "Outfitted grooming van",
"ticketText": "$80–150 per groom",
"ticket": 115,
"jobs": 90,
"unit": "visits",
"months": 12,
"monthly": 10350,
"runRate": 124200,
"mlo": 45,
"mhi": 60,
"repeat": "High",
"license": "Low",
"season": "Year-round",
"franchise": "",
"note": "The van is the business; most buy used. Repeat every 4–8 weeks.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A skilled groomer who wants her own business",
"pros": [
"Repeat clients every 4–8 weeks",
"No special license to start",
"Works all year"
],
"cons": [
"The van is the big cost",
"Small tickets need volume and tight routes"
],
"adds": [
"pet-waste-removal"
],
"path": "Add a second van and groomer",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 45 visits a month by month 12.",
"Reach steady volume, around 90 visits a month. Add pet waste removal for the same customers and plan your first hire.",
"Step from operator to owner. Add a second van and groomer."
],
"deepDive": ""
},
{
"slug": "home-inspection",
"name": "Home inspection",
"family": "Inspection and testing",
"lo": 5,
"hi": 15,
"tier": 1,
"vehicle": "Car",
"ticketText": "$350–550 per inspection",
"ticket": 450,
"jobs": 25,
"unit": "jobs",
"months": 12,
"monthly": 11250,
"runRate": 135000,
"mlo": 60,
"mhi": 75,
"repeat": "Low",
"license": "High",
"season": "Follows the housing market",
"franchise": "",
"note": "State license in many states; E&O insurance.",
"basis": "Estimate",
"trak": "ServiceTrak",
"fit": "A detail-obsessed communicator with construction knowledge",
"pros": [
"Low cost and good margin",
"Works all year"
],
"cons": [
"License required; tied to the housing market",
"Little repeat business, so marketing never stops"
],
"adds": [
"radon-testing-and-mitigation",
"mold-remediation"
],
"path": "Add radon, sewer scope and thermal imaging",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 12 jobs a month by month 12.",
"Reach steady volume, around 25 jobs a month. Add radon testing and mitigation for the same customers and plan your first hire.",
"Step from operator to owner. Add radon, sewer scope and thermal imaging."
],
"deepDive": ""
},
{
"slug": "radon-testing-and-mitigation",
"name": "Radon testing and mitigation",
"family": "Inspection and testing",
"lo": 5,
"hi": 20,
"tier": 1,
"vehicle": "Van",
"ticketText": "$150–250 test, $1,000–2,500 mitigation",
"ticket": 900,
"jobs": 15,
"unit": "jobs",
"months": 12,
"monthly": 13500,
"runRate": 162000,
"mlo": 50,
"mhi": 65,
"repeat": "Low",
"license": "Medium",
"season": "Year-round, peaks in winter",
"franchise": "",
"note": "Certification (NRPP or state); Utah has high radon levels.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A methodical installer comfortable with certification",
"pros": [
"Strong need in Utah and real-estate referrals",
"High margin per job",
"Works all year"
],
"cons": [
"Certification and testing protocols",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"home-inspection",
"attic-insulation"
],
"path": "Partner with home inspectors and realtors",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 8 jobs a month by month 12.",
"Reach steady volume, around 15 jobs a month. Add home inspection for the same customers and plan your first hire.",
"Step from operator to owner. Partner with home inspectors and realtors."
],
"deepDive": ""
},
{
"slug": "mold-remediation",
"name": "Mold remediation",
"family": "Restoration",
"lo": 15,
"hi": 40,
"tier": 2,
"vehicle": "Van",
"ticketText": "$2,000–6,000 per job",
"ticket": 4000,
"jobs": 5,
"unit": "jobs",
"months": 12,
"monthly": 20000,
"runRate": 240000,
"mlo": 50,
"mhi": 65,
"repeat": "Low",
"license": "High",
"season": "Year-round",
"franchise": "",
"note": "License required in some states; feeds from water damage jobs.",
"basis": "Estimate",
"trak": "ClaimTrak",
"fit": "A careful, certified operator",
"pros": [
"Good tickets and insurance-paid work",
"High margin per job",
"Works all year"
],
"cons": [
"License required in some states",
"Little repeat business, so marketing never stops"
],
"adds": [
"water-damage-restoration",
"biohazard-cleanup"
],
"path": "Add water damage with CiviClaim assignments",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 2 jobs a month by month 12.",
"Reach steady volume, around 5 jobs a month. Add biohazard cleanup for the same customers and plan your first hire.",
"Step from operator to owner. Add water damage with CiviClaim assignments."
],
"deepDive": ""
},
{
"slug": "biohazard-cleanup",
"name": "Biohazard cleanup",
"family": "Restoration",
"lo": 35,
"hi": 35,
"tier": 2,
"vehicle": "Van",
"ticketText": "$8,500 average job",
"ticket": 8500,
"jobs": 5,
"unit": "jobs",
"months": 12,
"monthly": 42500,
"runRate": 510000,
"mlo": 85,
"mhi": 85,
"repeat": "Low",
"license": "Medium",
"season": "Year-round",
"franchise": "Typical franchise $100K+ (EntrepX data)",
"note": "EntrepX example: insurance-paid jobs take 30–90 days to collect; CiviClaim fits.",
"basis": "EntrepX data",
"trak": "ClaimTrak",
"fit": "A calm, discreet operator who can handle hard days",
"pros": [
"Very large average job and high margin",
"Works all year"
],
"cons": [
"Emotionally demanding; insurance pays slowly",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"water-damage-restoration",
"mold-remediation"
],
"path": "Add water and mold with CiviClaim assignments",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 2 jobs a month by month 12.",
"Reach steady volume, around 5 jobs a month. Add water damage restoration for the same customers and plan your first hire.",
"Step from operator to owner. Add water and mold with CiviClaim assignments."
],
"deepDive": "/industries/biohazard-cleanup"
},
{
"slug": "water-damage-restoration",
"name": "Water damage restoration",
"family": "Restoration",
"lo": 40,
"hi": 120,
"tier": 3,
"vehicle": "Truck or van plus trailer",
"ticketText": "$3,000–10,000 per claim",
"ticket": 6500,
"jobs": 6,
"unit": "jobs",
"months": 12,
"monthly": 39000,
"runRate": 468000,
"mlo": 40,
"mhi": 60,
"repeat": "Low",
"license": "Medium",
"season": "Year-round, storm spikes",
"franchise": "",
"note": "Drying equipment fleet; insurance-paid, so CiviClaim fits; IICRC WRT/ASD.",
"basis": "Estimate",
"trak": "ClaimTrak",
"fit": "An organized operator who can run emergencies and paperwork",
"pros": [
"Insurance-paid jobs with CiviClaim assignments",
"A few jobs make the month",
"Works all year"
],
"cons": [
"Drying equipment fleet and slow insurance payments",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"mold-remediation",
"biohazard-cleanup",
"drywall-repair",
"carpet-and-upholstery-cleaning"
],
"path": "Add rebuild with RemodelTrak",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 3 jobs a month by month 12.",
"Reach steady volume, around 6 jobs a month. Add mold remediation for the same customers and plan your first hire.",
"Step from operator to owner. Add rebuild with RemodelTrak."
],
"deepDive": ""
},
{
"slug": "attic-insulation",
"name": "Attic insulation",
"family": "Improvement",
"lo": 30,
"hi": 80,
"tier": 3,
"vehicle": "Box truck with blowing machine",
"ticketText": "$1,500–4,000 per home",
"ticket": 2750,
"jobs": 10,
"unit": "jobs",
"months": 12,
"monthly": 27500,
"runRate": 330000,
"mlo": 40,
"mhi": 55,
"repeat": "Low",
"license": "Medium",
"season": "Year-round, peaks fall/winter",
"franchise": "",
"note": "Blowing machine and truck; utility rebates help sell.",
"basis": "Estimate",
"trak": "RemodelTrak",
"fit": "A hard worker who doesn’t mind attics",
"pros": [
"Utility rebates help close sales",
"A few jobs make the month",
"Works all year"
],
"cons": [
"Box truck and blowing machine to buy",
"Little repeat business, so marketing never stops",
"Check your state’s licensing before you start"
],
"adds": [
"wildlife-and-rodent-exclusion",
"air-duct-cleaning"
],
"path": "Add air sealing and energy audits",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 5 jobs a month by month 12.",
"Reach steady volume, around 10 jobs a month. Add wildlife and rodent exclusion for the same customers and plan your first hire.",
"Step from operator to owner. Add air sealing and energy audits."
],
"deepDive": ""
},
{
"slug": "roofing",
"name": "Roofing",
"family": "Improvement",
"lo": 30,
"hi": 100,
"tier": 3,
"vehicle": "Truck plus dump trailer",
"ticketText": "$10,000–20,000 per roof",
"ticket": 15000,
"jobs": 4,
"unit": "jobs",
"months": 8,
"monthly": 60000,
"runRate": 480000,
"mlo": 25,
"mhi": 40,
"repeat": "Low",
"license": "Medium",
"season": "Spring–fall",
"franchise": "",
"note": "Crews often subcontracted; insurance claims common.",
"basis": "Sourced",
"trak": "RemodelTrak",
"fit": "An experienced sales-minded builder who can manage crews",
"pros": [
"Very large tickets and insurance claims",
"A service customers already understand and buy"
],
"cons": [
"Capital, crews and liability",
"Seasonal: busiest spring–fall",
"Little repeat business, so marketing never stops",
"Thinner margins than most"
],
"adds": [
"seamless-gutter-install",
"exterior-painting"
],
"path": "Add gutters and storm restoration",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 2 jobs a month by month 12.",
"Reach steady volume, around 4 jobs a month in season. Add seamless gutter install for the same customers and plan your first hire.",
"Step from operator to owner. Add gutters and storm restoration."
],
"deepDive": ""
},
{
"slug": "plumbing",
"name": "Plumbing",
"family": "Licensed trades",
"lo": 15,
"hi": 50,
"tier": 2,
"vehicle": "Van",
"ticketText": "$300–500 per service call",
"ticket": 400,
"jobs": 70,
"unit": "jobs",
"months": 12,
"monthly": 28000,
"runRate": 336000,
"mlo": 45,
"mhi": 60,
"repeat": "Medium",
"license": "High",
"season": "Year-round",
"franchise": "",
"note": "Journeyman/master license; maintenance plans possible.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A licensed plumber ready to run his own shop",
"pros": [
"Constant demand and maintenance plans",
"Works all year"
],
"cons": [
"License required",
"More capital at risk than most"
],
"adds": [
"water-damage-restoration"
],
"path": "Add a second tech and maintenance plans",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 35 jobs a month by month 12.",
"Reach steady volume, around 70 jobs a month. Add water damage restoration for the same customers and plan your first hire.",
"Step from operator to owner. Add a second tech and maintenance plans."
],
"deepDive": ""
},
{
"slug": "electrical",
"name": "Electrical",
"family": "Licensed trades",
"lo": 10,
"hi": 40,
"tier": 2,
"vehicle": "Van",
"ticketText": "$300–600 per service call",
"ticket": 450,
"jobs": 60,
"unit": "jobs",
"months": 12,
"monthly": 27000,
"runRate": 324000,
"mlo": 45,
"mhi": 60,
"repeat": "Low",
"license": "High",
"season": "Year-round",
"franchise": "",
"note": "State electrical license required.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A licensed electrician ready to run his own shop",
"pros": [
"Constant demand and strong tickets",
"Works all year"
],
"cons": [
"License required",
"Little repeat business, so marketing never stops"
],
"adds": [
"permanent-led-roofline-lighting",
"tv-mounting-and-smart-home-install"
],
"path": "Add EV chargers and generator installs",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 30 jobs a month by month 12.",
"Reach steady volume, around 60 jobs a month. Add permanent led roofline lighting for the same customers and plan your first hire.",
"Step from operator to owner. Add EV chargers and generator installs."
],
"deepDive": ""
},
{
"slug": "hvac-service-and-replacement",
"name": "HVAC service and replacement",
"family": "Licensed trades",
"lo": 20,
"hi": 60,
"tier": 2,
"vehicle": "Van",
"ticketText": "$300 service, $8,000–15,000 replacement",
"ticket": 700,
"jobs": 50,
"unit": "jobs",
"months": 12,
"monthly": 35000,
"runRate": 420000,
"mlo": 40,
"mhi": 55,
"repeat": "High",
"license": "High",
"season": "Year-round, summer/winter peaks",
"franchise": "",
"note": "EPA 608 plus state license; maintenance agreements drive recurring revenue.",
"basis": "Sourced",
"trak": "ServiceTrak",
"fit": "A licensed HVAC tech ready to run his own shop",
"pros": [
"Maintenance agreements and big replacements",
"Customers come back on a schedule",
"Works all year"
],
"cons": [
"License and EPA certification required",
"More capital at risk than most"
],
"adds": [
"air-duct-cleaning",
"dryer-vent-cleaning"
],
"path": "Add maintenance-agreement routes and a second truck",
"years": [
"Launch in about 30 days. Learn the work, collect reviews and build toward 25 jobs a month by month 12.",
"Reach steady volume, around 50 jobs a month. Add air duct cleaning for the same customers and plan your first hire.",
"Step from operator to owner. Add maintenance-agreement routes and a second truck."
],
"deepDive": ""
}
];
