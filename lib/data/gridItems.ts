/**
 * Homepage masonry grid items — mirrors the original site's varied
 * multi-image layout where projects appear multiple times with different
 * hero crops and aspect ratios.
 *
 * Each entry specifies:
 *   - image URL
 *   - alt text
 *   - project slug for linking
 *   - project display name
 *   - colSpan / rowSpan in the 6-column grid (auto-rows: 150px)
 *
 * The pattern produces the irregular "Pinterest-style" masonry the
 * original site uses, rather than one card per project.
 */

const ik = (path: string) =>
  `https://ik.imagekit.io/isclzlt7q/marvell-production/images/${path}`;

export type GridItem = {
  image: string;
  alt: string;
  slug: string;
  title: string;
  colSpan: number;
  rowSpan: number;
};

export const gridItems: GridItem[] = [
  // Row 1 — portrait / landscape / portrait
  {
    image: ik("Ainslie-hero-1_Y69UuUFHo.jpg"),
    alt: "View down onto stairs and dog walking on stone flooring",
    slug: "ainslie-street",
    title: "Ainslie Street",
    colSpan: 2,
    rowSpan: 3,
  },
  {
    image: ik("project-hero-image-4x3-1_YbVT424zo.jpg"),
    alt: "A luxurious wardrobe featuring a unique brick tiled ceiling",
    slug: "duncraig-road",
    title: "Duncraig Road",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    image: ik("L1000042-HDR_i18j8zdGW.jpg"),
    alt: "Precision brick, tiled ceiling framed by wooden cabinets",
    slug: "duncraig-road",
    title: "Duncraig Road",
    colSpan: 2,
    rowSpan: 3,
  },

  // Row 2
  {
    image: ik("beach-hero4_MiAGe9PlP.jpg"),
    alt: "Mid-century modern kitchen with accent green tiles",
    slug: "beach-street",
    title: "Beach Street",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    image: ik("170-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_rd4PCWOtv.JPG"),
    alt: "Outdoor seating area with tiled walkways",
    slug: "forrest-street",
    title: "Forrest Street",
    colSpan: 2,
    rowSpan: 3,
  },

  // Row 3
  {
    image: ik("DSC_3568-cropped_YHAqn7tTJ.jpg"),
    alt: "A frontal view of the detailed stonework on the stairs",
    slug: "sewell-street",
    title: "Sewell Street",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    image: ik("Ainslie-hero-3_Zjw4a3awp.jpg"),
    alt: "Mirrored bathroom cabinets and vanity against a tiled wall",
    slug: "ainslie-street",
    title: "Ainslie Street",
    colSpan: 1,
    rowSpan: 2,
  },

  // Row 4
  {
    image: ik("292-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS.JPG_hero_u_eJ3Fheu.jpg"),
    alt: "Outdoor paved space with concrete table",
    slug: "forrest-street",
    title: "Forrest Street",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    image: ik("L1000013-cropped_rKqtBHj9o.jpg"),
    alt: "Luxurious, well-lit, curved, brick, tiled ceiling",
    slug: "duncraig-road",
    title: "Duncraig Road",
    colSpan: 2,
    rowSpan: 3,
  },
  {
    image: ik("eco-hero2_Oah9Z7tSg.jpg"),
    alt: "Close up of stone flooring",
    slug: "eco-outdoor",
    title: "Eco Outdoor",
    colSpan: 3,
    rowSpan: 2,
  },

  // Row 5
  {
    image: ik("beach-hero3_cR8J5KV8i.jpg"),
    alt: "Mid-century modern bathroom with flute glass screening",
    slug: "beach-street",
    title: "Beach Street",
    colSpan: 2,
    rowSpan: 3,
  },
  {
    image: ik("Vivaldi_LRs19_E5UYzx7xM.jpg"),
    alt: "Vivaldi Avenue interior",
    slug: "vivaldi-drive",
    title: "Vivaldi Avenue",
    colSpan: 2,
    rowSpan: 2,
  },

  // Row 6
  {
    image: ik("DSC_8864_J5POGg-uW.jpeg"),
    alt: "Small private pool featuring stone tiling",
    slug: "st-leonards-ave",
    title: "St. Leonards Ave",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    image: ik("Eco-hero1_tteDCH2kp.jpg"),
    alt: "Eco Outdoor showroom",
    slug: "eco-outdoor",
    title: "Eco Outdoor",
    colSpan: 3,
    rowSpan: 2,
  },

  // Row 7
  {
    image: ik("DSC_3556-cropped_bdzE6D29J.jpg"),
    alt: "White house facade with detailed stonework on stairs",
    slug: "sewell-street",
    title: "Sewell Street",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    image: ik("DSC_0259_FjBaNLFXm.jpg"),
    alt: "White bathroom with wooden cabinet",
    slug: "hubble-street",
    title: "Hubble Street",
    colSpan: 2,
    rowSpan: 3,
  },

  // Row 8
  {
    image: ik("beach-hero2_YQu3Ez8dF.jpg"),
    alt: "Mid-century modern scullery with olive green accent tiling",
    slug: "beach-street",
    title: "Beach Street",
    colSpan: 2,
    rowSpan: 3,
  },
  {
    image: ik("Ainslie-hero-4_F1io4B-1M.jpg"),
    alt: "Bathroom with freestanding bath and stone floors",
    slug: "ainslie-street",
    title: "Ainslie Street",
    colSpan: 2,
    rowSpan: 2,
  },

  // Row 9
  {
    image: ik("32250_2-1_Hskawwzb1.jpg"),
    alt: "Modern kitchen with cream vertical stack tile splash-back",
    slug: "hubble-street",
    title: "Hubble Street",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    image: ik("Vivaldi_LRs37_8MnR656Ft.jpg"),
    alt: "Stylish modern kitchen with white cabinets and marble island",
    slug: "vivaldi-drive",
    title: "Vivaldi Avenue",
    colSpan: 1,
    rowSpan: 2,
  },

  // Row 10
  {
    image: ik("ainslie-hero-2_sGveNwFj2.jpg"),
    alt: "Partial view of freestanding bath in front of tiled wall",
    slug: "ainslie-street",
    title: "Ainslie Street",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    image: ik("317-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_1WZbtJj3p.JPG"),
    alt: "Bathroom with modern vanity and tiled floors",
    slug: "forrest-street",
    title: "Forrest Street",
    colSpan: 2,
    rowSpan: 3,
  },

  // Row 11
  {
    image: ik("DSC_3571-cropped_YjFBcWVjo.jpg"),
    alt: "Birds-eye view of stone tiled stairway",
    slug: "sewell-street",
    title: "Sewell Street",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    image: ik("DSC_8962-cropped_-RpWZ2TD3.jpg"),
    alt: "Pool featuring stone tiling and greenery",
    slug: "st-leonards-ave",
    title: "St. Leonards Ave",
    colSpan: 2,
    rowSpan: 3,
  },

  // Row 12
  {
    image: ik("325-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_Hy8PMlvJs.JPG"),
    alt: "Wide view of bathroom with freestanding bath and double vanity",
    slug: "forrest-street",
    title: "Forrest Street",
    colSpan: 2,
    rowSpan: 3,
  },
  {
    image: ik("Eco-hero3__1__UgvPKFb39.jpg"),
    alt: "Showroom featuring different floor tiling samples",
    slug: "eco-outdoor",
    title: "Eco Outdoor",
    colSpan: 2,
    rowSpan: 2,
  },

  // Row 13
  {
    image: ik("DSC_0355-1_QJlsZGdiw.jpg"),
    alt: "Sleek bathroom counter with exposed brick feature wall",
    slug: "hubble-street",
    title: "Hubble Street",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    image: ik("MarvellTile_Stone-09.04.25-49_hero_dLOqAiPjf.jpg"),
    alt: "Overhead view of house with paved walkways",
    slug: "excelsior-street",
    title: "Excelsior Street",
    colSpan: 1,
    rowSpan: 2,
  },

  // Row 14
  {
    image: ik("Vivaldi_LRs09_HUvS8VBnJ.jpg"),
    alt: "Vivaldi Avenue bathroom",
    slug: "vivaldi-drive",
    title: "Vivaldi Avenue",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    image: ik("DSC_0373_T15UDw_pk.jpg"),
    alt: "Modern bathroom with arched mirror and stacked tiling",
    slug: "hubble-street",
    title: "Hubble Street",
    colSpan: 2,
    rowSpan: 3,
  },

  // Row 15
  {
    image: ik("L1000063-HDR_uMBJZwcw3.jpg"),
    alt: "Large glass window and detailed brick tiled ceiling",
    slug: "duncraig-road",
    title: "Duncraig Road",
    colSpan: 2,
    rowSpan: 3,
  },
  {
    image: ik("235-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025_hero_xViyErzph.jpg"),
    alt: "Paved outdoor steps and patio area",
    slug: "excelsior-street",
    title: "Excelsior Street",
    colSpan: 2,
    rowSpan: 2,
  },

  // Row 16
  {
    image: ik("176-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025_hero_YFLzGUuLj.jpg"),
    alt: "Kitchen with stone island bench and tiled floors",
    slug: "excelsior-street",
    title: "Excelsior Street",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    image: ik("176-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025.JPG_hero_CbvzQK5tb.jpg"),
    alt: "White home with pool and paved patio",
    slug: "excelsior-street",
    title: "Excelsior Street",
    colSpan: 1,
    rowSpan: 2,
  },

  // Row 17
  {
    image: ik("vivaldi-hero_MTKorQR4f.jpg"),
    alt: "Contemporary kitchen with wooden shelves and white tiling",
    slug: "vivaldi-drive",
    title: "Vivaldi Avenue",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    image: ik("7BeachStCottesloe06-1_B2fHLj5HK.jpg"),
    alt: "Mid-century modern kitchen with olive green tiles",
    slug: "beach-street",
    title: "Beach Street",
    colSpan: 2,
    rowSpan: 3,
  },

  // Row 18
  {
    image: ik("DSC_0215_6G85vEGOI.jpg"),
    alt: "Kitchen with under-cabinet lighting and tiled splash-back",
    slug: "hubble-street",
    title: "Hubble Street",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    image: ik("DSC_8846_qQYBah9oW.jpeg"),
    alt: "Birdseye view of private pool with stone border",
    slug: "st-leonards-ave",
    title: "St. Leonards Ave",
    colSpan: 2,
    rowSpan: 3,
  },
];
