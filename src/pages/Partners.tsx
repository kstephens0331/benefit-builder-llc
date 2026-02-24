import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink, Handshake } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
};

const partners = [
  {
    name: "StephensCode LLC",
    category: "Web Development",
    description:
      "The veteran-owned development company that built our website. With more than fourteen years in business and 2,600-plus projects completed, StephensCode delivers custom websites, web applications, and business automation tools to companies across the nation.",
    url: "https://stephenscode.dev",
  },
  {
    name: "AMW Cooling & Heating",
    category: "HVAC Services",
    description:
      "A veteran-owned HVAC company based in Conroe, TX. AMW provides dependable air conditioning repair, heating installation, system maintenance, and around-the-clock emergency service to homes and businesses throughout the Greater Houston area.",
    url: "https://amwairconditioning.com",
  },
  {
    name: "Terracotta Construction",
    category: "General Contracting",
    description:
      "Licensed and insured professionals offering construction, landscaping, fencing, handyman services, apartment turnovers, and 24/7 emergency repairs in Montgomery County and Greater Houston. Quality work built on trust.",
    url: "https://terracottaconstruction.com",
  },
  {
    name: "C.A.R.S Collision & Refinish",
    category: "Auto Body & Paint",
    description:
      "A veteran and family-run auto body shop in Spring, TX providing collision repair, custom paint, paintless dent removal, and spray-in bedliners. Insurance accepted, serving Spring, The Woodlands, and the North Houston area.",
    url: "https://carscollisionandrefinishshop.com",
  },
  {
    name: "SACVPN",
    category: "VPN & Cybersecurity",
    description:
      "Dedicated VPN infrastructure for businesses and individuals who demand real privacy. SACVPN provides private server instances with enterprise-grade encryption and speeds up to 700 Mbps — no shared servers, no data logs.",
    url: "https://sacvpn.com",
  },
  {
    name: "Forge-X",
    category: "Contractor Management",
    description:
      "A project management platform designed for the trades. Forge-X unites invoicing, scheduling, daily logs, and payment tracking in one clean dashboard — helping contractors and homeowners manage every project stage together.",
    url: "https://forge-x.app",
  },
  {
    name: "ColorFuse Prints",
    category: "Custom Printing",
    description:
      "High-quality DTF transfers, sublimation printing, and custom apparel for businesses and creators. ColorFuse ships vibrant, durable prints and ready-to-press transfers directly to your door with fast turnaround.",
    url: "https://colorfuseprints.com",
  },
  {
    name: "LotSwap",
    category: "Automotive Marketplace",
    description:
      "A fee-free dealer-to-dealer vehicle marketplace that removes the auction middleman. Dealers list wholesale inventory, negotiate directly, and save an average of $1,500 to $2,500 per vehicle on auction fees and transport costs.",
    url: "https://lotswap.io",
  },
  {
    name: "FC Photo Houston",
    category: "Photography",
    description:
      "A Houston photographer specializing in portraits, events, professional headshots, and creative sessions. FC Photo Houston combines high-quality imagery with a warm, personal approach to every shoot.",
    url: "https://fcphotohouston.com",
  },
  {
    name: "JustWell Clinical Research",
    category: "Clinical Research",
    description:
      "Houston's trusted clinical research partner, running ethical and inclusive trials across cardiology, neurology, dermatology, ophthalmology, and family medicine. All studies are IRB-approved with compensation for eligible participants.",
    url: "https://justwellclinical.org",
  },
  {
    name: "GradeStack",
    category: "SEO & Website Monitoring",
    description:
      "A self-hosted website audit platform that evaluates performance, SEO, security, accessibility, and best practices — then provides clear, step-by-step guidance on how to resolve each issue. No fluff, just results.",
    url: "https://gradestack.dev",
  },
  {
    name: "Get Step Ready",
    category: "Medical Education",
    description:
      "A USMLE Step 1 study platform for medical students, featuring more than 50,000 flashcards, 5,000 practice questions, video lectures, and AI-powered tools that adapt to each learner's pace and progress.",
    url: "https://getstepready.com",
  },
  {
    name: "Lefty Cartel",
    category: "Sports & Community",
    description:
      "A members-only community and apparel company created for left-handed baseball players. Lefty Cartel delivers training resources, exclusive merchandise, and a close-knit brotherhood that celebrates playing from the left side.",
    url: "https://leftycartel.net",
  },
];

export default function Partners() {
  return (
    <>
      <Helmet>
        <title>Trusted Local Partners | Benefit Builder LLC</title>
        <meta
          name="description"
          content="Benefit Builder LLC is proud to partner with trusted local businesses across Texas. Explore the companies we know, work with, and recommend."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-stone/60 bg-brand-navy py-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <Handshake className="w-10 h-10 text-brand-sand mb-4" />
            <h1 className="font-heading text-white drop-shadow text-4xl md:text-5xl">
              Trusted Local Partners
            </h1>
            <p className="mt-3 max-w-3xl text-white/90 text-lg">
              At Benefit Builder, we work alongside a network of outstanding local businesses.
              These are companies we trust, recommend, and are proud to call partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="bg-white border-b border-brand-stone/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <motion.div {...fadeIn}>
            <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">
              Our Network
            </p>
            <h2 className="font-heading text-3xl text-brand-navy mt-1 mb-8">
              Companies We Recommend
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                className="border border-brand-stone rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
              >
                <span className="text-xs tracking-wide uppercase text-brand-green font-semibold">
                  {partner.category}
                </span>
                <h3 className="font-heading text-xl text-brand-navy mt-1 mb-2">
                  {partner.name}
                </h3>
                <p className="text-brand-charcoal/90 text-sm leading-relaxed mb-4">
                  {partner.description}
                </p>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-brand-green font-semibold text-sm hover:opacity-90"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy border-b border-brand-stone/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <motion.div {...fadeIn}>
            <h2 className="font-heading text-3xl text-white mb-3">
              Ready to Optimize Your Benefits?
            </h2>
            <p className="text-white/85 max-w-2xl mx-auto mb-6">
              Benefit Builder helps employers and employees save money through smart
              Section 125 plans and supplemental coverage. Let us show you how.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-brand-green px-6 py-3 text-white font-semibold hover:opacity-90"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
