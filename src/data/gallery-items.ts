import type { GalleryCategory } from '@/data/gallery-categories';

// Shared blur placeholder — warm cream-to-blush gradient SVG
const B =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHgyPSIxMDAlIiB5MT0iMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRjdkNmRmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmOGVlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjI0IiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+';

export type GalleryItem = {
  /** Public URL served from /public */
  src: string;
  category: Exclude<GalleryCategory, 'All'>;
  /** Human-readable label shown in the lightbox and as alt text */
  title: string;
  /** Featured images appear first in hero & category-card picks */
  featured: boolean;
  blurDataURL: string;
};

export const galleryItems: GalleryItem[] = [
  // ── Birthday Cakes ──────────────────────────────────────────────────────────
  {
    src: '/images/cakes/birthday/birthday-box-caramel-drip.jpg',
    category: 'Birthday Cakes',
    title: 'Birthday Box Caramel Drip Cake',
    featured: true,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/birthday/happy-birthday-coco.jpg',
    category: 'Birthday Cakes',
    title: 'Happy Birthday Coco',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/birthday/pistachio-birthday-cake.jpg',
    category: 'Birthday Cakes',
    title: 'Pistachio Birthday Cake',
    featured: true,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/birthday/pink-macaron-birthday.jpg',
    category: 'Birthday Cakes',
    title: 'Pink Macaron Birthday Cake',
    featured: true,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/birthday/birthday-celebration-01.jpg',
    category: 'Birthday Cakes',
    title: 'Birthday Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/birthday/birthday-celebration-02.jpg',
    category: 'Birthday Cakes',
    title: 'Birthday Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/birthday/birthday-celebration-03.jpg',
    category: 'Birthday Cakes',
    title: 'Birthday Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/birthday/birthday-celebration-04.jpg',
    category: 'Birthday Cakes',
    title: 'Birthday Celebration Cake',
    featured: false,
    blurDataURL: B,
  },

  // ── Cupcakes ─────────────────────────────────────────────────────────────────
  {
    src: '/images/cakes/cupcakes/lavender-mocha-cupcake-box.jpg',
    category: 'Cupcakes',
    title: 'Lavender & Mocha Cupcake Box',
    featured: true,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/cupcakes/cupcake-box-01.jpg',
    category: 'Cupcakes',
    title: 'Cupcake Box',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/cupcakes/cupcake-collection-01.jpg',
    category: 'Cupcakes',
    title: 'Cupcake Collection',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/cupcakes/cupcake-collection-02.jpg',
    category: 'Cupcakes',
    title: 'Cupcake Collection',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/cupcakes/cupcake-collection-03.jpg',
    category: 'Cupcakes',
    title: 'Cupcake Collection',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/cupcakes/cupcake-collection-04.jpg',
    category: 'Cupcakes',
    title: 'Cupcake Collection',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/cupcakes/cupcake-collection-05.jpg',
    category: 'Cupcakes',
    title: 'Cupcake Collection',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/cupcakes/cupcake-collection-06.jpg',
    category: 'Cupcakes',
    title: 'Cupcake Collection',
    featured: false,
    blurDataURL: B,
  },

  // ── Floral Designs ───────────────────────────────────────────────────────────
  {
    src: '/images/cakes/floral/40th-birthday-roses.jpg',
    category: 'Floral Designs',
    title: '40th Birthday Roses Cake',
    featured: true,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/floral/floral-design-01.jpg',
    category: 'Floral Designs',
    title: 'Floral Design Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/floral/floral-design-02.jpg',
    category: 'Floral Designs',
    title: 'Floral Design Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/floral/floral-design-03.jpg',
    category: 'Floral Designs',
    title: 'Floral Design Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/floral/floral-design-04.jpg',
    category: 'Floral Designs',
    title: 'Floral Design Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/floral/floral-design-05.jpg',
    category: 'Floral Designs',
    title: 'Floral Design Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/floral/floral-design-06.jpg',
    category: 'Floral Designs',
    title: 'Floral Design Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/floral/floral-design-07.jpg',
    category: 'Floral Designs',
    title: 'Floral Design Cake',
    featured: false,
    blurDataURL: B,
  },

  // ── Chocolate Cakes ──────────────────────────────────────────────────────────
  {
    src: '/images/cakes/chocolate/biscoff-caramel-drip-cake.jpg',
    category: 'Chocolate Cakes',
    title: 'Biscoff Caramel Drip Cake',
    featured: true,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/chocolate/biscoff-caramel-drip-side.jpg',
    category: 'Chocolate Cakes',
    title: 'Biscoff Caramel Drip — Side View',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/chocolate/chocolate-cake-01.jpg',
    category: 'Chocolate Cakes',
    title: 'Chocolate Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/chocolate/chocolate-cake-02.jpg',
    category: 'Chocolate Cakes',
    title: 'Chocolate Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/chocolate/chocolate-cake-03.jpg',
    category: 'Chocolate Cakes',
    title: 'Chocolate Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/chocolate/chocolate-cake-04.jpg',
    category: 'Chocolate Cakes',
    title: 'Chocolate Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/chocolate/chocolate-cake-05.jpg',
    category: 'Chocolate Cakes',
    title: 'Chocolate Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/chocolate/chocolate-cake-06.jpg',
    category: 'Chocolate Cakes',
    title: 'Chocolate Cake',
    featured: false,
    blurDataURL: B,
  },

  // ── Kids Cakes ───────────────────────────────────────────────────────────────
  {
    src: '/images/cakes/kids/10th-birthday-pink-macaron.jpg',
    category: 'Kids Cakes',
    title: '10th Birthday Pink Macaron Cake',
    featured: true,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/kids/kids-cake-01.jpg',
    category: 'Kids Cakes',
    title: 'Kids Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/kids/kids-cake-02.jpg',
    category: 'Kids Cakes',
    title: 'Kids Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/kids/kids-cake-03.jpg',
    category: 'Kids Cakes',
    title: 'Kids Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/kids/kids-cake-04.jpg',
    category: 'Kids Cakes',
    title: 'Kids Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/kids/kids-cake-05.jpg',
    category: 'Kids Cakes',
    title: 'Kids Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/kids/kids-cake-06.jpg',
    category: 'Kids Cakes',
    title: 'Kids Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/kids/kids-cake-07.jpg',
    category: 'Kids Cakes',
    title: 'Kids Celebration Cake',
    featured: false,
    blurDataURL: B,
  },

  // ── Celebration Cakes ────────────────────────────────────────────────────────
  {
    src: '/images/cakes/celebration/celebration-cake-01.jpg',
    category: 'Celebration Cakes',
    title: 'Celebration Cake',
    featured: true,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/celebration/celebration-cake-02.jpg',
    category: 'Celebration Cakes',
    title: 'Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/celebration/celebration-cake-03.jpg',
    category: 'Celebration Cakes',
    title: 'Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/celebration/celebration-cake-04.jpg',
    category: 'Celebration Cakes',
    title: 'Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/celebration/celebration-cake-05.jpg',
    category: 'Celebration Cakes',
    title: 'Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/celebration/celebration-cake-06.jpg',
    category: 'Celebration Cakes',
    title: 'Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/celebration/celebration-cake-07.jpg',
    category: 'Celebration Cakes',
    title: 'Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
  {
    src: '/images/cakes/celebration/celebration-cake-08.jpg',
    category: 'Celebration Cakes',
    title: 'Celebration Cake',
    featured: false,
    blurDataURL: B,
  },
];

/** All featured images across all categories */
export const featuredGalleryItems = galleryItems.filter((item) => item.featured);
