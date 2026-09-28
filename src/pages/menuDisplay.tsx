import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { menuCategories, menuItems } from "../components/menuData";
import DrinkBuilder from "../components/drinkBuilder";

type Category = (typeof menuCategories)[number];

export default function MenuDisplay() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");
  const [showBuilder, setShowBuilder] = useState(false);

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  if (showBuilder) {
    return (
      <section className="min-h-screen bg-[#E4D8CA] px-8 py-16 lg:px-16 lg:py-20">
        <DrinkBuilder onBack={() => setShowBuilder(false)} />
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#E4D8CA] px-8 lg:px-16">
      {/* Sticky Menu / Filters */}
      <div className="sticky top-0 z-20 -mx-8 flex h-26 items-center border-b border-[#2C211C]/10 bg-[#E4D8CA]/95 px-8 backdrop-blur-sm lg:-mx-16 lg:px-16">
        {/* Filters */}
        <div className="flex items-center gap-8">
          {menuCategories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className={`relative shrink-0 text-sm transition-colors ${
                  isActive
                    ? "font-medium text-[#2C211C]"
                    : "text-[#2C211C]/45 hover:text-[#2C211C]"
                }`}
              >
                {category}

                <span
                  aria-hidden="true"
                  className={`absolute -bottom-2 left-0 right-0 h-px bg-[#2C211C] transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Center — Menu */}
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-3xl tracking-tight text-[#2C211C]">
          Menu
        </h2>

        {/* Custom Drink */}
        <button
          type="button"
          onClick={() => setShowBuilder(true)}
          className="ml-auto flex shrink-0 items-center gap-2 text-sm font-medium text-[#A8754F] transition-colors hover:text-[#2C211C]"
        >
          Make your own drink

          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Menu Grid */}
      <div className="grid gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <article
            key={item.name}
            className="group overflow-hidden bg-[#EFE5DA]"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <span className="absolute left-5 top-5 bg-[#EFE5DA]/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#2C211C]">
                {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-3xl text-[#2C211C]">
                    {item.name}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#2C211C]/55">
                    {item.description}
                  </p>
                </div>

                <span className="shrink-0 text-sm font-medium text-[#2C211C]">
                  ₹{item.price}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}