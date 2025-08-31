import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function HeroBrochure() {
  return (
    <section className="relative overflow-hidden" aria-label="Intro">
      <img src="/images/hero-blend.svg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <motion.h1 initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:0.45}}
          className="font-heading text-white drop-shadow text-4xl sm:text-5xl lg:text-6xl">
          Where <span className="text-brand-sand">Benefits</span> Meet <span className="text-brand-sand">Growth</span>
        </motion.h1>
        <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.08}}
          className="mt-5 text-white/90 max-w-2xl text-lg">
          A modern benefits approach that respects your budget and elevates the employee experience.
        </motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.16}} className="mt-8 flex flex-wrap gap-3">
          <Link to="/services" className="rounded-md bg-brand-green px-6 py-3 text-white font-semibold hover:opacity-90">Explore Services</Link>
          <Link to="/contact" className="rounded-md bg-white/95 px-6 py-3 text-brand-navy font-semibold hover:bg-white">Contact Us</Link>
        </motion.div>
      </div>
    </section>
  );
}
