import { partners } from "@/lib/data/partners";

export default function PartnerLogos() {
  return (
    <section
      style={{
        padding: "64px 0",
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-body), Barlow, sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          opacity: 0.4,
          marginBottom: "36px",
        }}
      >
        Trusted by WA&apos;s best designers &amp; builders
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0",
        }}
      >
        {partners.map((partner) => (
          <div
            key={partner.name}
            style={{
              padding: "16px 28px",
              borderRight: "1px solid rgba(0,0,0,0.1)",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            {partner.url && partner.url !== "#" ? (
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-body), Barlow, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  color: "#000",
                  opacity: 0.6,
                  transition: "opacity 0.15s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.6")
                }
              >
                {partner.name}
              </a>
            ) : (
              <span
                style={{
                  fontFamily: "var(--font-body), Barlow, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  opacity: 0.6,
                }}
              >
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
