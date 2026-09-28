export type MenuCategory = "Warm" | "Cold" | "Something to eat";

export interface MenuItem {
  name: string;
  category: MenuCategory;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

export const menuItems: MenuItem[] = [
  {
    name: "Cappuccino",
    category: "Warm",
    description: "Espresso, steamed milk and a soft layer of foam.",
    price: 180,
    image: "/menu/cappuccino.jpg",
  },
  {
    name: "Flat White",
    category: "Warm",
    description: "Rich espresso balanced with velvety microfoam.",
    price: 190,
    image: "/menu/flat-white.jpg",
  },
  {
    name: "Espresso",
    category: "Warm",
    description: "A concentrated shot of rich, aromatic coffee.",
    price: 140,
    image: "/menu/espresso.jpg",
  },
  {
    name: "Mocha",
    category: "Warm",
    description: "Espresso, silky milk and a touch of chocolate.",
    price: 210,
    image: "/menu/mocha.jpg",
  },
  {
    name: "Iced Latte",
    category: "Cold",
    description: "Chilled espresso, fresh milk and plenty of ice.",
    price: 210,
    image: "/menu/iced-latte.jpg",
  },
  {
    name: "Iced Americano",
    category: "Cold",
    description: "Bold espresso, cold water and ice.",
    price: 170,
    image: "/menu/iced-americano.jpg",
  },
  {
    name: "Cold Mocha",
    category: "Cold",
    description: "Cold espresso, milk and chocolate over ice.",
    price: 220,
    image: "/menu/cold-mocha.jpg",
  },
  {
    name: "Croissant",
    category: "Something to eat",
    description: "Buttery, flaky and baked fresh for the day.",
    price: 160,
    image: "/menu/croissant.jpg",
  },
  {
    name: "Chocolate Cookie",
    category: "Something to eat",
    description: "Soft-baked cookie with generous chocolate pieces.",
    price: 130,
    image: "/menu/chocolate-cookie.jpg",
  },
];

export const menuCategories = [
  "All",
  "Warm",
  "Cold",
  "Something to eat",
] as const;