import { FadeIn } from '../components/FadeIn';

type Service = {
  number: string;
  name: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    number: '01',
    name: 'VFX',
    description:
      'Visual effects and compositing that elevate footage into cinematic moments — green screen, simulations, and seamless integration of practical and digital elements.',
  },
  {
    number: '02',
    name: '3D & CGI',
    description:
      'Photoreal 3D models and CGI assets integrated into live action, bringing impossible shots and stylized worlds to life.',
  },
  {
    number: '03',
    name: 'Motion Graphics',
    description:
      'Title sequences, kinetic typography, and animated graphics built in After Effects that add energy and storytelling to every cut.',
  },
  {
    number: '04',
    name: 'Color Grading',
    description:
      'Cinematic color work in DaVinci Resolve — mood, tone, and consistency dialed in across every frame and every shot.',
  },
  {
    number: '05',
    name: 'Video Editing',
    description:
      'Story-first editing in Premiere Pro for reels, TVCs, and music videos with rhythm, pacing, and emotion at the core.',
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF', color: '#0C0C0C' }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)', lineHeight: 1 }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                borderBottom:
                  i === SERVICES.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : 'none',
              }}
            >
              <span
                className="font-black shrink-0"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                  lineHeight: 1,
                }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 flex-1">
                <h3
                  className="font-medium uppercase"
                  style={{
                    color: '#0C0C0C',
                    fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                    lineHeight: 1.1,
                  }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
