import { motion } from "framer-motion";
import { CheckCircle, Shield, Handshake, LineChart } from "lucide-react";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-2 items-center">
        <motion.div initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{duration:.5}}>
          <h1 className="text-4xl md:text-5xl leading-tight">
            Where <span className="text-logoGreen">Benefits</span> Meet Growth.
          </h1>
          <p className="mt-4 text-lg text-charcoal/80">
            We make benefits easy to choose and easy to use — so your people feel cared for and your business sees real results.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="btn-primary">Book a 15-min consult</a>
            <a href="/services" className="btn-ghost">See what we deliver</a>
          </div>
          <p className="mt-3 text-sm text-charcoal/70">No pressure — just a clear plan and next steps.</p>
        </motion.div>

        <motion.ul className="card grid gap-3" initial={{opacity:0, y:16}} animate={{opacity:1, y:0}} transition={{delay:.05, duration:.5}}>
          {[
            {icon: CheckCircle, text:"Plan design with clear tradeoffs"},
            {icon: Shield, text:"Renewals & compliance without the drama"},
            {icon: Handshake, text:"Enrollment materials employees actually read"},
            {icon: LineChart, text:"Cost strategies that respect the team"},
          ].map(({icon:Icon,text})=>(
            <li key={text} className="flex items-center gap-3">
              <Icon className="text-logoGreen" size={20}/><span>{text}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
