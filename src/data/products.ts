export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  type: "featured" | "portfolio" | "category" | "individual" | "custom";
  includes: string[];
};

export const products: Product[] = [
  {
    id: "complete-assignment",
    name: "Complete Assignment Combo",
    description: "All 14 drawings required for the assignment.",
    price: 3000,
    type: "featured",
    includes: ["All 14 drawings"],
  },

  {
    id: "complete-portfolio",
    name: "Complete Portfolio",
    description: "A complete portfolio prepared for submission.",
    price: 5000,
    type: "portfolio",
    includes: [
      "Cover",
      "Laminating artwork",
      "All 14 drawings",
    ],
  },

  {
    id: "landscape-pack",
    name: "Landscape",
    description: "2 landscape drawings.",
    price: 200,
    type: "category",
    includes: ["2 landscape drawings"],
  },

  {
    id: "poster-pack",
    name: "Poster Design",
    description: "2 poster designs.",
    price: 300,
    type: "category",
    includes: ["2 poster designs"],
  },

  {
    id: "mandala-pack",
    name: "Mandala",
    description: "2 mandala artworks.",
    price: 230,
    type: "category",
    includes: ["2 mandala artworks"],
  },

  {
    id: "still-life-pack",
    name: "Still Life",
    description: "2 still life drawings.",
    price: 180,
    type: "category",
    includes: ["2 still life drawings"],
  },

  {
    id: "portrait-pack",
    name: "Portrait",
    description: "2 portrait drawings.",
    price: 600,
    type: "category",
    includes: ["2 portrait drawings"],
  },

  {
    id: "landscape-single",
    name: "Landscape Drawing",
    description: "One landscape drawing.",
    price: 120,
    type: "individual",
    includes: ["1 landscape drawing"],
  },

  {
    id: "poster-single",
    name: "Poster Design",
    description: "One poster design.",
    price: 160,
    type: "individual",
    includes: ["1 poster design"],
  },

  {
    id: "mandala-single",
    name: "Mandala Drawing",
    description: "One mandala artwork.",
    price: 140,
    type: "individual",
    includes: ["1 mandala artwork"],
  },

  {
    id: "still-life-single",
    name: "Still Life Drawing",
    description: "One still life drawing.",
    price: 100,
    type: "individual",
    includes: ["1 still life drawing"],
  },

  {
    id: "portrait-single",
    name: "Portrait Drawing",
    description: "One portrait drawing.",
    price: 400,
    type: "individual",
    includes: ["1 portrait drawing"],
  },

  {
    id: "custom-order",
    name: "Custom Order",
    description:
      "Customize your order according to your preferences and requirements.",
    price: 0,
    type: "custom",
    includes: ["Customized according to your requirements"],
  },
];
