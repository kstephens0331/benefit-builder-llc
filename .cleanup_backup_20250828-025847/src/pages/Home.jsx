import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "../components/Layout.jsx";
import Hero from "../components/Hero.jsx";
import FeatureGrid from "../components/FeatureGrid.jsx";
import Process from "../components/Process.jsx";
import SavingsSnapshot from "../components/SavingsSnapshot.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ.jsx";
import LeadCapture from "../components/LeadCapture.jsx";
import CTA from "../components/CTA.jsx";
import SEOOrg from "../components/SEOOrg.jsx";
import FAQSchema from "../components/FAQSchema.jsx";

export default function Home() {
  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <title>Benefit Builder — Benefits your team understands.</title>
          <meta name="description" content="On-brand benefits that support retention, recruiting, and employee confidence — implemented with clarity and care." />
        </Helmet>
        <SEOOrg />
        <FAQSchema />

        <Hero />
        <FeatureGrid />
        <Process />
        <SavingsSnapshot />
        <Testimonials />
        <FAQ />
        <LeadCapture />
        <CTA />
      </Layout>
    </HelmetProvider>
  );
}

