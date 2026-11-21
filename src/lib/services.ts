import heroConduit from "@/assets/hero-conduit.jpg";
import cctvInstall from "@/assets/cctv-install.jpg";
import cat6Outlet from "@/assets/cat6-outlet.jpg";
import trenchConduit from "@/assets/trench-conduit.jpg";
import fibreSplicing from "@/assets/fibre-splicing.jpg";
import dataCabling from "@/assets/data-cabling.jpg";

export type Service = {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  heading?: string;
  seo?: { title: string; description: string };
  quoteDetails?: string;
  questions?: { q: string; a: string }[];
  relatedSlugs?: string[];
  image: string;
  alt: string;
  featured?: boolean;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "nbn-fttp-pathway",
    title: "NBN FTTP Pathway",
    icon: "Route",
    featured: true,
    short:
      "Compliant NBN FTTP pathways including surface-mounted and underground conduit, lead-in conduit and internal fibre pathways.",
    description:
      "Getting ready for an NBN fibre-to-the-premises (FTTP) upgrade in Perth? We assess existing conduit and install internal fibre pathways, surface-mounted conduit and underground lead-in conduit for homes and businesses. We can help plan a route when an existing conduit is blocked, the driveway is long or you want the indoor NBN box upstairs.",
    seo: {
      title: "NBN FTTP Pathway Installation Perth | Fibre & Data Cabling",
      description:
        "Need an NBN FTTP pathway in Perth? We install internal fibre pathways and lead-in conduit and assess blocked conduits. Request a free quote.",
    },
    quoteDetails:
      "Tell us your Perth suburb, property type and where you’d like the indoor NBN box. Mention any known blocked conduit, long driveway or route between floors. If you have photos of the existing conduit and proposed box location, have them handy so we can discuss the route with you.",
    relatedSlugs: ["nbn-box-relocation", "lead-in-communication-conduit", "fibre-optic-installation"],
    image: heroConduit,
    alt: "Telecommunications technician installing white surface-mounted conduit above an NBN LUCA box on a modern two-storey Perth home",
    points: [
      "Surface-mounted and underground conduit pathways",
      "Lead-in communication conduit from the street pit",
      "Internal fibre pathways to the fibre wall outlet",
      "Blocked or damaged conduit remediation and upgrades",
      "Completed to NBN specifications and Australian standards",
    ],
  },
  {
    slug: "fibre-optic-installation",
    title: "Fibre Optic Installation",
    heading: "Fibre Optic Cable Installation in Perth",
    icon: "Cable",
    short:
      "Single-mode and multi-mode fibre optic cable installation across Perth, including termination and link testing.",
    description:
      "We provide fibre optic cable installation in Perth for homes, commercial properties and industrial sites. We pull, terminate and patch single-mode and multi-mode fibre for building backbones, links between buildings and NBN connections. We test completed links and provide documented results at handover.",
    seo: {
      title: "Fibre Optic Installation Perth | Fibre & Data Cabling",
      description:
        "Fibre optic cable installation in Perth for homes, businesses and links between buildings. Get a quote for fibre cabling, termination and testing.",
    },
    quoteDetails:
      "Tell us the Perth suburb, where the fibre needs to start and finish, and the estimated cable length. Let us know if you already have conduit, racks or patch panels, and whether the installation needs to happen outside business hours.",
    relatedSlugs: ["fibre-splicing", "network-cabling", "nbn-fttp-pathway"],
    image: fibreSplicing,
    alt: "Fibre optic cable being prepared for installation by a qualified technician",
    points: [
      "Single-mode and multi-mode fibre installation",
      "Backbone, riser and inter-building links",
      "Termination, patching and labelling",
      "OTDR and power meter certification",
    ],
  },
  {
    slug: "fibre-splicing",
    title: "Fibre Splicing",
    heading: "Fibre Optic Splicing in Perth",
    icon: "GitMerge",
    short: "Fusion splicing and testing for new fibre links, damaged cables and network extensions in Perth.",
    description:
      "We provide fibre splicing in Perth for new installations, network extensions and damaged fibre cables. We fusion-splice individual strands in joint enclosures or fibre panels and check the link with optical time-domain reflectometer (OTDR) testing. We can assess whether the damaged section can be rejoined or needs replacing.",
    seo: {
      title: "Fibre Splicing Perth | Fibre & Data Cabling",
      description:
        "Perth fibre optic fusion splicing for new connections, network extensions and damaged cables. Request a quote for splicing and OTDR testing.",
    },
    quoteDetails:
      "Tell us the site suburb, whether this is a new connection or a fault, and how many fibre cores need work if known. For a damaged link, include where you suspect the damage is and whether the link is out of service.",
    relatedSlugs: ["emergency-fibre-repairs", "fibre-optic-installation", "network-cabling"],
    image: fibreSplicing,
    alt: "Technician using a fusion splicer to join fibre optic strands",
    points: [
      "Fusion splicing of single and multi-core fibre",
      "Joint enclosure and pit splicing",
      "Low-loss results verified by OTDR",
      "Emergency splice repairs available",
    ],
  },
  {
    slug: "data-cabling",
    title: "Data Cabling",
    heading: "Data Cabling & Data Point Installation in Perth",
    icon: "Network",
    short: "CAT6 Ethernet and data point installation for Perth homes, offices and commercial fit-outs.",
    description:
      "Need an Ethernet outlet for a home office, TV or Wi-Fi access point? We provide data point installation and structured data cabling across Perth. We run Cat5e, CAT6 and CAT6A cable for single outlets and multi-room jobs, then terminate, label and test the outlets.",
    seo: {
      title: "Data Cabling Perth | CAT6 Data Point Installation",
      description:
        "Need a CAT6 data point installed in Perth? We run and test Ethernet cabling for home offices, TVs, Wi-Fi access points and businesses. Get a free quote.",
    },
    quoteDetails:
      "Tell us your Perth suburb, how many Ethernet outlets you need, where they should go and where your router or patch panel sits. Mention if any cable runs need to go between floors.",
    relatedSlugs: ["network-cabling", "nbn-fttp-pathway", "network-maintenance"],
    image: cat6Outlet,
    alt: "Professionally installed Cat6 Ethernet RJ45 wall outlet on a clean white wall",
    points: [
      "CAT6 Ethernet data points for home offices, TVs and other wired devices",
      "Cat5e, Cat6 and Cat6A structured cabling",
      "Wall outlets, patch panels and comms cabinets",
      "Neat cable management and labelling",
      "Certified test results supplied",
    ],
  },
  {
    slug: "network-cabling",
    title: "Network Cabling",
    heading: "Commercial Data & Network Cabling in Perth",
    icon: "Server",
    short: "Commercial data cabling for Perth offices, fit-outs and communications rooms, including racks and patch panels.",
    description:
      "We provide commercial data cabling in Perth for office fit-outs, refurbishments and communications rooms. We install and label network racks, patch panels and outlets, and run cabling for switches, Wi-Fi access points and other power-over-Ethernet devices.",
    seo: {
      title: "Commercial Data Cabling Perth | Fibre & Data Cabling",
      description:
        "Commercial data cabling for Perth offices, fit-outs and communications rooms. Get a quote for Ethernet runs, network racks and patch panels.",
    },
    quoteDetails:
      "Tell us the site suburb, number of network outlets, where the racks will go and any access deadlines. For a data centre cabling enquiry in WA, include the site location, rack layout, copper or fibre requirements and any access or outage restrictions so we can confirm the scope we can support.",
    relatedSlugs: ["data-cabling", "fibre-optic-installation", "fibre-splicing"],
    image: dataCabling,
    alt: "Neatly cable-managed network rack with patch panels and blue Cat6 patch leads",
    points: [
      "Rack and cabinet supply and installation",
      "Patch panel termination and switch cabling",
      "Wi-Fi access point and PoE device cabling",
      "Clean, documented cable management",
    ],
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    icon: "Cctv",
    short: "IP CCTV systems for homes and businesses, professionally cabled, configured and mobile-ready.",
    description:
      "Security camera systems designed around your property. We advise on camera placement and coverage, run the cabling neatly, install and configure the NVR, and set up remote viewing on your phone before we leave.",
    image: cctvInstall,
    alt: "Technician in hi-vis installing a CCTV security camera under the eave of a building",
    points: [
      "IP camera and NVR system installation",
      "Residential and commercial coverage design",
      "Neat, weatherproof external cabling",
      "Remote mobile viewing setup and handover training",
    ],
  },
  {
    slug: "nbn-infrastructure",
    title: "NBN Infrastructure",
    icon: "RadioTower",
    short: "New estate, MDU and commercial NBN infrastructure delivered to network standards.",
    description:
      "NBN infrastructure works for developments, multi-dwelling units and commercial sites, including conduit networks, pit installation, hauling and pathway provisioning to the standards required for network acceptance.",
    image: trenchConduit,
    alt: "New underground telecommunications conduit infrastructure installed in a trench",
    points: [
      "New estate and subdivision infrastructure",
      "MDU and multi-tenant pathway provisioning",
      "Conduit networks and hauling",
      "Documentation for network acceptance",
    ],
  },
  {
    slug: "pit-and-pipe-installation",
    title: "Pit & Pipe Installation",
    icon: "Boxes",
    short: "Telecommunications pits and conduit networks installed to Australian civil standards.",
    description:
      "Supply and installation of telecommunications pits and conduit networks, including excavation, bedding, pit setting, conduit jointing, backfill and full site reinstatement.",
    image: trenchConduit,
    alt: "Underground telecommunications pit and conduit installation in progress",
    points: [
      "Pit supply, setting and lid finishing",
      "Conduit jointing and proving",
      "Excavation, bedding and compacted backfill",
      "Reinstatement of lawn, paving and driveways",
    ],
  },
  {
    slug: "lead-in-communication-conduit",
    title: "Lead-in Communication Conduit Installation",
    icon: "Waypoints",
    short: "P20 lead-in conduit installed from the street pit to your premises, ready for fibre hauling.",
    description:
      "Installation of new lead-in communication conduit from the NBN street pit to your building, trenched to the required depth with a draw rope, marker tape and neat reinstatement — ready for the fibre haul.",
    image: trenchConduit,
    alt: "New white P20 lead-in communication conduit laid neatly in an underground trench before backfilling",
    points: [
      "P20 lead-in conduit supply and installation",
      "Trenching to required depth with marker tape",
      "Draw rope installed and conduit proved",
      "Tidy reinstatement of the affected area",
    ],
  },
  {
    slug: "civil-telecommunications",
    title: "Civil Telecommunications",
    icon: "HardHat",
    short: "Trenching, boring, road crossings and reinstatement for telecommunications projects.",
    description:
      "Civil works supporting telecommunications delivery — trenching, directional boring, driveway and road crossings, pit installation, traffic management coordination and full reinstatement, delivered safely and to specification.",
    image: trenchConduit,
    alt: "Civil telecommunications trenching works on an Australian residential street",
    points: [
      "Trenching and directional boring",
      "Driveway, footpath and road crossings",
      "Locating and safe excavation practices",
      "Full site reinstatement",
    ],
  },
  {
    slug: "network-maintenance",
    title: "Network Maintenance",
    icon: "Wrench",
    short: "Scheduled and reactive maintenance to keep your fibre and data network performing.",
    description:
      "Ongoing maintenance for business networks — inspections, testing, re-termination, moves and changes, and documentation updates — so small issues are found before they become downtime.",
    image: dataCabling,
    alt: "Technician performing maintenance and testing on a network cabling rack",
    points: [
      "Scheduled inspections and testing",
      "Fault finding and re-termination",
      "Moves, adds and changes",
      "Updated as-built documentation",
    ],
  },
  {
    slug: "emergency-fibre-repairs",
    title: "Emergency Fibre Repairs",
    icon: "Siren",
    short: "Rapid response fault location, splicing and repair for damaged fibre across Perth.",
    description:
      "When a fibre link goes down, we locate the fault with OTDR testing, expose and repair the damage, splice and test the link, and get you reconnected as quickly as possible.",
    image: fibreSplicing,
    alt: "Emergency fibre optic repair and splicing being carried out onsite",
    points: [
      "OTDR fault location",
      "Emergency splicing and jointing",
      "Damaged conduit and pit repair",
      "Rapid Perth metro response",
    ],
  },
  {
    slug: "nbn-box-relocation",
    title: "NBN Box Relocation",
    icon: "Route",
    short: "Move your indoor NBN FTTP connection box to a more practical location in your Perth home or business.",
    description:
      "Need to move your indoor NBN connection box from a bedroom or garage to another room? We assess the existing fibre cable and your preferred location, then plan a route for the connection box, also called the NTD. We confirm what work can be done before quoting.",
    seo: {
      title: "NBN Box Relocation Perth | Fibre & Data Cabling",
      description:
        "Need to move your indoor NBN FTTP box in Perth? We assess cable access and your preferred location. Send your job details for a free quote.",
    },
    quoteDetails:
      "Tell us your Perth suburb, where the NBN box is now and where you want it moved. Mention the property type, whether the route crosses floors and whether there is a power point near the proposed position. Photos of both locations and any visible conduit can help us assess access.",
    questions: [
      {
        q: "What affects the cost of relocating an NBN box?",
        a: "The price depends on the length of the fibre route, access to the walls or roof space, whether the run crosses floors and whether new conduit is needed. We review those details before quoting.",
      },
      {
        q: "Should I move my NBN box or my Wi-Fi router?",
        a: "If your goal is better Wi-Fi coverage, an Ethernet cable to a better router location or a wired access point may solve it. A relocation makes sense when you need the NBN connection box itself moved for room layout, access or renovation.",
      },
      {
        q: "Who can move the outdoor NBN box?",
        a: "Contact nbn’s Relocation Works team for external nbn equipment. For your indoor FTTP connection box, we can assess the proposed move against nbn’s Authority to Alter guidelines.",
      },
    ],
    relatedSlugs: ["nbn-fttp-pathway", "data-cabling", "fibre-optic-installation"],
    image: "/job-photos/nbn-fibre-connection-box.jpg",
    alt: "Wall-mounted indoor NBN fibre connection box",
    points: [
      "Assessment of the current NBN box, fibre cable and proposed location",
      "Planning the fibre route and any conduit needed",
      "Indoor FTTP connection box relocation where permitted for the job",
      "Testing after the move",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const galleryImages = [
  {
    "src": "/job-photos/nbn-fibre-connection-box.jpg",
    "alt": "Wall-mounted NBN fibre connection box with power and optical indicator lights",
    "caption": "Wall-mounted NBN fibre connection box"
  },
  {
    "src": "/job-photos/fibre-enclosure-cable-routing.jpg",
    "alt": "Open external fibre enclosure showing fibre routing and green optical connectors",
    "caption": "Fibre enclosure and cable routing"
  },
  {
    "src": "/job-photos/underground-communications-conduit.jpg",
    "alt": "Communications conduit laid in an open trench beside lifted driveway pavers",
    "caption": "Underground communications conduit \u2014 work in progress"
  },
  {
    "src": "/job-photos/fibre-optical-power-testing.jpg",
    "alt": "Handheld optical power meter connected to a fibre enclosure during signal testing",
    "caption": "Fibre optical power testing"
  },
  {
    "src": "/job-photos/nbn-connection-enclosure.jpg",
    "alt": "Open NBN connection enclosure showing the connection device and fibre cable routing",
    "caption": "NBN connection enclosure \u2014 internal view"
  },
  {
    "src": "/job-photos/network-switch-ethernet-cabling.jpg",
    "alt": "Network switch with blue and white Ethernet cables above a wall-mounted communications cabinet",
    "caption": "Network switch and Ethernet connections"
  }
];
