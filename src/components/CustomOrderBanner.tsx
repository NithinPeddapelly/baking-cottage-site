'use client';

import { track } from '@vercel/analytics';
import { buttonVariants } from '@/components/ui/button';

type CustomOrderBannerProps = {
  whatsappUrl: string;
};

export default function CustomOrderBanner({ whatsappUrl }: CustomOrderBannerProps) {
  return (
    <section className="bg-[#FDFBF4] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#F5C8D7]/60 bg-gradient-to-r from-[#F47FA8]/15 via-[#FFF8FB] to-[#C6B4E1]/30 p-6 shadow-[0_20px_50px_-30px_rgba(59,36,26,0.3)] sm:p-8 lg:p-10">
          <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F47FA8] sm:text-sm">
                Custom Order
              </p>
              <h3 className="font-display mt-2 text-3xl text-[#3B241A] sm:text-4xl">
                Planning a special celebration?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B463D] sm:text-base">
                Share your theme, colors, and date with us. We will design a luxury handcrafted cake tailored to your
                event.
              </p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click', { source: 'custom_order_banner' })} className={buttonVariants({ size: 'lg' })}>
              Start Custom Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
