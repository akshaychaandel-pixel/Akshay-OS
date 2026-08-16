// ============================================================
// DATA.JS — Edit this file to update all portfolio content
// ============================================================

const PORTFOLIO_DATA = {

  personal: {
    name: "Akshay Chandel",
    title: "PPC & Paid Media Specialist",
    tagline: "I build, optimize and scale paid-media campaigns designed to turn ad spend into measurable business growth.",
    bio: "My work sits at the intersection of search intent, creative experimentation, analytics and conversion optimization. I treat every campaign as a testable hypothesis — not a set-and-forget setup.",
    location: "India",
    email: "akshay@email.com",
    linkedin: "https://linkedin.com/in/akshaychandel",
    resumeFile: "resume.pdf",
    formspreeEndpoint: "",
    skills: [
      "Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "GTM",
      "Looker Studio", "Landing Page Optimization", "A/B Testing",
      "Conversion Tracking", "Search Intent Analysis", "Budget Allocation",
      "Attribution Modeling"
    ]
  },

  results: [
    { label: "Ad Spend Managed", value: "₹99 lakh+", icon: "💰", placeholder: false },
    { label: "Leads & Calls", value: "17,000+", icon: "🎯", placeholder: false },
    { label: "Ad Accounts", value: "9", icon: "📊", placeholder: false },
    { label: "Longest Account", value: "20 months", icon: "⏳", placeholder: false }
  ],

  caseStudies: [
    {
      id: "pc-technologies",
      folder: "01_PC_Technologies_Portland",
      client: "PC Technologies",
      industry: "Local Services (Computer Repair)",
      location: "Portland, Oregon",
      platforms: "Google Ads",
      spend: "around $1,000 per month",
      period: "1 July – 15 August 2026",
      heroHeadline: "A repair shop went a month without a single phone call.",
      heroSummary: "The account was live and spending, but the phone had not rung once. For a local computer-repair shop, the primary business objective was not cheap traffic. It was being visible at the exact moment somebody needed a repair and getting that person to call.",
      metrics: [
        { label: "Phone Calls", value: "134" },
        { label: "Calls per Month", value: "~87" },
        { label: "Average CPC", value: "$0.89" },
        { label: "Impressions", value: "3k → 145k+" }
      ],
      problem: "The previous campaign was driving clicks but zero calls. The targeting radius was too wide, and the ads were not optimized for local intent or immediate action (phone calls).",
      actions: [
        { title: "Connected the Business Profile", desc: "Google Business Profile was connected to Performance Max so advertising could use location, opening hours and reviews." },
        { title: "Made calls the conversion", desc: "Implemented call assets and call tracking and focused the campaign on generating phone calls rather than clicks." },
        { title: "Reduced geographic radius", desc: "Reduced targeting to an area somebody would realistically travel from with a broken computer." }
      ],
      resultsText: "In just six weeks, the new strategy generated 134 tracked phone calls ($0.89 avg CPC) from 2,608 clicks on $2,325 spend. Impressions jumped from ~3,779 to over 145,936. An important point: at this spend and for one physical location, one optimized Performance Max campaign was sufficient.",
      interpretation: "Focusing on the right conversion action (calls instead of clicks) and anchoring it with local business data completely reversed the campaign's trajectory.",
      lookingBack: "Calls are not the same thing as customers. I did not receive visibility into how many calls became paid repair jobs. The next measurement improvement would be a basic intake system connecting advertising calls to booked work.",
      image: "../../public/pptx_extract/ppt/media/image1.png"
    },
    {
      id: "avery-weigh-tronix",
      folder: "02_Avery_Weigh_Tronix",
      client: "Avery Weigh-Tronix India",
      industry: "B2B Industrial Manufacturing",
      location: "India",
      platforms: "Google Ads",
      spend: "₹17.5 lakh",
      period: "January 2025 – August 2026",
      heroHeadline: "The account could not be judged because the numbers were not true.",
      heroSummary: "The main problem was incorrect conversion tracking. Google was bidding using unreliable signals. At the same time, search traffic contained students, job seekers, repair searches, spare-parts queries and price-shopping traffic.",
      metrics: [
        { label: "Conversions", value: "2,582" },
        { label: "Cost Per Conversion", value: "₹677" },
        { label: "Conversion Rate", value: "5.86%" },
        { label: "Leads per Month", value: "~129" }
      ],
      problem: "Incorrect tracking was polluting bidding signals, and broad generic traffic (job seekers, students) was burning budget.",
      actions: [
        { title: "Fixed measurement first", desc: "Rebuilt conversion tracking before touching budgets or bids. If tracking is wrong, optimization above it is guesswork." },
        { title: "Cleaned search traffic weekly", desc: "Built negative-keyword coverage against students, job seekers, repair, spare parts, and price-shopping searches. Search-term hygiene matters heavily in industrial B2B." },
        { title: "Separated brand from generic", desc: "Separated brand campaigns so inexpensive branded conversions did not make generic acquisition look artificially efficient." }
      ],
      resultsText: "Over 20 months on ₹17.5 lakh spend, the account delivered 2,582 conversions at a 5.86% conversion rate. Brand conversion cost dropped to ₹261, while the main generic search campaign maintained approximately ₹690 per conversion.",
      interpretation: "Performance Max produced conversions around ₹104, compared with approximately ₹690 on Search. However, PMax conversion rate was 0.87% vs Search's 7.26%. I do not present Performance Max as automatically superior because its CPL was lower. This raised a lead-quality / intent / brand-capture question that was not properly tested.",
      lookingBack: "I should have investigated the Performance Max quality question rather than leaving it unresolved.",
      image: "../../public/pptx_extract/ppt/media/image2.png"
    },
    {
      id: "mount-heritage-lumina",
      folder: "03_School_Lead_Generation",
      client: "Mount Heritage + Lumina World School",
      industry: "Education",
      location: "Rewari and Jind",
      platforms: "Meta Ads",
      spend: "₹2.7 lakh",
      period: "January – July 2026",
      heroHeadline: "The leads were real people. They just lived too far away.",
      heroSummary: "The campaigns generated enquiries, but many were not relevant parents and many came from locations families would realistically never travel from. For schools in smaller cities, audience geography is a major qualification variable.",
      metrics: [
        { label: "Parent Enquiries", value: "682" },
        { label: "Parent CPL", value: "₹250" },
        { label: "Teacher Apps", value: "301" },
        { label: "Teacher CPL", value: "₹11" }
      ],
      problem: "Geography wasn't constrained to viable school-run distances, and broad targeting produced irrelevant enquiries.",
      actions: [
        { title: "Fixed geography first", desc: "Restricted targeting to realistic travel radiuses. Excluded districts generating enquiries that admissions teams could not act on." },
        { title: "Ran Hindi creative", desc: "Used Hindi-language video in Jind and Rewari rather than assuming the parent decision-maker would respond best to English." },
        { title: "Created smaller first-step offers", desc: "Built campaigns around winter carnival and scholarship instead of only advertising general admissions." },
        { title: "Qualified at the form", desc: "Added current class, intended grade, and locality. This allowed admissions teams to prioritize viable enquiries." }
      ],
      resultsText: "Generated 682 parent enquiries at ₹250 average CPL and 301 teacher applications at ₹11 CPL. After geography was corrected, broader parent targeting actually outperformed excessive manual narrowing. Carnival and scholarship offers performed significantly better than generic video advertising.",
      interpretation: "A narrower, more qualified audience made leads more expensive. That does not automatically mean worse performance. Lead relevance improved dramatically.",
      lookingBack: "The missing business metric was actual student enrolment. The next stage should connect campaign leads to cost per enrolled student rather than stopping at CPL.",
      image: "../../public/pptx_extract/ppt/media/image3.png"
    },
    {
      id: "rotex-automation",
      folder: "04_Rotex_Automation",
      client: "Rotex Automation",
      industry: "Industrial process automation / solenoid valves",
      location: "India & International",
      platforms: "Google Ads + Meta Ads",
      spend: "₹12.9 lakh",
      period: "7 months",
      heroHeadline: "Two channels doing two different jobs.",
      heroSummary: "The company needed more consistent lead flow and better-quality industrial enquiries. Generic valve searches attracted students, repair queries and other irrelevant traffic alongside genuine buyers.",
      metrics: [
        { label: "Google Conversions", value: "791" },
        { label: "Google CPL", value: "₹1,337" },
        { label: "Meta Leads", value: "2,005" },
        { label: "Meta CPL", value: "₹116" }
      ],
      problem: "High volume of low-intent generic searches masking the real industrial B2B buyers.",
      actions: [
        { title: "Google Ads Strategy (Active Intent)", desc: "Split campaigns by intent: supplier/manufacturer terms, product specification terms, international, domestic. Rewrote ad messaging around buyer problems (delivery delays, SIL3 requirements) rather than just product specs." },
        { title: "Meta Ads Strategy (Passive Reach)", desc: "Targeted relevant professional audiences before active search based on job function, field of study, and industry. Strengthened forms to capture company, industry, and application." }
      ],
      resultsText: "Google Ads delivered 791 conversions (₹1,337 CPL, 3.41% CVR) on ₹10.6 lakh spend. Meta delivered 2,005 leads (₹116 CPL) on ₹2.3 lakh spend.",
      interpretation: "Google leads cost roughly eleven times more than Meta leads. Do NOT conclude that Meta was therefore the better channel. They represent different buying stages. Someone actively searching for a solenoid-valve manufacturer is likely much closer to a commercial order than somebody who saw a Meta video.",
      lookingBack: "I measured both channels largely using cost per lead. For industrial B2B, one high-value order can outweigh hundreds of low-cost enquiries. The stronger measurement model would have tracked downstream value and revenue by channel.",
      image: "../../public/pptx_extract/ppt/media/image4.png"
    },
    {
      id: "accent-consulting",
      folder: "05_Accent_HR_Software",
      client: "Accent Consulting",
      industry: "HR and payroll software",
      location: "B2B SaaS",
      platforms: "Meta Ads + LinkedIn Ads",
      spend: "₹92,442",
      period: "Campaign Duration",
      heroHeadline: "On LinkedIn, the inbox did better than the feed.",
      heroSummary: "The campaigns were reaching employees, students, and job seekers instead of the people who approve HR/payroll software. With a small budget, irrelevant traffic could not be hidden by volume.",
      metrics: [
        { label: "Total Leads", value: "207" },
        { label: "Meta CPL", value: "₹420" },
        { label: "LinkedIn CPL", value: "₹722" },
        { label: "Message Ad Leads", value: "16 vs 0" }
      ],
      problem: "Poor audience targeting on broad channels was eating up a small budget before reaching actual decision-makers.",
      actions: [
        { title: "Refined Meta Targeting", desc: "Focused heavily on business owners and CEOs to cut out employee/job-seeker noise." },
        { title: "Leveraged LinkedIn Data", desc: "Used LinkedIn for its strongest capability: job-title and seniority targeting." },
        { title: "Strengthened Forms", desc: "Included company size and role in lead forms to actively deter job seekers from submitting." }
      ],
      resultsText: "Generated 207 total leads (₹92,442 total spend). A critical finding: all 16 LinkedIn leads came from Message Ads. Sponsored Content generated zero leads on the same audience during the same month.",
      interpretation: "For this specific B2B audience, direct inbox outreach via LinkedIn Message Ads was vastly superior to in-feed Sponsored Content.",
      lookingBack: "Approximately ₹80,000 was spread across 31 Meta ad sets. That left around ₹2,500 per ad set, which was too little for most ad sets to properly exit learning. Today, I would fund roughly three or four audiences properly and test them sequentially.",
      image: "../../public/pptx_extract/ppt/media/image5.png"
    },
    {
      id: "newstrides",
      folder: "06_NewStrides_Overseas_Education",
      client: "NewStrides",
      industry: "Overseas education",
      location: "4 Cities",
      platforms: "Meta Ads",
      spend: "₹49.4 lakh",
      period: "19 months",
      heroHeadline: "Quality increased without needing more spend.",
      heroSummary: "Students were applying for Ireland and UK master's programmes across four cities. Lead volume was not the main problem. Fewer than half of the leads were usable.",
      metrics: [
        { label: "Total Leads", value: "9,766" },
        { label: "Usable Share (Before)", value: "45%" },
        { label: "Usable Share (After)", value: "65%" },
        { label: "Ad Accounts", value: "2" }
      ],
      problem: "High volume of unqualified student leads wasting counselling team time.",
      actions: [
        { title: "Rebuilt Lead Forms", desc: "Changed forms to qualify rather than simply collect volume." },
        { title: "Upfront Expectations", desc: "Put eligibility requirements and cost expectations directly into ad copy." },
        { title: "Tight Feedback Loops", desc: "Ran weekly lead-quality reviews with counselling teams." }
      ],
      resultsText: "Usable-lead share improved from approximately 45% to 65% on roughly the same spend.",
      interpretation: "Friction in marketing is sometimes necessary. Adding barriers (like requirements in copy) reduced junk volume and increased actual usable pipeline.",
      lookingBack: "Counselling feedback is often the most important metric dashboard you have.",
      image: "../../public/pptx_extract/ppt/media/image6.png"
    },
    {
      id: "cheenti-digital",
      folder: "07_Cheenti_Agency_Growth",
      client: "Cheenti Digital",
      industry: "Digital Agency (Client Acquisition)",
      location: "India",
      platforms: "Google Ads",
      spend: "₹14.2 lakh",
      period: "20 months",
      heroHeadline: "Challenging an assumed geographic market using actual acquisition data.",
      heroSummary: "This account was particularly competitive because the advertisers bidding against us were themselves paid-media specialists.",
      metrics: [
        { label: "Conversions", value: "989" },
        { label: "Conversion Rate", value: "5.37%" },
        { label: "CPC Range", value: "₹77–₹149" },
        { label: "CPL outside Delhi", value: "20% cheaper" }
      ],
      problem: "Extremely high CPCs in assumed core markets (metros) due to intense agency competition.",
      actions: [
        { title: "Geographic Expansion Analysis", desc: "Tested secondary markets outside of the highly saturated core metro areas to find arbitrage opportunities in CPCs." }
      ],
      resultsText: "Maintained a 5.37% conversion rate with 989 total conversions. We found that metros outside Delhi generated leads approximately 20% cheaper than the assumed core market.",
      interpretation: "When competing against other marketers, you cannot just outbid them. You have to find the geographic or intent pockets they are ignoring.",
      lookingBack: "Relying on assumptions about where your best clients live can be very expensive in Google Ads.",
      image: "../../public/pptx_extract/ppt/media/image7.png"
    }
  ],
  
  philosophy: [
    { title: "1. Check the data is real", desc: "Tracking comes before bidding decisions." },
    { title: "2. Read search terms every week", desc: "Negative keywords are ongoing account management, especially in B2B." },
    { title: "3. Ask sales which leads were real", desc: "Sales/counselling feedback often reveals what dashboards cannot." },
    { title: "4. Question the measure", desc: "CPL is not always the correct business KPI. Sometimes what matters is cost per order, cost per enrolment, qualified opportunity, or revenue." }
  ],

  experiments: [
    { filename: "EXP_001_Search_Intent.txt", status: "Testing" },
    { filename: "EXP_002_Creative_Testing.txt", status: "Testing" },
    { filename: "EXP_003_Message_Match.txt", status: "Testing" },
    { filename: "EXP_004_PMax_Assets.txt", status: "Testing" }
  ],

  resume: {
    experience: [
      { title: "PPC & Paid Media Specialist", company: "Various Clients", period: "Present", points: ["Managed ₹99 lakh+ in ad spend across 9 accounts", "Generated 17,000+ leads and calls", "Reduced average CPL through intent-based restructuring", "Built conversion tracking infrastructure using GA4 + GTM"] }
    ]
  }

};

// Node export for build if needed, safe for browser too
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
