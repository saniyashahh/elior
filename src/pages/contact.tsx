import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

const locations = [
  {
    name: "Elior · Bandra",
    address: "14 Pali Hill, Bandra West",
    city: "Mumbai, Maharashtra",
    phone: "+91 98765 43210",
    hours: "8:00 AM — 10:00 PM",
  },
  {
    name: "Elior · Fort",
    address: "28 Kala Ghoda, Fort",
    city: "Mumbai, Maharashtra",
    phone: "+91 98765 43211",
    hours: "8:00 AM — 9:30 PM",
  },
  {
    name: "Elior · Indiranagar",
    address: "12 12th Main Road, Indiranagar",
    city: "Bengaluru, Karnataka",
    phone: "+91 98765 43212",
    hours: "8:00 AM — 10:00 PM",
  },
  {
    name: "Elior · Koregaon Park",
    address: "7 North Main Road, Koregaon Park",
    city: "Pune, Maharashtra",
    phone: "+91 98765 43213",
    hours: "8:00 AM — 10:00 PM",
  },
];

export default function Contact() {
  return (
    <section className="bg-[#F5EFE6] text-[#2C211C]">
      {/* Header */}
      <div className="px-8 pb-16 pt-20 lg:px-20 lg:pt-24">
        <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#A8754F]">
          Find us
        </p>

        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight lg:text-7xl">
            Come by for
            <br />
            a cup.
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-7 text-[#2C211C]/60">
            Four little corners of Elior, each made for slow mornings,
            long conversations, and coffee that is worth staying for.
          </p>
        </div>
      </div>

      {/* Locations */}
      <div className="border-t border-[#2C211C]/10">
        {locations.map((location, index) => (
          <article
            key={location.name}
            className="group border-b border-[#2C211C]/10 px-8 py-10 transition-colors duration-300 hover:bg-[#E8DDD0]/50 lg:px-20"
          >
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr_1fr_auto] lg:items-center">
              {/* Number + Name */}
              <div className="flex items-start gap-5">
                <span className="pt-1 text-xs text-[#A8754F]">
                  0{index + 1}
                </span>

                <h2 className="font-serif text-2xl lg:text-3xl">
                  {location.name}
                </h2>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#A8754F]"
                />

                <div className="text-sm leading-6 text-[#2C211C]/60">
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-3 text-sm text-[#2C211C]/60">
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-[#2C211C]"
                >
                  <Phone
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#A8754F]"
                  />
                  {location.phone}
                </a>

                <div className="flex items-center gap-3">
                  <Clock
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#A8754F]"
                  />
                  {location.hours}
                </div>
              </div>

              {/* Directions */}
              <button
                type="button"
                className="group/direction flex w-fit items-center gap-2 text-sm transition-colors hover:text-[#A8754F]"
              >
                Directions
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover/direction:-translate-y-0.5 group-hover/direction:translate-x-0.5"
                />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* General Contact */}
      <div className="grid gap-10 px-8 py-20 lg:grid-cols-2 lg:px-20 lg:py-28">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#A8754F]">
            Say hello
          </p>

          <h2 className="font-serif text-4xl leading-tight lg:text-5xl">
            Questions?
            <br />
            We'd love to hear from you.
          </h2>
        </div>

        <div className="flex flex-col justify-end gap-5">
          <a
            href="mailto:hello@elior.cafe"
            className="group flex w-fit items-center gap-3 text-sm"
          >
            <Mail
              size={17}
              strokeWidth={1.5}
              className="text-[#A8754F]"
            />

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
            For collaborations, events, feedback, or anything else on your
            mind, drop us a note and we'll get back to you soon.
          </p>
        </div>
      </div>
    </section>
  );
}