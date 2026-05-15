import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import type { GalleryItem } from '@/data/gallery-items';

type AboutProps = {
  images: GalleryItem[];
};

export default function About({ images }: AboutProps) {
  const aboutImage = images[Math.floor(images.length / 3)] ?? images[0];

  return (
    <section className="bg-[#FDFBF4] py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <Card className="overflow-hidden border-[#F5C8D7]/70">
          <CardContent className="p-0">
            {aboutImage ? (
              <div className="relative aspect-[4/5]">
                <Image
                  src={aboutImage.src}
                  alt="Handcrafted cake from The Baking Cottage"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={aboutImage.blurDataURL}
                  loading="lazy"
                />
              </div>
            ) : null}
          </CardContent>
        </Card>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F47FA8] sm:text-sm">About</p>
          <h2 className="font-display mt-3 text-3xl text-[#3B241A] sm:text-4xl md:text-5xl">
            Homemade warmth, boutique-level detail
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5B463D] sm:text-base">
            The Baking Cottage creates luxury cakes with handcrafted finishing, soft floral aesthetics, and premium
            flavor pairings. We also offer halal-friendly custom orders on request, made fresh to match your
            celebration style.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#F5C8D7]/60 bg-white/80 p-4">
              <dt className="text-xs uppercase tracking-wide text-[#5B463D]">Orders</dt>
              <dd className="mt-1 text-lg font-semibold text-[#3B241A]">Made to Order</dd>
            </div>
            <div className="rounded-2xl border border-[#F5C8D7]/60 bg-white/80 p-4">
              <dt className="text-xs uppercase tracking-wide text-[#5B463D]">Standard</dt>
              <dd className="mt-1 text-lg font-semibold text-[#3B241A]">Celebration Ready</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
