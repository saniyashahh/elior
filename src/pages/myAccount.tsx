import { useState } from "react";
import {
  CalendarDays,
  ChevronRight,
  LogIn,
  LogOut,
  Mail,
  MapPin,
  Package,
  Phone,
  User,
} from "lucide-react";

const BG_IMAGE = "/images/myaccount-bg.png";

const user = {
  name: "Skylar",
  email: "skylar@gmail.com",
  phone: "+91 12345 67890",
  location: "Mumbai, Maharashtra",
};

const subscription = {
  plan: "Elior Regular",
  price: 999,
  renewal: "12 October 2026",
};

const orders = [
  {
    id: "#EL1028",
    date: "28 Sep 2026",
    location: "Bandra",
    items: "Cappuccino, Butter Croissant",
    total: 420,
  },
  {
    id: "#EL1016",
    date: "21 Sep 2026",
    location: "Fort",
    items: "Iced Latte, Chicken Pesto Sub",
    total: 460,
  },
  {
    id: "#EL1003",
    date: "12 Sep 2026",
    location: "Bandra",
    items: "Flat White, Chocolate Chip Cookie",
    total: 380,
  },
];

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [password, setPassword] = useState("");

  // ---------------- LOGGED OUT ----------------

    if (!isLoggedIn) {
    return (
        <section
        className="relative flex min-h-[calc(100dvh-68px)] w-full items-center justify-center overflow-x-hidden px-4 py-4 text-[#24221f] lg:min-h-screen lg:px-8 lg:py-8"
        style={{
            backgroundImage: `url(${BG_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        <div className="absolute inset-0 bg-[#f6f3ed]/76 backdrop-blur-[2px]" />

        <div className="relative z-10 w-full max-w-md">
            <div className="mb-3 text-center lg:mb-8">
            <h1 className="mt-1 font-serif text-[25px] leading-tight text-[#24221f] lg:mt-2 lg:text-4xl">
                Log in / Sign up
            </h1>
            </div>

            <div className="rounded-2xl border border-[#ded9d0] bg-[#fbfaf7]/96 px-5 py-6 shadow-xl backdrop-blur-md lg:p-8">
            <label className="text-[10px] uppercase tracking-[0.15em] text-[#777168] lg:text-xs">
                Email / Mobile No.
            </label>

            <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-[#ded9d0] bg-[#f3f0ea] px-3.5 py-3 text-xs text-[#777168] lg:gap-3 lg:px-4 lg:text-sm">
                <Mail size={15} strokeWidth={1.5} />
                <span>{user.email}</span>
            </div>

            <label className="mt-4 block text-[10px] uppercase tracking-[0.15em] text-[#777168] lg:mt-6 lg:text-xs">
                Password
            </label>

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-[#ded9d0] bg-[#fbfaf7] px-3.5 py-3 text-xs outline-none transition focus:border-[#8c857b] lg:px-4 lg:text-sm"
            />

            <button
                onClick={() => setIsLoggedIn(true)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#292621] px-5 py-3 text-xs font-medium text-[#f8f5ef] transition hover:bg-[#3a3630] lg:mt-6 lg:text-sm"
            >
                <LogIn size={15} strokeWidth={1.5} />
                Log in
            </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-[#625c54] lg:mt-5 lg:text-xs">
            Your account details are securely saved with Elior.
            </p>
        </div>
        </section>
    );
    }

  // --------------- LOGGED IN --------------------

  return (
    <section
      className="relative min-h-screen overflow-hidden px-4 py-4 text-[#24221f] sm:px-8 sm:py-10 lg:px-16 lg:py-12"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#f6f3ed]/78 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between gap-3 sm:mb-8 lg:mb-10">
          <h1 className="font-serif text-2xl leading-none text-[#24221f] sm:text-4xl lg:text-5xl">
            Hi, {user.name}.
          </h1>

          <button
            onClick={() => {
              setIsLoggedIn(false);
              setPassword("");
            }}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#d8d2c9] bg-[#fbfaf7]/90 px-3 py-1.5 text-[11px] font-medium shadow-sm backdrop-blur-sm transition hover:bg-[#fbfaf7] sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <LogOut size={13} strokeWidth={1.5} />
            Log out
          </button>
        </div>

        {/* Profile + Subscription */}
        <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr] lg:gap-5">
          {/* Profile */}
          <div className="rounded-2xl border border-[#ded9d0] bg-[#fbfaf7]/96 p-4 shadow-sm backdrop-blur-md sm:p-7 lg:p-8">
            <div className="mb-4 flex items-center justify-between sm:mb-7">
              <h2 className="font-serif text-lg sm:text-2xl">
                Your profile
              </h2>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eeeae3] sm:h-10 sm:w-10">
                <User size={15} strokeWidth={1.5} />
              </div>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-5">
              <Detail icon={<User />} label="Name" value={user.name} />

              <Detail icon={<Mail />} label="Email" value={user.email} />

              <Detail icon={<Phone />} label="Phone" value={user.phone} />

              <Detail
                icon={<MapPin />}
                label="Location"
                value={user.location}
              />
            </div>

            <button className="mt-4 flex items-center gap-1 text-[11px] font-medium transition hover:opacity-60 sm:mt-7 sm:text-sm">
              Edit details
              <ChevronRight size={13} />
            </button>
          </div>

          {/* Subscription */}
          <div className="rounded-2xl bg-[#292621] p-4 text-[#f8f5ef] shadow-sm sm:p-7">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#aaa39a] sm:text-xs">
              Subscription
            </p>

            <div className="mt-1.5 flex items-center justify-between sm:mt-3">
              <h2 className="font-serif text-lg sm:text-2xl">
                {subscription.plan}
              </h2>

              <span className="rounded-full border border-[#625d56] px-2 py-0.5 text-[8px] sm:px-2.5 sm:py-1 sm:text-[10px]">
                Active
              </span>
            </div>

            <div className="mt-3 flex items-end gap-1 sm:mt-5">
              <span className="font-serif text-2xl sm:text-3xl">
                ₹{subscription.price.toLocaleString("en-IN")}
              </span>

              <span className="mb-0.5 text-[9px] text-[#aaa39a] sm:mb-1 sm:text-xs">
                / month
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 border-t border-[#48443e] pt-2.5 text-[9px] text-[#aaa39a] sm:mt-5 sm:pt-4 sm:text-xs">
              <CalendarDays size={12} />
              Renews {subscription.renewal}
            </div>

            <button className="mt-3 flex items-center gap-1 text-[11px] text-[#eeeae4] transition hover:opacity-60 sm:mt-5 sm:text-sm">
              Manage subscription
              <ChevronRight size={13} />
            </button>
          </div>
        </div>

        {/* Order History */}
        <div className="mt-3 rounded-2xl border border-[#ded9d0] bg-[#fbfaf7]/96 p-4 shadow-sm backdrop-blur-md sm:mt-5 sm:p-7 lg:p-8">
          <div className="mb-1 flex items-end justify-between sm:mb-4">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#918a80] sm:text-xs">
                Order history
              </p>

              <h2 className="mt-1 font-serif text-2xl sm:mt-2 sm:text-3xl">
                Your orders
              </h2>
            </div>

            <button className="hidden items-center gap-1 text-xs font-medium sm:flex sm:text-sm">
              View all
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="divide-y divide-[#e3ded6]">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col gap-2.5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-5"
              >
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eeeae3] sm:h-10 sm:w-10">
                    <Package size={14} strokeWidth={1.5} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium sm:text-sm">
                        {order.id}
                      </span>

                      <span className="rounded-full bg-[#e8eee5] px-1.5 py-0.5 text-[8px] text-[#53604d] sm:px-2 sm:text-[10px]">
                        Completed
                      </span>
                    </div>

                    <p className="mt-0.5 truncate text-[10px] text-[#8b847b] sm:mt-1 sm:text-xs">
                      {order.items}
                    </p>

                    <p className="mt-1 flex items-center gap-1.5 text-[9px] text-[#938c82] sm:mt-1.5 sm:gap-2 sm:text-xs">
                      <CalendarDays size={10} />
                      {order.date}

                      <span>·</span>

                      <MapPin size={10} />
                      {order.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pl-11 sm:gap-6 sm:pl-0">
                  <span className="text-[11px] sm:text-sm">
                    ₹{order.total.toLocaleString("en-IN")}
                  </span>

                  <button className="flex items-center gap-1 text-[11px] font-medium transition hover:opacity-60 sm:text-sm">
                    Details
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-3 flex items-center gap-1 text-[11px] font-medium sm:hidden">
            View all orders
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eeeae3] text-[#6e685f] [&>svg]:h-3 [&>svg]:w-3 sm:h-9 sm:w-9 sm:[&>svg]:h-4 sm:[&>svg]:w-4">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[9px] text-[#938c82] sm:text-xs">{label}</p>
        <p className="truncate text-[11px] sm:text-sm">{value}</p>
      </div>
    </div>
  );
}