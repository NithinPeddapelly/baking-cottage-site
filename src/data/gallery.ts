import type { GalleryItem } from '@/data/gallery-items';
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

export function buildCategoryCards(items: GalleryItem[]): CategoryCard[] {
  if (items.length === 0) {
    return [];
  }

  return categoryMeta.map((meta) => {
    // Find images belonging to this category
    const categoryImages = items.filter((img) => (img.category as string) === meta.title);
    // Prefer a featured image; fall back to first in category, then first overall
    const image =
      categoryImages.find((img) => img.featured) ??
      categoryImages[0] ??
      items[0];

    return {
      title: meta.title,
      description: meta.description,
      image: image.src,
      blurDataURL: image.blurDataURL,
    };
  });
}

