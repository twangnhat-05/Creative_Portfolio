import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { MediaSlot } from '../components/MediaSlot';

type Slide = {
  skill: string;
  title: string;
  description: string;
  bg: string;
  filename: string;
};

const SLIDES: Slide[] = [
  {
    skill: 'VFX',
    title: 'Visual Effects',
    description:
      'Compositing, simulations, and green-screen work that push footage past reality.',
    bg: '#F4845F',
    filename: 'hero-char-vfx.png',
  },
  {
    skill: '3D',
    title: '3D & CGI Craft',
    description:
      'Photoreal 3D models and CGI assets integrated seamlessly into live action.',
    bg: '#6BBF7A',
    filename: 'hero-char-3d.png',
  },
  {
    skill: 'EDIT',
    title: 'Video Editing',
    description:
      'Story-first editing in Premiere Pro for reels, TVCs, and music videos.',
    bg: '#E882B4',
    filename: 'hero-char-editor.png',
  },
  {
    skill: 'COLOR',
    title: 'Color Grading',
    description:
      'Cinematic grading in DaVinci Resolve — mood, tone, and consistency across every frame.',
    bg: '#6EB5FF',
    filename: 'hero-char-color.png',
  },
];

const NAV_LINKS = ['About', 'Services', 'Projects', 'Contact'];

const NOISE_BG = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

const liquidGlass: React.CSSProperties = {
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  background: 'rgba(255, 255, 255, 0.12)',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  boxShadow:
    'inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.12)',
};

type Role = 'center' | 'left' | 'right' | 'back';

function getRole(index: number, activeIndex: number): Role {
  if (index === activeIndex) return 'center';
  if (index === (activeIndex + 3) % 4) return 'left';
  if (index === (activeIndex + 1) % 4) return 'right';
  return 'back';
}

function getRoleStyle(role: Role, isMobile: boolean): React.CSSProperties {
  const transition = 'all 650ms cubic-bezier(0.4, 0, 0.2, 1)';
  const willChange = 'transform, filter, opacity, left, height, bottom';

  switch (role) {
    case 'center':
      return {
        transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 20,
        left: '50%',
        height: isMobile ? '60%' : '92%',
        bottom: isMobile ? '22%' : 0,
        transition,
        willChange,
      };
    case 'left':
      return {
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '20%' : '30%',
        height: isMobile ? '16%' : '28%',
        bottom: isMobile ? '32%' : '12%',
        transition,
        willChange,
      };
    case 'right':
      return {
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '80%' : '70%',
        height: isMobile ? '16%' : '28%',
        bottom: isMobile ? '32%' : '12%',
        transition,
        willChange,
      };
    case 'back':
      return {
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(4px)',
        opacity: 1,
        zIndex: 5,
        left: '50%',
        height: isMobile ? '13%' : '22%',
        bottom: isMobile ? '32%' : '12%',
        transition,
        willChange,
      };
  }
}

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = `${import.meta.env.BASE_URL}hero/${slide.filename}`;
    });
  }, []);

  const navigate = (dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (dir === 'next' ? (prev + 1) % 4 : (prev + 3) % 4));
    setTimeout(() => setIsAnimating(false), 650);
  };

  const active = SLIDES[activeIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: active.bg,
        transition: 'background-color 650ms cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: "'Kanit', sans-serif",
      }}
    >
      <div className="relative w-full" style={{ height: '100vh', overflow: 'hidden' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 50,
            backgroundImage: NOISE_BG,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
            opacity: 0.4,
          }}
        />

        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none"
          style={{ zIndex: 2, top: '18%' }}
        >
          <span
            style={{
              fontFamily: "'Anton', 'Impact', sans-serif",
              fontSize: 'clamp(90px, 28vw, 380px)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              whiteSpace: 'nowrap',
              transition: 'opacity 300ms',
            }}
          >
            {active.skill}
          </span>
        </div>

        <div
          className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex justify-between items-center gap-3"
          style={{ zIndex: 60 }}
        >
          <div
            className="rounded-full px-3 py-2 sm:px-5 sm:py-2.5"
            style={liquidGlass}
          >
            <span
              className="text-white font-semibold uppercase whitespace-nowrap"
              style={{
                opacity: 0.95,
                letterSpacing: '0.14em',
                fontSize: 'clamp(9px, 1.1vw, 12px)',
              }}
            >
              <span className="sm:hidden">Hi! I&apos;m Nhật</span>
              <span className="hidden sm:inline">Hi! I&apos;m Trương Quang Nhật</span>
            </span>
          </div>
          <nav
            className="flex gap-3 sm:gap-5 md:gap-7 rounded-full px-4 py-2 sm:px-6 sm:py-2.5"
            style={liquidGlass}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white font-semibold uppercase hover:opacity-70 transition-opacity duration-200"
                style={{
                  opacity: 0.95,
                  letterSpacing: '0.14em',
                  fontSize: 'clamp(9px, 1.1vw, 12px)',
                }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          {SLIDES.map((slide, i) => {
            const role = getRole(i, activeIndex);
            const style = getRoleStyle(role, isMobile);
            return (
              <div
                key={slide.filename}
                style={{ position: 'absolute', aspectRatio: '0.6 / 1', ...style }}
              >
                <MediaSlot
                  folder="hero"
                  filename={slide.filename}
                  label={slide.title}
                  className="w-full h-full"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                  }}
                />
              </div>
            );
          })}
        </div>

        <div
          className="absolute bottom-0 inset-x-0 pointer-events-none"
          style={{
            zIndex: 30,
            height: '220px',
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(12,12,12,0.25) 35%, rgba(12,12,12,0.75) 75%, #0C0C0C 100%)',
          }}
        />

        <div
          className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 rounded-3xl px-5 py-4 sm:px-6 sm:py-5"
          style={{ zIndex: 60, maxWidth: 360, ...liquidGlass }}
        >
          <p
            className="font-bold uppercase tracking-widest mb-1.5 sm:mb-2 text-base sm:text-[22px] text-white"
            style={{
              opacity: 0.98,
              letterSpacing: '0.04em',
              transition: 'opacity 300ms',
            }}
          >
            {active.title}
          </p>
          <p
            className="hidden sm:block text-xs sm:text-sm text-white mb-4 sm:mb-5"
            style={{ opacity: 0.9, lineHeight: 1.6, transition: 'opacity 300ms' }}
          >
            {active.description}
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate('prev')}
              aria-label="Previous slide"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 text-white"
              style={liquidGlass}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              }}
            >
              <ArrowLeft size={24} strokeWidth={2.25} />
            </button>
            <button
              type="button"
              onClick={() => navigate('next')}
              aria-label="Next slide"
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 text-white"
              style={liquidGlass}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              }}
            >
              <ArrowRight size={24} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        <a
          href="#projects"
          className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 flex items-center gap-2 text-white hover:opacity-100 transition-opacity duration-200 rounded-full px-4 py-2 sm:px-5 sm:py-3"
          style={{
            zIndex: 60,
            fontFamily: "'Anton', 'Impact', sans-serif",
            fontSize: 'clamp(20px, 4vw, 56px)',
            fontWeight: 400,
            opacity: 0.95,
            letterSpacing: '0.04em',
            lineHeight: 1,
            textTransform: 'uppercase',
            textDecoration: 'none',
            ...liquidGlass,
          }}
        >
          View Work
          <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={2.25} />
        </a>
      </div>
    </section>
  );
}
