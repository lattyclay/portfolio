// Shared timeline layout for both Experience and Education — each item gets
// a vertical line with a gold dot, a title/date row, a subtitle, and bullets.
export default function Timeline({ items }) {
  return (
    <div>
      {items.map((item, i) => (
        <div
          key={item.title + item.date}
          className={`grid [grid-template-columns:1px_1fr] gap-x-6 ${
            i === items.length - 1 ? '' : 'mb-8'
          }`}
        >
          <div className="bg-line relative">
            <div className="w-[7px] h-[7px] bg-gold absolute top-[5px] -left-[3px]" />
          </div>
          <div>
            <div className="flex justify-between items-start flex-wrap gap-1.5 mb-1">
              <span className="font-serif text-lg font-medium text-cream">{item.title}</span>
              <span className="text-[9px] tracking-[0.15em] text-muted uppercase pt-1">{item.date}</span>
            </div>
            <p className="text-[11.5px] text-gold2 tracking-wide mb-2.5">{item.org}</p>
            <ul className="flex flex-col gap-1.5">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="text-[13px] text-sand pl-3.5 relative leading-[1.55]">
                  <span className="absolute left-0 top-[3px] text-gold2 text-[9px]">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
