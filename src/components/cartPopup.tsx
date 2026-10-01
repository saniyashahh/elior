import { Minus, Plus, ReceiptText, Trash2, X } from "lucide-react";

export interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartPopupProps {
  cart: CartItem[];
  total: number;
  onClose: () => void;
  onRemove: (name: string) => void;
  onQuantity: (name: string, change: number) => void;
}

export default function CartPopup({
  cart,
  total,
  onClose,
  onRemove,
  onQuantity,
}: CartPopupProps) {
  const isEmpty = cart.length === 0;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className="absolute inset-0 bg-[#2C211C]/20 backdrop-blur-[2px]"
      />

      <aside className="relative z-10 flex max-h-[82vh] w-full max-w-[390px] flex-col overflow-hidden bg-[#EFE5DA] shadow-[0_20px_60px_rgba(44,33,28,0.18)] sm:max-h-[75vh]">
        <div
          className={`flex h-20 shrink-0 items-center border-b border-[#2C211C]/10 px-5 sm:px-6 ${
            isEmpty ? "justify-end" : "justify-between"
          }`}
        >
          {!isEmpty && (
            <h2 className="font-serif text-xl text-[#2C211C] sm:text-2xl">
              Cart
            </h2>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2C211C]/10 text-[#2C211C] hover:bg-[#E4D8CA]"
          >
            <X size={15} strokeWidth={1.5} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
          {!isEmpty ? (
            <div className="space-y-4">
              {cart.map((item) => (
                <CartRow
                  key={item.name}
                  item={item}
                  onRemove={onRemove}
                  onQuantity={onQuantity}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
              <ReceiptText
                size={24}
                strokeWidth={1.2}
                className="text-[#2C211C]/30"
              />

              <p className="mt-2 font-serif text-lg text-[#2C211C]">
                Your cart is empty.
              </p>
            </div>
          )}
        </div>

        {!isEmpty && (
          <div className="shrink-0 border-t border-[#2C211C]/10 px-5 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.15em] text-[#2C211C]/50">
                Subtotal
              </span>

              <span className="font-serif text-xl text-[#2C211C]">
                ₹{total}
              </span>
            </div>

            <button
              type="button"
              className="mt-4 flex h-11 w-full items-center justify-center bg-[#2C211C] text-xs font-medium text-[#EFE5DA] hover:bg-[#A8754F]"
            >
              Continue to checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

function CartRow({
  item,
  onRemove,
  onQuantity,
}: {
  item: CartItem;
  onRemove: (name: string) => void;
  onQuantity: (name: string, change: number) => void;
}) {
  return (
    <div className="flex gap-3 border-b border-[#2C211C]/8 pb-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 shrink-0 object-cover"
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-serif text-sm leading-tight text-[#2C211C]">
              {item.name}
            </h3>

            <p className="mt-1 text-[10px] text-[#2C211C]/50">
              ₹{item.price}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onRemove(item.name)}
            aria-label={`Remove ${item.name}`}
            className="shrink-0 text-[#2C211C]/35 hover:text-red-600"
          >
            <Trash2 size={13} strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center border border-[#2C211C]/12">
            <button
              type="button"
              onClick={() => onQuantity(item.name, -1)}
              className="flex h-7 w-7 items-center justify-center text-[#2C211C]/60 hover:bg-[#E4D8CA]"
              aria-label={`Decrease ${item.name} quantity`}
            >
              <Minus size={11} strokeWidth={1.5} />
            </button>

            <span className="flex h-7 min-w-7 items-center justify-center border-x border-[#2C211C]/12 text-[10px] font-medium">
              {item.quantity}
            </span>

            <button
              type="button"
              onClick={() => onQuantity(item.name, 1)}
              className="flex h-7 w-7 items-center justify-center text-[#2C211C]/60 hover:bg-[#E4D8CA]"
              aria-label={`Increase ${item.name} quantity`}
            >
              <Plus size={11} strokeWidth={1.5} />
            </button>
          </div>

          <span className="text-xs font-medium text-[#2C211C]">
            ₹{item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}