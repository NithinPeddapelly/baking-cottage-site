import type { GalleryItem } from '@/data/gallery-items';

export type CustomerTestimonial = {
  name: string;
  review: string;
  image: string;
  blurDataURL: string;
};

const names = [
  'Coco',
  'Passy',
  'Keelan',
  'Pratik',
  'Elizabeth',
  'Hailey',
  'Jaani',
  'Olivia',
  'Leila',
  'Emily',
];

const reviews = [
  'Absolutely stunning and delicious!',
  "The best birthday cake we've ever had.",
  'Looked too beautiful to cut.',
  'Everyone asked where we ordered from.',
  'Elegant design and perfect flavor.',
  'The details were unbelievably handcrafted.',
  'Fresh, soft, and beautifully decorated.',
  'Exactly what we wanted for our celebration.',
  'The cupcakes were a total highlight.',
  'Luxury presentation from start to finish.',
];

export function buildTestimonials(images: GalleryItem[]): CustomerTestimonial[] {
  if (images.length === 0) {
    return [];
  }

  return images.slice(0, Math.min(16, images.length)).map((image, index) => ({
    name: names[index % names.length],
    review: reviews[index % reviews.length],
    image: image.src,
    blurDataURL: image.blurDataURL,
  }));
}
