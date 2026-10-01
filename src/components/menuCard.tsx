import { Minus, Plus } from "lucide-react";
import { menuItems } from "./menuData";

type MenuItem = (typeof menuItems)[number];

interface MenuCardProps {
  item: MenuItem;
  quantity: number;
  active: boolean;
  onToggle: () => void;
  onQuantity: (change: number) => void;
}

export default function MenuCard({
  item,
  quantity,
  active,
  onToggle,
  onQuantity,
}: MenuCardProps) {
  const add = () => onQuantity(1);

  return (
    <article className="min-w-0 overflow-hidden bg-[#EFE5DA]">
      <div
        onClick={() => {
          if (window.innerWidth < 1024) onToggle();
        }}
        className="group relative aspect-[5/4] cursor-pointer overflow-hidden lg:cursor-default"
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={`h-full w-full object-cover transition-all duration-500 ${
            active
              ? "scale-[1.02] brightness-[0.45]"
              : "brightness-100 group-hover:scale-[1.02] group-hover:brightness-[0.45]"
          }`}
        />

        {item.category === "Something to eat" && (
          <span
            aria-label={item.isVeg ? "Vegetarian" : "Non-vegetarian"}
            className={`absolute right-2 top-2 z-10 h-2 w-2 rounded-full shadow-sm sm:right-2.5 sm:top-2.5 lg:right-3 lg:top-3 ${
              item.isVeg ? "bg-green-600" : "bg-red-600"
            }`}
          />
        )}

        <div
          className={`absolute inset-0 flex items-center justify-center px-5 text-center transition-opacity duration-500 sm:px-8 ${
            active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <p className="max-w-[240px] text-[10px] leading-relaxed text-[#EFE5DA] sm:text-xs lg:text-sm">
            {item.description}
          </p>
        </div>
      </div>

      <div className="flex min-h-[50px] items-center justify-between border-t border-[#2C211C]/8 px-2.5 py-2 sm:min-h-[56px] sm:px-3.5 lg:min-h-[62px] lg:px-4">
        <div className="min-w-0 flex-1 pr-2">
          <h3 className="font-serif text-[12px] leading-[1.15] text-[#2C211C] sm:text-[13px] lg:text-[16px]">
            {item.name}
          </h3>

          <span className="mt-1 block text-[8px] font-medium tracking-wide text-[#2C211C]/55 sm:text-[9px] lg:text-[10px]">
            ₹{item.price}
          </span>
        </div>

        {quantity > 0 ? (
          <div className="ml-1 flex h-7 shrink-0 items-center rounded-full border border-[#2C211C] bg-[#2C211C] text-[#EFE5DA] sm:h-8">
            <button
              type="button"
              onClick={() => onQuantity(-1)}
              aria-label={`Decrease ${item.name} quantity`}
              className="flex h-full w-6 items-center justify-center rounded-l-full transition-colors hover:bg-[#3A2B24] sm:w-7"
            >
              <Minus size={10} strokeWidth={1.7} />
            </button>

            <span className="flex min-w-4 items-center justify-center px-0.5 text-[9px] font-medium sm:text-[10px] lg:text-[11px]">
              {quantity}
            </span>

            <button
              type="button"
              onClick={add}
              aria-label={`Increase ${item.name} quantity`}
              className="flex h-full w-6 items-center justify-center rounded-r-full transition-colors hover:bg-[#3A2B24] sm:w-7"
            >
              <Plus size={10} strokeWidth={1.7} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={add}
            aria-label={`Add ${item.name} to cart`}
            className="group ml-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#2C211C]/20 text-[#2C211C] transition-all active:scale-95 hover:border-[#2C211C] hover:bg-[#2C211C] hover:text-[#EFE5DA] sm:h-7 sm:w-7 lg:h-8 lg:w-8"
          >
            <Plus
              size={11}
              strokeWidth={1.5}
              className="transition-transform group-hover:rotate-90 sm:size-[12px] lg:size-[14px]"
            />
          </button>
        )}
      </div>
    </article>
  );
}