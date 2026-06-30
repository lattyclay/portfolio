// Renders one of three placeholder visuals inside a project card's thumbnail
// area, based on project.thumb. These are abstract mockups (not real
// screenshots), matching the original design's decorative placeholders.

function BrowserMock({ simplified = false }) {
  return (
    <div className="flex flex-col items-center gap-1.5 opacity-40">
      <div className="w-[88px] bg-ink border border-line px-2 py-1.5">
        <div className="h-[5px] bg-line mb-1.5 w-3/5" />
        <div className="flex gap-1">
          <div className="flex-1 flex flex-col gap-[3px]">
            <div className="h-[3px] bg-line" />
            <div className="h-[3px] bg-line w-[65%]" />
            {!simplified && <div className="h-[3px] bg-line" />}
          </div>
          <div
            className="w-5 bg-ink3 border"
            style={{ borderColor: simplified ? '#5A5448' : '#8A6E2F' }}
          />
        </div>
      </div>
    </div>
  )
}

function AiChatMock({ chat = [] }) {
  return (
    <div className="flex flex-col gap-1.5 w-[82%] opacity-50">
      {chat.map((bubble, i) => (
        <div
          key={i}
          className={`font-mono text-[8.5px] px-2.5 py-1.5 max-w-[90%] border ${
            bubble.from === 'ai'
              ? 'self-end bg-ink3 border-gold2 text-gold2'
              : 'self-start bg-ink border-line text-sand'
          }`}
        >
          {bubble.text}
        </div>
      ))}
    </div>
  )
}

function GlyphMock({ glyph }) {
  return (
    <div className="opacity-25">
      <span className="font-serif text-[44px] text-gold opacity-20 leading-none">
        {glyph}
      </span>
    </div>
  )
}

export default function ProjectThumb({ project }) {
  if (project.thumb === 'ai-chat') return <AiChatMock chat={project.chat} />
  if (project.thumb === 'browser2') return <BrowserMock simplified />
  if (project.thumb === 'glyph') return <GlyphMock glyph={project.glyph} />
  return <BrowserMock />
}
