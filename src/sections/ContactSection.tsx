import { Mail, Facebook, Phone } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

type ContactLink = {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
};

const LINKS: ContactLink[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'twangnhat@gmail.com',
    href: 'mailto:twangnhat@gmail.com',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'facebook.com/qunhatt',
    href: 'https://www.facebook.com/qunhatt',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+84 797 915 432',
    href: 'tel:+84797915432',
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40"
      style={{ background: '#0C0C0C' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide text-center max-w-xl leading-snug"
            style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.15rem)' }}
          >
            Got a story to tell or a project in mind? Reach out — I&apos;d love to help bring it to life.
          </p>
        </FadeIn>

        <div className="w-full flex flex-col gap-3 sm:gap-4">
          {LINKS.map((link, i) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith('http');
            return (
              <FadeIn key={link.label} delay={0.2 + i * 0.1} y={20}>
                <a
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 sm:gap-6 md:gap-8 w-full px-5 sm:px-7 md:px-10 py-5 sm:py-6 md:py-7 rounded-full border-2 border-[#D7E2EA]/30 hover:border-[#D7E2EA] transition-colors duration-300"
                >
                  <Icon
                    className="text-[#D7E2EA] shrink-0 transition-transform duration-300 group-hover:scale-110"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <span
                    className="text-[#D7E2EA]/60 font-light uppercase tracking-widest shrink-0"
                    style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.95rem)' }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="text-[#D7E2EA] font-medium ml-auto text-right break-all"
                    style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.4rem)' }}
                  >
                    {link.value}
                  </span>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
