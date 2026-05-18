const ik = (path: string) =>
  `https://ik.imagekit.io/isclzlt7q/marvell-production/images/${path}`;

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
      ik("20250912_Ainslie_Robeson_DionRobeson-56_InyJ7szgM.jpg"),
      ik("DSC_3568_3HmvPmxeb.jpeg"),
      ik("DSC_8889_s4vaHK4LH.jpeg"),
      ik("L1000042-HDR_i18j8zdGW.jpg"),
    ],
  },
  {
    id: "tiling",
    title: "Tiling",
    description:
      "Durable and versatile, tiling is the intelligent choice for contemporary interiors. Applied across floors, benchtops, and wall cladding, porcelain and ceramic demand expert installation to maintain the seamless, flawless finish they're renowned for.",
    images: [
      ik("32250_2-1_Hskawwzb1.jpg"),
      ik("7BeachStCottesloe06-1_B2fHLj5HK.jpg"),
      ik("Vivaldi_LRs12_W0tHRxDcE.jpg"),
      ik("DSC_0215_6G85vEGOI.jpg"),
    ],
  },
  {
    id: "specialist-feature",
    title: "Specialist Feature Tiling",
    description:
      "The complex and ambitious jobs are what inspire us every day. Our methodical approach minimises disruption while maximising project efficiency — ensuring absolute precision and unrivalled craftsmanship in every unique endeavour.",
    images: [
      ik("L1000063-HDR_uMBJZwcw3.jpg"),
      ik("DSC_4426_3wKs_6y_z.jpeg"),
      ik("170-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_rd4PCWOtv.JPG"),
      ik("DSC_0295_rq02VAeDo.jpg"),
    ],
  },
  {
    id: "bathroom-renovations",
    title: "Bathroom Renovations",
    description:
      "Transform your bathroom into a sanctuary of style and function. From bespoke tiling and luxurious finishes to expertly planned layouts, we bring precision, creativity, and care to every detail — delivering results that consistently exceed expectations.",
    images: [
      ik("DSC_0259_FjBaNLFXm.jpg"),
      ik("Ainslie-hero-4_F1io4B-1M.jpg"),
      ik("DSC_0280_fWMiWRIIF.jpg"),
      ik("7BeachStCottesloe15-1_Cnu2aPocs.jpg"),
    ],
  },
];
