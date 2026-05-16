'use client';

import { track } from '@vercel/analytics';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/the.baking.cottage/',
      image: '/images/logos/instagram.png',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61556988627440',
      image: '/images/logos/facebook.png',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/447733032675?text=Hi%20The%20Baking%20Cottage%2C%20I%27d%20like%20to%20place%20a%20custom%20cake%20order%20in%20Edinburgh.',
      image: '/images/logos/whatsapp.png',
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#3B241A] via-[#5A3825] to-[#3B241A] py-10 text-[#FDFBF4]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-md">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-white p-1 shadow-lg">
              <Image
                src="/images/logos/logo.jpg"
                alt="The Baking Cottage"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div>
              <p className="font-display text-2xl">The Baking Cottage</p>
              <p className="mt-1 text-sm text-[#FDFBF4]/80">Luxury homemade cakes crafted in Edinburgh.</p>
            </div>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#FDFBF4]/65">
            Halal-friendly custom orders available on request.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[#FDFBF4]/90">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FDFBF4]/70">Follow Our Creations</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                onClick={() => social.label === 'WhatsApp' && track('whatsapp_click', { source: 'footer' })}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <Image src={social.image} alt={social.label} width={28} height={28} className="h-7 w-7 object-contain" />
              </a>
            ))}
          </div>

          <p className="text-xs text-[#FDFBF4]/70">© {new Date().getFullYear()} The Baking Cottage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
