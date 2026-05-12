export interface ProjectMeta {
  builder: string;
  architect: string;
  designer: string;
  photographer: string;
}

export interface GalleryBlock {
  src: string;
  alt: string;
  size: "full" | "half" | "partial";
  align: "left" | "right";
  aspectRatio: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavLink[];
}

export interface NextProject {
  title: string;
  slug: string;
  href: string;
  thumbnail: string;
  thumbnailAlt: string;
}
