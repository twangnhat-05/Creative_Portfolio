import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

type CharProps = {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function Char({ char, index, total, progress }: CharProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
}

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = Array.from(text);

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
