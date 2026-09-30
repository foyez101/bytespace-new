import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps): IconProps => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  ...props,
});

export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const BagIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 7h14v14H5z" />
    <path d="M9 10V5a3 3 0 0 1 6 0v5" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="m12 2.5 2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
  </svg>
);

export const LevelIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <rect x="4" y="13" width="3" height="7" rx="1" />
    <rect x="10.5" y="9" width="3" height="11" rx="1" />
    <rect x="17" y="4" width="3" height="16" rx="1" />
  </svg>
);

export const CheckCircleIcon = (p: IconProps) => (
  <svg {...base({ stroke: "none", ...p })}>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="m7.5 12.3 3 3 6-6.2" stroke="#fff" strokeWidth="2.2" fill="none" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const EyeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const EyeOffIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M10.6 5.1A10.5 10.5 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.6 6.6C3.8 8.5 2 12 2 12s3.6 7 10 7a9.7 9.7 0 0 0 5.4-1.6" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2M3 3l18 18" />
  </svg>
);

/* ---------- brand / social ---------- */

export const FacebookIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z" />
  </svg>
);

export const GoogleIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M21.8 10.2H12v4h5.6c-.5 2.6-2.7 4.3-5.6 4.3a6.5 6.5 0 1 1 4.2-11.5l3-3A10.5 10.5 0 1 0 12 22.5c5.8 0 10-4.1 10-10 0-.8 0-1.5-.2-2.3Z" />
  </svg>
);

/* ---------- learning-path categories ---------- */

export const DesignIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m4 20 3.5-1 11-11a1.9 1.9 0 0 0-2.7-2.7l-11 11L4 20Z" />
    <path d="m14 6 3 3" />
    <path d="M9 4 4 9l3 3M15 20l5-5-3-3" />
  </svg>
);

export const DevelopmentIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="6" y="2" width="12" height="20" rx="2.5" />
    <path d="m10 9-2 3 2 3M14 9l2 3-2 3" />
  </svg>
);

export const LaptopIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="5" width="16" height="11" rx="1.5" />
    <path d="M2 19h20" />
  </svg>
);

export const BusinessIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21h18M5 21V4h9v17M14 9h5v12" />
    <path d="M8 8h3M8 12h3M8 16h3M16.5 13h.5M16.5 17h.5" />
  </svg>
);

export const MarketingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13 17a4 4 0 0 1 4 4M13 13a8 8 0 0 1 8 8" />
    <path d="M3 5.5 7 3l2.5 4-2 1.5a8 8 0 0 0 4 4l1.5-2 4 2.5-2.5 4C8.5 17 3 11.5 3 5.5Z" />
  </svg>
);

export const CameraIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="15" rx="2" />
    <path d="M8 5 9.5 3h5L16 5" />
    <circle cx="12" cy="11.5" r="2.5" />
    <path d="M8 17c.8-1.5 2.2-2.2 4-2.2s3.2.7 4 2.2" />
  </svg>
);
