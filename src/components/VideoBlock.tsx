// src/components/VideoBlock.tsx
// Reusable video block with responsive width control

type VProps = {
  /** MP4 source path (public-relative) */
  src?: string;
  /** Poster image path (public-relative) */
  poster?: string;
  /** Optional caption text below the video */
  caption?: string;
  /**
   * Desktop width. On mobile it is always full-width.
   * - "full"    -> 100% (all breakpoints)
   * - "half"    -> 100% on mobile, 50% on md+
   * - "quarter" -> 100% on mobile, 25% on md+
   */
  size?: "full" | "half" | "quarter";
  /** Extra utility classes for the outer wrapper */
  className?: string;
};

export default function VideoBlock({
  src = "public/images/benefit-builder-explainer.mp4",
  poster = "/images/workplace-stone.svg",
  caption,
  size = "full",
  className = "",
}: VProps) {
  const wrap =
    size === "quarter" ? "w-full md:w-1/4" :
    size === "half"    ? "w-full md:w-1/2" :
                         "w-full";

  return (
    <div className={`${wrap} ${className}`.trim()}>
      <figure className="rounded-2xl overflow-hidden border border-brand-stone bg-white">
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-auto block"
          aria-label="Services explainer video"
        >
          <source src={src} type="video/mp4" />
        </video>
        {caption && (
          <figcaption className="px-5 py-3 text-sm text-brand-charcoal/80 border-t border-brand-stone">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
