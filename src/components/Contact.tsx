import { buttonVariants } from '@/components/ui/button';

type ContactProps = {
  whatsappUrl: string;
};

export default function Contact({ whatsappUrl }: ContactProps) {
  return (
    <section className="bg-gradient-to-b from-[#FFF8FB] to-[#FDFBF4] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#F5C8D7]/70 bg-white/90 p-6 shadow-[0_20px_60px_-35px_rgba(59,36,26,0.35)] sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F47FA8] sm:text-sm">Contact</p>
          <h2 className="font-display mt-3 text-3xl text-[#3B241A] sm:text-4xl">Ready to order your dream cake?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5B463D] sm:text-base">
            Message us on WhatsApp with your event date, number of servings, and design ideas. We will help you plan
            a handcrafted cake that feels personal and unforgettable.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: 'lg' })}>
              Order on WhatsApp
            </a>
            <a
              href="mailto:hello@thebakingcottage.com"
              className={buttonVariants({ variant: 'soft', size: 'lg' })}
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
