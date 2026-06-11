import { Head } from "vite-react-ssg";
import { SITE_URL, BUSINESS_NAME, DEFAULT_OG_IMAGE } from "./site";

type JsonLdObject = Record<string, unknown>;

export type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: JsonLdObject[];
  /** LCP hero image to preload at high priority (improves Largest Contentful Paint). */
  preloadImage?: string;
};

export default function Seo({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noindex = false,
  jsonLd = [],
  preloadImage,
}: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE;
  const ogImageAlt = imageAlt ?? `${title} preview image`;
  const robots = noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />
      {preloadImage ? (
        <link rel="preload" as="image" href={preloadImage} fetchPriority="high" />
      ) : null}

      <meta property="og:site_name" content={BUSINESS_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Head>
  );
}
