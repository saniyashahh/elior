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
    image: "/menu/cappuccino.png",
  },
  {
    name: "Espresso",
    category: "Warm",
    description: "A concentrated shot of rich, aromatic coffee.",
    price: 140,
    image: "/menu/espresso.png",
  },
  {
    name: "Mocha",
    category: "Warm",
    description: "Espresso, silky milk and a touch of chocolate.",
    price: 210,
    image: "/menu/mocha.png",
  },
  {
    name: "Iced Latte",
    category: "Cold",
    description: "Chilled espresso, fresh milk and plenty of ice.",
    price: 210,
    image: "/menu/iced-latte.png",
  },
  {
    name: "Iced Americano",
    category: "Cold",
    description: "Bold espresso, cold water and ice.",
    price: 170,
    image: "/menu/iced-americano.png",
  },
  {
    name: "Elior Breakfast",
    category: "Something to eat",
    description: "A little bit of everything.",
    price: 250,
    image: "/menu/elior-breakfast.png",
  },
  {
    name: "Butter Croissant",
    category: "Something to eat",
    description: "Freshly baked, golden and flaky.",
    price: 160,
    image: "/menu/butter-croissant.png",
  },
  {
    name: "Chocolate Cookie",
    category: "Something to eat",
    description: "Soft-baked cookie with generous chocolate pieces.",
    price: 130,
    image: "/menu/chocolate-cookie.png",
  },
];

export const menuCategories = [
  "All",
  "Warm",
  "Cold",
  "Something to eat",
] as const;