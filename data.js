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
    linkedin: "https://www.linkedin.com/in/akshay-chandel/",
    resumeFile: "Resume 2.0.pdf",
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

  certifications: [
    { title: "AI-Powered Performance Ads Certification", thumb: "https://placehold.co/400x300/e9ecef/555555?text=AI-Powered+Ads", link: "https://skillshop.credential.net/c68d5b96-c2dd-4320-985d-f0fda254b1f1#acc.KSFfBsnv" },
    { title: "Google Ads Search Certification", thumb: "https://placehold.co/400x300/e9ecef/555555?text=Search+Ads", link: "https://skillshop.credential.net/fb99a2eb-e4e9-4e2f-8122-215e3841d799#acc.oH7ZyxfU" },
    { title: "Google Ads Display Certification", thumb: "https://placehold.co/400x300/e9ecef/555555?text=Display+Ads", link: "https://skillshop.credential.net/db6e7966-ab00-4e56-a01e-ca14f251a34b#acc.CzB9rmhc" },
    { title: "Google Ads Measurement Certification", thumb: "https://placehold.co/400x300/e9ecef/555555?text=Measurement", link: "https://skillshop.credential.net/f1e0a29d-a5d0-48c1-942d-11025d5a69a5#acc.GFNcJ5Y3" },
    { title: "Google Analytics Certification", thumb: "https://placehold.co/400x300/e9ecef/555555?text=Analytics", link: "https://skillshop.credential.net/0c3e9d59-da95-45d9-9a35-b30df401caac#acc.tnCsyJIR" }
  ],

  caseStudies: [
    {
      id: "pc-technologies",
      folder: "01_PC_Technologies_Portland",
      client: "PC Technologies",
      industry: "Local Services",
      location: "Portland, Oregon",
      platforms: "Google Ads",
      spend: "$1,550/month",
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
      spend: "₹87,500/month",
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
      spend: "~₹76,000/month (combined)",
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
      spend: "₹1.84 lakh/month",
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
      id: "cheenti-digital",
      folder: "05_Cheenti_Agency_Growth",
      client: "Cheenti Digital",
      industry: "Digital Agency (Client Acquisition)",
      location: "India",
      platforms: "Google Ads",
      spend: "₹71,000/month",
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
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-20-42.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-20-42.jpg"
    },
    {
      id: "creative-2",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-20-49.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-20-49.jpg"
    },
    {
      id: "creative-3",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-20-54.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-20-54.jpg"
    },
    {
      id: "creative-4",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-20-57.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-20-57.jpg"
    },
    {
      id: "creative-5",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-01.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-01.jpg"
    },
    {
      id: "creative-6",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-05.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-05.jpg"
    },
    {
      id: "creative-7",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-10.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-10.jpg"
    },
    {
      id: "creative-8",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-14.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-14.jpg"
    },
    {
      id: "creative-9",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-26.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-26.jpg"
    },
    {
      id: "creative-10",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-31.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-31.jpg"
    },
    {
      id: "creative-11",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-36.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-36.jpg"
    },
    {
      id: "creative-12",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-41.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-41.jpg"
    },
    {
      id: "creative-13",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-45.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-45.jpg"
    },
    {
      id: "creative-14",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-49.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-49.jpg"
    },
    {
      id: "creative-15",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-53.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-53.jpg"
    },
    {
      id: "creative-16",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-21-57.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-21-57.jpg"
    },
    {
      id: "creative-17",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-22-00.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-22-00.jpg"
    },
    {
      id: "creative-18",
      platform: "Design Portfolio",
      client: "Ad Creative",
      objective: "Marketing",
      role: "Design",
      aiAssisted: "No",
      context: "Premium Ad Creative",
      image: "public/ad-creatives/photo_2026-08-18_09-22-04.jpg",
      thumb: "public/ad-creatives/photo_2026-08-18_09-22-04.jpg"
    }
  ],

  landingPages: [
    {
      id: "lp-dpm-entertainment",
      title: "DPM Mr, Miss, Mrs & Miss Teen India 2026",
      description: "Premium pageant landing page with cinematic hero, category selection, judges panel, testimonial carousel, and urgency-driven registration. Built to convert aspiring models into paid registrations.",
      industry: "Entertainment & Events",
      role: "Full Page Design & Copy · AI-Assisted Build",
      url: "https://dpm-entertainment.vercel.app/",
      image: "public/ad-creatives/lp-dpm-entertainment.png"
    },
    {
      id: "lp-pc-technologies",
      title: "PC Technologies — Managed IT Services",
      description: "B2B IT services landing page for a Washington-based MSP. Hero with consultation form, trust signals (20+ years, fast response), and service breakdowns designed to capture high-intent local search traffic.",
      industry: "IT Services / B2B Local",
      role: "Page Strategy, Copy & Conversion Architecture · AI-Assisted Build",
      url: "https://pctechnologies.net/it-services/",
      image: "public/ad-creatives/lp-pc-technologies.png"
    },
    {
      id: "lp-avery-india",
      title: "Avery Weigh-Tronix India — Process Weighing Solutions",
      description: "Industrial B2B landing page for heavy-duty weighing systems. Dark premium design with enquiry CTA, product showcases (tank, ladle, bar weighing), industry-specific sections, and trust metrics (115+ years, 10k+ installations).",
      industry: "B2B Industrial Manufacturing",
      role: "Full Page Design, UX & Copy Direction · AI-Assisted Build",
      url: "https://avery-india-weighing.vercel.app/",
      image: "public/ad-creatives/lp-avery-india.png"
    },
    {
      id: "lp-newstrides",
      title: "NewStrides — Global Education Roadmap",
      description: "Overseas education webinar registration page. Features urgency countdown, inline form, university trust logos (Oxford, MIT, Harvard), risk-vs-guidance comparison, and alumni social proof. Designed for high lead capture.",
      industry: "Education / EdTech",
      role: "Landing Page Design, Copy & Lead Funnel · AI-Assisted Build",
      url: "https://newstrides.co/new/webinar-facebook/",
      image: "webinar.png"
    },
    {
      id: "lp-dpm-audition",
      title: "DPM Entertainment — National Audition Registration",
      description: "High-urgency audition registration page featuring Urvashi Rautela as brand ambassador. Countdown timer, ₹999 CTA, 4-step journey breakdown, participant testimonials, and celebrity association for trust. Conversion-focused design.",
      industry: "Entertainment & Events",
      role: "Full Page Design, Copy & CRO Strategy · AI-Assisted Build",
      url: "https://dpm-landing-page.vercel.app/",
      image: "public/ad-creatives/lp-dpm-audition.png"
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
