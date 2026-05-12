import Image from "next/image";

type Props = {
  rows: string[][];
};

const ROW_HEIGHT = 416;

export default function ProjectMosaic({ rows }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {rows.map((row, ri) => (
        <div
          key={ri}
          style={{
            display: "flex",
            gap: "2px",
            height: `${ROW_HEIGHT}px`,
          }}
        >
          {row.map((src, ci) => (
            <div
              key={ci}
              style={{
                position: "relative",
                flex: 1,
                overflow: "hidden",
              }}
            >
              <Image
                src={src}
                alt={`Project image ${ri}-${ci}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
