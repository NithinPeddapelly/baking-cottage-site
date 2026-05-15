'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import type { CategoryCard } from '@/data/gallery';
import { Card, CardContent } from '@/components/ui/card';

type FeaturedCategoriesProps = {
  categories: CategoryCard[];
};

export default function FeaturedCategories({ categories }: FeaturedCategoriesProps) {
  return (
    <section className="bg-[#FDFBF4] py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F47FA8] sm:text-sm">
            Featured Categories
          </p>
          <h2 className="font-display mt-3 text-3xl text-[#3B241A] sm:text-4xl md:text-5xl">
            Boutique selections for every celebration
          </h2>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="min-w-[74vw] snap-start"
            >
              <Card className="h-full overflow-hidden border-[#F5C8D7]/70">
                <CardContent className="p-0">
                  <div className="group relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={category.blurDataURL}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B241A]/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-[#3B241A]">{category.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5B463D]">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 hidden grid-cols-1 gap-5 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full overflow-hidden border-[#F5C8D7]/70">
                <CardContent className="p-0">
                  <div className="group relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={category.blurDataURL}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B241A]/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-[#3B241A]">{category.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5B463D]">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
