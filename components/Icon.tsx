import * as React from "react";
import {
  PawPrint,
  Heart,
  ShieldCheck,
  Calendar,
  Sparkles,
  Clock,
  AlertTriangle,
  Droplet,
  MessageSquare,
  Check,
  X,
  ArrowRight,
  Download,
  Play,
  Menu,
  Leaf,
  Dog,
  Lightbulb,
  Ban,
  Timer,
} from "lucide-react";

export type IconName =
  | "paw"
  | "tooth"
  | "heart"
  | "shield"
  | "calendar"
  | "sparkle"
  | "clock"
  | "alert"
  | "drop"
  | "chat"
  | "check"
  | "x"
  | "arrow-right"
  | "download"
  | "play"
  | "menu"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "leaf"
  | "puppy"
  | "dog"
  | "elder"
  | "lightbulb"
  | "ban"
  | "timer";

interface IconProps {
  name: IconName;
  size?: number;
  stroke?: number;
  style?: React.CSSProperties;
}

function Svg({
  size,
  stroke,
  children,
}: {
  size: number;
  stroke: number;
  children: React.ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export default function Icon({ name, size = 24, stroke = 1.6, style }: IconProps) {
  const p = { size, strokeWidth: stroke, style };

  switch (name) {
    case "paw":
      return <PawPrint {...p} />;
    case "heart":
      return <Heart {...p} />;
    case "shield":
      return <ShieldCheck {...p} />;
    case "calendar":
      return <Calendar {...p} />;
    case "sparkle":
      return <Sparkles {...p} />;
    case "clock":
      return <Clock {...p} />;
    case "alert":
      return <AlertTriangle {...p} />;
    case "drop":
      return <Droplet {...p} />;
    case "chat":
      return <MessageSquare {...p} />;
    case "check":
      return <Check {...p} />;
    case "x":
      return <X {...p} />;
    case "arrow-right":
      return <ArrowRight {...p} />;
    case "download":
      return <Download {...p} />;
    case "play":
      return <Play {...p} />;
    case "menu":
      return <Menu {...p} />;
    case "instagram":
      return (
        <Svg size={size} stroke={stroke}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1" fill="currentColor" strokeWidth={0} />
        </Svg>
      );
    case "youtube":
      return (
        <Svg size={size} stroke={stroke}>
          <rect x="2.5" y="5" width="19" height="14" rx="3" />
          <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" strokeWidth={0} />
        </Svg>
      );
    case "leaf":
      return <Leaf {...p} />;
    case "puppy":
    case "dog":
      return <Dog {...p} />;
    case "lightbulb":
      return <Lightbulb {...p} />;
    case "ban":
      return <Ban {...p} />;
    case "timer":
      return <Timer {...p} />;

    /* ── ícones sem equivalente no lucide ── */
    case "tooth":
      return (
        <Svg size={size} stroke={stroke}>
          <path d="M12 3c-2.5 0-4 1-5.5 1S4 4.8 4 7c0 3 1 5 1.8 7.5.4 1.4.6 3 .8 4.4.2 1.4 1 2.1 2 2.1s1.6-.9 1.9-2.6c.3-1.7.5-3 1.5-3s1.2 1.3 1.5 3c.3 1.7 1 2.6 1.9 2.6s1.8-.7 2-2.1c.2-1.4.4-3 .8-4.4C19 12 20 10 20 7c0-2.2-1-2-2.5-3S14.5 3 12 3z" />
        </Svg>
      );
    case "tiktok":
      return (
        <Svg size={size} stroke={stroke}>
          <path d="M14 4v10a4 4 0 1 1-4-4" />
          <path d="M14 4c0 2.5 2 4.5 4.5 4.5" />
        </Svg>
      );
    case "elder":
      return (
        <Svg size={size} stroke={stroke}>
          <circle cx="12" cy="9" r="4" />
          <path d="M5 20c1-4 4-6 7-6s6 2 7 6" />
          <path d="M9 7.5h.01M15 7.5h.01" />
        </Svg>
      );

    default:
      return null;
  }
}
