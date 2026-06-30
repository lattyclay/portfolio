import { profile } from '../data/profile'
import SectionLabel from './SectionLabel'

export default function Roadmap() {
  return (
    <section className="mb-0">
      <SectionLabel>Roadmap</SectionLabel>
      <a
        href={profile.roadmap.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 border border-line px-5 py-3 text-sand no-underline text-[10px] tracking-[0.15em] uppercase transition-colors hover:border-gold2 hover:text-gold"
      >
        {profile.roadmap.label}
      </a>
    </section>
  )
}
