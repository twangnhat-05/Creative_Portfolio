import { useState } from 'react';

type MediaSlotProps = {
  filename: string;
  label: string;
  folder?: string;
  className?: string;
  style?: React.CSSProperties;
};

const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i;

export function MediaSlot({
  filename,
  label,
  folder = 'projects',
  className,
  style,
}: MediaSlotProps) {
  const [errored, setErrored] = useState(false);
  const src = `${import.meta.env.BASE_URL}${folder}/${filename}`;
  const isVideo = VIDEO_EXT.test(filename);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-[#141414] border-2 border-dashed border-[#D7E2EA]/30 ${className ?? ''}`}
        style={style}
      >
        <div className="text-center p-4 sm:p-6 max-w-full">
          <div className="text-[#D7E2EA]/50 text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-2 sm:mb-3">
            Drop file here
          </div>
          <div
            className="text-[#D7E2EA] font-mono text-xs sm:text-sm break-all leading-tight"
            style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
          >
            {filename}
          </div>
          <div className="text-[#D7E2EA]/40 text-[10px] sm:text-xs mt-2 sm:mt-3 uppercase tracking-wider">
            {label}
          </div>
        </div>
      </div>
    );
  }

  if (isVideo) {
    return (
      <video
        src={src}
        className={className}
        style={style}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <img
      src={src}
      className={className}
      style={style}
      loading="lazy"
      alt={label}
      onError={() => setErrored(true)}
    />
  );
}
