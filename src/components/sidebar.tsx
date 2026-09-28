import {
  Coffee,
  Home as HomeIcon,
  Info,
  MapPin,
  Menu as MenuIcon,
  X,
} from "lucide-react";

type View = "home" | "menu" | "about" | "contact";

interface SidebarProps {
  activeView: View;
  menuOpen: boolean;
  onNavigate: (view: View) => void;
  onToggle: () => void;
}

const navItems = [
  {
    label: "Home",
    icon: <HomeIcon size={18} strokeWidth={1.5} />,
    view: "home" as View,
  },
  {
    label: "Menu",
    icon: <Coffee size={18} strokeWidth={1.5} />,
    view: "menu" as View,
  },
  {
    label: "About",
    icon: <Info size={18} strokeWidth={1.5} />,
    view: "about" as View,
  },
  {
    label: "Contact",
    icon: <MapPin size={18} strokeWidth={1.5} />,
    view: "contact" as View,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: "◎",
  },
  {
    label: "Facebook",
    icon: "f",
  },
  {
    label: "Zomato",
    icon: "Z",
  },
];

export default function Sidebar({
  activeView,
  menuOpen,
  onNavigate,
  onToggle,
}: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-[#2C211C]/10 bg-[#E8DDD0] transition-all duration-500 ${
        menuOpen ? "w-[230px]" : "w-[88px]"
      }`}
    >
      {/* Brand */}
      <div className="flex h-[104px] items-center justify-center border-b border-[#2C211C]/10">
        <button
          onClick={() => onNavigate("home")}
          className={`font-serif tracking-tight transition-all duration-500 ${
            menuOpen
              ? "text-3xl"
              : "rotate-[-90deg] whitespace-nowrap text-xl"
          }`}
          aria-label="Go to home"
        >
          Elior
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-9">
          {navItems.map((item) => (
            <NavItem
              key={item.view}
              label={item.label}
              icon={item.icon}
              active={activeView === item.view}
              expanded={menuOpen}
              onClick={() => onNavigate(item.view)}
            />
          ))}
        </div>
      </nav>

      {/* Social Links */}
      <div className="border-t border-[#2C211C]/10 px-4 py-6">
        <div
          className={`flex items-center ${
            menuOpen
              ? "flex-row justify-center gap-6"
              : "flex-col gap-5"
          }`}
        >
          {socialLinks.map((social) => (
            <button
              key={social.label}
              type="button"
              aria-label={social.label}
              className="group text-[#2C211C]/50 transition-colors hover:text-[#2C211C]"
            >
              <span className="block text-sm font-medium transition-transform duration-300 group-hover:scale-110">
                {social.icon}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Expand / Collapse */}
      <button
        type="button"
        onClick={onToggle}
        className="absolute -right-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#2C211C]/10 bg-[#E8DDD0] transition-transform duration-300 hover:scale-105"
        aria-label={menuOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {menuOpen ? (
          <X size={15} strokeWidth={1.7} />
        ) : (
          <MenuIcon size={15} strokeWidth={1.7} />
        )}
      </button>
    </aside>
  );
}

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  expanded: boolean;
  onClick: () => void;
}

function NavItem({
  label,
  icon,
  active,
  expanded,
  onClick,
}: NavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`group relative flex items-center justify-center transition-colors duration-300 ${
        active
          ? "text-[#2C211C]"
          : "text-[#2C211C]/45 hover:text-[#2C211C]"
      }`}
    >
      {expanded ? (
        <span
          className={`relative pb-1.5 transition-all duration-300 ${
            active ? "text-[17px] font-medium" : "text-sm"
          }`}
        >
          {label}

          <span
            className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[#A8754F] transition-all duration-300 ${
              active ? "w-full" : "w-0 group-hover:w-1/2"
            }`}
          />
        </span>
      ) : (
        <span
          className={`transition-transform duration-300 ${
            active ? "scale-110" : ""
          }`}
        >
          {icon}
        </span>
      )}
    </button>
  );
}