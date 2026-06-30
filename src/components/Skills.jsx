import { skills } from '../data/skills'
import SectionLabel from './SectionLabel'

export default function Skills() {
  return (
    <section className="mb-[52px]">
      <SectionLabel>Skills</SectionLabel>

      <div className="grid gap-px bg-line border border-line [grid-template-columns:repeat(auto-fill,minmax(180px,1fr))]">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-ink2 px-5 py-4 flex flex-col gap-1">
            <span className="font-serif text-base font-medium text-cream">{skill.name}</span>
            <span className="text-[9px] tracking-[0.18em] text-gold2 uppercase">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
