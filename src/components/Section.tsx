type Props = {
  title?: string; kicker?: string; children: React.ReactNode; id?: string;
  narrow?: boolean; bg?: "default"|"sand"|"white"|"stone";
};
export default function Section({ title, kicker, children, id, narrow, bg="default" }: Props) {
  const bgClass = bg==="sand"?"bg-brand-sand/50":bg==="white"?"bg-white":bg==="stone"?"bg-brand-stone/50":"";
  return (
    <section id={id} className={`${bgClass} border-b border-brand-stone/60`}>
      <div className={`mx-auto ${narrow?"max-w-3xl":"max-w-7xl"} px-4 sm:px-6 lg:px-8 py-14`}>
        {kicker && <p className="text-sm tracking-wide uppercase text-brand-green font-semibold">{kicker}</p>}
        {title && <h2 className="font-heading text-3xl text-brand-navy mt-1">{title}</h2>}
        <div className={`${title?"mt-6":""} prose prose-neutral max-w-none
            prose-headings:font-heading prose-headings:text-brand-navy
            prose-p:text-brand-charcoal/90 prose-a:text-brand-green prose-strong:text-brand-charcoal`}>
          {children}
        </div>
      </div>
    </section>
  );
}
