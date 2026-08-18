export type Artwork = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  individualPrice: number;
  packPrice: number;
};

export const artworks: Artwork[] = [
  {
    id: "landscape-01",
    title: "Landscape 01",
    category: "Landscape",
    description: "Landscape artwork for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 120,
    packPrice: 200,
  },

  {
    id: "landscape-02",
    title: "Landscape 02",
    category: "Landscape",
    description: "Landscape artwork for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 120,
    packPrice: 200,
  },

  {
    id: "poster-01",
    title: "Poster Design 01",
    category: "Poster Design",
    description: "Poster design for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 160,
    packPrice: 300,
  },

  {
    id: "poster-02",
    title: "Poster Design 02",
    category: "Poster Design",
    description: "Poster design for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 160,
    packPrice: 300,
  },

  {
    id: "mandala-01",
    title: "Mandala 01",
    category: "Mandala",
    description: "Mandala artwork for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 140,
    packPrice: 230,
  },

  {
    id: "mandala-02",
    title: "Mandala 02",
    category: "Mandala",
    description: "Mandala artwork for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 140,
    packPrice: 230,
  },

  {
    id: "still-life-01",
    title: "Still Life 01",
    category: "Still Life",
    description: "Still life artwork for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 100,
    packPrice: 180,
  },

  {
    id: "still-life-02",
    title: "Still Life 02",
    category: "Still Life",
    description: "Still life artwork for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 100,
    packPrice: 180,
  },

  {
    id: "portrait-01",
    title: "Portrait 01",
    category: "Portrait",
    description: "Portrait artwork for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 400,
    packPrice: 600,
  },

  {
    id: "portrait-02",
    title: "Portrait 02",
    category: "Portrait",
    description: "Portrait artwork for the Fine Arts assignment.",
    image: "/artworks/placeholder.svg",
    individualPrice: 400,
    packPrice: 600,
  },
];
