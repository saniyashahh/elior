export type MenuCategory = "Warm" | "Cold" | "Something to eat";

export interface MenuItem {
  name: string;
  category: MenuCategory;
  description: string;
  price: number;
  image: string;
  isVeg?: boolean;
  tag?: string;
}

export const menuItems: MenuItem[] = [
  // Warm
  {
    name: "Cappuccino",
    category: "Warm",
    description: "Espresso, milk & foam.",
    price: 180,
    image: "/menu/cappuccino.png",
  },
  {
    name: "Espresso",
    category: "Warm",
    description: "Rich, aromatic espresso.",
    price: 140,
    image: "/menu/espresso.png",
  },
  {
    name: "Flat White",
    category: "Warm",
    description: "Espresso with silky microfoam.",
    price: 200,
    image: "/menu/flat-white.png",
  },
  {
    name: "Matcha Latte",
    category: "Warm",
    description: "Creamy matcha with milk.",
    price: 220,
    image: "/menu/matcha-latte.png",
  },
  {
    name: "Hot Chocolate",
    category: "Warm",
    description: "Rich chocolate & warm milk.",
    price: 190,
    image: "/menu/hot-chocolate.png",
  },
  {
    name: "Green Tea",
    category: "Warm",
    description: "Light, refreshing green tea.",
    price: 150,
    image: "/menu/green-tea.png",
  },

  // Cold
  {
    name: "Iced Latte",
    category: "Cold",
    description: "Chilled espresso, milk & ice.",
    price: 210,
    image: "/menu/iced-latte.png",
  },
  {
    name: "Oreo Frappe",
    category: "Cold",
    description: "Blended coffee & Oreo.",
    price: 240,
    image: "/menu/oreo-frappe.png",
  },
  {
    name: "Caramel Iced Coffee",
    category: "Cold",
    description: "Iced coffee with caramel.",
    price: 230,
    image: "/menu/caramel-iced-coffee.png",
  },
  {
    name: "Berry Blaster",
    category: "Cold",
    description: "Mixed berries, bright & refreshing.",
    price: 220,
    image: "/menu/berry-blaster.png",
  },
  {
    name: "Iced Americano",
    category: "Cold",
    description: "Bold espresso, water & ice.",
    price: 170,
    image: "/menu/iced-americano.png",
  },
  {
    name: "Iced Matcha",
    category: "Cold",
    description: "Matcha, milk & ice.",
    price: 230,
    image: "/menu/iced-matcha.png",
  },

  // Something to eat
  {
    name: "Chicken Pesto Sub",
    category: "Something to eat",
    description: "Grilled Chicken and Veggies in a sub.",
    price: 280,
    image: "/menu/chicken-pesto-sub.png",
    isVeg: false,
  },
  {
    name: "Grilled Cheese Sandwich",
    category: "Something to eat",
    description: "Golden bread with melted cheese.",
    price: 220,
    image: "/menu/grilled-cheese-sandwich.png",
    isVeg: true,
  },
  {
    name: "Butter Croissant",
    category: "Something to eat",
    description: "Buttery, golden & delicately flaky.",
    price: 160,
    image: "/menu/butter-croissant.png",
    isVeg: true,
  },
  {
    name: "Chocolate Cookie",
    category: "Something to eat",
    description: "Soft baked cookie with rich chocolate.",
    price: 130,
    image: "/menu/chocolate-cookie.png",
    isVeg: true,
  },
];

export const menuCategories = [
  "All",
  "Warm",
  "Cold",
  "Something to eat",
] as const;