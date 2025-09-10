import React from "react";

type Props = {
  /** Full path including extension, e.g. "/images/benefit-builder-services-2.png" */
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  loading?: "eager" | "lazy";
  decoding?: "auto" | "sync" | "async";
  width?: number;
  height?: number;
};

export default function ResponsiveImage({
  src,
  alt,
  className = "",
  caption,
  loading = "lazy",
  decoding = "async",
  width,
  height,
}: Props) {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
        className="w-full h-auto rounded-2xl border border-brand-stone/80 bg-white object-cover"
      />
      {caption ? (
        <figcaption className="mt-2 text-sm text-brand-charcoal/80">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
