import { Helmet } from "react-helmet-async";

export default function FAQSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will this be complicated for HR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — we set up enrollment, communications, and documentation. Your team gets a simple checklist and we handle the heavy lift."
        }
      },
      {
        "@type": "Question",
        "name": "Can this work with our current benefits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We complement what you already offer and make changes only where they help."
        }
      },
      {
        "@type": "Question",
        "name": "How do we measure success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We define success up front (participation, employee satisfaction, total cost) and review after enrollment and at renewal."
        }
      }
    ]
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

