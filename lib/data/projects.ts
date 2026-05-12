export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company: string;
  projectSlug?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  builder?: string;
  architect?: string;
  stoneSupplier?: string;
  photographer?: string;
  overview: string;
  details: string;
  heroImages: string[];
  mosaicRows: string[][];
  testimonials: Testimonial[];
  nextProject: string;
};

// Adobe Stock IDs collected (use asset_license_and_download_stock for full-res):
// Bathroom: 329285160, 530535166, 453278533, 602879496
// Interior/Stone: 508619488, 362972937, 213615483, 459421783
// Kitchen: 524589428, 520660718, 270128335, 253501966

const img = (seed: string, w = 1200, h = 800) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const projects: Project[] = [
  {
    slug: "bergmann-residence",
    title: "Bergmann Residence",
    tagline: "Full interior stonework and ensuite",
    builder: "Kessler Bau",
    architect: "Müller Architekten",
    stoneSupplier: "Naturstein Hoffmann",
    photographer: "Felix Krause",
    overview:
      "For a private residence on Bergmannstrasse, we partnered with Kessler Bau and Müller Architekten to deliver an integrated stonework package spanning all bathrooms, the main living area, and an outdoor terrace. The project celebrates materiality and light, achieving a calm Mediterranean-inspired aesthetic throughout.",
    details:
      "Working closely with the architect and builder, we laid continuous Scala Travertine throughout the ground floor and extended it seamlessly to the outdoor entertaining area. Custom radius detailing around the pool coping was scribed on-site. The ensuite features hand-laid pink mosaics paired with the same travertine, creating a cohesive yet surprising palette. Every grout joint was precisely planned to align with door thresholds and cabinetry reveals.",
    heroImages: [
      img("bergmann-1", 1400, 900),
      img("bergmann-2", 1400, 900),
      img("bergmann-3", 1400, 900),
    ],
    mosaicRows: [
      [img("bm-a", 480, 416), img("bm-b", 240, 416), img("bm-c", 405, 416)],
      [img("bm-d", 240, 416), img("bm-e", 240, 416), img("bm-f", 480, 416)],
    ],
    testimonials: [
      {
        quote:
          "The Seehafer team brought an extraordinary level of precision to this project. Their stonework elevated every space — the flooring alone transformed the entire ground floor.",
        author: "Klaus Müller",
        title: "Principal Architect",
        company: "Müller Architekten",
        projectSlug: "bergmann-residence",
      },
    ],
    nextProject: "schiller-street",
  },
  {
    slug: "schiller-street",
    title: "Schiller Street",
    tagline: "Exterior stone cladding and terracing",
    builder: "Vogt Construction",
    architect: "Bauer + Partner",
    stoneSupplier: "Quartzwerk",
    overview:
      "A complete exterior stone cladding and paving project for a landmark townhouse renovation. Working with a steeply sloping site, we engineered a series of terraced stone landings that follow the natural topography while maintaining perfect level transitions at every threshold.",
    details:
      "The scope included over 400m² of split-face limestone cladding, hand-cut curved steps, and a new pool terrace using honed bluestone. The challenge was maintaining consistent joint alignment across all three elevations despite the irregular existing substrate. We resolved this with a custom levelling system and bespoke stainless anchors.",
    heroImages: [
      img("schiller-1", 1400, 900),
      img("schiller-2", 1400, 900),
      img("schiller-3", 1400, 900),
    ],
    mosaicRows: [
      [img("sc-a", 540, 360), img("sc-b", 360, 360), img("sc-c", 360, 360)],
      [img("sc-d", 360, 360), img("sc-e", 540, 360), img("sc-f", 360, 360)],
    ],
    testimonials: [
      {
        quote:
          "Seehafer's understanding of natural stone is exceptional. They navigated a technically complex site with complete confidence.",
        author: "Anna Bauer",
        title: "Director",
        company: "Bauer + Partner",
        projectSlug: "schiller-street",
      },
    ],
    nextProject: "munster-penthouse",
  },
  {
    slug: "munster-penthouse",
    title: "Münster Penthouse",
    tagline: "Specialist vaulted ceiling tiling",
    builder: "Stein & Söhne",
    architect: "Reinhardt Studio",
    overview:
      "The brief for this penthouse renovation centred on a dramatic barrel-vaulted ceiling in the master suite — tiled end to end with a handmade brick-format terracotta. The curvature required every tile to be individually scribed, a process that demanded absolute patience and a steady eye across six weeks of installation.",
    details:
      "We developed a custom jig to hold each tile during adhesion and maintain consistent bond lines across the curve. The terracotta was sourced from a small-batch producer in Portugal and arrived with deliberate colour variation. Our installation methodology preserved and celebrated this variation, ensuring the finished vault has depth and character that a uniform tile could never achieve.",
    heroImages: [
      img("munster-1", 1400, 900),
      img("munster-2", 1400, 900),
      img("munster-3", 1400, 900),
    ],
    mosaicRows: [
      [img("mn-a", 360, 540), img("mn-b", 360, 540), img("mn-c", 360, 540)],
      [img("mn-d", 540, 360), img("mn-e", 360, 360), img("mn-f", 360, 360)],
    ],
    testimonials: [
      {
        quote:
          "What Seehafer achieved on that vault is genuinely beyond what I believed possible at this price point. Absolute craftsmen.",
        author: "Thomas Reinhardt",
        title: "Creative Director",
        company: "Reinhardt Studio",
        projectSlug: "munster-penthouse",
      },
    ],
    nextProject: "tegernsee-villa",
  },
  {
    slug: "tegernsee-villa",
    title: "Tegernsee Villa",
    tagline: "Pool surrounds and outdoor stone",
    builder: "Engel Projektbau",
    architect: "Schulz & Weis Architekten",
    stoneSupplier: "Alpine Stone Co.",
    overview:
      "Set against the dramatic backdrop of the Bavarian Alps, this lakeside villa required a stone program worthy of its landscape. We selected a flamed granite from a local quarry and laid it across terraces, pool surrounds, and a stepped garden path descending to the water.",
    details:
      "The pool coping presented a particular challenge: a freeform kidney shape requiring dozens of individually cut nosing pieces. Each was hand-scribed from a template to achieve a continuous flowing edge. The main terrace stone was bushhammered to a fine texture that provides traction without disrupting the refined aesthetic. The project was completed over two seasons to allow proper curing.",
    heroImages: [
      img("tegernsee-1", 1400, 900),
      img("tegernsee-2", 1400, 900),
      img("tegernsee-3", 1400, 900),
    ],
    mosaicRows: [
      [img("tg-a", 450, 675), img("tg-b", 360, 240), img("tg-c", 360, 240)],
      [img("tg-d", 675, 450), img("tg-e", 240, 360), img("tg-f", 360, 240)],
    ],
    testimonials: [
      {
        quote:
          "The stonework at Tegernsee is breathtaking. Seehafer's attention to every cut and joint elevated the entire property.",
        author: "Michaela Engel",
        title: "Managing Director",
        company: "Engel Projektbau",
        projectSlug: "tegernsee-villa",
      },
    ],
    nextProject: "frankfurt-loft",
  },
  {
    slug: "frankfurt-loft",
    title: "Frankfurt Loft",
    tagline: "Contemporary kitchen and bath tiling",
    builder: "Urban Living GmbH",
    architect: "Studio Frei",
    overview:
      "A full interior tiling package for a converted commercial loft. The design language — raw concrete, blackened steel, warm timber — demanded a tile specification that felt industrial yet refined. We proposed a large-format sage green porcelain for the bathrooms and a matte white subway arrangement for the kitchen.",
    details:
      "Installation in a live building presented logistical challenges: no lift access, working across three levels, and coordinating with five other trades simultaneously. We scheduled tile work in 48-hour windows around plastering and joinery, keeping the project on programme. The large-format porcelain in the master bath (1200×2400mm slabs) was our most technically demanding room to date.",
    heroImages: [
      img("frankfurt-1", 1400, 900),
      img("frankfurt-2", 1400, 900),
      img("frankfurt-3", 1400, 900),
    ],
    mosaicRows: [
      [img("ff-a", 480, 416), img("ff-b", 360, 416), img("ff-c", 240, 416)],
      [img("ff-d", 675, 450), img("ff-e", 360, 360), img("ff-f", 240, 360)],
    ],
    testimonials: [
      {
        quote:
          "Working with Seehafer was seamless. They understood the design intent immediately and delivered a flawless finish.",
        author: "Sara Frei",
        title: "Principal",
        company: "Studio Frei",
        projectSlug: "frankfurt-loft",
      },
    ],
    nextProject: "weissberg-house",
  },
  {
    slug: "weissberg-house",
    title: "Weissberg House",
    tagline: "Bathroom renovation and feature staircase",
    builder: "Haas Renovierung",
    architect: "Hoffman Wohnbau",
    overview:
      "A comprehensive renovation of a 1960s house in Weissberg. Our scope encompassed all four bathrooms and an extraordinary cantilevered staircase in Calacatta marble — a centrepiece that the owners had admired in a magazine for a decade and finally brought to life.",
    details:
      "The staircase required close coordination with the structural engineer: each tread is 50mm thick solid marble, supported by concealed steel brackets. We had to devise a method of adhering the stone treads to the steel structure without cracking during thermal movement. The solution involved custom-mixed epoxy and stainless isolation clips at each tread end — a detail we now use on all cantilevered stone stairs.",
    heroImages: [
      img("weissberg-1", 1400, 900),
      img("weissberg-2", 1400, 900),
      img("weissberg-3", 1400, 900),
    ],
    mosaicRows: [
      [img("wb-a", 540, 360), img("wb-b", 360, 360), img("wb-c", 240, 360)],
      [img("wb-d", 360, 540), img("wb-e", 480, 416), img("wb-f", 240, 416)],
    ],
    testimonials: [
      {
        quote:
          "We had been dreaming of that staircase for years. Seehafer made it real — and it exceeded every expectation.",
        author: "Christine Weiss",
        title: "Home Owner",
        company: "",
        projectSlug: "weissberg-house",
      },
    ],
    nextProject: "bergmann-residence",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
