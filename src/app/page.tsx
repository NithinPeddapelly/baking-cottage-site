import About from '@/components/About';
import Contact from '@/components/Contact';
import LocationMap from '@/components/LocationMap';
import CustomOrderBanner from '@/components/CustomOrderBanner';
import FeaturedCategories from '@/components/FeaturedCategories';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import InstagramFeed from '@/components/InstagramFeed';
import Navbar from '@/components/Navbar';
import TestimonialsMarquee from '@/components/TestimonialsMarquee';
import { galleryItems } from '@/data/gallery-items';
import { buildCategoryCards } from '@/data/gallery';
import { buildTestimonials } from '@/data/testimonials';

export default function Home() {
  const testimonials = buildTestimonials(galleryItems);
  const categories = buildCategoryCards(galleryItems);

  const whatsappUrl = `https://wa.me/447733032675?text=${encodeURIComponent(
    "Hi The Baking Cottage, I'd like to place a custom cake order in Edinburgh."
  )}`;

  return (
    <>
      <Navbar />
      <Hero images={galleryItems} />
      <FeaturedCategories categories={categories} />
      <TestimonialsMarquee items={testimonials} />
      <section id="gallery" className="pt-28 md:pt-36">
        <Gallery images={galleryItems} />
      </section>
      <InstagramFeed images={galleryItems} />
      <CustomOrderBanner whatsappUrl={whatsappUrl} />
      <section id="about">
        <About images={galleryItems} />
      </section>
      <section id="contact">
        <Contact whatsappUrl={whatsappUrl} />
      </section>
      <LocationMap />
      <Footer />
      <FloatingWhatsApp whatsappUrl={whatsappUrl} />
    </>
  );
}

