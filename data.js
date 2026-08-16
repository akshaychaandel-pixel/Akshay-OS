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
      industry: "Local Services",
      location: "Portland, Oregon",
      platforms: "Google Ads",
      spend: "around $1,000/month",
      period: "1 July – 15 August 2026",
      subtitle: "Google Ads for a local computer repair business in Portland, Oregon.",
      intro: "When I took over the account, the business had gone roughly a month without a tracked phone call from Google Ads. The account was spending, but the action that mattered for the business — somebody calling for repair help — was not happening.",
      context: "PC Technologies is a local computer repair business. For this type of company, somebody normally searches when something is already broken and needs immediate help. The primary conversion therefore needed to be a phone call rather than simply generating clicks.",
      whatIFound: "The account was spending but producing no tracked phone calls. The location targeting was broader than a local repair business needed. The Google Business Profile was not being properly used in the advertising setup. The account also needed clearer call tracking.",
      whatIChanged: [
        { title: "Connected the Google Business Profile", desc: "I connected the Business Profile to Performance Max so the advertising could use location, opening hours and reviews." },
        { title: "Made phone calls the primary conversion", desc: "I implemented call assets and tracking and focused the campaign around actual calls." },
        { title: "Reduced the geographic radius", desc: "I restricted targeting to an area someone would realistically travel from for computer repair." }
      ],
      whatHappened: "Over the following six weeks, the campaign generated 134 tracked phone calls from $2,325 in spend, with an average CPC of $0.89. The campaign delivered 2,608 clicks and impressions increased substantially from the earlier period, averaging approximately 87 calls per month.",
      whatHappenedSummary: "134 tracked calls · $2,325 spend · $0.89 avg. CPC",
      evidenceImages: [
        "../../public/images/pc-tech-1.jpg",
        "../../public/images/pc-tech-2.jpg"
      ],
      lookingBack: "Phone calls are not the same as customers. I did not have visibility into how many calls became paid repair jobs. The next measurement improvement would be connecting advertising calls to booked work through a simple intake system."
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
      subtitle: "B2B search strategy for industrial weighing equipment.",
      intro: "The main problem was incorrect conversion tracking. Google was bidding using unreliable signals. At the same time, search traffic contained students, job seekers, repair searches, spare-parts queries and price-shopping traffic.",
      context: "Avery Weigh-Tronix is a major player in industrial manufacturing. Because they are well-known, they naturally receive a high volume of 'brand' searches. When a campaign mixes brand searches with generic product searches, the cheap brand leads make the expensive generic leads look deceptively cheap on average.",
      whatIFound: "Incorrect tracking was polluting bidding signals, and broad generic traffic (job seekers, students) was burning budget. The blended campaign structure hid the fact that new, non-brand customer acquisition was highly inefficient.",
      whatIChanged: [
        { title: "Fixed measurement first", desc: "Rebuilt conversion tracking before touching budgets or bids. If tracking is wrong, optimization above it is guesswork." },
        { title: "Cleaned search traffic weekly", desc: "Built negative-keyword coverage against students, job seekers, repair, spare parts, and price-shopping searches. Search-term hygiene matters heavily in industrial B2B." },
        { title: "Separated brand from generic", desc: "Separated brand campaigns so inexpensive branded conversions did not make generic acquisition look artificially efficient." }
      ],
      whatHappened: "Over 20 months on ₹17.5 lakh spend, the account delivered 2,582 conversions at a 5.86% conversion rate. Brand conversion cost dropped to ₹261, while the main generic search campaign maintained approximately ₹690 per conversion. Performance Max produced conversions around ₹104, but at a 0.87% conversion rate compared to Search's 7.26%.",
      whatHappenedSummary: "2,582 Conversions · ₹261 Brand CPL vs ₹690 Generic CPL",
      evidenceImages: [
        "../../public/images/avery-1.jpg",
        "../../public/images/avery-2.jpg",
        "../../public/images/avery-3.jpg"
      ],
      lookingBack: "I do not present Performance Max as automatically superior because its CPL was lower. This raised a lead-quality / intent / brand-capture question that was not properly tested. I should have investigated the Performance Max quality question rather than leaving it unresolved."
    },
    {
      id: "mount-heritage-lumina",
      folder: "03_Mount_Heritage",
      client: "Mount Heritage + Lumina World School",
      industry: "Education (K-12)",
      location: "2 Campuses",
      platforms: "Meta Ads",
      spend: "₹1.46 lakh + ₹84k",
      period: "Admission Season",
      subtitle: "Authentic Meta Ads video campaigns for K-12 school admissions.",
      intro: "Schools were running standard 'admissions open' campaigns with stock imagery. Parents in these localities care deeply about physical infrastructure, safety, and seeing actual students.",
      context: "Mount Heritage and Lumina World School operate in highly competitive local markets. Parents making decisions for K-12 education prioritize trust, proximity, and infrastructure above all else.",
      whatIFound: "Low conversion rates from standard graphics led to high CPLs in a competitive admission season. Parents were ignoring highly polished graphic banners because they lacked authenticity.",
      whatIChanged: [
        { title: "Real Campus Footages", desc: "Swapped out static graphics for rough, authentic video tours of the campuses (labs, playgrounds, classrooms)." },
        { title: "Parent Testimonials", desc: "Used raw interview clips from existing parents to build immediate local trust." },
        { title: "Hyper-Local Targeting", desc: "Restricted targeting to a tight radius around the schools to avoid wasted spend on distant postcodes." }
      ],
      whatHappened: "The schools generated 983 combined admission leads. Mount Heritage achieved ₹260 CPL (450 leads) on ₹1.17 lakh spend. Lumina achieved ₹111 CPL (533 leads) on ₹59k spend. A slightly shaky video shot on a phone showing a real playground outperformed highly polished graphic banners.",
      whatHappenedSummary: "983 total leads · Mount Heritage: ₹260 CPL · Lumina: ₹111 CPL",
      evidenceImages: [
        "../../public/images/mount-1.jpg",
        "../../public/images/mount-2.jpg",
        "../../public/images/mount-3.jpg",
        "../../public/images/mount-4.jpg"
      ],
      lookingBack: "Because school admissions have a rigid seasonal window, campaign learning phases need to be completed rapidly. Pacing budget heavily at the start of the season is usually better than spreading it evenly."
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
      subtitle: "Multi-channel lead generation for industrial automation.",
      intro: "The company needed more consistent lead flow and better-quality industrial enquiries. Generic valve searches attracted students, repair queries and other irrelevant traffic alongside genuine buyers.",
      context: "Rotex Automation manufactures solenoid valves and industrial process automation equipment. Their target market consists of B2B buyers, OEM manufacturers, and engineers looking for specific product specifications.",
      whatIFound: "There was a high volume of low-intent generic searches masking the real industrial B2B buyers. The existing setup struggled to separate high-value industrial enquiries from students or people looking for simple repairs.",
      whatIChanged: [
        { title: "Google Ads Strategy (Active Intent)", desc: "Split campaigns by intent: supplier/manufacturer terms, product specification terms, international, domestic. Rewrote ad messaging around buyer problems (delivery delays, SIL3 requirements) rather than just product specs." },
        { title: "Meta Ads Strategy (Passive Reach)", desc: "Targeted relevant professional audiences before active search based on job function, field of study, and industry. Strengthened forms to capture company, industry, and application." }
      ],
      whatHappened: "Google Ads delivered 791 conversions (₹1,337 CPL, 3.41% CVR) on ₹10.6 lakh spend. Meta delivered 2,005 leads (₹116 CPL) on ₹2.3 lakh spend. While Meta leads were significantly cheaper, they represented different buying stages—someone searching on Google is much closer to a commercial order than someone watching a Meta video.",
      whatHappenedSummary: "791 Google Conversions (₹1,337 CPL) · 2,005 Meta Leads (₹116 CPL)",
      evidenceImages: [
        "../../public/images/rotex-1.jpg",
        "../../public/images/rotex-2.jpg",
        "../../public/images/rotex-3.jpg",
        "../../public/images/rotex-4.jpg",
        "../../public/images/rotex-5.jpg",
        "../../public/images/rotex-6.jpg"
      ],
      lookingBack: "I measured both channels largely using cost per lead. For industrial B2B, one high-value order can outweigh hundreds of low-cost enquiries. The stronger measurement model would have tracked downstream value and revenue by channel."
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
      subtitle: "B2B SaaS lead generation via Meta and LinkedIn Ads.",
      intro: "The campaigns were reaching employees, students, and job seekers instead of the people who approve HR/payroll software. With a small budget, irrelevant traffic could not be hidden by volume.",
      context: "Accent Consulting sells HR and payroll software. The decision-makers are typically business owners, CEOs, or senior HR directors. However, broad targeting on social channels often captures employees and job seekers who have zero buying power for enterprise software.",
      whatIFound: "Poor audience targeting on broad channels was eating up a small budget before reaching actual decision-makers. The campaign was generating leads, but they were almost entirely unqualified.",
      whatIChanged: [
        { title: "Refined Meta Targeting", desc: "Focused heavily on business owners and CEOs to cut out employee/job-seeker noise." },
        { title: "Leveraged LinkedIn Data", desc: "Used LinkedIn for its strongest capability: job-title and seniority targeting." },
        { title: "Strengthened Forms", desc: "Included company size and role in lead forms to actively deter job seekers from submitting." }
      ],
      whatHappened: "The campaigns generated 207 total leads on ₹92,442 total spend. A critical finding emerged during testing: all 16 LinkedIn leads came directly from Message Ads. Sponsored Content (in-feed ads) generated zero leads on the exact same audience during the same month. For this specific B2B audience, direct inbox outreach was vastly superior to in-feed advertising.",
      whatHappenedSummary: "207 total leads · 16 vs 0 (Message Ads vs Sponsored Content)",
      evidenceImages: [
        "../../public/images/accent-1.jpg",
        "../../public/images/accent-2.jpg",
        "../../public/images/accent-3.jpg",
        "../../public/images/accent-4.jpg"
      ],
      lookingBack: "Approximately ₹80,000 was spread across 31 Meta ad sets. That left around ₹2,500 per ad set, which was too little for most ad sets to properly exit learning. Today, I would fund roughly three or four audiences properly and test them sequentially."
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
      subtitle: "Meta Ads lead generation for overseas education consulting.",
      intro: "Students were applying for Ireland and UK master's programmes across four cities. Lead volume was not the main problem. Fewer than half of the leads were usable.",
      context: "NewStrides helps students apply to international universities. The sales process relies on counsellors manually calling and guiding leads. A high volume of unqualified leads wastes expensive counselling time and burns out the sales team.",
      whatIFound: "The account was generating leads, but the usable-lead share was only approximately 45%. Many students lacked the necessary academic background, financial capability, or were just browsing. The ad forms were too easy to submit.",
      whatIChanged: [
        { title: "Rebuilt Lead Forms", desc: "Changed forms to qualify rather than simply collect volume, asking specific questions about study intent and financial readiness." },
        { title: "Added friction in ad copy", desc: "Put eligibility requirements and cost expectations directly into ad copy to deter unqualified clicks." },
        { title: "Implemented feedback loops", desc: "Ran weekly lead-quality reviews with counselling teams to quickly adjust targeting based on actual conversation quality." }
      ],
      whatHappened: "Usable-lead share improved from approximately 45% to 65% on roughly the same spend over 19 months. The total lead volume (9,766 leads) became significantly more valuable to the business.",
      whatHappenedSummary: "9,766 leads · 45% → 65% usable share · ₹49.4L spend",
      evidenceImages: [
        "../../public/images/newstrides-1.jpg",
        "../../public/images/newstrides-2.jpg"
      ],
      lookingBack: "Friction in marketing is sometimes necessary. Adding barriers (like requirements in copy) reduced junk volume and increased actual usable pipeline. Counselling feedback is often the most important metric dashboard you have."
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
      subtitle: "Client acquisition strategy for a B2B digital agency.",
      intro: "This account was particularly competitive because the advertisers bidding against us were themselves paid-media specialists. When competing against other marketers, you cannot just outbid them.",
      context: "Cheenti Digital is a digital marketing agency acquiring clients in India. In highly saturated markets like digital marketing services, obvious keywords and locations are ruthlessly competitive, leading to extremely high CPCs.",
      whatIFound: "Extremely high CPCs in assumed core markets (metros) due to intense agency competition were inflating the cost per lead. Relying on assumptions about where the best clients live was proving to be very expensive in Google Ads.",
      whatIChanged: [
        { title: "Geographic Expansion Analysis", desc: "Tested secondary markets outside of the highly saturated core metro areas (like Delhi) to find arbitrage opportunities in CPCs." },
        { title: "Niche Service Targeting", desc: "Shifted budget away from broad 'marketing agency' terms toward specific, high-intent pain points." }
      ],
      whatHappened: "Over 20 months on ₹14.2 lakh spend, the account maintained a 5.37% conversion rate with 989 total conversions. We discovered that metros outside Delhi generated leads approximately 20% cheaper than the assumed core market. By finding the geographic and intent pockets competitors were ignoring, we stabilized the CPL.",
      whatHappenedSummary: "989 Conversions · 5.37% Conv. Rate · 20% Cheaper CPL Outside Delhi",
      evidenceImages: [
        "../../public/images/cheenti-1.jpg",
        "../../public/images/cheenti-2.jpg",
        "../../public/images/cheenti-3.jpg"
      ],
      lookingBack: "Relying on assumptions about where your best clients live can be very expensive in Google Ads. When competing against other marketers, you have to find the geographic or intent pockets they are ignoring."
    }
  ],
  
  philosophy: [
    { title: "1. Check the data is real", desc: "Tracking comes before bidding decisions." },
    { title: "2. Read search terms every week", desc: "Negative keywords are ongoing account management, especially in B2B." },
    { title: "3. Ask sales which leads were real", desc: "Sales/counselling feedback often reveals what dashboards cannot." },
    { title: "4. Question the measure", desc: "CPL is not always the correct business KPI. Sometimes what matters is cost per order, cost per enrolment, qualified opportunity, or revenue." }
  ],

  linkedinUrl: "https://www.linkedin.com/in/akshay-chandel/", // Add real URL here
  
  adCreatives: [
    {
      id: "creative-1",
      platform: "Meta Ads",
      client: "Lumina World School",
      objective: "Parent Enquiries",
      role: "Concept, copy, direction and iteration",
      aiAssisted: "Yes",
      context: "Tested static vs raw video. Shaky footage of actual playgrounds outperformed polished stock graphics.",
      image: "../../public/images/mount-1.jpg",
      thumb: "../../public/images/mount-1.jpg"
    },
    {
      id: "creative-2",
      platform: "LinkedIn Ads",
      client: "Accent Consulting",
      objective: "B2B Software Demos",
      role: "Message Match, Copywriting",
      aiAssisted: "No",
      context: "Calling out the specific HR job title dramatically improved CTR.",
      image: "../../public/images/accent-1.jpg",
      thumb: "../../public/images/accent-1.jpg"
    }
  ],

  landingPages: [
    {
      id: "lp-1",
      client: "PC Technologies",
      purpose: "Local Repair Lead Generation",
      traffic: "Google Ads (Local Search)",
      role: "Page structure, copy direction, message match, conversion thinking",
      goal: "Convert high-intent emergency repair searches into immediate phone calls.",
      audience: "People with broken devices needing same-day service nearby.",
      whatIWorkedOn: "Simplified the header to feature a massive 'Call Now' button. Removed long-form paragraphs in favor of a 3-step 'How it works' visual.",
      image: "../../public/images/pc-tech-1.jpg"
    }
  ],

  philosophy: [
    { title: "1. Check the data is real", desc: "Tracking comes before bidding decisions." },
    { title: "2. Read search terms every week", desc: "Negative keywords are ongoing account management, especially in B2B." },
    { title: "3. Ask sales which leads were real", desc: "Sales/counselling feedback often reveals what dashboards cannot." },
    { title: "4. Question the measure", desc: "CPL is not always the correct business KPI. Sometimes what matters is cost per order, cost per enrolment, qualified opportunity, or revenue." }
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
