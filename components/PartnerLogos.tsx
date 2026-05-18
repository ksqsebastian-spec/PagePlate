"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/data/partners";

export default function PartnerLogos() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "64px 0",
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          opacity: 0.4,
          marginBottom: "36px",
        }}
      >
        Trusted by the best designers &amp; builders
      </h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
        {partners.map((partner) => (
          <div
            key={partner.name}
            style={{
              padding: "16px 28px",
              borderRight: "1px solid rgba(0,0,0,0.1)",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "0.04em",
                opacity: 0.6,
              }}
            >
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
