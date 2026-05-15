import type { BakeryImage } from '@/data/bakery-types';
import type { GalleryCategory } from '@/data/gallery-categories';

export type CategoryCard = {
  title: Exclude<GalleryCategory, 'All'> | 'Dessert Boxes';
  image: string;
  blurDataURL: string;
  description: string;
};

const categoryMeta: Array<{ title: CategoryCard['title']; description: string }> = [
  { title: 'Birthday Cakes', description: 'Showstopping centerpieces for milestone moments.' },
  { title: 'Cupcakes', description: 'Soft, elegant bites topped with handcrafted swirls.' },
  { title: 'Floral Designs', description: 'Delicate buttercream petals with artistic detail.' },
  { title: 'Chocolate Cakes', description: 'Rich cocoa layers with premium ganache finishes.' },
  { title: 'Kids Cakes', description: 'Playful themes crafted in polished luxury style.' },
  { title: 'Celebration Cakes', description: 'Tailored designs for weddings, engagements, and events.' },
  { title: 'Dessert Boxes', description: 'Curated sweet collections, perfect for gifting.' },
];

export function buildCategoryCards(images: BakeryImage[]): CategoryCard[] {
  if (images.length === 0) {
    return [];
  }

  return categoryMeta.map((meta, index) => {
    const image = images[index % images.length];

    return {
      title: meta.title,
      description: meta.description,
      image: image.src,
      blurDataURL: image.blurDataURL,
    };
  });
}
