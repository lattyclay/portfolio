// Small reusable heading used at the top of every section: an uppercase
// label followed by a hairline rule that stretches to fill the rest of
// the row (e.g. "FEATURED PROJECTS ————————————").
export default function SectionLabel({ children }) {
  return (
    <p className="text-[9px] tracking-[0.28em] uppercase text-muted mb-6 flex items-center gap-3.5">
      {children}
      <span className="flex-1 h-px bg-line" />
    </p>
  )
}
