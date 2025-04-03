import {
  Settings2,
  Globe,
  Laptop,
  Server,
  Building2,
  PaintRoller,
} from "lucide-react";

export const categories = [
  { id: "all", name: "All Templates", icon: <Settings2 className="w-5 h-5" /> },
  { id: "web", name: "Web Apps", icon: <Globe className="w-5 h-5" /> },
  { id: "front", name: "Frontend", icon: <PaintRoller className="w-5 h-5" /> },
  { id: "backend", name: "Backend", icon: <Server className="w-5 h-5" /> },
  { id: "mobile", name: "Mobile", icon: <Laptop className="w-5 h-5" /> },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: <Building2 className="w-5 h-5" />,
  },
];
