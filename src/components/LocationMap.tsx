'use client';

import { motion } from 'framer-motion';

const MAPS_LINK =
  'https://www.google.com/maps/place/The+Baking+Cottage/@55.9246383,-3.1244049,17.85z/data=!4m6!3m5!1s0x4887b90c2757686b:0x68f0812fcbfe8cc8!8m2!3d55.9251466!4d-3.1254721!16s%2Fg%2F11lmr0hz3t';

const MAPS_EMBED =
  'https://maps.google.com/maps?q=55.9251466,-3.1254721&hl=en&z=17&output=embed';

const badges = ['Edinburgh Based', 'Made Fresh to Order'] as const;

export default function LocationMap() {
  return (
    <section className="bg-[#FDFBF4] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F47FA8] sm:text-sm">
            Find Us
          </p>
          <h2 className="font-display mt-3 text-3xl text-[#3B241A] sm:text-4xl md:text-5xl">
            In Edinburgh
          </h2>
        </motion.div>

        {/* Card — stacks on mobile, side-by-side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="overflow-hidden rounded-[2rem] border border-[#F5C8D7]/70 bg-white shadow-[0_20px_60px_-35px_rgba(59,36,26,0.35)] lg:grid lg:grid-cols-[1fr_1.35fr]"
        >
          {/* ── Left — address details ──────────────────────────────────────── */}
          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:p-10">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-[#F5C8D7] bg-[#FFF8FB] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F47FA8]"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Address block */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F47FA8]">
                Our address
              </p>
              <address className="mt-3 not-italic">
                <p className="font-display text-xl leading-snug text-[#3B241A] sm:text-2xl">
                  The Baking Cottage
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5B463D] sm:text-base">
                  Sandilands Close
                  <br />
                  Edinburgh, EH16 4HS
                  <br />
                  Scotland, UK
                </p>
              </address>
              <p className="mt-4 text-sm leading-relaxed text-[#5B463D] sm:text-base">
                Custom cakes and sweet treats made fresh to order in Edinburgh.
              </p>
            </div>

            {/* CTA */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F47FA8] to-[#F9A8C2] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#F47FA8]/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-[#ef6d9b] hover:to-[#f79cbd] hover:shadow-lg hover:shadow-[#F47FA8]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F47FA8]/50 sm:w-auto"
            >
              <MapPinIcon />
              Open in Google Maps
            </a>
          </div>

          {/* ── Right — embedded map ────────────────────────────────────────── */}
          <div className="relative h-64 w-full sm:h-80 lg:h-full lg:min-h-[380px]">
            <iframe
              src={MAPS_EMBED}
              title="The Baking Cottage location on Google Maps"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            {/* Subtle inset shadow to blend with card edges */}
            <div className="pointer-events-none absolute inset-0 rounded-none shadow-[inset_0_0_0_1px_rgba(245,200,215,0.4)] lg:rounded-r-[2rem]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** Minimal inline pin icon — no extra icon dependency needed */
function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.218-4.402 3.218-6.853a7.5 7.5 0 00-15 0c0 2.451 1.274 4.774 3.218 6.853a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
