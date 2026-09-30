import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  SlidersHorizontal,
} from "lucide-react";
import { menuCategories, menuItems } from "../components/menuData";
import DrinkBuilder from "../components/drinkBuilder";

type Category = (typeof menuCategories)[number];

export default function MenuDisplay() {
  const [category, setCategory] = useState<Category>("All");
  const [controlsOpen, setControlsOpen] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);
  const controlsRef = useRef<HTMLDivElement>(null);

  const items =
    category === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (
        controlsRef.current &&
        !controlsRef.current.contains(event.target as Node)
      ) {
        setControlsOpen(false);
      }
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selectCategory = (value: Category) => {
    setCategory(value);
    setControlsOpen(false);
  };

  const openBuilder = () => {
    setControlsOpen(false);
    setBuilderOpen(true);
  };

  if (builderOpen) {
    return (
      <section className="min-h-screen bg-[#E4D8CA] px-5 py-10 sm:px-8 lg:px-16 lg:py-20">
        <DrinkBuilder onBack={() => setBuilderOpen(false)} />
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#E4D8CA] px-5 sm:px-8 lg:px-16">
      {/* Desktop header */}
      <header className="sticky top-0 z-30 -mx-5 hidden h-26 items-center border-b border-[#2C211C]/10 bg-[#E4D8CA]/95 px-5 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:-mx-16 lg:flex lg:px-16">
        <nav className="flex items-center gap-8">
          {menuCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`relative text-sm transition-colors ${
                category === item
                  ? "font-medium text-[#2C211C]"
                  : "text-[#2C211C]/45 hover:text-[#2C211C]"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-2 left-0 right-0 h-px bg-[#2C211C] transition-opacity ${
                  category === item ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-3xl text-[#2C211C]">
          Menu
        </h2>

        <button
          type="button"
          onClick={() => setBuilderOpen(true)}
          className="ml-auto flex items-center gap-2 text-sm font-medium text-[#A8754F] transition-colors hover:text-[#2C211C]"
        >
          Make your own drink
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </button>
      </header>

      {/* Menu */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-3 py-5 sm:gap-5 sm:py-7 lg:grid-cols-4 lg:gap-6 lg:py-8">
        {items.map((item) => (
          <article
            key={item.name}
            className="min-w-0 overflow-hidden bg-[#EFE5DA]"
          >
            <div className="aspect-square overflow-hidden sm:aspect-[4/3]">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="p-3 sm:p-4 lg:p-5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="min-w-0 truncate font-serif text-base leading-tight text-[#2C211C] sm:text-lg lg:text-xl">
                  {item.name}
                </h3>

                <span className="shrink-0 text-[10px] font-medium text-[#2C211C] sm:text-xs lg:text-sm">
                  ₹{item.price}
                </span>
              </div>

              <p className="mt-1.5 hidden text-xs leading-relaxed text-[#2C211C]/55 lg:block">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile / tablet controls */}
      <div
        ref={controlsRef}
        className="fixed bottom-5 right-5 z-50 lg:hidden sm:bottom-7 sm:right-7"
      >
        {controlsOpen && (
          <div className="absolute bottom-[calc(100%+10px)] right-0 w-52 border border-[#2C211C]/10 bg-[#EFE5DA]/95 p-2 shadow-[0_12px_35px_rgba(44,33,28,0.12)] backdrop-blur-md">
            <p className="px-3 pb-2 pt-1 text-[8px] uppercase tracking-[0.2em] text-[#2C211C]/40">
              Filter menu
            </p>

            {menuCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => selectCategory(item)}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-[11px] transition-colors ${
                  category === item
                    ? "bg-[#E4D8CA] font-medium text-[#2C211C]"
                    : "text-[#2C211C]/60 hover:bg-[#E4D8CA]/60"
                }`}
              >
                {item}

                {category === item && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A8754F]" />
                )}
              </button>
            ))}

            <div className="my-2 border-t border-[#2C211C]/10" />

            <button
              type="button"
              onClick={openBuilder}
              className="flex w-full items-center justify-between px-3 py-2.5 text-left text-[11px] font-medium text-[#A8754F] transition-colors hover:bg-[#E4D8CA]/60 hover:text-[#2C211C]"
            >
              Customize your drink
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setControlsOpen((open) => !open)}
          aria-expanded={controlsOpen}
          aria-label={controlsOpen ? "Close menu controls" : "Open menu controls"}
          className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-[#2C211C]/10 bg-[#EFE5DA]/90 text-[#2C211C] shadow-[0_6px_20px_rgba(44,33,28,0.10)] backdrop-blur-md transition-all duration-200 hover:bg-[#EFE5DA] sm:h-11 sm:w-11 ${
            controlsOpen ? "rotate-180" : ""
          }`}
        >
          <SlidersHorizontal
            size={15}
            strokeWidth={1.5}
          />

          {category !== "All" && (
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#A8754F]" />
          )}
        </button>
      </div>
    </section>
  );
}