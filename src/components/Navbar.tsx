'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { track } from '@vercel/analytics';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappUrl = `https://wa.me/447733032675?text=${encodeURIComponent(
    "Hi The Baking Cottage, I'd like to place a custom cake order in Edinburgh."
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

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
      href: whatsappUrl,
      image: '/images/logos/whatsapp.png',
    },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF4]/92 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white p-1 shadow-md transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
              <Image
                src="/images/logos/logo.jpg"
                alt="The Baking Cottage"
                fill
                priority
                className="object-cover"
                sizes="64px"
              />
            </div>
            <span className="font-display text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#F47FA8] to-[#C6B4E1] bg-clip-text text-transparent hidden sm:inline">
              The Baking Cottage
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-[#3B241A] font-medium transition-colors duration-300 hover:text-[#F47FA8] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#F47FA8] after:to-[#C6B4E1] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('whatsapp_click', { source: 'navbar_desktop' })}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.266 9.857 9.857 0 00-3.254 2.693 9.864 9.864 0 001.526 15.913 9.868 9.868 0 005.97 1.948h.005a9.87 9.87 0 009.861-9.861 9.883 9.883 0 00-2.868-6.957 9.873 9.873 0 00-6.99-2.999z" />
            </svg>
            Order
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 transition-colors duration-300 hover:bg-white/50 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${
                isOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col bg-gradient-to-br from-[#FFF8FB] via-[#FDFBF4] to-[#F9F3EE] md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between border-b border-[#F47FA8]/20 px-4 py-4">
              <Link href="#home" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white p-1 shadow-sm">
                  <Image
                    src="/images/logos/logo.jpg"
                    alt="The Baking Cottage"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <span className="font-display text-lg text-[#3B241A]">The Baking Cottage</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-[#F47FA8]/25 bg-white/70 p-2 text-[#3B241A] shadow-sm"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-between px-4 py-8">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F47FA8]">Navigate</p>

                <div className="space-y-5">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-2xl border border-white/70 bg-white/70 px-4 py-4 text-3xl font-light tracking-tight text-[#3B241A] shadow-[0_10px_30px_-24px_rgba(59,36,26,0.3)]"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pb-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { setIsOpen(false); track('whatsapp_click', { source: 'navbar_mobile' }); }}
                  className="block rounded-full bg-gradient-to-r from-[#F47FA8] to-[#F9A8C2] px-5 py-4 text-center text-base font-semibold text-white shadow-xl"
                >
                  Order on WhatsApp
                </a>
                <Link
                  href="#gallery"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full border border-[#F47FA8]/30 bg-white/70 px-5 py-4 text-center text-base font-semibold text-[#3B241A]"
                >
                  View Gallery
                </Link>

                <div className="pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5B463D]">Follow</p>
                  <div className="mt-3 flex items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.label === 'WhatsApp' ? '_blank' : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        onClick={() => social.label === 'WhatsApp' && track('whatsapp_click', { source: 'navbar_social' })}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F47FA8]/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-[#F47FA8]/40 hover:bg-[#FFF8FB]"
                      >
                        <Image src={social.image} alt={social.label} width={28} height={28} className="h-7 w-7 object-contain" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
