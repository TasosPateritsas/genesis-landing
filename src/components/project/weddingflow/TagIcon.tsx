import {
  Calendar,
  FileText,
  Grid3x3,
  Heart,
  LayoutDashboard,
  MessageSquare,
  Star,
  TableProperties,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { WeddingflowTagIcon } from "@/data/projectTypes";

const ICONS: Record<WeddingflowTagIcon, LucideIcon> = {
  overview: LayoutDashboard,
  requests: FileText,
  messages: MessageSquare,
  calendar: Calendar,
  saved: Heart,
  guests: Users,
  seating: Grid3x3,
  reviews: Star,
  halls: TableProperties,
  profile: User,
};

export function TagIcon({ name }: { name: WeddingflowTagIcon }) {
  const Icon = ICONS[name];
  return <Icon size={14} strokeWidth={1.75} aria-hidden />;
}
