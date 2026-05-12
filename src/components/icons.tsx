import { SVGProps } from "react";

/* Marvell logo — stylized M mark */
export function MarvellLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      fill="none"
      viewBox="0 0 16 14"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 14H0V0h4l4 7 4-7h4v14h-4V7l-4 7-4-7z"
        opacity="0.2"
      />
      <path
        fill="currentColor"
        d="M14.25 0h-.5v14h.5zM16 0h-.5v14h.5zM.5 0H0v14h.5zM2.25 0h-.5v14h.5zM8 7l.222.389L12 1v2L8.889 8.556zM4 0h-.5v14H4V7l4 7 .25-.389L4 6V4l4.889 8.445.222-.389L4 3V1l5.778 9.89L12 7v7h.5V0H12zm4-1-2.222 4-.667-1.056L12 4z"
      />
    </svg>
  );
}

/* Arrow right — used for "→ Project Details" anchor */
export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Arrow down — scroll indicator in hero */
export function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8 3v10M4 9l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Instagram icon */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

/* Facebook icon */
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/* Chevron down — submenu indicator */
export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      {...props}
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
