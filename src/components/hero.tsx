import { ArrowUpRight, MapPin } from "lucide-react";

interface HeroProps {
  onExploreMenu: () => void;
  onFindUs: () => void;
}

const featuredItems = [
  {
    name: "House Latte",
    description: "Silky espresso, steamed milk",
    image: "/images/menu-latte.jpg",
  },
  {
    name: "Butter Croissant",
    description: "Freshly baked, golden and flaky",
    image: "/images/menu-croissant.jpg",
  },
  {
    name: "Elior Breakfast",
    description: "A little bit of everything",
    image: "/images/menu-breakfast.jpg",
  },
  {
    name: "Seasonal Tart",
    description: "Made fresh with the season",
    image: "/images/menu-tart.jpg",
  },
];

const locations = [
  {
    name: "Elior · Bandra",
    address: "Bandra West, Mumbai",
    image: "/images/elior-cafe-1.jpg",
  },
  {
    name: "Elior · Lower Parel",
    address: "Lower Parel, Mumbai",
    image: "/images/elior-cafe-2.jpg",
  },
];

const arrowClass =
  "transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

export default function Hero({
  onExploreMenu,
  onFindUs,
}: HeroProps) {
  return (
    <div className="bg-[#F5EFE6] text-[#2C211C]">

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-[#DCCBBC]">
        <img
          src="/images/elior-bg1.png"
          alt="Elior café counter with coffee, food, desserts and drinks"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#F5EFE6]/10" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#2C211C]/10 via-[#2C211C]/10 to-[#2C211C]/35" />

        <div
          className="absolute left-1/2 top-10 z-10 -translate-x-1/2
            whitespace-nowrap text-[11px] uppercase tracking-[0.32em]
            text-[#F8F1E8]/90
            [text-shadow:0_1px_5px_rgba(44,33,28,0.65)]"
        >
          Coffee · Kitchen · All day
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <h1
            className="-translate-y-10 text-center font-serif text-6xl
              leading-[0.82] tracking-[-0.04em] text-[#F8F1E8]
              drop-shadow-[0_3px_8px_rgba(44,33,28,0.45)]
              [-webkit-text-stroke:0.35px_rgba(44,33,28,0.35)]
              sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            Stay for
            <br />
            a little
            <br />
            <span className="italic">longer.</span>
          </h1>
        </div>
      </section>

      {/* Featured menu */}
      <section className="px-6 pb-14 pt-10 sm:px-10 lg:px-20 lg:pb-20 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#A8754F]">
              From the counter
            </p>

            <h2 className="mt-3 whitespace-nowrap font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
              A few of our favourites.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-6">
            {featuredItems.map((item) => (
              <article key={item.name} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-[#E3D6C8]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform
                      duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-serif text-2xl">{item.name}</h3>
                  <p className="mt-1 text-sm text-[#2C211C]/55">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={onExploreMenu}
              className="group flex items-center gap-3 border-b
                border-[#2C211C] pb-2 text-sm font-semibold
                uppercase tracking-[0.12em] transition-all
                duration-300 hover:gap-5"
            >
              Explore the full menu

              <ArrowUpRight size={17} strokeWidth={1.7} className={arrowClass} />
            </button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section
        className="border-t border-[#2C211C]/10 bg-[#E4D8CA]
          px-6 py-14 sm:px-10 lg:px-20 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#A8754F]">
              Come by
            </p>

            <h2 className="mt-3 whitespace-nowrap font-serif text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Find us around town.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {locations.map((location) => (
              <article key={location.name} className="group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="h-full w-full object-cover transition-transform
                      duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C211C]/65 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 text-[#F8F1E8]">
                    <div className="flex items-center gap-2">
                      <MapPin size={15} strokeWidth={1.6} />
                      <h3 className="font-serif text-2xl">
                        {location.name}
                      </h3>
                    </div>

                    <p className="mt-1 pl-5 text-sm text-[#F8F1E8]/80">
                      {location.address}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <button
              onClick={onFindUs}
              className="group flex items-center gap-3 rounded-full
                border border-[#2C211C]/20 bg-[#F5EFE6]
                px-6 py-3 text-sm font-semibold uppercase
                tracking-[0.12em] shadow-sm transition-all
                duration-300 hover:bg-[#2C211C] hover:text-[#F5EFE6]"
            >
              Find our locations

              <ArrowUpRight size={17} strokeWidth={1.7} className={arrowClass} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}