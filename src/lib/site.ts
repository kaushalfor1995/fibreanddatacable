export const site = {
  name: "Fibre & Data Cabling",
  tagline: "Connecting Perth with Reliable Fibre & Data Solutions",
  phone: "0470 661 700",
  phoneHref: "tel:+61470661700",
  email: "info@fibreanddatacable.com.au",
  location: "Perth, Western Australia",
  hours: "Open every day, 24 hours",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Customer Review", to: "/reviews" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const whyChooseUs = [
  {
    title: "Quality Workmanship",
    body: "Neat, compliant installations that meet NBN and Australian telecommunications standards.",
  },
  {
    title: "Reliable Service",
    body: "We turn up when we say we will and keep you informed from quote to completion.",
  },
  {
    title: "Safety Focused",
    body: "Full PPE, safe work method statements and site safety on every residential and commercial job.",
  },
  {
    title: "Professional Equipment",
    body: "Calibrated fusion splicers, OTDR testing and certified cable testers on every project.",
  },
  {
    title: "Competitive Pricing",
    body: "Clear, itemised quoting with no hidden extras or surprise variations.",
  },
  {
    title: "Fast Response",
    body: "Prompt quotes across the Perth metro area and emergency fibre repair callouts.",
  },
  {
    title: "Customer Satisfaction",
    body: "Work isn't finished until it's tested, tidied and you're completely happy with it.",
  },
];

export const processSteps = [
  { title: "Consultation", body: "We discuss your requirements, property type and timeframes." },
  { title: "Site Inspection", body: "On-site assessment of pathways, pit locations and access." },
  { title: "Planning", body: "A clear scope, compliant design and fixed written quote." },
  { title: "Installation", body: "Licensed technicians complete the work neatly and safely." },
  { title: "Testing", body: "Full certification, OTDR and cable testing with documented results." },
  { title: "Completion", body: "Site cleaned, results handed over and aftercare support provided." },
];

export const faqs = [
  { q: "How much does NBN box relocation cost in Perth?", a: "The quote depends on the fibre cable length, wall and roof access, whether the route crosses floors and any new conduit needed. Send your suburb and photos of the current and proposed locations for a free quote." },
  { q: "Can you install Cat6 data points in a two-storey home?", a: "We assess routes between floors and install Cat6 Ethernet outlets where access allows. Tell us where your router is and which rooms need wired connections, including home offices, gaming desks and smart TVs." },
  { q: "Can you run cabling for a Wi-Fi access point?", a: "Yes. We can run Ethernet cabling to a suitable access point or router location. Coverage depends on the equipment, its placement and the layout of the property; cabling alone does not guarantee a particular Wi-Fi speed." },
  { q: "Do you cable new homes and shop fitouts?", a: "Yes. We plan data outlets, communications cabinets and cable routes for new homes, renovations, offices and shops. Send your floor plan and build or fitout stage so access can be assessed before walls and ceilings are closed." },
  {
    q: "What is an NBN FTTP pathway and do I need one?",
    a: "A customer-installed FTTP pathway is a suitable route for fibre cable to your preferred indoor NBN connection box location. You may need one when the proposed location is outside the standard installation scope or existing conduit is blocked. We assess the route and access before quoting. NBN completes the network connection through your internet provider.",
  },
  {
    q: "Do you service all of the Perth metropolitan area?",
    a: "Yes. We cover the entire Perth metro area, from Joondalup and Wanneroo through to Fremantle, Rockingham, Armadale and the eastern suburbs, for both residential and commercial clients.",
  },
  {
    q: "Do you work on commercial projects as well as homes?",
    a: "We do. Alongside residential NBN pathways we deliver commercial data cabling, network cabling, CCTV, communications room fitouts and cabling for offices and shops.",
  },
  {
    q: "Is your work compliant and tested?",
    a: "All cabling is installed to Australian standards and NBN specifications, and every installation is tested and certified with documented results supplied on completion.",
  },
  {
    q: "How quickly can you provide a quote?",
    a: "Send an enquiry or call 0470 661 700 and we'll usually respond the same business day, with a site inspection arranged at a time that suits you.",
  },
  {
    q: "Do you handle emergency fibre repairs?",
    a: "Yes. We offer rapid response fault finding, splicing and repair for damaged fibre and data infrastructure to get you back online fast.",
  },
];

export const googleReviewsUrl = "https://maps.app.goo.gl/YMLQEe5VrA4mTRJS6";

export const reviews = [
  {
    "name": "Caroline Doggett",
    "service": "Google review",
    "rating": 5,
    "text": "Good service, punctual professional. Highly recommend"
  },
  {
    "name": "Simon Beaumont",
    "service": "Google review",
    "rating": 5,
    "text": "Great prompt service, got the job done despite variations and complications. Stayed on the original quote, too. Would recommend."
  },
  {
    "name": "Dhruvil Patel",
    "service": "Google review",
    "rating": 5,
    "text": "Reliable, professional, and hardworking. Delivers quality work and is great to deal with. Highly recommended!"
  },
  {
    "name": "Gordon Jones",
    "service": "Google review",
    "rating": 5,
    "text": "Excellent, knowledgeable efficient and very friendly service a a reasonable price!"
  },
  {
    "name": "Tilly Sommerville",
    "service": "Google review",
    "rating": 5,
    "text": "Very professional, polite , updates on times and a great job done ."
  }
];
