import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { MediaSlot } from '../components/MediaSlot';

type ProjectMedia = {
  filename: string;
  label: string;
};

type Project = {
  number: string;
  category: string;
  name: string;
  col1Top: ProjectMedia;
  col1Bottom: ProjectMedia;
  col2: ProjectMedia;
};

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client · Bitis',
    name: 'Reels',
    col1Top: {
      filename: 'project-01-reels-col1-top.png',
      label: 'Bitis Reels · Col 1 Top',
    },
    col1Bottom: {
      filename: 'project-01-reels-col1-bottom.png',
      label: 'Bitis Reels · Col 1 Bottom',
    },
    col2: {
      filename: 'project-01-reels-col2.gif',
      label: 'Bitis Reels · Hero',
    },
  },
  {
    number: '02',
    category: 'Client · VFIS School',
    name: 'TVC',
    col1Top: {
      filename: 'project-02-tvc-col1-top.png',
      label: 'VFIS TVC · Col 1 Top',
    },
    col1Bottom: {
      filename: 'project-02-tvc-col1-bottom.png',
      label: 'VFIS TVC · Col 1 Bottom',
    },
    col2: {
      filename: 'project-02-tvc-col2.mp4',
      label: 'VFIS TVC · Hero',
    },
  },
  {
    number: '03',
    category: 'Client · CEE TEAM',
    name: 'MV — Tết Là Nhà',
    col1Top: {
      filename: 'project-03-mv-col1-top.jpg',
      label: 'Tết Là Nhà MV · Col 1 Top',
    },
    col1Bottom: {
      filename: 'project-03-mv-col1-bottom.png',
      label: 'Tết Là Nhà MV · Col 1 Bottom',
    },
    col2: {
      filename: 'project-03-mv-col2.mp4',
      label: 'Tết Là Nhà MV · Hero',
    },
  },
];

type ProjectCardProps = {
  project: Project;
  index: number;
  totalCards: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
};

function ProjectCard({ project, index, totalCards, progress, range }: ProjectCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(progress, range, [1, targetScale]);
  const stickyTop = 80 + index * 80;

  return (
    <div className="sticky" style={{ top: `${stickyTop}px` }}>
      <motion.div
        style={{ scale, background: '#0C0C0C' }}
        className="border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 origin-top"
      >
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2 sm:px-4 md:px-6 pt-2 sm:pt-4">
            <div className="flex items-end gap-6">
              <span
                className="hero-heading font-black"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {project.number}
              </span>
              <div className="flex flex-col gap-1 sm:gap-2 pb-3 sm:pb-4">
                <span
                  className="font-light uppercase tracking-widest text-[#D7E2EA] opacity-60"
                  style={{ fontSize: 'clamp(0.7rem, 1vw, 0.95rem)' }}
                >
                  {project.category}
                </span>
                <h3
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)', lineHeight: 1.1 }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            <div className="md:col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-5">
              <MediaSlot
                filename={project.col1Top.filename}
                label={project.col1Top.label}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <MediaSlot
                filename={project.col1Bottom.filename}
                label={project.col1Bottom.label}
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div className="md:col-span-3">
              <MediaSlot
                filename={project.col2.filename}
                label={project.col2.label}
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ minHeight: 'clamp(310px, 38vw, 590px)' }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => {
          const start = index / PROJECTS.length;
          const end = (index + 1) / PROJECTS.length;
          return (
            <div key={project.number} className="h-[85vh]">
              <ProjectCard
                project={project}
                index={index}
                totalCards={PROJECTS.length}
                progress={scrollYProgress}
                range={[start, end]}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
