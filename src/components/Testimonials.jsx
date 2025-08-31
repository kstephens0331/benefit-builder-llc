import { useEffect, useRef, useState } from "react";

const QUOTES = [
  { q: "They made benefits finally make sense to our team.", a: "Operations Director, Manufacturing" },
  { q: "Open enrollment was the smoothest we have ever had.", a: "HR Manager, Logistics" },
  { q: "Year-over-year costs stabilized without pushback.", a: "Founder, SaaS" },
];

export default function Testimonials() {
  const [i,setI] = useState(0);
  const timer = useRef(null);
  useEffect(()=>{
    timer.current = setInterval(()=> setI(prev => (prev+1)%QUOTES.length), 4000);
    return ()=> clearInterval(timer.current);
  },[]);
  const item = QUOTES[i];
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl mb-6">What clients say</h2>
        <div className="card">
          <p className="text-lg">“{item.q}”</p>
          <p className="mt-3 text-sm text-charcoal/70">— {item.a}</p>
        </div>
      </div>
    </section>
  );
}
