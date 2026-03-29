export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: Category;
  image: string;
  description: string;
  longDescription: string;
  specs: ProductSpec[];
  applications: string[];
  standards: string[];
  relatedIndustries: IndustryKey[];
}

export type Category =
  | "Pile Connection"
  | "Tunnel Segment"
  | "Bridge & Prestress"
  | "Railway"
  | "General Precast";

export type IndustryKey = "civil" | "railway" | "bridge" | "underground";

export const CATEGORIES: Category[] = [
  "Pile Connection",
  "Tunnel Segment",
  "Bridge & Prestress",
  "Railway",
  "General Precast",
];

export const products: Product[] = [
  {
    id: "1",
    slug: "pile-splice-plates",
    name: "Precast Pile Splice Plates",
    shortName: "Pile Splice Plates",
    category: "Pile Connection",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description:
      "High-strength steel end plates for connecting precast concrete piles in foundation engineering.",
    longDescription:
      "Our pile splice plates are precision-cut from high-grade structural steel (Q345B / S355) and hot-dip galvanized or epoxy-coated for corrosion resistance. Designed to accommodate PHC, PC, and square piles, they provide full moment and shear transfer at splice joints. Tight dimensional tolerances and pre-drilled bolt patterns ensure rapid site installation with no welding required.",
    specs: [
      { label: "Material", value: "Q345B / S355 structural steel" },
      { label: "Thickness", value: "10mm – 25mm (custom)" },
      { label: "Diameter Range", value: "Ø300mm – Ø800mm" },
      { label: "Surface Treatment", value: "Hot-dip galvanized (85μm min) or epoxy coated" },
      { label: "Bolt Pattern", value: "4 / 6 / 8 holes, M20–M30 high-strength bolts" },
      { label: "Tensile Strength", value: "≥ 490 MPa" },
      { label: "Applicable Pile Types", value: "PHC, PC, square precast piles" },
      { label: "Standard", value: "JGJ 94, GB/T 700, EN 10025" },
    ],
    applications: [
      "Deep foundation pile splicing",
      "Building & bridge pile foundations",
      "Offshore & marine structures",
      "Retaining wall piles",
    ],
    standards: ["JGJ 94-2008", "GB/T 700", "ISO 1461 (galvanizing)"],
    relatedIndustries: ["civil", "bridge"],
  },
  {
    id: "2",
    slug: "tunnel-segment-couplers",
    name: "Tunnel Segment Coupler Sleeves",
    shortName: "Segment Couplers",
    category: "Tunnel Segment",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description:
      "Precision-cast rebar coupler sleeves embedded in precast tunnel lining segments for longitudinal and circumferential joint connections.",
    longDescription:
      "Designed for shield-driven tunnel construction, our coupler sleeves are cast into precast concrete segments during fabrication. They provide reliable rebar splicing at segment joints, replacing traditional bent-bar or bolt-socket systems. The sleeves accept standard threaded rebar ends (Type I, II, or III per GB/T 14370) and are proof-tested to 1.25× ultimate load capacity.",
    specs: [
      { label: "Material", value: "Nodular cast iron (QT450-10) or ductile iron" },
      { label: "Compatible Rebar", value: "Ø16mm – Ø40mm (HRB400 / HRB500)" },
      { label: "Thread Type", value: "Straight thread or taper thread" },
      { label: "Load Capacity", value: "≥ 100% of rebar nominal capacity" },
      { label: "Corrosion Protection", value: "Zinc-chromate coating + PE cap" },
      { label: "Applicable Tunnel Diameter", value: "Ø4m – Ø14m shield tunnels" },
      { label: "Standard", value: "GB/T 14370, JGJ 107, EN 1993" },
    ],
    applications: [
      "Metro & subway tunnels",
      "Highway road tunnels",
      "Water conveyance tunnels",
      "Utility & cable tunnels",
      "Undersea tunnels",
    ],
    standards: ["GB/T 14370-2015", "JGJ 107-2016", "ISO 15835"],
    relatedIndustries: ["underground", "railway"],
  },
  {
    id: "3",
    slug: "prestress-anchors",
    name: "Bridge Prestress Anchor Systems",
    shortName: "Prestress Anchors",
    category: "Bridge & Prestress",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    description:
      "Complete post-tensioning anchorage assemblies for prestressed concrete bridges and large-span structures.",
    longDescription:
      "Our prestress anchor systems include anchor heads, bearing plates, wedges, and spiral reinforcement, engineered for post-tensioning of bridge girders, box beams, and continuous concrete decks. Each set is factory-matched and proof-tested. Wedge grip efficiency exceeds 95% of the strand's guaranteed ultimate tensile strength (GUTS). Available for 3, 5, 7, 9, 12, 15, and 19 strand bundles.",
    specs: [
      { label: "Strand Compatibility", value: "Ø12.7mm / Ø15.2mm (1×7 strand, GB/T 5224 / ASTM A416)" },
      { label: "Bundle Sizes", value: "3T / 5T / 7T / 9T / 12T / 15T / 19T" },
      { label: "Wedge Grip Efficiency", value: "≥ 95% GUTS" },
      { label: "Bearing Plate Material", value: "Q345B steel, machined" },
      { label: "Anchor Head Material", value: "45# carbon steel, quenched & tempered" },
      { label: "Max Working Load", value: "Up to 6,000 kN (19-strand)" },
      { label: "Standard", value: "GB/T 14370, PTI DC80.3, EN 13391" },
    ],
    applications: [
      "Highway & expressway bridges",
      "Railway bridges and viaducts",
      "Box beam and T-beam post-tensioning",
      "Continuous rigid-frame bridges",
      "Nuclear containment structures",
    ],
    standards: ["GB/T 14370-2015", "PTI DC80.3", "EN 13391"],
    relatedIndustries: ["bridge", "railway"],
  },
  {
    id: "4",
    slug: "steel-strands",
    name: "Low-Relaxation Prestress Steel Strands",
    shortName: "Steel Strands",
    category: "Bridge & Prestress",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    description:
      "High-strength, low-relaxation 1×7 steel strands for post-tensioning and pre-tensioning of concrete structures.",
    longDescription:
      "Manufactured under strict quality control, our Ø12.7mm and Ø15.2mm low-relaxation strands meet GB/T 5224 and ASTM A416 Grade 270. Each coil is individually tagged and tested for breaking load, yield load (0.1% EL), elongation, and relaxation loss. Mill test certificates are provided with every shipment. Supply in coil or cut-to-length spools.",
    specs: [
      { label: "Nominal Diameter", value: "Ø12.7mm / Ø15.2mm" },
      { label: "Structure", value: "1×7 wire" },
      { label: "Tensile Strength", value: "1,860 MPa (Grade 270)" },
      { label: "Yield Load (0.1% EL)", value: "≥ 88% of breaking load" },
      { label: "Relaxation (1000h @ 70% GUTS)", value: "≤ 2.5%" },
      { label: "Elongation at Break", value: "≥ 3.5%" },
      { label: "Supply Form", value: "Coil (Ø1.2m ID) or cut-to-length" },
      { label: "Standard", value: "GB/T 5224, ASTM A416" },
    ],
    applications: [
      "Pre-tensioned bridge beams and slabs",
      "Post-tensioned box girders",
      "Ground anchors and rock anchors",
      "Precast railway sleepers",
    ],
    standards: ["GB/T 5224-2014", "ASTM A416/A416M"],
    relatedIndustries: ["bridge", "railway", "civil"],
  },
  {
    id: "5",
    slug: "railway-embedded-sleeves",
    name: "Railway Sleeper Embedded Fastener Sleeves",
    shortName: "Rail Fastener Sleeves",
    category: "Railway",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    description:
      "Cast-in anchor sleeves for rail fastening systems in precast concrete sleepers, serving high-speed and heavy-haul railways.",
    longDescription:
      "These embedded sleeves anchor rail clips and tension clamps directly into precast concrete sleepers. Manufactured from ductile iron or engineering plastics with a ribbed outer profile for maximum pull-out resistance. Compatible with Pandrol, Vossloh, and Nabla fastening systems. Tolerances are held to ±0.1mm on thread pitch and ±0.5mm on positioning for gauge accuracy.",
    specs: [
      { label: "Material", value: "Ductile iron (QT450) or PA66-GF30 nylon" },
      { label: "Thread", value: "M24 × 3 or M30 × 3.5 (custom)" },
      { label: "Pull-out Load", value: "≥ 80 kN" },
      { label: "Positioning Tolerance", value: "±0.5mm gauge, ±0.3mm cant" },
      { label: "Compatible Systems", value: "Pandrol e-Clip, Vossloh SKL, Nabla" },
      { label: "Track Speed", value: "Up to 350 km/h (HSR) / 30T axle load (heavy haul)" },
      { label: "Standard", value: "EN 13481-3, TB/T 3395, UIC 864" },
    ],
    applications: [
      "High-speed rail (HSR) sleepers",
      "Heavy-haul freight corridors",
      "Metro and light rail",
      "Turnout / switch sleepers",
      "Slab track systems",
    ],
    standards: ["EN 13481-3", "TB/T 3395-2016", "UIC 864-1"],
    relatedIndustries: ["railway"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByIndustry(industry: IndustryKey): Product[] {
  return products.filter((p) => p.relatedIndustries.includes(industry));
}
