import { Briefcase, Users, BookOpen, FileCheck } from "lucide-react";

export default function FeatureGrid() {
  const items = [
    {icon: Briefcase, title:"Broker Partner, Not Vendor", desc:"Independent, transparent advice with measurable outcomes."},
    {icon: Users, title:"Employee-First", desc:"Clear communications and enrollment support that boost adoption."},
    {icon: BookOpen, title:"Compliance Simplified", desc:"Renewals, notices, and documentation handled without drama."},
    {icon: FileCheck, title:"Proven Cost Controls", desc:"Benchmarking, plan design, and analytics to lower total cost."},
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl mb-6">Why teams choose Benefit Builder</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(({icon:Icon,title,desc})=>(
            <div className="card" key={title}>
              <div className="flex items-start gap-3">
                <Icon className="text-logoGreen mt-1" />
                <div>
                  <h3 className="font-heading text-xl text-navy">{title}</h3>
                  <p className="text-charcoal/80 mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
