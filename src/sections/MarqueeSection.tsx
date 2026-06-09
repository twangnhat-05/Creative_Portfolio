import { useEffect, useRef, useState } from 'react';
import { MediaSlot } from '../components/MediaSlot';

type MarqueeItem = {
  filename: string;
  label: string;
};

const ROW_1: MarqueeItem[] = [
  { filename: 'marquee-bitis-reel.mp4', label: 'Bitis Reel' },
  { filename: 'marquee-bitis-kids.mp4', label: 'Bitis Kids Reel' },
  { filename: 'marquee-bitis-hunter.mp4', label: 'Bitis Hunter Reel' },
  { filename: 'marquee-bitis-gosto.mp4', label: 'Bitis Gosto Reel' },
  { filename: 'marquee-vfis-tvc.mp4', label: 'VFIS School TVC' },
  { filename: 'marquee-cee-mv.mp4', label: 'Tet La Nha — CEE TEAM MV' },
];

const ROW_2: MarqueeItem[] = [
  { filename: 'marquee-vfx-01.mp4', label: 'VFX Showcase 01' },
  { filename: 'marquee-vfx-02.mp4', label: 'VFX Showcase 02' },
  { filename: 'marquee-cgi-01.mp4', label: 'CGI Showcase 01' },
  { filename: 'marquee-cgi-02.mp4', label: 'CGI Showcase 02' },
  { filename: 'marquee-motion-01.mp4', label: 'Motion Showcase 01' },
  { filename: 'marquee-motion-02.mp4', label: 'Motion Showcase 02' },
];

const ROW_1_TRIPLED = [...ROW_1, ...ROW_1, ...ROW_1];
const ROW_2_TRIPLED = [...ROW_2, ...ROW_2, ...ROW_2];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const next = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(next);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateRight = offset - 200;
  const translateLeft = -(offset - 200);

  const tileClass = 'rounded-2xl object-cover shrink-0';
  const tileStyle = { width: 420, height: 270 };

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ willChange: 'transform', transform: `translateX(${translateRight}px)` }}
        >
          {ROW_1_TRIPLED.map((item, i) => (
            <MediaSlot
              key={`r1-${i}`}
              folder="marquee"
              filename={item.filename}
              label={item.label}
              className={tileClass}
              style={tileStyle}
            />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ willChange: 'transform', transform: `translateX(${translateLeft}px)` }}
        >
          {ROW_2_TRIPLED.map((item, i) => (
            <MediaSlot
              key={`r2-${i}`}
              folder="marquee"
              filename={item.filename}
              label={item.label}
              className={tileClass}
              style={tileStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
