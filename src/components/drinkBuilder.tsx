import { useMemo, useState } from "react";
import { ArrowLeft, Check, Minus, Plus, RotateCcw } from "lucide-react";

interface DrinkBuilderProps {
  onBack: () => void;
}

const milkOptions = [
  { name: "Whole milk", price: 0 },
  { name: "Oat milk", price: 30 },
  { name: "Almond milk", price: 30 },
  { name: "Soy milk", price: 25 },
];

const flavourOptions = [
  { name: "None", price: 0 },
  { name: "Chocolate", price: 20 },
  { name: "Vanilla", price: 20 },
  { name: "Caramel", price: 25 },
];

const toppingOptions = [
  { name: "None", price: 0 },
  { name: "Foam", price: 10 },
  { name: "Oreo", price: 25 },
  { name: "Sprinkles", price: 15 },
];

export default function DrinkBuilder({ onBack }: DrinkBuilderProps) {
  const [coffeeShots, setCoffeeShots] = useState(2);
  const [milkAmount, setMilkAmount] = useState(150);
  const [milk, setMilk] = useState(milkOptions[0]);
  const [flavour, setFlavour] = useState(flavourOptions[0]);
  const [topping, setTopping] = useState(toppingOptions[0]);

  const price = useMemo(
    () =>
      160 +
      (coffeeShots - 1) * 40 +
      milk.price +
      flavour.price +
      topping.price,
    [coffeeShots, milk, flavour, topping]
  );

  const resetDrink = () => {
    setCoffeeShots(2);
    setMilkAmount(150);
    setMilk(milkOptions[0]);
    setFlavour(flavourOptions[0]);
    setTopping(toppingOptions[0]);
  };

  return (
    <div className="text-[#2C211C]">
      {/* Header */}
      <div className="flex items-end justify-between border-b border-[#2C211C]/10 pb-7">
        <div>
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#2C211C]/50 transition hover:text-[#2C211C]"
          >
            <ArrowLeft size={14} />
            Back to menu
          </button>

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#A8754F]">
            Create your own
          </p>

          <h2 className="mt-2 font-serif text-5xl tracking-tight lg:text-6xl">
            Your drink
          </h2>
        </div>

        <button
          onClick={resetDrink}
          className="hidden items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#2C211C]/40 transition hover:text-[#2C211C] sm:flex"
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </div>

      {/* Builder */}
      <div className="grid gap-10 pt-10 lg:grid-cols-[1fr_360px]">
        {/* Options */}
        <div className="space-y-10">
          {/* Coffee */}
          <section>
            <SectionHeading number="01" title="Coffee" />

            <div className="flex items-center justify-between bg-[#EFE5DA] p-5">
              <div>
                <p className="text-sm font-medium">Espresso shots</p>
                <p className="mt-1 text-xs text-[#2C211C]/45">
                  One shot = roughly 30ml
                </p>
              </div>

              <Stepper
                value={coffeeShots}
                min={1}
                max={4}
                onDecrease={() =>
                  setCoffeeShots((value) => Math.max(1, value - 1))
                }
                onIncrease={() =>
                  setCoffeeShots((value) => Math.min(4, value + 1))
                }
              />
            </div>
          </section>

          {/* Milk */}
          <section>
            <SectionHeading number="02" title="Milk" />

            <div className="grid gap-2 sm:grid-cols-2">
              {milkOptions.map((option) => (
                <Option
                  key={option.name}
                  selected={milk.name === option.name}
                  onClick={() => setMilk(option)}
                >
                  <span>{option.name}</span>

                  {option.price > 0 && (
                    <span className="text-xs text-[#2C211C]/40">
                      +₹{option.price}
                    </span>
                  )}
                </Option>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between bg-[#EFE5DA] p-5">
              <span className="text-sm">Milk quantity</span>

              <Stepper
                value={milkAmount}
                suffix="ml"
                min={50}
                max={300}
                onDecrease={() =>
                  setMilkAmount((value) => Math.max(50, value - 25))
                }
                onIncrease={() =>
                  setMilkAmount((value) => Math.min(300, value + 25))
                }
              />
            </div>
          </section>

          {/* Flavour */}
          <section>
            <SectionHeading number="03" title="Flavour" />

            <div className="flex flex-wrap gap-2">
              {flavourOptions.map((option) => (
                <Option
                  key={option.name}
                  selected={flavour.name === option.name}
                  onClick={() => setFlavour(option)}
                >
                  <span>{option.name}</span>

                  {option.price > 0 && (
                    <span className="text-xs text-[#2C211C]/40">
                      +₹{option.price}
                    </span>
                  )}
                </Option>
              ))}
            </div>
          </section>

          {/* Finish */}
          <section>
            <SectionHeading number="04" title="Finish" />

            <div className="flex flex-wrap gap-2">
              {toppingOptions.map((option) => (
                <Option
                  key={option.name}
                  selected={topping.name === option.name}
                  onClick={() => setTopping(option)}
                >
                  <span>{option.name}</span>

                  {option.price > 0 && (
                    <span className="text-xs text-[#2C211C]/40">
                      +₹{option.price}
                    </span>
                  )}
                </Option>
              ))}
            </div>
          </section>
        </div>

        {/* Summary */}
        <aside className="h-fit bg-[#EFE5DA] lg:sticky lg:top-8">
          <div className="p-7">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#A8754F]">
              Your drink
            </p>

            <h3 className="mt-2 font-serif text-4xl">
              {flavour.name === "None"
                ? "Your creation"
                : `${flavour.name} coffee`}
            </h3>

            {/* Simple preview */}
            <div className="my-8 flex h-64 items-end justify-center bg-[#E4D8CA] pb-8">
              <div className="relative">
                {/* Cup */}
                <div className="h-40 w-24 rounded-b-[28px] rounded-t-md border-2 border-[#2C211C]/20 bg-[#F4EDE5]">
                  {/* Coffee */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 rounded-b-[25px] bg-[#8A5A40] transition-all duration-300`}
                    style={{
                      height: `${Math.min(
                        82,
                        45 + milkAmount / 10
                      )}%`,
                    }}
                  />

                  {/* Foam */}
                  {topping.name === "Foam" && (
                    <div className="absolute left-2 right-2 top-2 h-6 rounded-full bg-[#F2E6D5]" />
                  )}

                  {/* Oreo */}
                  {topping.name === "Oreo" && (
                    <div className="absolute left-8 top-2 h-6 w-6 rounded-full bg-[#30221D]" />
                  )}

                  {/* Sprinkles */}
                  {topping.name === "Sprinkles" && (
                    <div className="absolute left-5 right-5 top-3 flex justify-between">
                      <span className="h-1 w-3 rotate-12 bg-[#2C211C]/50" />
                      <span className="h-1 w-3 -rotate-12 bg-[#2C211C]/50" />
                      <span className="h-1 w-3 rotate-12 bg-[#2C211C]/50" />
                    </div>
                  )}
                </div>

                {/* Cup rim */}
                <div className="absolute -left-1 -right-1 top-0 h-5 rounded-[50%] border-2 border-[#2C211C]/20 bg-[#EFE5DA]" />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 border-t border-[#2C211C]/10 pt-5 text-sm">
              <Detail label="Espresso" value={`${coffeeShots} shots`} />

              <Detail
                label="Milk"
                value={`${milk.name} · ${milkAmount}ml`}
              />

              {flavour.name !== "None" && (
                <Detail label="Flavour" value={flavour.name} />
              )}

              {topping.name !== "None" && (
                <Detail label="Finish" value={topping.name} />
              )}
            </div>
          </div>

          {/* Price */}
          <div className="border-t border-[#2C211C]/10 p-7">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#2C211C]/50">
                Estimated price
              </span>

              <span className="font-serif text-2xl">₹{price}</span>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 bg-[#2C211C] px-6 py-4 text-sm text-[#EFE5DA] transition hover:opacity-90">
              Add to order
              <Check size={15} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* -------------------------------- */
/* Reusable components              */
/* -------------------------------- */

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#A8754F]">
        {number}
      </p>

      <h3 className="mt-1 font-serif text-2xl">{title}</h3>
    </div>
  );
}

function Stepper({
  value,
  suffix = "",
  min,
  max,
  onDecrease,
  onIncrease,
}: {
  value: number;
  suffix?: string;
  min: number;
  max: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrease}
        disabled={value <= min}
        className="flex h-8 w-8 items-center justify-center border border-[#2C211C]/15 transition hover:bg-white/40 disabled:opacity-30"
      >
        <Minus size={14} />
      </button>

      <span className="min-w-[45px] text-center text-sm">
        {value}
        {suffix}
      </span>

      <button
        onClick={onIncrease}
        disabled={value >= max}
        className="flex h-8 w-8 items-center justify-center border border-[#2C211C]/15 transition hover:bg-white/40 disabled:opacity-30"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

function Option({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex min-h-[52px] items-center justify-between gap-4 border px-4 text-left text-sm transition ${
        selected
          ? "border-[#2C211C] bg-[#EFE5DA]"
          : "border-[#2C211C]/10 hover:bg-[#EFE5DA]/60"
      }`}
    >
      <span>{children}</span>

      {selected && <Check size={14} />}
    </button>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#2C211C]/50">{label}</span>
      <span>{value}</span>
    </div>
  );
}
