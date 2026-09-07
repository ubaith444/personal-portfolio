import type { ReactElement } from "react";

type OrgLogoProps = {
  org: string;
  size?: number;
};

const orgLogos: Record<string, ReactElement> = {
  Anthropic: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#D97757" />
      <path
        fill="#FFFFFF"
        d="M13.8 6.5h2.4L20 17.5h-2.5l-1.1-2.9h-4.8l-1.1 2.9H8L13.8 6.5zm1.8 6.2l-1.6-4.4-1.6 4.4h3.2zM4 17.5l4-11h2.5l-4 11H4z"
      />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M7.5 9h-2.5v8.5h2.5V9zm-1.2-3.8c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.6 1.4-1.4 0-.8-.6-1.4-1.4-1.4zM19 12.8c0-2.4-1.3-3.6-3-3.6-1.4 0-2 .8-2.4 1.4V9h-2.5c0 .7.1 8.5 0 8.5h2.5v-4.7c0-.3 0-.5.1-.7.2-.6.7-1.2 1.6-1.2 1.1 0 1.6.9 1.6 2.1v4.5H19v-4.9z"
      />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#232F3E" />
      <path
        fill="#FF9900"
        d="M18.7 15.5c-2.3 1.7-5.5 2.6-8.4 2.6-4.1 0-7.8-1.5-10.6-4-.2-.2 0-.5.2-.3 3 1.7 6.7 2.7 10.5 2.7 2.6 0 5.4-.7 7.9-2.1.4-.2.7.2.4.5zm1.5-1c-.3-.4-1.9-.2-2.7-.1-.2 0-.3-.2-.1-.3 1.2-.9 3.2-.6 3.5-.2.3.4-.1 2.4-1.2 3.4-.2.1-.3.1-.4 0-.1-.3.4-1.9.9-2.8z"
      />
      <path
        fill="#FFFFFF"
        d="M8.5 7.8c0 .8-.5 1.4-1.2 1.4-.8 0-1.3-.6-1.3-1.4 0-.8.5-1.4 1.3-1.4.7 0 1.2.6 1.2 1.4zm3.8 0c0 .8-.5 1.4-1.2 1.4-.8 0-1.3-.6-1.3-1.4 0-.8.5-1.4 1.3-1.4.7 0 1.2.6 1.2 1.4zm3.8 0c0 .8-.5 1.4-1.2 1.4-.8 0-1.3-.6-1.3-1.4 0-.8.5-1.4 1.3-1.4.7 0 1.2.6 1.2 1.4z"
      />
    </svg>
  ),
  Edunet: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#15803D" />
      <path
        fill="#FFFFFF"
        d="M12 4L3 8.5l9 4.5 9-4.5L12 4zm0 7l-7-3.5V14c0 3.5 3.1 6 7 6s7-2.5 7-6V7.5L12 11z"
      />
    </svg>
  ),
  Forage: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#1E293B" />
      <circle cx="12" cy="12" r="6" fill="#38BDF8" />
      <path fill="#FFFFFF" d="M10 8h4v2h-4V8zm0 3h4v2h-4v-2zm0 3h2.5v2H10v-2z" />
    </svg>
  ),
  IBM: (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#0F62FE" />
      <path
        fill="#FFFFFF"
        d="M5 7h4v1.2H5V7zm0 2.2h4v1.2H5V9.2zm0 2.2h4v1.2H5v-1.2zm0 2.2h4V15H5v-1.4zm0 2.2h4V17H5v-1.2zM10.5 7h4v1.2h-4V7zm0 2.2h4v1.2h-4V9.2zm0 2.2h4v1.2h-4v-1.2zm0 2.2h4V15h-4v-1.4zm0 2.2h4V17h-4v-1.2zM16 7h3v1.2h-3V7zm0 2.2h3v1.2h-3V9.2zm0 2.2h3v1.2h-3v-1.2zm0 2.2h3V15h-3v-1.4zm0 2.2h3V17h-3v-1.2z"
      />
    </svg>
  ),
  "HP LIFE": (
    <svg viewBox="0 0 24 24" width="100%" height="100%">
      <rect width="24" height="24" rx="4" fill="#0096D6" />
      <circle cx="12" cy="12" r="7" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
      <path
        fill="#FFFFFF"
        d="M9.5 9h1.8v2.4h2.2V9h1.8v6h-1.8v-2.2h-2.2V15H9.5V9z"
      />
    </svg>
  )
};

export function CertOrgLogo({ org, size = 32 }: OrgLogoProps) {
  let logoKey = "Anthropic";
  if (org.toLowerCase().includes("anthropic")) logoKey = "Anthropic";
  else if (org.toLowerCase().includes("linkedin")) logoKey = "LinkedIn";
  else if (org.toLowerCase().includes("aws")) logoKey = "AWS";
  else if (org.toLowerCase().includes("edunet")) logoKey = "Edunet";
  else if (org.toLowerCase().includes("forage")) logoKey = "Forage";
  else if (org.toLowerCase().includes("ibm")) logoKey = "IBM";
  else if (org.toLowerCase().includes("hp")) logoKey = "HP LIFE";

  const logo = orgLogos[logoKey] ?? orgLogos.Anthropic;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }}
      aria-label={org}
    >
      {logo}
    </div>
  );
}
