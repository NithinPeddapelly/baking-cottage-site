'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';

import { buttonVariants } from '@/components/ui/button';
import type { GalleryItem } from '@/data/gallery-items';
import { cn } from '@/lib/utils';

type HeroProps = {
  images: GalleryItem[];
};

const collageLayout = [
  'left-2 top-6 h-44 w-32 -rotate-6 sm:h-52 sm:w-40',
  'left-24 top-0 h-52 w-40 rotate-3 sm:left-32 sm:h-64 sm:w-48',
  'right-2 top-8 h-44 w-32 -rotate-2 sm:h-56 sm:w-40',
  'left-4 bottom-8 h-40 w-28 rotate-6 sm:left-10 sm:h-48 sm:w-36',
  'right-10 bottom-0 h-44 w-32 -rotate-3 sm:h-52 sm:w-40',
];

export default function Hero({ images }: HeroProps) {
  const whatsappUrl = `https://wa.me/447733032675?text=${encodeURIComponent(
    "Hi The Baking Cottage, I'd like to place an order for a custom cake in Edinburgh."
  )}`;

  const heroImages = images.slice(0, 5);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#FFF8FB] via-[#FDFBF4] to-[#FDFBF4] pb-12 pt-24 sm:pb-20 sm:pt-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#F47FA8]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-14 top-24 h-72 w-72 rounded-full bg-[#F47FA8]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-8 h-72 w-72 rounded-full bg-[#B7C96B]/25 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center rounded-full border border-[#F47FA8]/30 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3B241A] backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
            <span className="md:hidden">Made Fresh Daily</span>
            <span className="hidden md:inline">Made Fresh Daily • Handcrafted in Edinburgh</span>
          </span>

          <h1 className="font-display mx-auto mt-4 max-w-[14ch] text-[2.25rem] leading-[1.02] text-[#3B241A] sm:mt-6 sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl">
            Handcrafted Cakes Made With Love
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#5B463D] sm:mt-5 sm:text-lg lg:mx-0">
            Luxury homemade cakes, cupcakes, and celebration desserts designed to make every moment unforgettable.
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:justify-center sm:gap-3 lg:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('whatsapp_click', { source: 'hero' })}
              className={cn(buttonVariants({ variant: 'whatsapp', size: 'default' }), 'sm:h-12 sm:px-8')}
            >
              Order Now
            </a>
            <a href="#contact" className={cn(buttonVariants({ variant: 'luxury', size: 'lg' }))}>
              Custom Cakes
            </a>
            <Link href="#gallery" className={cn(buttonVariants({ variant: 'soft', size: 'default' }), 'sm:h-12 sm:px-8')}>
              View Gallery
            </Link>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[#F47FA8]/30 bg-white/80 px-4 py-3 shadow-sm sm:mt-10">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F47FA8]" />
            <p className="text-sm font-medium text-[#3B241A]">Made Fresh Daily</p>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[420px] md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 p-2 shadow-[0_24px_60px_-28px_rgba(59,36,26,0.35)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem]">
              <Image
                src={heroImages[0]?.src ?? '/images/hero-cake.jpg'}
                alt="Luxury homemade cake from The Baking Cottage"
                fill
                sizes="92vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={heroImages[0]?.blurDataURL}
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto hidden h-[460px] w-full max-w-[480px] md:block sm:h-[560px]"
        >
          {heroImages.map((image, index) => (
            <motion.div
              key={image.src}
              className={cn(
                'absolute overflow-hidden rounded-[1.55rem] border border-white/70 bg-white/90 p-2 shadow-[0_24px_60px_-28px_rgba(59,36,26,0.35)]',
                collageLayout[index] ?? collageLayout[0]
              )}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.12,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.15rem]">
                <Image
                  src={image.src}
                  alt={`Featured cake ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 28vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                  priority={index < 2}
                />
              </div>
            </motion.div>
          ))}
          <div className="pointer-events-none absolute -bottom-3 left-1/2 h-9 w-56 -translate-x-1/2 rounded-full bg-[#3B241A]/15 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
