// Everything on the site comes from this file. Change names, dates, sessions,
// speakers, sponsors, tickets and FAQ here; the pages update themselves.
// All people, companies and places below are fictional.

export const event = {
  name: "Fieldline",
  edition: "2027",
  tagline: "Two days on design, engineering and the craft in between",
  description:
    "Fieldline is a two-day conference for designers and engineers who build products together. Talks, hands-on workshops and long hallway conversations in Portland, Oregon.",
  // Shown in the hero and used for the "days to go" counter (ISO date, local start time).
  startDate: "2027-05-12T09:00:00-07:00",
  dateLabel: "May 12 and 13, 2027",
  shortDate: "May 12-13, 2027",
  city: "Portland, Oregon",
  attendees: "1,200",
  contactEmail: "hello@fieldline.example.com",
  // Every "Get tickets" button links here (Tito, Eventbrite, Luma, a Stripe payment link...).
  ticketUrl: "https://tickets.example.com/fieldline-2027",
  social: [
    { label: "Mastodon", href: "https://mastodon.example.com/@fieldline" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/example" },
    { label: "YouTube", href: "https://www.youtube.com/@example" },
  ],
};

export const nav = [
  { label: "Agenda", href: "/#agenda" },
  { label: "Speakers", href: "/speakers/" },
  { label: "Venue", href: "/#venue" },
  { label: "Sponsors", href: "/#sponsors" },
  { label: "FAQ", href: "/#faq" },
];

export const stats = [
  { value: "36", label: "talks and workshops" },
  { value: "3", label: "tracks" },
  { value: "1,200", label: "attendees" },
  { value: "2", label: "days" },
];

export const topics = [
  "Design systems",
  "Frontend architecture",
  "Accessibility",
  "AI in the product loop",
  "Motion and interaction",
  "Performance",
  "Research ops",
  "Developer experience",
];

export type TrackId = "build" | "design" | "lab";

export const tracks: { id: TrackId; name: string; description: string; color: string }[] = [
  { id: "build", name: "Build", description: "Engineering talks: architecture, tooling and performance.", color: "#c6ff3d" },
  { id: "design", name: "Design", description: "Systems, interaction and research in practice.", color: "#ff5ca8" },
  { id: "lab", name: "Lab", description: "Hands-on workshops in small groups. Bring a laptop.", color: "#58c7ff" },
];

export type Speaker = {
  slug: string;
  name: string;
  role: string;
  company: string;
  pronouns?: string;
  bio: string;
  links?: { label: string; href: string }[];
};

export const speakers: Speaker[] = [
  {
    slug: "maya-okonkwo",
    name: "Maya Okonkwo",
    role: "Principal Design Engineer",
    company: "Lumenstack",
    pronouns: "she/her",
    bio: "Maya leads the design system team at Lumenstack, where 40 product teams ship from one set of components. She writes about tokens, theming and the politics of shared code, and has spent a decade moving between Figma files and pull requests.",
    links: [{ label: "Website", href: "https://example.com/maya" }],
  },
  {
    slug: "theo-lindqvist",
    name: "Theo Lindqvist",
    role: "Staff Engineer",
    company: "Parcelwise",
    pronouns: "he/him",
    bio: "Theo works on Parcelwise's edge platform and cares a lot about the first 100 milliseconds of a page load. Before that he built map rendering engines and a very small, very fast static site generator nobody uses.",
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    role: "Head of Research",
    company: "Orchardly",
    pronouns: "she/her",
    bio: "Priya built Orchardly's research practice from one person to a team of twelve. Her work focuses on running research continuously alongside engineering, not as a phase before it.",
  },
  {
    slug: "daniel-achebe",
    name: "Daniel Achebe",
    role: "Accessibility Lead",
    company: "Tessellite",
    pronouns: "he/him",
    bio: "Daniel helps product teams treat accessibility as a design material instead of a checklist. He has audited more than 200 interfaces and still gets excited about a well-labeled form.",
  },
  {
    slug: "sofia-marchetti",
    name: "Sofia Marchetti",
    role: "Motion Designer",
    company: "Independent",
    pronouns: "she/her",
    bio: "Sofia designs motion systems for apps and operating systems. She believes good animation explains change, and she will happily show you the frame-by-frame breakdowns to prove it.",
  },
  {
    slug: "kenji-watanabe",
    name: "Kenji Watanabe",
    role: "Engineering Manager",
    company: "Quillfin",
    pronouns: "he/him",
    bio: "Kenji runs the developer experience group at Quillfin. His team owns the build pipeline, local tooling and the internal docs site, and measures success in minutes saved per engineer per day.",
  },
  {
    slug: "amara-diallo",
    name: "Amara Diallo",
    role: "Product Designer",
    company: "Halyard Data",
    pronouns: "she/her",
    bio: "Amara designs data-heavy interfaces for analysts and operators. She is known for turning dense dashboards into tools people actually enjoy opening on a Monday morning.",
  },
  {
    slug: "lucas-ferreira",
    name: "Lucas Ferreira",
    role: "Frontend Architect",
    company: "Brightmoor Systems",
    pronouns: "he/him",
    bio: "Lucas has migrated three large codebases between frameworks without a rewrite freeze. He talks about incremental change, boring technology and how to keep a monorepo pleasant at 2 million lines.",
  },
  {
    slug: "hannah-osei",
    name: "Hannah Osei",
    role: "ML Product Lead",
    company: "Pinecask",
    pronouns: "she/her",
    bio: "Hannah ships machine learning features that people trust. She focuses on the interface around a model: how it explains itself, how it fails gracefully and how users stay in control.",
  },
  {
    slug: "ravi-chandrasekar",
    name: "Ravi Chandrasekar",
    role: "Performance Engineer",
    company: "Vantor",
    pronouns: "he/him",
    bio: "Ravi profiles things for a living. He has shaved seconds off checkout flows, megabytes off bundles and, once, a whole server off a monthly bill by finding one forgotten loop.",
  },
  {
    slug: "elena-novak",
    name: "Elena Novak",
    role: "Design Director",
    company: "Copperleaf Studio",
    pronouns: "she/her",
    bio: "Elena leads a studio of designers and engineers working with health and civic organizations. She is interested in how small teams keep quality high without heavy process.",
  },
  {
    slug: "marcus-bell",
    name: "Marcus Bell",
    role: "Creative Technologist",
    company: "Nimbusfold",
    pronouns: "he/him",
    bio: "Marcus builds prototypes that sit somewhere between product and art. He teaches creative coding on weekends and closes out Fieldline with a live-coded set every year.",
  },
];

export type Session = {
  day: 1 | 2;
  start: string; // 24-hour "HH:MM", shown as 9:00 AM
  end: string;
  track: TrackId | "all";
  title: string;
  speakers?: string[]; // speaker slugs
  room: string;
  kind?: "talk" | "workshop" | "keynote" | "break" | "social";
  summary?: string;
};

export const days = [
  { day: 1 as const, label: "Day 1", date: "Wednesday, May 12" },
  { day: 2 as const, label: "Day 2", date: "Thursday, May 13" },
];

export const sessions: Session[] = [
  // Day 1
  { day: 1, start: "08:00", end: "09:00", track: "all", title: "Registration and breakfast", room: "Main Hall", kind: "break" },
  {
    day: 1, start: "09:00", end: "09:45", track: "all", kind: "keynote", room: "Main Stage",
    title: "The seam is the product", speakers: ["maya-okonkwo"],
    summary: "Where design ends and engineering begins is where most products break. A look at teams that removed the handoff entirely.",
  },
  {
    day: 1, start: "10:00", end: "10:40", track: "build", room: "Main Stage",
    title: "The first 100 milliseconds", speakers: ["theo-lindqvist"],
    summary: "What actually happens between a tap and the first pixel, and the five changes that mattered most at Parcelwise.",
  },
  {
    day: 1, start: "10:00", end: "10:40", track: "design", room: "Studio B",
    title: "Research that never stops", speakers: ["priya-raman"],
    summary: "Running research every week alongside sprints, with a team of one or twelve.",
  },
  {
    day: 1, start: "10:00", end: "12:00", track: "lab", kind: "workshop", room: "Workshop Loft",
    title: "Workshop: build an accessible combobox from scratch", speakers: ["daniel-achebe"],
    summary: "Two hours, one component, every keyboard and screen reader detail. Limited to 40 seats.",
  },
  {
    day: 1, start: "11:00", end: "11:40", track: "build", room: "Main Stage",
    title: "Migrating without a freeze", speakers: ["lucas-ferreira"],
    summary: "How to change frameworks one route at a time while shipping features every day.",
  },
  {
    day: 1, start: "11:00", end: "11:40", track: "design", room: "Studio B",
    title: "Motion that explains", speakers: ["sofia-marchetti"],
    summary: "A practical system for deciding when to animate, how long and with which easing.",
  },
  { day: 1, start: "12:00", end: "13:15", track: "all", title: "Lunch on the terrace", room: "Terrace", kind: "break" },
  {
    day: 1, start: "13:15", end: "13:55", track: "build", room: "Main Stage",
    title: "Minutes per engineer per day", speakers: ["kenji-watanabe"],
    summary: "Measuring developer experience in a way leadership understands and engineers believe.",
  },
  {
    day: 1, start: "13:15", end: "13:55", track: "design", room: "Studio B",
    title: "Dashboards people want to open", speakers: ["amara-diallo"],
    summary: "Designing for dense data without drowning the people who rely on it.",
  },
  {
    day: 1, start: "13:15", end: "15:15", track: "lab", kind: "workshop", room: "Workshop Loft",
    title: "Workshop: design tokens end to end", speakers: ["maya-okonkwo"],
    summary: "From a design file to themed components in three frameworks. Laptop required.",
  },
  {
    day: 1, start: "14:15", end: "14:55", track: "build", room: "Main Stage",
    title: "Finding the forgotten loop", speakers: ["ravi-chandrasekar"],
    summary: "Live profiling of a real application, from flame graph to fix.",
  },
  {
    day: 1, start: "14:15", end: "14:55", track: "design", room: "Studio B",
    title: "Small studio, high bar", speakers: ["elena-novak"],
    summary: "Critique rituals, shared standards and saying no, at a twelve-person studio.",
  },
  { day: 1, start: "17:30", end: "20:00", track: "all", title: "Opening night party", room: "Rooftop", kind: "social", summary: "Food, drinks and music on the Foundry rooftop. Included with every ticket." },

  // Day 2
  { day: 2, start: "08:30", end: "09:15", track: "all", title: "Coffee and breakfast", room: "Main Hall", kind: "break" },
  {
    day: 2, start: "09:15", end: "10:00", track: "all", kind: "keynote", room: "Main Stage",
    title: "Interfaces for models that can be wrong", speakers: ["hannah-osei"],
    summary: "Designing trust, recovery and control into AI features people use every day.",
  },
  {
    day: 2, start: "10:15", end: "10:55", track: "build", room: "Main Stage",
    title: "Boring technology, exciting products", speakers: ["lucas-ferreira", "kenji-watanabe"],
    summary: "A conversation about choosing tools you will still like in five years.",
  },
  {
    day: 2, start: "10:15", end: "10:55", track: "design", room: "Studio B",
    title: "Accessibility as a design material", speakers: ["daniel-achebe"],
    summary: "Using constraints from assistive technology to make better interfaces for everyone.",
  },
  {
    day: 2, start: "10:15", end: "12:15", track: "lab", kind: "workshop", room: "Workshop Loft",
    title: "Workshop: prototyping motion in code", speakers: ["sofia-marchetti"],
    summary: "Turn motion specs into real, reduced-motion-aware interactions in the browser.",
  },
  {
    day: 2, start: "11:15", end: "11:55", track: "build", room: "Main Stage",
    title: "Budgets that hold", speakers: ["ravi-chandrasekar"],
    summary: "Setting performance budgets in CI that teams respect instead of disable.",
  },
  {
    day: 2, start: "11:15", end: "11:55", track: "design", room: "Studio B",
    title: "Synthesis in an afternoon", speakers: ["priya-raman", "amara-diallo"],
    summary: "Fast, honest ways to turn a week of interviews into decisions.",
  },
  { day: 2, start: "12:15", end: "13:30", track: "all", title: "Lunch and sponsor showcase", room: "Main Hall", kind: "break" },
  {
    day: 2, start: "13:30", end: "15:30", track: "lab", kind: "workshop", room: "Workshop Loft",
    title: "Workshop: creative coding for product people", speakers: ["marcus-bell"],
    summary: "Sketch generative visuals with a few lines of code, then bring them into a real interface.",
  },
  {
    day: 2, start: "13:30", end: "14:10", track: "design", room: "Studio B",
    title: "The design review you actually need", speakers: ["elena-novak"],
    summary: "A repeatable format for critique that improves work without slowing it down.",
  },
  {
    day: 2, start: "13:30", end: "14:10", track: "build", room: "Main Stage",
    title: "Edge rendering in practice", speakers: ["theo-lindqvist"],
    summary: "What to render where, with real numbers from a global storefront.",
  },
  {
    day: 2, start: "16:00", end: "17:00", track: "all", kind: "keynote", room: "Main Stage",
    title: "Closing set: live-coded", speakers: ["marcus-bell"],
    summary: "An hour of music and visuals written live on stage. Stay for it.",
  },
];

export const venue = {
  name: "The Foundry Hall",
  address: "410 Harbor Street, Portland, OR 97209",
  description:
    "A converted 1920s ironworks on the river, with a main stage for 1,200, two studios, a workshop loft and a rooftop terrace. Step-free access throughout, with quiet rooms and a nursing room on every floor.",
  // Opens a map search for the address in a new tab. Change to any map link you prefer.
  mapUrl: "https://www.openstreetmap.org/search?query=410%20Harbor%20Street%2C%20Portland%2C%20OR",
  gettingThere: [
    { title: "By air", text: "Portland International Airport is 25 minutes away by light rail. Take the Red Line to Harbor Station, then walk four minutes." },
    { title: "By transit", text: "Streetcar lines A and B stop at Harbor and 10th, right outside the main entrance." },
    { title: "By bike", text: "Secure, free bike parking for 300 bikes on the ground floor, staffed both days." },
    { title: "By car", text: "Limited paid parking nearby. We recommend transit; a ticket includes a two-day transit pass." },
  ],
  hotels: [
    { name: "The Riverline Hotel", distance: "3 min walk", rate: "$189 a night", code: "FIELDLINE27", href: "https://example.com/riverline" },
    { name: "Alder and Pine Inn", distance: "8 min walk", rate: "$154 a night", code: "FL27", href: "https://example.com/alder-pine" },
    { name: "Harbor Lofts", distance: "10 min by streetcar", rate: "$129 a night", code: "FIELDLINE", href: "https://example.com/harbor-lofts" },
  ],
};

export type SponsorTier = "headline" | "gold" | "community";

export const sponsorTiers: { id: SponsorTier; name: string }[] = [
  { id: "headline", name: "Headline partners" },
  { id: "gold", name: "Gold sponsors" },
  { id: "community", name: "Community partners" },
];

// Logos are generated wordmarks. To use real logos, add files to /public and set `logo`.
export const sponsors: { name: string; tier: SponsorTier; href: string; logo?: string }[] = [
  { name: "Lumenstack", tier: "headline", href: "https://example.com/lumenstack" },
  { name: "Parcelwise", tier: "headline", href: "https://example.com/parcelwise" },
  { name: "Orchardly", tier: "gold", href: "https://example.com/orchardly" },
  { name: "Tessellite", tier: "gold", href: "https://example.com/tessellite" },
  { name: "Quillfin", tier: "gold", href: "https://example.com/quillfin" },
  { name: "Halyard Data", tier: "gold", href: "https://example.com/halyard" },
  { name: "Pinecask", tier: "community", href: "https://example.com/pinecask" },
  { name: "Vantor", tier: "community", href: "https://example.com/vantor" },
  { name: "Copperleaf", tier: "community", href: "https://example.com/copperleaf" },
  { name: "Nimbusfold", tier: "community", href: "https://example.com/nimbusfold" },
  { name: "Brightmoor", tier: "community", href: "https://example.com/brightmoor" },
];

export const sponsorPitch = {
  title: "Put your team in front of 1,200 builders",
  text: "Sponsorship packages start at $2,500 and include tickets, a booth or a hosted session.",
  email: "sponsors@fieldline.example.com",
};

export const tickets: {
  name: string;
  price: string;
  note: string;
  features: string[];
  featured?: boolean;
  url?: string; // leave empty to use event.ticketUrl
  soldOut?: boolean;
}[] = [
  {
    name: "Early bird",
    price: "$349",
    note: "Until February 28, 2027",
    features: ["Both conference days", "All talks and keynotes", "Opening night party", "Lunch and coffee both days"],
    soldOut: true,
  },
  {
    name: "Conference",
    price: "$499",
    note: "Most popular",
    features: ["Both conference days", "All talks and keynotes", "Opening night party", "Lunch and coffee both days", "Session recordings"],
    featured: true,
  },
  {
    name: "Conference + Lab",
    price: "$749",
    note: "Limited seats",
    features: ["Everything in Conference", "One reserved workshop seat", "Workshop materials to keep", "Two-day transit pass"],
  },
];

export const ticketNotes =
  "Group discounts for 5 or more. Student and community tickets at $99 are available on request, no questions asked.";

export const faqs = [
  {
    q: "Is there a refund policy?",
    a: "Tickets are fully refundable until 30 days before the event. After that you can transfer your ticket to someone else at no charge.",
  },
  {
    q: "Will talks be recorded?",
    a: "Yes. Every talk on the Build and Design tracks is recorded and shared with attendees within two weeks. Workshops are not recorded.",
  },
  {
    q: "How do I pick a workshop?",
    a: "Conference + Lab ticket holders get an email in April to choose a workshop. Seats are assigned in the order choices come in.",
  },
  {
    q: "Is the venue accessible?",
    a: "The Foundry Hall is step-free throughout, with live captions on the main stage, reserved seating and quiet rooms. Tell us what you need and we will make it work.",
  },
  {
    q: "Do you have a code of conduct?",
    a: "Yes. Fieldline is a harassment-free event for everyone. Our full code of conduct is shared with every ticket, and trained staff are on site both days.",
  },
  {
    q: "Can I speak at a future Fieldline?",
    a: "Our call for proposals opens every autumn. Send us a note below and we will add you to the list.",
  },
];

export const contact = {
  title: "Questions, ideas, speaking?",
  text: "Send us a note and the organizing team will reply within two working days.",
};
