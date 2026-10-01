import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Mail,
  Phone,
} from "lucide-react";

const locations = [
  {
    name: "Elior · Bandra",
    city: "Mumbai, Maharashtra",
    address: "14 Pali Hill, Bandra West, Mumbai",
    phone: "+91 12345 67890",
    hours: "8:00 AM — 10:00 PM",
    images: ["bandra1.png", "bandra2.png", "bandra3.png", "bandra4.png"],
  },
  {
    name: "Elior · Fort",
    city: "Mumbai, Maharashtra",
    address: "28 Kala Ghoda, Fort, Mumbai",
    phone: "+91 12345 67890",
    hours: "8:00 AM — 9:30 PM",
    images: ["fort1.png", "fort2.png", "fort3.png", "fort4.png"],
  },
  {
    name: "Elior · Indiranagar",
    city: "Bengaluru, Karnataka",
    address: "12th Main Road, Indiranagar, Bengaluru",
    phone: "+91 12345 67890",
    hours: "8:00 AM — 10:00 PM",
    images: [
      "indiranagar1.png",
      "indiranagar2.png",
      "indiranagar3.png",
      "indiranagar4.png",
    ],
  },
  {
    name: "Elior · Koregaon Park",
    city: "Pune, Maharashtra",
    address: "North Main Road, Koregaon Park, Pune",
    phone: "+91 12345 67890",
    hours: "8:00 AM — 10:00 PM",
    images: [
      "koregaon-park1.png",
      "koregaon-park2.png",
      "koregaon-park3.png",
    ],
  },
];

const iconClass = "shrink-0 text-[#A8754F]";

function CafeGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [current, setCurrent] = useState(0);

  const changeImage = (direction: number) =>
    setCurrent((current + direction + images.length) % images.length);

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DDD0] sm:aspect-[16/10]">
      <img
        src={`/images/cafes/${images[current]}`}
        alt={`${name} - photo ${current + 1}`}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
        {[
          { direction: -1, icon: ArrowLeft, label: "Previous" },
          { direction: 1, icon: ArrowRight, label: "Next" },
        ].map(({ direction, icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            onClick={() => changeImage(direction)}
            aria-label={`${label} image for ${name}`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C211C]/55 text-white backdrop-blur-sm transition-colors hover:bg-[#2C211C]/75"
          >
            <Icon size={15} strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="bg-[#F5EFE6] text-[#2C211C]">
      <header className="px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 lg:px-20 lg:pb-14 lg:pt-18">
        <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#A8754F] sm:mb-5 sm:text-xs">
          Find us
        </p>

        <h1 className="max-w-5xl font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
          There's always a table for you.
        </h1>
      </header>

      <div className="border-t border-[#2C211C]/10">
        {locations.map((location, index) => {
          const reverse = index % 2 !== 0;

          return (
            <article
              key={location.name}
              className="border-b border-[#2C211C]/10 px-5 py-8 sm:px-8 sm:py-10 lg:px-20 lg:py-12"
            >
              <div
                className={`grid items-center gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-14 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <CafeGallery
                  images={location.images}
                  name={location.name}
                />

                <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#A8754F] sm:text-[11px]">
                      {location.city.split(",")[0]}
                    </p>

                    <h2 className="font-serif text-2xl leading-tight sm:text-3xl lg:text-4xl">
                      {location.name}
                    </h2>
                  </div>

                  <div className="space-y-3 text-sm text-[#2C211C]/60">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        location.address
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 transition-colors hover:text-[#2C211C]"
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0 text-[#A8754F] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />

                      <span className="border-b border-transparent transition-colors group-hover:border-[#2C211C]/30">
                        {location.address}
                      </span>
                    </a>

                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 transition-colors hover:text-[#2C211C]"
                    >
                      <Phone
                        size={15}
                        strokeWidth={1.5}
                        className={iconClass}
                      />
                      {location.phone}
                    </a>

                    <div className="flex items-center gap-3">
                      <Clock
                        size={15}
                        strokeWidth={1.5}
                        className={iconClass}
                      />
                      {location.hours}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="grid gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-20 lg:py-24">
        <div>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Have something
            <br />
            to tell us?
          </h2>
        </div>

        <div className="flex flex-col justify-end gap-5">
          <a
            href="mailto:hello@elior.cafe"
            className="group flex w-fit items-center gap-3 text-sm"
          >
            <Mail size={17} strokeWidth={1.5} className={iconClass} />

            <span className="border-b border-[#2C211C]/30 pb-1 transition-colors group-hover:border-[#2C211C]">
              hello@elior.cafe
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <p className="max-w-md text-sm leading-7 text-[#2C211C]/55">
            Whether it's an idea for a collaboration, a private gathering,
            some feedback, or simply a hello — we'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}