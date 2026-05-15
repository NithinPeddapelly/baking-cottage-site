export const galleryCategories = [
  'All',
  'Birthday Cakes',
  'Cupcakes',
  'Floral Designs',
  'Chocolate Cakes',
  'Kids Cakes',
  'Celebration Cakes',
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
