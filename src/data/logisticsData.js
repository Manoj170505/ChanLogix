export const COMPANY_INFO = {
  name: "ChanLogix",
  tagline: "A Global Intelligence Logistics Across World",
  email: "operation@chanlogix.com",
  phone: "+91 44 4800 9200",
  whatsapp: "+91 98400 12345",
  addresses: [
    {
      id: "chennai",
      title: "Corporate Headquarters (Chennai)",
      badge: "Global Operations Hub",
      address: "Awfis Olympia Crystal, 11-14, Thiru Vi Ka Industrial Estate, Saidapet, Chennai, Greater Chennai, TamilNadu - 600032",
      mapQuery: "Awfis+Olympia+Crystal+Saidapet+Chennai",
      phone: "+91 44 4800 9200",
      email: "operation@chanlogix.com"
    },
    {
      id: "tiruchengode",
      title: "Regional Logistics Hub (Tiruchengode)",
      badge: "Express Distribution Center",
      address: "Bhakiyam Complex, Sangagiri Main Road, Tiruchengode, TamilNadu - 637211",
      mapQuery: "Bhakiyam+Complex+Sangagiri+Main+Road+Tiruchengode",
      phone: "+91 4288 255 120",
      email: "operation@chanlogix.com"
    }
  ]
};

export const SAMPLE_TRACKING_DATA = {
  "CHX-8942-US": {
    trackingNumber: "CHX-8942-US",
    status: "In Transit",
    statusCode: "in_transit",
    statusColor: "blue",
    service: "International Priority Express",
    origin: "Chennai (MAA), India",
    destination: "New York (JFK), United States",
    estimatedDelivery: "Tomorrow by 5:30 PM EST",
    currentLocation: "Frankfurt Hub (FRA), Germany",
    weight: "14.8 kg",
    pieces: 2,
    dimensions: "45 x 30 x 25 cm",
    sender: "Apex Semiconductor Tech Ltd.",
    receiver: "Hudson Global Systems Inc.",
    steps: [
      { title: "Shipment Picked Up", location: "Chennai Hub, India", date: "Oct 02, 2026 - 10:15 AM", completed: true },
      { title: "Processed at Origin Gateway", location: "Chennai Air Cargo Terminal", date: "Oct 02, 2026 - 04:30 PM", completed: true },
      { title: "Export Customs Cleared", location: "MAA International Customs", date: "Oct 02, 2026 - 09:10 PM", completed: true },
      { title: "Departed International Gateway", location: "Flight CX-842 to Frankfurt", date: "Oct 03, 2026 - 02:45 AM", completed: true },
      { title: "In Transit - Transit Hub Scan", location: "Frankfurt Hub (FRA), Germany", date: "Oct 04, 2026 - 07:20 AM", completed: true, current: true },
      { title: "Import Customs Clearance", location: "New York (JFK), USA", date: "Pending Flight Arrival", completed: false },
      { title: "Out for Express Delivery", location: "Manhattan Distribution Depot", date: "Scheduled Oct 05", completed: false },
      { title: "Delivered & Signed", location: "New York, USA", date: "Estimated Oct 05, 5:30 PM", completed: false }
    ]
  },
  "CHX-7719-EU": {
    trackingNumber: "CHX-7719-EU",
    status: "Out for Delivery",
    statusCode: "out_for_delivery",
    statusColor: "amber",
    service: "European Express Courier",
    origin: "Tiruchengode Hub, India",
    destination: "London (LHR), United Kingdom",
    estimatedDelivery: "Today by 2:00 PM GMT",
    currentLocation: "West London Delivery Depot",
    weight: "5.2 kg",
    pieces: 1,
    dimensions: "30 x 20 x 15 cm",
    sender: "Bhakiyam Textile Exports",
    receiver: "Savile Row Atelier Ltd.",
    steps: [
      { title: "Shipment Picked Up", location: "Tiruchengode Depot, India", date: "Oct 01, 2026 - 09:00 AM", completed: true },
      { title: "Arrived at Regional Hub", location: "Coimbatore Gateway", date: "Oct 01, 2026 - 02:15 PM", completed: true },
      { title: "Export Customs Cleared", location: "Chennai International Gateway", date: "Oct 01, 2026 - 08:00 PM", completed: true },
      { title: "Air Freight Dispatched", location: "Direct Flight to LHR London", date: "Oct 02, 2026 - 03:30 AM", completed: true },
      { title: "Import Customs Cleared", location: "London Heathrow Terminal 4", date: "Oct 03, 2026 - 11:45 AM", completed: true },
      { title: "Out for Delivery", location: "Courier Van #UK-4892 (Agent: Oliver M.)", date: "Oct 04, 2026 - 08:30 AM", completed: true, current: true },
      { title: "Delivered", location: "London Central, UK", date: "Today by 2:00 PM GMT", completed: false }
    ]
  },
  "CHX-5011-IN": {
    trackingNumber: "CHX-5011-IN",
    status: "Delivered",
    statusCode: "delivered",
    statusColor: "green",
    service: "Domestic Next-Flight-Out (NFO)",
    origin: "Saidapet, Chennai, India",
    destination: "Bandra Kurla Complex, Mumbai, India",
    estimatedDelivery: "Delivered on Oct 03, 2026",
    currentLocation: "Delivered to Reception / Security",
    weight: "2.5 kg",
    pieces: 1,
    dimensions: "25 x 20 x 10 cm",
    sender: "Olympia Crystal Legal Advisory",
    receiver: "Capital Growth Partners",
    steps: [
      { title: "Shipment Picked Up", location: "Olympia Crystal Saidapet, Chennai", date: "Oct 03, 2026 - 08:45 AM", completed: true },
      { title: "Airport Security Screened", location: "Chennai Domestic Cargo Hub", date: "Oct 03, 2026 - 11:00 AM", completed: true },
      { title: "Flight In-Air", location: "Flight AI-542 MAA -> BOM", date: "Oct 03, 2026 - 01:15 PM", completed: true },
      { title: "Arrived Mumbai Airport", location: "Chhatrapati Shivaji Maharaj Cargo", date: "Oct 03, 2026 - 03:20 PM", completed: true },
      { title: "Out for Express Delivery", location: "BKC Courier Unit", date: "Oct 03, 2026 - 04:10 PM", completed: true },
      { title: "Delivered & Signed", location: "BKC Tower B, Mumbai (Signed by: Rajesh V.)", date: "Oct 03, 2026 - 05:45 PM", completed: true, current: true }
    ]
  }
};

export const generateMockTracking = (id) => {
  const cleanId = id.trim().toUpperCase();
  if (SAMPLE_TRACKING_DATA[cleanId]) {
    return SAMPLE_TRACKING_DATA[cleanId];
  }
  
  return {
    trackingNumber: cleanId,
    status: "In Transit",
    statusCode: "in_transit",
    statusColor: "blue",
    service: "ChanLogix Global Express Courier",
    origin: "Chennai Operations Center, India",
    destination: "International Receiving Hub",
    estimatedDelivery: "In 2 Business Days",
    currentLocation: "Central Sorting & Routing Hub",
    weight: "4.8 kg",
    pieces: 1,
    dimensions: "35 x 25 x 18 cm",
    sender: "Corporate Client Logistics",
    receiver: "Consignee Consignment",
    steps: [
      { title: "Electronic Shipment Manifest Received", location: "ChanLogix Cloud EDI", date: "Yesterday - 08:00 AM", completed: true },
      { title: "Package Received & Barcode Scanned", location: "Saidapet Processing Depot", date: "Yesterday - 12:30 PM", completed: true },
      { title: "Security & Weight Compliance Verification", location: "Origin Automated Sort Facility", date: "Yesterday - 06:15 PM", completed: true },
      { title: "Departed Origin Distribution Facility", location: "Consolidated Linehaul #418", date: "Today - 02:40 AM", completed: true },
      { title: "In Transit to Destination Distribution Center", location: "En Route to Regional Terminal", date: "Today - 09:15 AM", completed: true, current: true },
      { title: "Out for Last-Mile Courier Delivery", location: "Destination Local Depot", date: "Expected Tomorrow Morning", completed: false },
      { title: "Delivery Confirmation & E-Signature", location: "Destination Address", date: "Estimated Delivery by 4:00 PM", completed: false }
    ]
  };
};

export const SERVICES_DATA = [
  {
    id: "courier",
    title: "International Express Courier",
    category: "Express & Courier",
    tagline: "Ultra-fast door-to-door worldwide delivery with guaranteed transit times.",
    icon: "FaPaperPlane",
    highlight: "Fastest Global Transit",
    speed: "24 - 48 Hours Worldwide",
    description: "Our flagship express parcel delivery service provides end-to-end priority dispatch, seamless border crossings, and tamper-evident smart containerization for documents, parcels, and critical samples.",
    features: [
      "Priority next-flight-out dispatch",
      "End-to-end continuous barcode & RFID scanning",
      "Tamper-proof secure packaging and sealing",
      "Guaranteed on-time delivery with SLA backing",
      "Real-time digital proof of delivery (e-POD) with signature"
    ],
    idealFor: "Urgent documents, high-value electronics, medical kits, and e-commerce express orders."
  },
  {
    id: "freight",
    title: "Air & Ocean Freight Forwarding",
    category: "Freight & Cargo",
    tagline: "Comprehensive sea and air cargo solutions for heavy, bulky, or containerized freight.",
    icon: "FaPlaneDeparture",
    highlight: "FCL & LCL Options",
    speed: "Scheduled Airline & Vessel Routes",
    description: "Multi-modal international forwarding with direct carrier allocations across major maritime lanes and global air cargo networks. Custom scheduled charter services available for critical tonnage.",
    features: [
      "Full Container Load (FCL) & Less than Container Load (LCL)",
      "Scheduled air cargo charters & blocked space agreements",
      "Temperature-controlled reefer containers (-20°C to +25°C)",
      "Hazmat & Dangerous Goods (DG) certified handlers",
      "Port-to-port and port-to-door turnkey logistics"
    ],
    idealFor: "Bulk manufacturing materials, automotive parts, machinery, and global retail containers."
  },
  {
    id: "warehousing",
    title: "Smart Warehousing & Distribution",
    category: "Supply Chain",
    tagline: "Next-generation automated storage, pick-pack fulfillment, and inventory intelligence.",
    icon: "MdWarehouse",
    highlight: "AI Inventory Sorting",
    speed: "Real-Time Stock Synchronization",
    description: "Strategically located fulfillment centers equipped with WMS (Warehouse Management System) integrations, real-time IoT temperature/humidity tracking, and high-velocity order fulfillment.",
    features: [
      "Cloud WMS with real-time API inventory visibility",
      "Cross-docking and multi-vendor consolidation",
      "Kitting, barcode relabeling, and retail packaging",
      "Climate-controlled zones for sensitive pharmaceuticals & perishables",
      "Automated automated pick, pack, and reverse logistics handling"
    ],
    idealFor: "Omnichannel brands, global distributors, and spare-parts fulfillment depots."
  },
  {
    id: "customs",
    title: "Customs Clearance & Compliance",
    category: "Compliance",
    tagline: "Licensed in-house brokerage ensuring frictionless customs passage across 150+ nations.",
    icon: "MdFactCheck",
    highlight: "Zero Regulatory Delays",
    speed: "Pre-Arrival Digital Clearance",
    description: "Navigate complex international trade regulations with our licensed customs brokers. We manage tariff classifications (HS codes), duty drawbacks, ATA carnets, and international compliance audits.",
    features: [
      "Automated EDI customs pre-filing prior to vessel/flight arrival",
      "HS tariff code classification & duty mitigation advisory",
      "Bonded warehouse storage and deferred duty processing",
      "Import/Export documentation & Certificate of Origin issuance",
      "Sanctions screening and anti-counterfeit protection"
    ],
    idealFor: "Cross-border e-commerce, multinational corporations, and regulated commodities."
  },
  {
    id: "lastmile",
    title: "Last-Mile Delivery Network",
    category: "Express & Courier",
    tagline: "Intelligent dynamic route optimization for prompt final-destination fulfillment.",
    icon: "FaTruck",
    highlight: "OTP & Contactless Delivery",
    speed: "Same-Day & Next-Day Slots",
    description: "Solving the most demanding mile of the supply chain with smart dynamic dispatch algorithms, geo-fenced delivery alerts, and eco-friendly urban vehicle fleets for dense metropolitan zones.",
    features: [
      "Dynamic AI route sequencing to evade urban traffic bottlenecks",
      "SMS & WhatsApp real-time delivery notifications with live map tracking",
      "Secure OTP delivery confirmation and photo verification",
      "Cash-on-Delivery (COD) & digital mobile payment collection",
      "Eco-friendly electric delivery vehicle (EV) fleets in tier-1 metros"
    ],
    idealFor: "Direct-to-consumer delivery, retail store replenishments, and enterprise office runs."
  },
  {
    id: "projectcargo",
    title: "Project Cargo & Heavy Lift",
    category: "Freight & Cargo",
    tagline: "Specialized engineering and multi-modal handling for oversized industrial assets.",
    icon: "MdLocalShipping",
    highlight: "Engineered Transport",
    speed: "Dedicated Project Charters",
    description: "Turnkey project logistics for oversized, heavy-lift, and out-of-gauge (OOG) machinery. From factory crane lifting and marine barge transport to specialized low-bed hydraulic trailers.",
    features: [
      "Route feasibility surveys and bridge clearance engineering",
      "Multi-axle hydraulic trailers, SPMTs, and barge mobilization",
      "On-site stevedoring, crane rigging, and turnkey placement",
      "Comprehensive marine cargo transit insurance and risk mitigation",
      "Dedicated 24/7 logistics project manager assigned per movement"
    ],
    idealFor: "Power plant turbines, renewable energy windmill components, oil & gas rigs, and mining machinery."
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "MdOutlineTrackChanges",
    title: "Real-Time AI Tracking",
    description: "Our proprietary AI telematics continuously predicts transit milestones, monitors port congestion, and alerts dispatchers before bottlenecks cause delays.",
    badge: "99.9% Visibility"
  },
  {
    icon: "FaGlobeAmericas",
    title: "Global Network Coverage",
    description: "Unmatched operational reach spanning 150+ countries with strategic gateway hubs in Chennai, Singapore, Dubai, Frankfurt, and North America.",
    badge: "150+ Countries"
  },
  {
    icon: "MdFactCheck",
    title: "Customs Expertise",
    description: "In-house licensed customs brokers and automated electronic data interchange (EDI) clear 94% of consignments prior to international arrival.",
    badge: "Zero Border Delays"
  },
  {
    icon: "FaShieldAlt",
    title: "Competitive & Transparent Pricing",
    description: "Dynamic volume discounts, zero hidden fuel surcharges, and comprehensive all-inclusive rate quotes tailored to your business cadence.",
    badge: "Guaranteed Value"
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Shipment Tracking",
    chanlogix: "AI-Powered Real-Time Telematics & Predictive ETA",
    traditional: "Static checkpoint scan updates only",
  },
  {
    feature: "Customs Clearance",
    chanlogix: "Pre-arrival EDI clearance with in-house broker team",
    traditional: "Manual clearance after physical airport arrival",
  },
  {
    feature: "Customer Support",
    chanlogix: "Dedicated 24/7 Intelligence Operations Desk",
    traditional: "Automated phone tree or business hours only",
  },
  {
    feature: "Global Network",
    chanlogix: "150+ Countries with synchronized air & ocean lanes",
    traditional: "Fragmented third-party sub-contractors",
  },
  {
    feature: "Pricing Transparency",
    chanlogix: "Zero hidden surcharges; instant digital breakdowns",
    traditional: "Unpredicted storage, customs, or fuel fees",
  }
];
