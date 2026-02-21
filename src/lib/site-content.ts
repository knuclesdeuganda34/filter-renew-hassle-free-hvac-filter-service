export const COMPANY_INFO = {
  name: "Filter Renew",
  phone: "940-240-6152",
  email: "hello@filter-renew.com",
  address: "Sanger, Texas",
  tagline: "Hassle-free HVAC filter replacement service.",
};
export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
export const PRICING_PLANS = [
  {
    id: "residential",
    name: "Residential",
    price: "Retail Price",
    fee: "+$10",
    feeLabel: "per filter installation",
    description: "Simple, transparent pricing for homeowners. We match prices from major retailers like Home Depot or Lowe's.",
    features: [
      "Ladder-free service",
      "Smart scheduling reminders",
      "High-efficiency filters",
      "System safety check",
      "No long-term contracts",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    id: "commercial",
    name: "Commercial",
    price: "Custom",
    fee: "Quote",
    feeLabel: "volume-based rates",
    description: "Scalable maintenance solutions for office buildings, retail spaces, and property management portfolios.",
    features: [
      "Bulk filter management",
      "Detailed maintenance reports",
      "Priority scheduling",
      "Dedicated account manager",
      "Flexible billing options",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];
export const FEATURES = [
  {
    title: "Professional Installation",
    description: "Our certified technicians handle the ladder-climbing and awkward ceiling reaches so you don't have to.",
    icon: "Ladder",
  },
  {
    title: "Smart Reminders",
    description: "Never forget a filter change again. We track your schedule and arrive exactly when your system needs fresh air.",
    icon: "Bell",
  },
  {
    title: "Premium Filters",
    description: "We use high-efficiency, American-made filters that capture more dust, pollen, and allergens than retail brands.",
    icon: "Wind",
  },
];
export const TESTIMONIALS = [
  {
    name: "Savannah H.",
    role: "Homeowner",
    content: "Filter Renew has been a lifesaver. I used to forget my filters for months, but now my air is always fresh and I never have to think about it.",
    rating: 5,
  },
  {
    name: "Chad V.",
    role: "Property Manager",
    content: "We use them for all our rental properties. It's the most cost-effective way to ensure our HVAC systems last longer and tenants stay happy.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Business Owner",
    content: "Professional, punctual, and perfect service. They found filters for our custom commercial units that we couldn't find anywhere else.",
    rating: 5,
  },
];
export const FAQS = [
  {
    question: "How often should I change my filters?",
    answer: "Most residential systems need a change every 3 months, but homes with pets or allergies might require monthly service.",
  },
  {
    question: "Do I need to be home for the service?",
    answer: "For the first visit, yes, to map out your units. After that, we can arrange exterior or scheduled access as needed.",
  },
];