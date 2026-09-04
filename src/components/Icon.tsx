import type { IconName } from "../types/content";

interface IconProps {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 18 }: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    focusable: false,
  } as const;

  if (name === "github") {
    return (
      <svg {...commonProps} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .6a11.4 11.4 0 0 0-3.61 22.21c.57.1.78-.25.78-.55v-2.16c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.35.95.1-.74.4-1.24.73-1.52-2.53-.29-5.19-1.27-5.19-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.94 10.94 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.35-5.21 5.64.41.36.78 1.06.78 2.14v3.18c0 .3.21.66.79.55A11.4 11.4 0 0 0 12 .6Z" />
      </svg>
    );
  }

  if (name === "blog") {
    return (
      <svg {...commonProps}>
        <path d="M5 4.5h9.5L19 9v10.5H5V4.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M14 4.5V9h5M8 12h8M8 15.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "discord") {
    return (
      <svg {...commonProps}>
        <path d="M18.9 5.15A16.1 16.1 0 0 0 15 3.94l-.48.98a14.83 14.83 0 0 0-5.04 0L9 3.94c-1.4.25-2.7.66-3.9 1.21-2.46 3.7-3.13 7.3-2.8 10.85a15.96 15.96 0 0 0 4.8 2.42l1.16-1.57c-.64-.23-1.25-.52-1.82-.86l.45-.35c3.5 1.63 7.72 1.63 11.18 0l.46.35c-.58.35-1.19.64-1.83.87l1.16 1.56a15.9 15.9 0 0 0 4.81-2.42c.4-4.12-.67-7.69-2.77-10.85Z" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
        <circle cx="8.8" cy="12.2" r="1.15" fill="currentColor" />
        <circle cx="15.2" cy="12.2" r="1.15" fill="currentColor" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...commonProps}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="m4.5 7 7.5 5.7L19.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg {...commonProps}>
        <path d="m12 3 1.15 5.85L19 10l-5.85 1.15L12 17l-1.15-5.85L5 10l5.85-1.15L12 3ZM19.2 16.2l.55 2.75 2.75.55-2.75.55-.55 2.75-.55-2.75-2.75-.55 2.75-.55.55-2.75Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
