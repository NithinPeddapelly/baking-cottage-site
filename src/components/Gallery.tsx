'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { buttonVariants } from '@/components/ui/button';
import type { GalleryItem } from '@/data/gallery-items';
import { galleryCategories, type GalleryCategory } from '@/data/gallery-categories';
import { cn } from '@/lib/utils';

type GalleryProps = {
  images: GalleryItem[];
};

export default function Gallery({ images }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') {
      return images;
    }

    return images.filter((image) => image.category === activeCategory);
  }, [activeCategory, images]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImage(null);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  return (
    <section className="relative overflow-x-hidden bg-gradient-to-b from-[#FFF8FB] via-[#FDFBF4] to-[#F5C8D7]/25 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F47FA8] sm:text-sm">Gallery</p>
          <h2 className="font-display mt-3 text-3xl text-[#3B241A] sm:text-4xl md:text-5xl">
            Instagram-inspired cake showcase
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5B463D] sm:text-base">
            Browse handcrafted designs from our complete image collection. Every photo reflects our signature
            homemade luxury finish.
          </p>
        </div>

        <div className="relative mt-8 md:hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#FDFBF4] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#FDFBF4] to-transparent" />
          <div className="sticky top-20 z-30 -mx-4 overflow-hidden px-4">
            <div
              className={cn(
                'flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]',
                ' [&::-webkit-scrollbar]:hidden'
              )}
            >
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-semibold tracking-[0.12em] transition-all duration-300',
                    activeCategory === category
                      ? 'border-[#F47FA8] bg-[#F47FA8] text-white shadow-[0_10px_25px_rgba(244,127,168,0.25)] scale-[1.03]'
                      : 'border-[#F5C8D7] bg-[#FFF8FB] text-[#6B4A3A] hover:bg-white'
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 hidden flex-wrap justify-center gap-2 sm:gap-3 md:flex">
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors sm:text-sm',
                activeCategory === category
                  ? 'border-[#F47FA8] bg-[#F47FA8] text-white shadow-[0_10px_25px_rgba(244,127,168,0.25)]'
                  : 'border-[#F5C8D7] bg-[#FFF8FB] text-[#6B4A3A] hover:bg-white'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 md:hidden">
          {filteredImages.map((image) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(image)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.25 }}
              className="group relative overflow-hidden rounded-xl border border-[#F5C8D7]/60 bg-white/90 text-left shadow-[0_8px_20px_-12px_rgba(59,36,26,0.35)]"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B241A]/45 via-transparent to-transparent" />
                <span className="absolute bottom-1.5 left-1.5 rounded-full border border-white/40 bg-white/25 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                  {image.category}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div layout className="mt-10 hidden columns-2 gap-4 space-y-4 md:columns-3 md:block lg:columns-3">
          {filteredImages.map((image, index) => (
            <motion.button
              layout
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.2) }}
              type="button"
              key={image.src}
              onClick={() => setActiveImage(image)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-3xl border border-[#F5C8D7]/60 bg-white/90 text-left shadow-[0_16px_45px_-28px_rgba(59,36,26,0.45)]"
            >
              <div className="relative min-h-[220px] w-full">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={900}
                  height={1200}
                  sizes="(max-width: 768px) 50vw, 31vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B241A]/50 via-transparent to-transparent opacity-90" />
                <span className="absolute bottom-2 left-2 rounded-full border border-white/40 bg-white/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur md:bottom-3 md:left-3 md:px-3 md:text-[11px]">
                  {image.category}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/447733032675?text=Hi%20The%20Baking%20Cottage%2C%20I%27d%20like%20to%20order%20a%20cake"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'luxury', size: 'lg' })}
          >
            Request a Custom Design
          </a>
        </div>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[#3B241A]/80 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-3"
              initial={{ scale: 0.96, y: 14 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 14 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-5 top-5 z-10 rounded-full bg-black/45 px-3 py-1 text-sm text-white"
              >
                Close
              </button>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  sizes="90vw"
                  className="object-contain bg-black/25"
                  placeholder="blur"
                  blurDataURL={activeImage.blurDataURL}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
