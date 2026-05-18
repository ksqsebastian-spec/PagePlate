export type Testimonial = {
  quote: string;
  author: string;
  title: string;
  company: string;
  projectSlug?: string;
};

export type ProjectMeta = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  metadata: ProjectMeta[];
  overview: string;
  details: string;
  heroImage: string;
  galleryImages: string[];
  testimonials: Testimonial[];
  nextProject: string;
};

const ik = (path: string) =>
  `https://ik.imagekit.io/isclzlt7q/marvell-production/images/${path}`;

export const projects: Project[] = [
  {
    slug: "hubble-street",
    title: "Hubble Street",
    tagline: "Master Ensuite, Main Bathroom, Large Family Powder Room",
    metadata: [
      { label: "Builder", value: "Arklen" },
      { label: "Architect / Designer", value: "Lahaus" },
      { label: "Tile / Terrazzo Supplier", value: "Artedomus" },
      { label: "Photographer", value: "Peter Ellery Photography" },
    ],
    overview:
      "This Hubble Street home in East Fremantle marked a defining moment for Marvell Tile and Stone in Western Australia. Their first collaboration with builder Arklen, this rear extension to a heritage cottage seamlessly blends old and new, showcasing beautiful detailing, refined materiality, and the fine craftsmanship that has since become Marvell’s signature.",
    details:
      "Discovered by Arklen through social media soon after relocating from London, William Marvell and his team were engaged to complete this Hubble Street home’s three wet areas — a master ensuite, kids’ bathroom, and family powder room. This project became a foundation for their Western Australian practice and the start of an enduring partnership built on skill and shared standards. A refined palette of dual-format matte white wall tiles and terrazzo floors anchors each space with texture and balance. In the master ensuite, two colourways of subway tiles were laid in a vertical stack bond, establishing rhythm and order. Every surface reflects craftsmanship — mixed tile formats align perfectly at corners, grout lines run seamlessly through adjoining rooms, and symmetry is carefully maintained throughout.",
    heroImage: ik("32250_2-1_Hskawwzb1.jpg"),
    galleryImages: [
      ik("DSC_0215_6G85vEGOI.jpg"),
      ik("DSC_0259_FjBaNLFXm.jpg"),
      ik("DSC_0295_rq02VAeDo.jpg"),
      ik("DSC_0280_fWMiWRIIF.jpg"),
      ik("DSC_0355-1_QJlsZGdiw.jpg"),
      ik("DSC_0337-1__jNx8eoxz.jpg"),
      ik("DSC_0373_T15UDw_pk.jpg"),
    ],
    testimonials: [
      {
        quote:
          "William is incredibly meticulous and an exceptionally skilled tiler. The preparation and care taken is second to none. A clean, precise tradesman — all the hallmarks of a truly high-quality craftsman.",
        author: "Mark Diedricks",
        title: "Managing Director",
        company: "Arklen Developments",
        projectSlug: "hubble-street",
      },
    ],
    nextProject: "sewell-street",
  },
  {
    slug: "sewell-street",
    title: "Sewell Street",
    tagline: "Scala Crazy Paving Installation",
    metadata: [
      { label: "Client", value: "Adam Bug" },
      { label: "Photographer", value: "Sheshells Photography" },
      { label: "Landscape Designer", value: "Ascher Smith" },
      { label: "Stone Supplier", value: "Eco Outdoor" },
    ],
    overview:
      "For this East Fremantle home, Marvell Tile and Stone turned a typical Freo staircase into a fabulous travertine conversation piece. Every piece of stone was hand-scribed, pattern-matched, and mitred perfectly, transforming the ordinary into the extraordinary showing beautifully laid natural stone can make even a simple staircase unforgettable.",
    details:
      "The Sewell Street staircase is a remarkable demonstration of Marvell Tile and Stone’s expertise with travertine. Using Eco Outdoor’s Scala range, every piece of stone was hand-scribed and pattern-matched to create a “crazy pave” effect that is as complex as it is beautiful. Each stair was finished with mitred edges — a detail that required absolute precision, patience, and a very steady hand. Unlike standard installations, this project was approached like a reverse-engineered jigsaw puzzle, where every stone aligned through years of intuition and on-the-tools experience. With perfectly consistent grout lines, seamless placement, and a deep understanding of natural stone, Marvell Tile and Stone demonstrated that crazy paving is far from over — it just takes the right hands to make it extraordinary.",
    heroImage: ik("DSC_3568-cropped_YHAqn7tTJ.jpg"),
    galleryImages: [
      ik("DSC_3568_3HmvPmxeb.jpeg"),
      ik("DSC_3625_hox9PSiyN.jpeg"),
      ik("DSC_4426_3wKs_6y_z.jpeg"),
      ik("DSC_4300_lb4ZJiC3v.jpeg"),
      ik("DSC_3571_ndVXb7HtP.jpeg"),
      ik("DSC_3607_NpNkLojwA.jpeg"),
      ik("DSC_4331_kd9oWKe4g.jpeg"),
    ],
    testimonials: [],
    nextProject: "forrest-street",
  },
  {
    slug: "forrest-street",
    title: "Forrest Street",
    tagline: "Natural Stone & Tiling Installation",
    metadata: [
      { label: "Builder", value: "Talo Constructions" },
      { label: "Architect", value: "Space Agency Architects" },
      { label: "Landscape Architect", value: "Rob Finnie" },
      { label: "Photographer", value: "Ridhwaan Moola Photography" },
    ],
    overview:
      "For the renovation of Carbrakine House, a 1902 Peppermint Grove manor, Marvell Tile and Stone brought heritage to life through artisanal tiling. From limestone bathrooms to terracotta exteriors, every detail was executed with precision, proving how craftsmanship and care can transform timeless architecture into something extraordinary.",
    details:
      "The restoration of this 1902 Peppermint Grove manor demanded a balance of heritage sensitivity and technical expertise — a challenge Marvell Tile and Stone met beautifully. Collaborating with Talo Constructions, their team delivered tiling craftsmanship of the highest calibre. Bathrooms and ensuites showcase honed limestone floors and walls, laid with perfect symmetry and razor-sharp joint alignment. The kitchen features a full-height splashback in natural stone, scribed precisely around services and joinery reveals. Outside, terracotta pavers were laid in a running bond across extensive entertaining areas, with every expansion joint concealed within the pattern.",
    heroImage: ik(
      "325-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_Hy8PMlvJs.JPG"
    ),
    galleryImages: [
      ik("170-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_rd4PCWOtv.JPG"),
      ik("387-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_Muu0kwXNE.JPG"),
      ik("22-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_yK79-EzO2.JPG"),
      ik("82-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS-1_LWQBKka3h.JPG"),
      ik("74-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS-1_5_PrgyG1v.JPG"),
      ik("85-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_x1WQRiIEV.JPG"),
      ik("330-FORRESTST-TALO-SPACEAGENCY-14JAN2025_FS_1iKv4HfOU.JPG"),
    ],
    testimonials: [
      {
        quote:
          "To do anything well comes with its challenges; even the simplest tasks can be the most difficult. Marvell Tile and Stone consistently deliver craftsmanship of the highest calibre.",
        author: "James Anderson",
        title: "Managing Director",
        company: "Talo Construction",
        projectSlug: "forrest-street",
      },
    ],
    nextProject: "ainslie-street",
  },
  {
    slug: "ainslie-street",
    title: "Ainslie Street",
    tagline: "Internal and external stonework and ensuite",
    metadata: [
      { label: "Builder", value: "Red Cloud Building" },
      { label: "Architect", value: "Robeson Architects" },
      { label: "Stone Supplier", value: "Eco Outdoor" },
      { label: "Photographer", value: "Dion Robeson" },
    ],
    overview:
      "For an East Fremantle residence on Ainslie Street, we collaborated with Red Cloud Building and Robeson Architects to deliver a fully integrated stonework package. Spanning indoor and outdoor spaces, the project celebrates materiality, technical know-how, and a Mediterranean inspired aesthetic, creating a home that feels both grounded and effortless.",
    details:
      "For this East Fremantle home, we worked closely with Robeson Architects and Red Cloud Building to deliver the full internal and external stonework package—from main living areas to alfresco, pool surrounds, and a showstopping pink ensuite. Scala Crazy Paving was laid throughout the interiors and extended seamlessly to outdoor entertaining areas, creating a cohesive flow between indoor and outdoor living. The pool coping was hand-scribed to follow the freeform pool edge, while the ensuite features hand-laid pink mosaics paired with the same travertine, creating a cohesive yet surprising palette.",
    heroImage: ik("Ainslie-hero-4_F1io4B-1M.jpg"),
    galleryImages: [
      ik("20250912_Ainslie_Robeson_DionRobeson-56_InyJ7szgM.jpg"),
      ik("20250912_Ainslie_Robeson_DionRobeson-95_OSEMhhjoW.jpg"),
      ik("20250912_Ainslie_Robeson_DionRobeson-101_swgx9hUsz.jpg"),
      ik("20250912_Ainslie_Robeson_DionRobeson-105_iQw7ReNHN.jpg"),
      ik("20250912_Ainslie_Robeson_DionRobeson-112_RJgKNBya0.jpg"),
      ik("20250912_Ainslie_Robeson_DionRobeson-130_fP936ZTp9.jpg"),
      ik("20250912_Ainslie_Robeson_DionRobeson-120_Ykl8IbYKT.jpg"),
    ],
    testimonials: [
      {
        quote:
          "We have worked with Will and Marvell on five residential projects now and cannot recommend them highly enough. Absolute perfectionists and outstanding quality every single time.",
        author: "Simone Robeson",
        title: "Architect",
        company: "Robeson Architects",
        projectSlug: "ainslie-street",
      },
    ],
    nextProject: "beach-street",
  },
  {
    slug: "beach-street",
    title: "Beach Street",
    tagline: "Ensuite, kitchen and laundry tiling",
    metadata: [
      { label: "Builder", value: "Salt KB" },
      { label: "Designer", value: "Jess O’Shea Designs" },
      { label: "Client", value: "Brian and Judi Rudd" },
      { label: "Photographer", value: "Jody Darcy" },
    ],
    overview:
      "For this home on Beach Street in Cottesloe, Marvell Tile and Stone collaborated with award-winning designer Jess O’Shea to bring mid-century modern style to life. From terrazzo floors to mosaic splashbacks, every line and pattern is flawlessly finished, demonstrating that expert tiling can turn a beautiful design into a breathtaking reality.",
    details:
      "This Cottesloe abode demonstrates our signature precision and expertise in mid-century modern design. Collaborating with designer Jess O’Shea, the team focused on clean lines, flawless repetition, and absolute attention to detail to create a chic, relaxed, beachside aesthetic. This sense of rhythm is created using premium materials. In the ensuite, a combination of 150mm x 150mm tiles and mosaic feature walls demanded millimetre-perfect alignment across every surface. The kitchen splashback features handmade tiles with deliberate colour variation, installed to highlight their artisanal character while maintaining consistent grout lines. Across every surface, our team demonstrated how expert tiling and premium materials transform functional spaces into design statements.",
    heroImage: ik("7BeachStCottesloe06-1_B2fHLj5HK.jpg"),
    galleryImages: [
      ik("7BeachStCottesloe07-1_FasqfDlqS.jpg"),
      ik("7BeachStCottesloe15-1_Cnu2aPocs.jpg"),
      ik("7BeachStCottesloe11-1_iurfGliPm.jpg"),
      ik("7BeachStCottesloe26-1_A_DoM8tLC.jpg"),
      ik("7BeachStCottesloe21-1_k-hv0Y0o0.jpg"),
    ],
    testimonials: [],
    nextProject: "duncraig-road",
  },
  {
    slug: "duncraig-road",
    title: "Duncraig Road",
    tagline: "Brick Slip Installation & Natural Stone Floor Tiling",
    metadata: [
      { label: "Builder", value: "RK Brine Master Builder" },
      { label: "Architect", value: "Peter Moran Architect" },
      { label: "Designer", value: "Staple Design" },
      { label: "Photographer", value: "Maguire Imagery" },
    ],
    overview:
      "Known as “Marvellangelo”, this Applecross home became the backdrop for a tiling project that tested Marvell Tile and Stone’s skill, stamina, and precision. With brick tiles laid overhead on a soaring arched ceiling, each calculation, cut, and placement became a statement of craftsmanship — a balance of artistry and engineering that few would attempt.",
    details:
      "For this Applecross home — nicknamed “Marvellangelo” — Marvell Tile and Stone transformed an arched ceiling into a breathtaking brick-tiled masterpiece. Precision was everything: every tile was set overhead with a consistent 6.4mm grout joint, each measure checked to maintain rhythm, symmetry, and balance across the curve. The floor tiling was equally demanding, with large-format natural stone laid across open-plan living areas with laser-straight joint alignment. Every expansion joint was concealed within the design, and the transition between indoor and outdoor surfaces is seamless.",
    heroImage: ik("project-hero-image-4x3-1_YbVT424zo.jpg"),
    galleryImages: [
      ik("L1000063-HDR_uMBJZwcw3.jpg"),
      ik("L1000013-1_tTenWtvl-.jpg"),
      ik("L1000042-HDR_i18j8zdGW.jpg"),
      ik("L1000060-HDR_8W0to6mSC.jpg"),
      ik("L1000081-HDR_bw4esvyP2.jpg"),
    ],
    testimonials: [],
    nextProject: "eco-outdoor",
  },
  {
    slug: "eco-outdoor",
    title: "Eco Outdoor",
    tagline:
      "Tiling 25 different types of stone floor tiles across more than 500m²",
    metadata: [
      { label: "Client", value: "Eco Outdoor" },
      { label: "Photographer", value: "RNF Studio" },
    ],
    overview:
      "Eco Outdoor, recognised as Australia’s leading supplier of natural stone and architectural materials, entrusted Marvell Tile and Stone to create their flagship showroom in Perth. With absolute precision, we transformed raw stone into harmonious, timeless surfaces, helping establish the space as a benchmark for quality in the industry.",
    details:
      "Being invited to install the stone flooring for Eco Outdoor, Australia’s leading supplier of natural stone and architectural materials, at their Claremont showroom marked a major milestone for Marvell Tile and Stone. Tasked with covering approximately 500m² with nearly 25 different stone types, we approached each material with the specific preparation and technique it demanded. From dense granite to delicate limestone, every stone was treated individually — bedded, levelled, and grouted to showcase its natural beauty while maintaining flawless transitions between zones.",
    heroImage: ik("Eco-hero1_tteDCH2kp.jpg"),
    galleryImages: [
      ik("MarvellTile_Stone-Website-26.06.25-12_1oHTNexao.jpg"),
      ik("MarvellTile_Stone-Website-26.06.25-45_mlAFKVStq.jpg"),
      ik("MarvellTile_Stone-Website-26.06.25-3_G5YTtjCNe.jpg"),
      ik("MarvellTile_Stone-Website-26.06.25-13_REmPzKsxa.jpg"),
    ],
    testimonials: [
      {
        quote:
          "Marvell Tile and Stone installed our stone flooring with finesse. Their attention to detail was second to none and their ability to lay diverse stone types seamlessly across a large area was truly impressive.",
        author: "Matthew Felton",
        title: "Chief Executive",
        company: "Eco Outdoor",
        projectSlug: "eco-outdoor",
      },
    ],
    nextProject: "excelsior-street",
  },
  {
    slug: "excelsior-street",
    title: "Excelsior Street",
    tagline: "Ensuite, kitchen and laundry tiling",
    metadata: [
      { label: "Builder", value: "Talo Construction" },
      { label: "Architect", value: "Robeson Architects" },
      { label: "Natural Stone Supplier", value: "Bernini" },
      { label: "Photographer", value: "Ridhwaan Moola Photography" },
    ],
    overview:
      "At this contemporary Shenton Park residence, Marvell Tile and Stone partnered with Talo Construction and Robeson Architects to showcase tiling as an art of precision. Spanish limestone flows seamlessly from interior to poolside, with every joint and junction perfectly aligned — a masterclass in technical execution and design sensitivity.",
    details:
      "For this premium home, designed by Simone Robeson, Marvell Tile and Stone brought Spanish limestone from Bernini to life through incredible craftsmanship. The process began at the front alfresco, anchored with a full tile, then extended through entry, hallways, ensuites, and out to the pool’s edge — maintaining perfect joint alignment across every threshold and change in level. The kitchen island features a waterfall edge in the same stone, with mitred corners that are virtually invisible. The pool surround demanded particular precision, with every coping piece scribed to follow the geometric pool shape while maintaining consistent overhang and drip detail.",
    heroImage: ik(
      "176-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025_hero_YFLzGUuLj.jpg"
    ),
    galleryImages: [
      ik(
        "176-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025_b-Vw4g_CY.JPG"
      ),
      ik(
        "17-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025_rM3Ks_t7e.JPG"
      ),
      ik("MarvellTile_Stone-09.04.25-49_tq7znmvGu.jpg"),
      ik(
        "106-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025_5zxhpV9HH.JPG"
      ),
      ik(
        "235-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025_V_rWSrefw.JPG"
      ),
      ik(
        "206-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025_SDyLZQIpN.JPG"
      ),
      ik(
        "110-TALOCONSTRUCTION-74EXCELSIORST-SHENTONPARK-11APR2025_vQr5Z9hsZ.JPG"
      ),
    ],
    testimonials: [
      {
        quote:
          "Marvell Tile and Stone installed the stone with finesse. Their attention to detail was second to none and their ability to maintain perfect alignment across the entire home was truly impressive.",
        author: "Simone Robeson",
        title: "Architect",
        company: "Robeson Architects",
        projectSlug: "excelsior-street",
      },
    ],
    nextProject: "st-leonards-ave",
  },
  {
    slug: "st-leonards-ave",
    title: "St Leonards Ave",
    tagline: "Natural Stone, Paving and Pool Wrap",
    metadata: [
      { label: "Client", value: "Nicole Moody" },
      { label: "Landscape Construction", value: "Werd Landscapes" },
      { label: "Designer", value: "Mon Palmer" },
      { label: "Photographer", value: "Sheshells Photography" },
    ],
    overview:
      "In West Leederville, Marvell Tile and Stone created outdoor spaces to die for — from defining limestone tiling and French-pattern floors to seamless pool detailing. Reflecting the Western Australian way of living, the project also showcases technical excellence, innovative problem-solving and the artistry of natural stone at its very best.",
    details:
      "For the outdoor areas and alfresco spaces of this West Leederville home, Marvell Tile and Stone collaborated with designer Mon Palmer and Werd Landscapes. William and the team laid natural limestone tiles in a classic French pattern across expansive outdoor living areas. The pool became the centrepiece of the design — with coping pieces hand-scribed to follow the geometric pool shape, maintaining consistent overhang and drip detail. Every expansion joint was concealed within the pattern, and the transition between paved areas and garden beds is seamless.",
    heroImage: ik("DSC_8846_qQYBah9oW.jpeg"),
    galleryImages: [
      ik("DSC_8864-1_LihDVP5_0.jpeg"),
      ik("DSC_8918_EbTlfzyOf.jpeg"),
      ik("DSC_8889_s4vaHK4LH.jpeg"),
      ik("DSC_8953_3P1lOKATO.jpeg"),
      ik("DSC_8976_OnEXm9dP_.jpeg"),
      ik("DSC_8962_ik_r4CXzK.jpeg"),
    ],
    testimonials: [
      {
        quote:
          "We engaged Will to undertake a complex paving job in our backyard using natural limestone. His attention to detail, quality of workmanship, and friendly attitude was outstanding.",
        author: "Nicole Moody",
        title: "Owner",
        company: "",
        projectSlug: "st-leonards-ave",
      },
    ],
    nextProject: "vivaldi-drive",
  },
  {
    slug: "vivaldi-drive",
    title: "Vivaldi Drive",
    tagline: "Full House Tiling Installation",
    metadata: [
      { label: "Builder", value: "Arklen" },
      { label: "Tile Supplier", value: "InStyle Ceramics" },
      { label: "Photographer", value: "Peter Ellery Photography" },
    ],
    overview:
      "Marvell Tile and Stone brought precision and skill to this Mandurah home, working alongside Arklen and interior designer Jess O’Shea. From bathrooms to kitchen, laundry, and balcony, every surface was precisely tiled — proof that clean lines, seamless finishes, and uncompromising detail are what set exceptional tiling apart.",
    details:
      "Marvell Tile and Stone had the privilege of collaborating with Arklen Developments and designer Jess O’Shea on a carefully considered Mandurah home. Entrusted with tiling throughout, the team managed screed, waterproofing, and the installation of tiles across the main bathroom, ensuite, powder room, kitchen, laundry, and balcony. Every surface was approached with the same level of precision — from large-format floor tiles laid with laser-straight joint alignment to intricate mosaic feature walls in the bathrooms. The kitchen splashback features a subtle textured tile that catches the light differently throughout the day.",
    heroImage: ik("Vivaldi_LRs09_HUvS8VBnJ.jpg"),
    galleryImages: [
      ik("Vivaldi_LRs09-1_JSkSsVqfq.jpg"),
      ik("Vivaldi_LRs12_W0tHRxDcE.jpg"),
      ik("Vivaldi_LRs32_QPio70aQI.jpg"),
      ik("Vivaldi_LRs22_gvRTcutw2.jpg"),
      ik("Vivaldi_LRs16-1_sd2VTiaoO.jpg"),
      ik("Vivaldi_LRs37-1_b8_B3KMJh.jpg"),
      ik("Vivaldi_LRs05-1_9VIJw-z0e.jpg"),
    ],
    testimonials: [
      {
        quote:
          "William is incredibly meticulous and an exceptionally skilled tiler. The preparation and care taken is second to none. A clean, precise tradesman — all the hallmarks of a truly high-quality craftsman.",
        author: "Mark Diedricks",
        title: "Managing Director",
        company: "Arklen Developments",
        projectSlug: "vivaldi-drive",
      },
    ],
    nextProject: "hubble-street",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
