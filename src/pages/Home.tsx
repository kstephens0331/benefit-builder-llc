import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Section from "../components/Section";
import CTARow from "../components/CTARow";
import ProcessTimeline from "../components/ProcessTimeline";
import TestimonialsBand from "../components/TestimonialsBand";
import CtaBand from "../components/CtaBand";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Benefit Builder LLC — Where Benefits Meet Growth.</title>
        <meta
          name="description"
          content="A modern, people-first benefits approach that boosts recruiting, participation, and cost predictability."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-brand-stone/60 min-h-[520px]">
        <img
          src="/images/benefit-builder-home-hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ transformOrigin: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-heading text-white drop-shadow text-4xl md:text-5xl"
          >
            Where Benefits Meet Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.35 }}
            className="mt-2 max-w-2xl text-white/90 text-lg"
          >
            We help leaders offer benefits people understand, with a rollout that’s
            simple for HR and sustainable for the business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-6"
          >
            <CTARow
              primaryLabel="Talk to an expert"
              secondaryTo="/services#video"
              secondaryLabel="Watch the 90–120s overview"
            />
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-10 md:grid-cols-5 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.45 }}
              className="md:col-span-2"
            >
              <ResponsiveImage
                src="/images/workplace-stone.jpg"
                alt="Abstract workplace texture"
                className="bg-brand-stone/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.45 }}
              className="md:col-span-3"
            >
              <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">
                Why it matters
              </p>
              <h2 className="font-heading text-3xl text-brand-navy mt-2">
                Benefits that raise confidence and reduce friction
              </h2>
              <div className="prose prose-neutral max-w-none mt-5">
                <p className="text-brand-charcoal/90">
                  Teams want clarity and protection. Leaders need cost control,
                  recruiting strength, and less complexity. Our approach improves
                  employee understanding and participation while keeping the rollout
                  straightforward for HR.
                </p>
                <ul>
                  <li>Employees: practical coverage with plain-language guidance.</li>
                  <li>Leaders: predictable outcomes and a stronger employer brand.</li>
                  <li>HR: streamlined enrollment, communications, and renewals.</li>
                </ul>
              </div>
              <CTARow
                primaryLabel="Explore services"
                primaryTo="/services"
                secondaryTo="/contact"
                secondaryLabel="Ask a question"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUTCOMES BAND */}
      <section
        className="relative border-y border-brand-stone bg-brand-navy"
        aria-label="Typical outcomes"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/images/workplace-stone.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading text-2xl text-white">What organizations gain</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-brand-sand">Recruiting Edge</div>
              <p className="text-white/85 mt-2">
                A clearer benefits story helps candidates choose you and encourages
                current talent to stay.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-sand">Participation</div>
              <p className="text-white/85 mt-2">
                Simple choices and guided education lead to higher adoption of the plans
                that matter most.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-sand">Cost Confidence</div>
              <p className="text-white/85 mt-2">
                A design focused on real-world gaps helps control exposure and creates
                more predictable costs over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">
              Spotlight
            </p>
            <h3 className="font-heading text-3xl text-brand-navy mt-2">
              A smarter path to stronger benefits
            </h3>
            <div className="prose prose-neutral max-w-none mt-5">
              <p className="text-brand-charcoal/90">
                We tailor supplemental options—like life, accident, critical illness,
                disability, and gap protection—to complement your existing coverage.
                The goal: protection employees value, with a rollout that’s simple to
                manage.
              </p>
              <ul>
                <li>Clear communication and guided enrollment.</li>
                <li>High-signal options that fill the real gaps.</li>
                <li>Ongoing support for renewals and vendor reviews.</li>
              </ul>
            </div>
            <div className="mt-6">
              <CTARow
                primaryLabel="See how it works"
                primaryTo="/services#video"
                secondaryTo="/contact"
                secondaryLabel="Request a quick analysis"
              />
            </div>
          </div>

          <div>
            <ResponsiveImage
              src="/images/spotlight.jpg"
              alt="Benefits spotlight illustration"
            />
          </div>
        </div>
      </section>

      {/* PHOTO BREAK 1 */}
      <section className="bg-brand-sand/40 border-y border-brand-stone" aria-label="Lower feature 1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <ResponsiveImage
              src="/images/home-lower-1.jpg"
              alt="Team collaboration"
              className="shadow-md"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl text-brand-navy">Collaboration that works</h3>
            <p className="mt-4 text-brand-charcoal/90">
              Our process ensures HR, leadership, and employees stay aligned.
              With clear communication and ongoing support, benefits become
              a shared strength instead of a stress point.
            </p>
            <div className="mt-6">
              <CTARow primaryLabel="See our approach" primaryTo="/services" secondaryTo="/contact" secondaryLabel="Talk to us" />
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* LOWER FEATURE 2 */}
      <section className="bg-white border-y border-brand-stone" aria-label="Lower feature 2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-heading text-2xl text-brand-navy">Practical support, year-round</h3>
            <p className="mt-4 text-brand-charcoal/90">
              From renewal reviews to compliance check-ins, we help
              organizations maintain momentum. Support is baked into the
              process, not left as an afterthought.
            </p>
            <div className="mt-6">
              <CTARow primaryLabel="Get support" primaryTo="/contact" secondaryTo="/services" secondaryLabel="Explore services" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <ResponsiveImage
              src="/images/home-lower-2.jpg"
              alt="Overhead desk collaboration"
              className="shadow-md"
            />
          </div>
        </div>
      </section>

      <TestimonialsBand />
      <CtaBand />
    </>
  );
}
