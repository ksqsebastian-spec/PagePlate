export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  region: string;
  image: string;
  imageAlt: string;
  galleryImages: { src: string; alt: string; left?: boolean }[];
  overview: string;
  details: string;
  nextSlug?: string;
  nextTitle?: string;
  nextThumb: string;
  nextThumbAlt: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'wild-horizons',
    title: 'Wild Horizons',
    subtitle: 'Landscape Photography & Quiet Architecture',
    description: 'Alpine peaks, tropical shores, and the homes that live quietly alongside them.',
    year: '2024 — 2026',
    region: 'Dolomites · Pacific · Iceland',
    image: '/images/hero-main.jpg',
    imageAlt: 'A vivid alpine sunset washing color across mountain peaks.',
    galleryImages: [
      { src: '/images/gallery-1.jpg', alt: 'A modern luxury home framed by lush tropical plants at twilight.', left: true },
      { src: '/images/gallery-2.jpg', alt: 'A lone palm tree leaning over a tropical paradise beach.' },
      { src: '/images/gallery-3.jpg', alt: 'A misty green mountain forest disappearing into low cloud.', left: true },
      { src: '/images/gallery-4.jpg', alt: 'The majestic Skogafoss waterfall cascading down a cliff in Iceland.' },
      { src: '/images/gallery-5.jpg', alt: 'Panoramic sunset view of the Oregon coastline at golden hour.' },
    ],
    overview: `–––Wild Horizons is a study of the places that quiet the mind — sunset-streaked alpine peaks, palms leaning over warm coastal water, forests softened by morning fog, and the architecture that lives alongside them.`,
    details: `Shot across three continents over eighteen months, this series follows a simple brief: photograph places that feel both improbably large and unmistakably personal. Every image is unedited beyond color and contrast — no compositing, no relocations, no false skies.`,
    nextSlug: 'quiet-forests',
    nextTitle: 'Quiet Forests',
    nextThumb: '/images/next-project-eco-thumb.jpg',
    nextThumbAlt: 'Sun rays piercing through a misty forest at dawn',
  },
  {
    slug: 'quiet-forests',
    title: 'Quiet Forests',
    subtitle: 'Woodland Light & Stillness',
    description: 'Ancient canopies, morning mist, and the slow patience of old growth.',
    year: '2024',
    region: 'Pacific Northwest · Scandinavia',
    image: '/images/next-project-eco-thumb.jpg',
    imageAlt: 'Sun rays piercing through a misty forest at dawn.',
    galleryImages: [
      { src: '/images/gallery-3.jpg', alt: 'A misty green mountain forest disappearing into low cloud.', left: true },
      { src: '/images/gallery-5.jpg', alt: 'Panoramic view of a forest coastline at golden hour.' },
      { src: '/images/gallery-1.jpg', alt: 'A cabin nestled in a forest clearing at dusk.', left: true },
      { src: '/images/gallery-4.jpg', alt: 'Light filtering through tall ancient trees.' },
      { src: '/images/gallery-2.jpg', alt: 'A quiet path winding through a dense forest.' },
    ],
    overview: `–––Quiet Forests is an exploration of stillness — the kind found only in places where trees have been growing longer than anyone alive can remember. Dawn light through old-growth canopy. The sound of nothing in particular.`,
    details: `Photographed across the Pacific Northwest and Scandinavia, this series seeks the places where the forest feels truly sovereign — where architecture, when it appears, is always deferential. Small, dark, careful.`,
    nextSlug: 'coastal-light',
    nextTitle: 'Coastal Light',
    nextThumb: '/images/gallery-5.jpg',
    nextThumbAlt: 'Panoramic sunset view of the Oregon coastline',
  },
  {
    slug: 'coastal-light',
    title: 'Coastal Light',
    subtitle: 'Shoreline Studies',
    description: 'Where land concedes to ocean — the architecture of edges.',
    year: '2025',
    region: 'Oregon · Amalfi · Algarve',
    image: '/images/gallery-5.jpg',
    imageAlt: 'Panoramic sunset view of the Oregon coastline at golden hour.',
    galleryImages: [
      { src: '/images/gallery-1.jpg', alt: 'A coastal home at twilight.', left: true },
      { src: '/images/gallery-2.jpg', alt: 'A palm framing the horizon.' },
      { src: '/images/gallery-5.jpg', alt: 'The Oregon coast going pink at dusk.', left: true },
      { src: '/images/gallery-4.jpg', alt: 'Coastal cliffs and waterfalls.' },
      { src: '/images/gallery-3.jpg', alt: 'Sea mist rising over coastal hills.' },
    ],
    overview: `–––Coastal Light examines the boundary where land ends — and the human instinct to build right at the edge of it. These photographs document both the drama of shorelines and the quiet homes that choose to live alongside that drama.`,
    details: `From the rugged drama of the Oregon coast to the warm terracotta of the Algarve, each location was chosen for its quality of light in the late afternoon — the hour when coastal landscapes stop posing and start simply existing.`,
    nextSlug: 'alpine-studies',
    nextTitle: 'Alpine Studies',
    nextThumb: '/images/hero-main.jpg',
    nextThumbAlt: 'Alpine peaks at sunset',
  },
  {
    slug: 'alpine-studies',
    title: 'Alpine Studies',
    subtitle: 'Elevation & Clarity',
    description: 'Above the treeline, where light is sharper and silence is absolute.',
    year: '2025',
    region: 'Dolomites · Swiss Alps · Patagonia',
    image: '/images/hero-main.jpg',
    imageAlt: 'A vivid alpine sunset washing color across mountain peaks.',
    galleryImages: [
      { src: '/images/gallery-4.jpg', alt: 'A dramatic waterfall in a mountain valley.', left: true },
      { src: '/images/gallery-1.jpg', alt: 'A mountain retreat at last light.' },
      { src: '/images/hero-main.jpg', alt: 'Alpine peaks at sunset.', left: true },
      { src: '/images/gallery-3.jpg', alt: 'Clouds rolling over a mountain ridge.' },
      { src: '/images/gallery-5.jpg', alt: 'The long shadow of a peak across a valley.' },
    ],
    overview: `–––Alpine Studies is an investigation of altitude — what happens to color, sound, and proportion when you climb above the treeline. The light is harder and more direct. The shadows are sharper. Everything feels both larger and simpler.`,
    details: `Photographed across the Dolomites, the Swiss Alps, and Patagonia over two summers. Each location was visited at least twice — once in morning light and once at golden hour — to understand how the same peak can feel like two completely different places.`,
    nextSlug: 'sea-and-stone',
    nextTitle: 'Sea & Stone',
    nextThumb: '/images/gallery-2.jpg',
    nextThumbAlt: 'Tropical coastline with stone formations',
  },
  {
    slug: 'sea-and-stone',
    title: 'Sea & Stone',
    subtitle: 'Geological Portraits',
    description: 'Basalt, limestone, and the patient erosion of ten thousand years.',
    year: '2025',
    region: 'Iceland · Azores · Big Sur',
    image: '/images/gallery-2.jpg',
    imageAlt: 'A lone palm tree leaning over a tropical paradise beach.',
    galleryImages: [
      { src: '/images/gallery-4.jpg', alt: 'Basalt cliffs at the edge of the Atlantic.', left: true },
      { src: '/images/gallery-2.jpg', alt: 'Volcanic stone and ocean spray.' },
      { src: '/images/gallery-5.jpg', alt: 'Limestone coast at low tide.', left: true },
      { src: '/images/gallery-3.jpg', alt: 'Sea-worn rocks at Big Sur.' },
      { src: '/images/gallery-1.jpg', alt: 'A stone house on the Azores coast.' },
    ],
    overview: `–––Sea & Stone is a portrait series of geology — specifically the places where ancient rock meets contemporary ocean. These images ask: what does a landscape look like after ten thousand years of conversation with the sea?`,
    details: `Iceland, the Azores, and Big Sur each offer a different answer. Iceland is volcanic and dramatic, the stone still feeling newly formed. The Azores are weather-worn and intimate. Big Sur is stoic — cliffs that have watched countless seasons and offered no opinion.`,
    nextSlug: 'northern-falls',
    nextTitle: 'Northern Falls',
    nextThumb: '/images/gallery-4.jpg',
    nextThumbAlt: 'Iceland waterfall at dusk',
  },
  {
    slug: 'northern-falls',
    title: 'Northern Falls',
    subtitle: 'Water in Motion',
    description: 'The force and silence of water that has been falling for centuries.',
    year: '2026',
    region: 'Iceland · Norway · British Columbia',
    image: '/images/gallery-4.jpg',
    imageAlt: 'The majestic Skogafoss waterfall cascading down a cliff in Iceland.',
    galleryImages: [
      { src: '/images/gallery-4.jpg', alt: 'Skogafoss waterfall in full flow.', left: true },
      { src: '/images/gallery-3.jpg', alt: 'Mist rising from a Norwegian waterfall.' },
      { src: '/images/gallery-5.jpg', alt: 'A coastal waterfall meeting the ocean.', left: true },
      { src: '/images/gallery-1.jpg', alt: 'A homestead near a British Columbia falls.' },
      { src: '/images/hero-main.jpg', alt: 'The valley carved by centuries of falling water.' },
    ],
    overview: `–––Northern Falls is a meditation on water in its most theatrical form. These are places where rivers simply run out of ground — and the result, after centuries, is both violent and beautiful in ways that no single photograph can fully hold.`,
    details: `The series spans Iceland's Skogafoss and Gullfoss, a half-dozen unnamed falls in Norway's fjord country, and the rain-fed cataracts of coastal British Columbia. Shot in both long exposure and at shutter speeds fast enough to freeze individual droplets.`,
    nextSlug: 'wild-horizons',
    nextTitle: 'Wild Horizons',
    nextThumb: '/images/hero-main.jpg',
    nextThumbAlt: 'Alpine sunset over mountain peaks',
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
