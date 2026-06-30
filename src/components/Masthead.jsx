import { profile } from '../data/profile'

export default function Masthead() {
  return (
    <header className="pt-[52px] pb-9 border-b border-gold mb-[52px]">

      <div className="flex items-start justify-between gap-5 flex-wrap mb-7">
        <div>
          <p className="font-sans text-[10px] tracking-[0.25em] text-gold uppercase mb-3.5">
            {profile.overline}
          </p>
          <h1 className="font-serif text-[50px] font-light leading-[1.05] text-cream tracking-[-0.01em]">
            {profile.name}
          </h1>
          <p className="font-serif text-lg italic text-sand mt-2 flex items-center gap-1.5">
            {profile.role}
            <span className="inline-block w-0.5 h-[0.85em] bg-gold animate-blink align-middle" />
          </p>
        </div>

        <div className="flex flex-col items-end gap-2.5">
          <div className="w-[70px] h-[70px] rounded-full border border-gold2 bg-ink3 flex items-center justify-center font-serif text-xl font-semibold text-gold tracking-wide">
            {profile.initials}
          </div>
          {profile.openToWork && (
            <div className="flex items-center gap-1.5 text-[9px] tracking-[0.18em] uppercase text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse2" />
              Open to work
            </div>
          )}
          <a
            href={profile.hireLink}
            className="bg-transparent border border-gold text-gold px-[22px] py-2 text-[10px] tracking-[0.2em] uppercase font-sans hover:bg-gold hover:text-ink transition-colors inline-block text-center"
          >
            Hire me
          </a>
        </div>
      </div>

      <div className="flex gap-8 flex-wrap mb-[22px]">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-0.5">
            <span className="font-serif text-[22px] font-medium text-cream leading-none">
              {stat.number}
            </span>
            <span className="text-[9px] tracking-[0.18em] text-muted uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <p className="text-[13.5px] leading-[1.75] text-sand max-w-[560px] mb-5">
        {profile.bio}
      </p>

      <div className="flex flex-wrap gap-5">
        {profile.contact.map((item) => {
          const content = (
            <>
              <span className="w-1 h-1 rounded-full bg-gold2 flex-shrink-0" />
              {item.label}
            </>
          )
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] text-sand tracking-wide flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              {content}
            </a>
          ) : (
            <span key={item.label} className="text-[11px] text-sand tracking-wide flex items-center gap-1.5">
              {content}
            </span>
          )
        })}
      </div>
    </header>
  )
}
