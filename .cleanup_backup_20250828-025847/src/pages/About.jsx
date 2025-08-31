import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "../components/Layout.jsx";

export default function About() {
  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <title>About — Benefit Builder</title>
          <meta name="description" content="Benefit Builder LLC serves employers with clear, growth-minded benefits strategy." />
        </Helmet>
        <h1 className="font-heading text-3xl text-navy mb-4">About</h1>
        <p className="text-charcoal/80 max-w-3xl">
          Benefit Builder LLC partners with organizations to align benefits with business outcomes.
          We value clarity, compliance, and compassionate guidance for every employee.
        </p>
      </Layout>
    </HelmetProvider>
  );
}

