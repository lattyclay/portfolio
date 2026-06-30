import { experience } from '../data/experience'
import SectionLabel from './SectionLabel'
import Timeline from './Timeline'

export default function Experience() {
  return (
    <section className="mb-[52px]">
      <SectionLabel>Experience</SectionLabel>
      <Timeline items={experience} />
    </section>
  )
}
