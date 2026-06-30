import { projects } from '../data/projects'
import SectionLabel from './SectionLabel'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="mb-[52px]">
      <SectionLabel>Featured projects</SectionLabel>

      {/* 1px gap + line-colored background recreates the hairline grid
          dividers from the original design without extra border markup */}
      <div className="grid gap-px bg-line border border-line [grid-template-columns:repeat(auto-fill,minmax(228px,1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
