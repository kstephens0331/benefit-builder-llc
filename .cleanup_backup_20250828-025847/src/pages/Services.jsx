import { Helmet, HelmetProvider } from "react-helmet-async";
import Layout from "../components/Layout.jsx";

export default function Services() {
  return (
    <HelmetProvider>
      <Layout>
        <Helmet>
          <title>Services — Benefit Builder</title>
          <meta name="description" content="Plan design, renewals, employee education, compliance, and cost containment." />
        </Helmet>
        <h1 className="font-heading text-3xl text-navy mb-6">Services</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Plan Design & Strategy", desc: "Benchmark, design, and optimize your benefits mix for retention and ROI." },
            { title: "Renewals & Compliance", desc: "Stay compliant and negotiate renewals with confidence and clarity." },
            { title: "Employee Education", desc: "Enrollment materials, workshops, and ongoing support your team understands." },
            { title: "Cost Containment", desc: "Claims analysis, plan optimization, and vendor alignment to lower total cost." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-stone bg-white p-6 shadow-soft">
              <h2 className="font-heading text-xl text-navy">{s.title}</h2>
              <p className="mt-2 text-charcoal/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </Layout>
    </HelmetProvider>
  );
}

