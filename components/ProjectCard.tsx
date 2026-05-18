"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  alt?: string;
  style?: React.CSSProperties;
};

export default function ProjectCard({
  slug,
  title,
  tagline,
  image,
  alt,
  style,
}: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="project-card"
      style={{
        display: "block",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div className="project-card__image" style={{ width: "100%", height: "100%" }}>
        <Image
          src={image + "?tr=w-800,q-80"}
          alt={alt || title}
          fill
          loading="lazy"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>

      <div className="project-card__overlay">
        <span
          style={{
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          {title}
        </span>
        {tagline && (
          <span
            style={{
              fontSize: "12px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.7)",
              marginTop: "4px",
              letterSpacing: "0.02em",
            }}
          >
            {tagline}
          </span>
        )}
      </div>
    </Link>
  );
}
