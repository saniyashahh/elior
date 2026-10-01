import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ShoppingBag,
  SlidersHorizontal,
} from "lucide-react";
import { menuCategories, menuItems } from "../components/menuData";
import DrinkBuilder from "../components/drinkBuilder";
import MenuCard from "../components/menuCard";
import CartPopup, { type CartItem } from "../components/cartPopup";

type Category = (typeof menuCategories)[number];

export default function MenuDisplay() {
  const [category, setCategory] = useState<Category>("All");
  const [controlsOpen, setControlsOpen] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const controlsRef = useRef<HTMLDivElement>(null);

  const items =
    category === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!controlsRef.current?.contains(e.target as Node)) {
        setControlsOpen(false);
      }
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    if (!cartOpen) return;

    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCartOpen(false);
    };

    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [cartOpen]);

  const updateQuantity = (name: string, change: number) => {
    setCart((current) => {
      const existing = current.find((item) => item.name === name);

      if (!existing) {
        const item = menuItems.find((item) => item.name === name);
        if (!item || change <= 0) return current;

        return [
          ...current,
          {
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: change,
          },
        ];
      }

      return current
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (name: string) =>
    setCart((current) => current.filter((item) => item.name !== name));

  const selectCategory = (value: Category) => {
    setCategory(value);
    setControlsOpen(false);
  };

  const openBuilder = () => {
    setBuilderOpen(true);
    setControlsOpen(false);
  };

  const openCart = () => {
    setCartOpen(true);
    setControlsOpen(false);
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
      <header className="sticky top-0 z-30 -mx-5 hidden h-26 items-center border-b border-[#2C211C]/10 bg-[#E4D8CA]/95 px-5 backdrop-blur-sm lg:-mx-16 lg:flex lg:px-16">
        <nav className="flex gap-8">
          {menuCategories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`relative text-sm ${
                category === item
                  ? "font-medium text-[#2C211C]"
                  : "text-[#2C211C]/45 hover:text-[#2C211C]"
              }`}
            >
              {item}

              <span
                className={`absolute -bottom-2 left-0 right-0 h-px bg-[#2C211C] ${
                  category === item ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <h2 className="absolute left-1/2 -translate-x-1/2 font-serif text-3xl text-[#2C211C]">
          Menu
        </h2>

        <div className="ml-auto flex items-center gap-6">
          <button
            onClick={openBuilder}
            className="flex items-center gap-2 text-sm font-medium text-[#A8754F] hover:text-[#2C211C]"
          >
            Make your own drink
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </button>

          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex items-center justify-center text-[#2C211C] transition-colors hover:text-[#A8754F]"
          >
            <ShoppingBag size={19} strokeWidth={1.5} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#2C211C] px-1 text-[8px] font-medium text-[#EFE5DA]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Menu */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 py-5 sm:gap-4 sm:py-6 lg:grid-cols-4 lg:gap-6 lg:py-7">
        {items.map((item) => (
          <MenuCard
            key={item.name}
            item={item}
            quantity={
              cart.find((cartItem) => cartItem.name === item.name)
                ?.quantity ?? 0
            }
            active={activeItem === item.name}
            onToggle={() =>
              setActiveItem((current) =>
                current === item.name ? null : item.name
              )
            }
            onQuantity={(change) => updateQuantity(item.name, change)}
          />
        ))}
      </div>

      {/* Cart popup */}
      {cartOpen && (
        <CartPopup
          cart={cart}
          total={cartTotal}
          onClose={() => setCartOpen(false)}
          onRemove={removeFromCart}
          onQuantity={updateQuantity}
        />
      )}

      {/* Mobile controls */}
      <div
        ref={controlsRef}
        className={`fixed right-4 z-40 flex flex-col items-end gap-3 lg:hidden ${
          cartCount > 0 ? "bottom-[4.5rem]" : "bottom-4"
        }`}
      >
        {controlsOpen && (
          <div className="w-52 overflow-hidden rounded-2xl border border-[#2C211C]/10 bg-[#EFE5DA] shadow-xl">
            {menuCategories.map((item) => (
              <button
                key={item}
                onClick={() => selectCategory(item)}
                className={`block w-full px-4 py-3 text-left text-sm ${
                  category === item
                    ? "bg-[#2C211C] text-[#EFE5DA]"
                    : "text-[#2C211C] hover:bg-[#E4D8CA]"
                }`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={openBuilder}
              className="flex w-full items-center justify-between border-t border-[#2C211C]/10 px-4 py-3 text-left text-sm text-[#A8754F]"
            >
              Customize your drink
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </button>
          </div>
        )}

        <button
          onClick={() => setControlsOpen((open) => !open)}
          aria-label="Open menu filters"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2C211C]/15 bg-[#EFE5DA] text-[#2C211C] shadow-lg"
        >
          <SlidersHorizontal size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile cart */}
      {cartCount > 0 && (
        <button
          onClick={openCart}
          aria-label="Open cart"
          className="fixed bottom-0 left-0 right-0 z-30 flex h-14 items-center justify-between border-t border-[#2C211C]/10 bg-[#2C211C] px-5 text-[#EFE5DA] lg:hidden"
        >
          <span className="relative flex items-center">
            <ShoppingBag size={19} strokeWidth={1.5} />

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#EFE5DA] px-1 text-[8px] font-medium text-[#2C211C]">
              {cartCount}
            </span>
          </span>

          <span className="text-sm font-medium">₹{cartTotal}</span>
        </button>
      )}
    </section>
  );
}