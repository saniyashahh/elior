import { useState } from "react";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

interface HeroProps {
  onExploreMenu: () => void;
  onFindUs: () => void;
}

const featuredItems = [
  {
    name: "Iced Latte",
    description: "Chilled espresso, fresh milk and plenty of ice.",
    image: "/menu/iced-latte.png",
  },
  {
    name: "Butter Croissant",
    description: "Freshly baked, golden and flaky",
    image: "/menu/butter-croissant.png",
  },
  {
    name: "Elior Breakfast",
    description: "A little bit of everything",
    image: "/menu/elior-breakfast.png",
  },
  {
    name: "Cappuccino",
    description: "Espresso, steamed milk and a soft layer of foam.",
    image: "/menu/cappuccino.png",
  },
];

const locations = [
  {
    name: "Elior · Bandra",
    address: "Bandra West, Mumbai",
    hours: "8:00 AM – 11:00 PM",
    phone: "+91 98765 43210",
    image: "/images/cafes/bandra1.png",
  },
  {
    name: "Elior · Fort",
    address: "Fort, Mumbai",
    hours: "8:00 AM – 11:00 PM",
    phone: "+91 98765 43211",
    image: "/images/cafes/fort1.png",
  },
];

const arrow =
  "transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

export default function Hero({
  onExploreMenu,
  onFindUs,
}: HeroProps) {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const handleLocationClick = (locationName: string) => {
    if (window.innerWidth < 768) {
      setActiveLocation((current) =>
        current === locationName ? null : locationName
      );
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-clip bg-[#F5EFE6] text-[#2C211C]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#DCCBBC] sm:min-h-screen">
        <img
          src="/images/elior-bg1.png"
          alt="Elior café counter"
          className="block w-full max-w-full sm:absolute sm:inset-0 sm:h-full sm:object-cover"
        />

        <div className="absolute inset-0 bg-[#F5EFE6]/10" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#2C211C]/10 via-[#2C211C]/10 to-[#2C211C]/35" />

        <h1
          className="absolute inset-0 flex items-center justify-center px-4 text-center
            font-serif text-[2.35rem] leading-[0.82] tracking-[-0.045em]
            text-[#F8F1E8] drop-shadow-[0_2px_6px_rgba(44,33,28,0.45)]
            [-webkit-text-stroke:0.25px_rgba(44,33,28,0.35)]
            sm:-translate-y-8 sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          <span>
            Stay for
            <br />
            a little
            <br />
            <i>longer.</i>
          </span>
        </h1>

        <p
          className="absolute left-1/2 top-10 hidden -translate-x-1/2
            whitespace-nowrap text-[11px] uppercase tracking-[0.32em]
            text-[#F8F1E8]/90 [text-shadow:0_1px_5px_rgba(44,33,28,0.65)]
            sm:block"
        >
          Coffee · Kitchen · All day
        </p>
      </section>

      {/* Featured */}
      <section className="px-4 py-8 sm:px-10 sm:py-14 lg:px-18">
        <div className="mx-auto max-w-7xl">
          <header className="mb-5 sm:mb-8">
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#A8754F] sm:text-[11px]">
              From the counter
            </p>

            <h2 className="mt-2 font-serif text-[2rem] leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              A few of our favourites.
            </h2>
          </header>

          <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-4 lg:grid-cols-4 lg:gap-6">
            {featuredItems.map((item) => (
              <article
                key={item.name}
                className="group min-w-0"
              >
                <div className="aspect-[5/4] overflow-hidden bg-[#E3D6C8] sm:aspect-[4/5]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-2 sm:mt-4">
                  <h3 className="font-serif text-[15px] leading-tight sm:text-2xl">
                    {item.name}
                  </h3>

                  <p className="mt-0.5 text-[10px] leading-[1.35] text-[#2C211C]/55 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-7 flex justify-center sm:mt-12">
            <button
              onClick={onExploreMenu}
              className="group flex items-center gap-2 border-b border-[#2C211C]
                pb-1.5 text-[9px] font-semibold uppercase tracking-[0.1em]
                transition-all duration-300 hover:gap-4 sm:gap-3 sm:pb-2 sm:text-sm"
            >
              Explore the full menu

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className={arrow}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-[#2C211C]/10 bg-[#E4D8CA] px-4 py-8 sm:px-10 sm:py-14 lg:px-18">
        <div className="mx-auto max-w-7xl">
          <header className="mb-5 sm:mb-8">
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#A8754F] sm:text-[11px]">
              Come by
            </p>

            <h2 className="mt-2 font-serif text-[2rem] leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Find us around town.
            </h2>
          </header>

          <div className="grid gap-3 sm:gap-5 md:grid-cols-2">
            {locations.map((location) => {
              const isActive =
                activeLocation === location.name;

              return (
                <article
                  key={location.name}
                  onClick={() =>
                    handleLocationClick(location.name)
                  }
                  className="group min-w-0 cursor-pointer overflow-hidden md:cursor-default"
                >
                  <div className="relative aspect-[16/8] overflow-hidden sm:aspect-[16/10]">
                    {/* Image */}
                    <img
                      src={location.image}
                      alt={location.name}
                      className={`h-full w-full object-cover transition-all duration-700
                        ${
                          isActive
                            ? "scale-[1.03] brightness-[0.55]"
                            : "group-hover:scale-[1.03] group-hover:brightness-[0.6]"
                        }`}
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 transition-all duration-500
                        ${
                          isActive
                            ? "bg-[#2C211C]/45"
                            : "bg-gradient-to-t from-[#2C211C]/65 via-transparent to-transparent group-hover:bg-[#2C211C]/35"
                        }`}
                    />

                    {/* Center details */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center
                        px-6 text-center text-[#F8F1E8] transition-all duration-500
                        ${
                          isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      <div>
                        <div
                          className="flex flex-col items-center gap-2.5
                            text-[10px] uppercase tracking-[0.12em]
                            sm:text-xs"
                        >
                          <span className="flex items-center gap-2">
                            <Clock
                              size={13}
                              strokeWidth={1.5}
                            />
                            {location.hours}
                          </span>

                          <span className="flex items-center gap-2">
                            <Phone
                              size={13}
                              strokeWidth={1.5}
                            />
                            {location.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Location name */}
                    <div
                      className={`absolute bottom-3 left-3 text-[#F8F1E8]
                        transition-opacity duration-300
                        sm:bottom-6 sm:left-6
                        ${
                          isActive
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <MapPin
                          size={12}
                          strokeWidth={1.6}
                        />

                        <h3 className="font-serif text-base sm:text-2xl">
                          {location.name}
                        </h3>
                      </div>

                      <p className="mt-0.5 pl-4 text-[9px] text-[#F8F1E8]/80 sm:text-sm">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-7 flex justify-center sm:mt-12">
            <button
              onClick={onFindUs}
              className="group flex items-center gap-2 rounded-full border border-[#2C211C]/20 
              bg-[#2C211C] text-[#F5EFE6] px-4 py-2 text-[9px] font-semibold uppercase
              tracking-[0.1em] shadow-sm transition-all duration-300
              hover:bg-[#F5EFE6] hover:text-[#2C211C]
              sm:gap-3 sm:px-6 sm:py-3 sm:text-sm"
            >
              Our locations

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className={arrow}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}