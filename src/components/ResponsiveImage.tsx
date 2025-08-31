type ResponsiveImageProps = {
  /** Base path without extension, e.g. "/images/about-ethos-1" (we’ll try .avif, .webp, .jpg) */
  base: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional fixed height; otherwise content-driven */
  className?: string;
  /** Optional caption text (shown below image) */
  caption?: string;
  /** Rounded and border styles (keep consistent with site) */
  rounded?: boolean;
};

export default function ResponsiveImage({
  base,
  alt,
  className = "",
  caption,
  rounded = true,
}: ResponsiveImageProps) {
  const frame = `relative overflow-hidden ${rounded ? "rounded-2xl" : ""} border border-brand-stone bg-white`;
  return (
    <figure className={`${frame} ${className}`.trim()}>
      <picture>
        <source srcSet={`${base}.avif`} type="image/avif" />
        <source srcSet={`${base}.webp`} type="image/webp" />
        {/* Fallback JPG */}
        <img
          src={`${base}.jpg`}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover"
        />
      </picture>
      {caption && (
        <figcaption className="px-4 py-3 text-sm text-brand-charcoal/80 border-t border-brand-stone">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
