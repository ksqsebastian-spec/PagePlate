const img = (seed: string, w = 480, h = 480) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export type Service = {
  id: string;
  title: string;
  description: string;
  images: string[];
};

export const services: Service[] = [
  {
    id: "natural-stone",
    title: "Natural Stone",
    description:
      "Travertine, marble, and limestone offer limitless potential to craft extraordinary spaces. Natural stone captivates in every detail — from distinctive veining and format to the tactile richness underfoot. Always in style, always in conversation with the architecture around it.",
    images: [
      img("ns-1"),
      img("ns-2"),
      img("ns-3"),
      img("ns-4"),
    ],
  },
  {
    id: "tiling",
    title: "Tiling",
    description:
      "Durable and versatile, tiling is the intelligent choice for contemporary interiors. Applied across floors, benchtops, and wall cladding, porcelain and ceramic demand expert installation to maintain the seamless, flawless finish they're renowned for.",
    images: [
      img("tl-1"),
      img("tl-2"),
      img("tl-3"),
      img("tl-4"),
    ],
  },
  {
    id: "specialist-feature",
    title: "Specialist Feature Tiling",
    description:
      "The complex and ambitious jobs are what inspire us every day. Our methodical approach minimises disruption while maximising project efficiency — ensuring absolute precision and unrivalled craftsmanship in every unique endeavour.",
    images: [
      img("sf-1"),
      img("sf-2"),
      img("sf-3"),
      img("sf-4"),
    ],
  },
  {
    id: "bathroom-renovations",
    title: "Bathroom Renovations",
    description:
      "Transform your bathroom into a sanctuary of style and function. From bespoke tiling and luxurious finishes to expertly planned layouts, we bring precision, creativity, and care to every detail — delivering results that consistently exceed expectations.",
    images: [
      img("br-1"),
      img("br-2"),
      img("br-3"),
      img("br-4"),
    ],
  },
];
