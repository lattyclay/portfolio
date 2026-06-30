import { education } from '../data/education'
import SectionLabel from './SectionLabel'
import Timeline from './Timeline'

export default function Education() {
  return (
    <section className="mb-[52px]">
      <SectionLabel>Education</SectionLabel>
      <Timeline items={education} />
    </section>
  )
}
