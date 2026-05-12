import Image from "next/image";
import type { Service } from "@/lib/data/services";

type Props = {
  service: Service;
};

export default function ServiceSection({ service }: Props) {
  return (
    <div
      style={{
        padding: "64px 0",
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Left: Title + description */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-body), Barlow, sans-serif",
              fontSize: "clamp(20px, 2vw, 28px)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: "480px",
              opacity: 0.8,
            }}
          >
            {service.description}
          </p>
        </div>

        {/* Right: 2x2 image grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
          }}
        >
          {service.images.slice(0, 4).map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "1",
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt={`${service.title} ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
