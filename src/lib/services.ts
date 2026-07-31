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
      "Professional NBN FTTP pathway installations including surface-mounted conduit, underground conduit, lead-in communication conduit, internal fibre pathways and conduit upgrades for residential and commercial properties. All work is completed neatly and in accordance with NBN standards.",
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
    icon: "Cable",
    short:
      "Single-mode and multi-mode fibre optic installation for residential, commercial and industrial sites across Perth.",
    description:
      "End-to-end fibre optic installation covering hauling, termination, patching and certification. We install single-mode and multi-mode fibre for building backbones, campus links and NBN connections, with full OTDR testing and documented results on handover.",
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
    icon: "GitMerge",
    short: "Precision fusion splicing and jointing with low-loss results and full test documentation.",
    description:
      "Fusion splicing for new builds, extensions, joint enclosures and fault repairs. Using calibrated fusion splicers we deliver low-loss joints, then verify every core with OTDR traces supplied as part of your handover pack.",
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
    icon: "Network",
    short: "Cat5e, Cat6 and Cat6A structured cabling for homes, offices and commercial fit-outs.",
    description:
      "Structured data cabling designed and installed for reliability. From a couple of extra Cat6 points at home to a full commercial fit-out, every outlet is neatly terminated, labelled and certified with a test report.",
    image: cat6Outlet,
    alt: "Professionally installed Cat6 Ethernet RJ45 wall outlet on a clean white wall",
    points: [
      "Cat5e, Cat6 and Cat6A structured cabling",
      "Wall outlets, patch panels and comms cabinets",
      "Neat cable management and labelling",
      "Certified test results supplied",
    ],
  },
  {
    slug: "network-cabling",
    title: "Network Cabling",
    icon: "Server",
    short: "Comms room fit-outs, racks, patch panels and switch cabling for growing businesses.",
    description:
      "Complete network cabling infrastructure for commercial premises — racks and cabinets, patch panels, switch cabling, Wi-Fi access point runs and PoE devices — planned for the way your business actually works and ready to scale.",
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
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const galleryImages = [
  {
    src: heroConduit,
    alt: "Telecommunications technician installing surface-mounted conduit above an NBN LUCA box on a modern two-storey Australian house",
    caption: "NBN FTTP surface-mounted conduit pathway",
  },
  {
    src: cctvInstall,
    alt: "Professional technician installing a CCTV security camera on a building exterior",
    caption: "CCTV camera installation",
  },
  {
    src: cat6Outlet,
    alt: "Close-up of a professionally installed Cat6 Ethernet RJ45 wall outlet on a clean white wall",
    caption: "Cat6 data outlet",
  },
  {
    src: trenchConduit,
    alt: "New lead-in communication P20 conduit installed neatly in an underground trench before backfilling",
    caption: "Lead-in P20 conduit in trench",
  },
  {
    src: fibreSplicing,
    alt: "Fibre optic fusion splicing being carried out by a qualified technician",
    caption: "Fibre fusion splicing",
  },
  {
    src: dataCabling,
    alt: "Neatly installed network rack with patch panels and Cat6 patch leads",
    caption: "Commercial comms rack fit-out",
  },
];
