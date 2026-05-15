import Image from 'next/image';

import type { GalleryItem } from '@/data/gallery-items';

type InstagramFeedProps = {
  images: GalleryItem[];
};

export default function InstagramFeed({ images }: InstagramFeedProps) {
  const feedImages = images.slice(0, 8);

  return (
    <section className="bg-[#FDFBF4] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F47FA8] sm:text-sm">Instagram Feed</p>
            <h2 className="font-display mt-3 text-3xl text-[#3B241A] sm:text-4xl md:text-5xl">
              Fresh from The Baking Cottage
            </h2>
          </div>
          <a
            href="https://www.instagram.com/the.baking.cottage/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B241A] underline decoration-[#F47FA8] decoration-2 underline-offset-4"
          >
            <Image src="/images/logos/instagram.png" alt="Instagram" width={18} height={18} className="h-5 w-5 object-contain" />
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
          {feedImages.map((image) => (
            <article
              key={image.src}
              className="group relative overflow-hidden rounded-3xl border border-[#F5C8D7]/60 bg-white"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt="The Baking Cottage Instagram-style cake post"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
