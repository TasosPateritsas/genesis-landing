import {
  Building2,
  CalendarDays,
  CreditCard,
  FileText,
  Globe,
  LayoutGrid,
  Mail,
  Map,
  MessageCircle,
  Route,
  Sailboat,
  Search,
  SlidersHorizontal,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  grid: LayoutGrid,
  document: FileText,
  building: Building2,
  mail: Mail,
  globe: Globe,
  map: Map,
  ship: Sailboat,
  message: MessageCircle,
  route: Route,
  search: Search,
  filter: SlidersHorizontal,
  card: CreditCard,
  calendar: CalendarDays,
};

export function FeatureIcon({ name }: { name: string }) {
  const Icon = ICONS[name] ?? LayoutGrid;
  return (
    <span className="case-icon">
      <Icon size={18} strokeWidth={1.8} aria-hidden />
    </span>
  );
}
