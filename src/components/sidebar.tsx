import { useEffect } from "react";
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
  { label: "Home", icon: <HomeIcon size={18} strokeWidth={1.5} />, view: "home" as View },
  { label: "Menu", icon: <Coffee size={18} strokeWidth={1.5} />, view: "menu" as View },
  { label: "About", icon: <Info size={18} strokeWidth={1.5} />, view: "about" as View },
  { label: "Contact", icon: <MapPin size={18} strokeWidth={1.5} />, view: "contact" as View },
];

const socials = [
  { label: "Instagram", icon: "◎", url: "https://www.instagram.com/" },
  { label: "Facebook", icon: "f", url: "https://www.facebook.com/" },
  { label: "Zomato", icon: "Z", url: "https://www.zomato.com/" },
];

const Logo = ({ full = false }: { full?: boolean }) => (
  <img
    src={full ? "/logo1.png" : "/logo2.png"}
    alt="Elior"
    className={full ? "w-[60px] h-auto" : "size-7 object-contain"}
  />
);

export default function Sidebar({
  activeView,
  menuOpen,
  onNavigate,
  onToggle,
}: SidebarProps) {
  const mobileNavigate = (view: View) => {
    onNavigate(view);
    if (menuOpen) onToggle();
  };

  useEffect(() => {
    if (!menuOpen) return;

    const handleOutsideClick = (e: PointerEvent) => {
      if (
        window.innerWidth < 768 &&
        !(e.target as HTMLElement).closest("[data-mobile-navbar]")
      ) {
        onToggle();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () => document.removeEventListener("pointerdown", handleOutsideClick);
  }, [menuOpen, onToggle]);

  return (
    <>
      {/* DESKTOP */}
      <aside
        className={`fixed left-0 top-0 z-50 hidden h-screen flex-col bg-[#E8DDD0] transition-[width] duration-500 md:flex ${
          menuOpen ? "w-[230px]" : "w-[88px]"
        }`}
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[18px] translate-x-full"
          style={{
            background:
              "linear-gradient(to right, rgba(156, 139, 130, 0.12), transparent)",
          }}
        />

        {/* Logo */}
        <div className="flex h-[104px] items-center justify-center border-b border-[#2C211C]/10">
          <button
            onClick={() => onNavigate("home")}
            aria-label="Go to home"
          >
            <Logo full={menuOpen} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center gap-9">
            {navItems.map((item) => {
              const active = activeView === item.view;

              return (
                <button
                  key={item.view}
                  onClick={() => onNavigate(item.view)}
                  aria-label={item.label}
                  className={`group relative flex items-center justify-center transition-colors ${
                    active
                      ? "text-[#2C211C]"
                      : "text-[#2C211C]/45 hover:text-[#2C211C]"
                  }`}
                >
                  {menuOpen ? (
                    <span
                      className={`relative pb-1.5 ${
                        active ? "text-[17px] font-medium" : "text-sm"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[#A8754F] transition-all ${
                          active ? "w-full" : "w-0 group-hover:w-1/2"
                        }`}
                      />
                    </span>
                  ) : (
                    <span className={active ? "scale-110" : ""}>
                      {item.icon}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Socials */}
        <div className="border-t border-[#2C211C]/10 px-4 py-6">
          <div
            className={`flex items-center ${
              menuOpen ? "justify-center gap-6" : "flex-col gap-5"
            }`}
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-sm font-medium text-[#2C211C]/50 transition hover:text-[#2C211C]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Expand / Collapse */}
        <button
          onClick={onToggle}
          aria-label={menuOpen ? "Collapse sidebar" : "Expand sidebar"}
          className="absolute -right-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#2C211C]/10 bg-[#E8DDD0] text-[#2C211C] transition hover:scale-105"
        >
          {menuOpen ? <X size={15} /> : <MenuIcon size={15} />}
        </button>
      </aside>

      {/* MOBILE */}
      <header
        data-mobile-navbar
        className="fixed inset-x-0 top-0 z-50 bg-[#E8DDD0] md:hidden"
      >
        <div className="relative flex h-[72px] items-center border-b border-[#2C211C]/10 px-5">
          {/* Home = full logo, other sections = symbol */}
          <button
            onClick={() => mobileNavigate("home")}
            aria-label="Go to home"
          >
            <Logo full={activeView === "home"} />
          </button>

          {activeView === "menu" && (
            <span className="absolute left-1/2 -translate-x-1/2 font-serif text-xl text-[#2C211C]">
              Menu
            </span>
          )}

          <button
            onClick={onToggle}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="ml-auto flex size-10 items-center justify-center text-[#2C211C]"
          >
            {menuOpen ? <X size={21} /> : <MenuIcon size={21} />}
          </button>

          <div
            className="pointer-events-none absolute left-0 top-full h-3 w-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(44,33,28,.08), transparent)",
            }}
          />
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
            menuOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center px-6 py-7">
            <div className="flex flex-col items-center gap-5">
              {navItems.map((item) => {
                const active = activeView === item.view;

                return (
                  <button
                    key={item.view}
                    onClick={() => mobileNavigate(item.view)}
                    className={`flex items-center gap-4 transition-colors ${
                      active
                        ? "text-[#2C211C]"
                        : "text-[#2C211C]/50 hover:text-[#2C211C]"
                    }`}
                  >
                    <span
                      className={
                        active
                          ? "text-[#A8754F]"
                          : "text-[#2C211C]/40"
                      }
                    >
                      {item.icon}
                    </span>
                    <span className={active ? "font-medium" : ""}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile socials */}
            <div className="mt-7 w-full border-t border-[#2C211C]/10 pt-5">
              <div className="flex justify-center gap-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-sm font-medium text-[#2C211C]/50 transition hover:text-[#2C211C]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}