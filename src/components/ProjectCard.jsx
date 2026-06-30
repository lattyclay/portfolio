import ProjectThumb from './ProjectThumb'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-ink2 flex flex-col transition-colors hover:bg-[#1F1C15]">

      <div className="aspect-[4/3] bg-ink4 flex items-center justify-center relative border-b border-line overflow-hidden">
        <ProjectThumb project={project} />
        <span className="absolute top-2.5 left-2.5 text-[8px] tracking-[0.2em] uppercase text-gold bg-ink border border-gold2 px-2 py-[3px]">
          {project.category}
        </span>
        <span className="absolute bottom-2.5 right-2.5 text-[8px] tracking-[0.15em] uppercase text-muted">
          {project.status}
        </span>
      </div>

      <div className="px-[18px] pt-4 pb-5">
        <h3 className="font-serif text-[17px] font-medium text-cream leading-[1.35] mb-2">
          {project.title}
        </h3>
        <p className="text-[11.5px] text-muted leading-[1.65] mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-[8.5px] tracking-[0.12em] uppercase text-muted bg-ink5 border border-line px-[7px] py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
