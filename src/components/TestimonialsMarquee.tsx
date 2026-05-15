'use client';

import Image from 'next/image';

import type { CustomerTestimonial } from '@/data/testimonials';

type TestimonialsMarqueeProps = {
  items: CustomerTestimonial[];
};

function TestimonialRow({
  items,
  reverse,
  duration,
}: {
  items: CustomerTestimonial[];
  reverse?: boolean;
  duration: number;
}) {
  const duplicated = [...items, ...items];
  const animationName = reverse ? 'marquee-reverse' : 'marquee';

  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex gap-4 sm:gap-5 group-hover:[animation-play-state:paused]"
        style={{ animation: `${animationName} ${duration}s linear infinite` }}
      >
        {duplicated.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="min-w-[240px] rounded-3xl border border-[#F5C8D7]/70 bg-white p-3 shadow-[0_12px_35px_-22px_rgba(59,36,26,0.4)] transition-transform duration-300 hover:scale-[1.02] sm:min-w-[280px]"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src={item.image}
                alt={`${item.name} cake order`}
                fill
                sizes="(max-width: 768px) 60vw, 24vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={item.blurDataURL}
                loading="lazy"
              />
            </div>
            <div className="mt-3">
              <p className="text-sm text-[#5B463D]">&ldquo;{item.review}&rdquo;</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#3B241A]">{item.name}</span>
                <span className="text-xs text-[#F47FA8]">★★★★★</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FDFBF4] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FDFBF4] to-transparent" />
    </div>
  );
}

export default function TestimonialsMarquee({ items }: TestimonialsMarqueeProps) {
  if (items.length === 0) {
    return null;
  }

  const firstRow = items.slice(0, Math.ceil(items.length / 2));
  const secondRow = items.slice(Math.ceil(items.length / 2));

  return (
    <section className="overflow-hidden bg-[#FDFBF4] py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F47FA8] sm:text-sm">
            Happy Customers
          </p>
          <h2 className="font-display mt-3 text-3xl text-[#3B241A] sm:text-4xl md:text-5xl">
            Celebration moments we were honored to create
          </h2>
        </div>

        <div className="md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {items.slice(0, 10).map((item) => (
              <article
                key={item.name}
                className="min-w-[78vw] snap-start rounded-3xl border border-[#F5C8D7]/70 bg-white p-3 shadow-[0_12px_35px_-22px_rgba(59,36,26,0.4)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={`${item.name} cake order`}
                    fill
                    sizes="78vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={item.blurDataURL}
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm text-[#5B463D]">&ldquo;{item.review}&rdquo;</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[#3B241A]">{item.name}</span>
                    <span className="text-xs text-[#F47FA8]">★★★★★</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden space-y-4 sm:space-y-5 md:block">
          <TestimonialRow items={firstRow} duration={34} />
          <TestimonialRow items={secondRow.length > 0 ? secondRow : firstRow} reverse duration={40} />
        </div>
      </div>
    </section>
  );
}
