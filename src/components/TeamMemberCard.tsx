import { useState } from 'react'

interface TeamMemberCardProps {
  name: string
  role: string
  img: string
  bg?: string
  details?: string
}

export default function TeamMemberCard({ name, role, img, bg = '#2B8A7A', details }: TeamMemberCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={`flip-card shrink-0 w-64 h-[400px] ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-label={`${name} card; tap to flip`}
    >
      <div className="flip-inner rounded-[200px] overflow-hidden" style={{ backgroundColor: bg }}>
        {/* Front */}
        <div className="flip-front flex flex-col items-center pt-16">
          <div className="flip-hint">FLIP</div>
          <div className="text-center mb-2 px-4 z-10">
            <h3 className="text-sm font-bold text-white leading-tight">{name}</h3>
            <p className="text-sm leading-tight" style={{ color: '#C8E6DD' }}>{role}</p>
          </div>
          <div className="w-64 h-64 rounded-full overflow-hidden shrink-0 mt-auto">
            <img src={img} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Back: text only */}
        <div className="flip-back rounded-[200px] text-center" style={{ backgroundColor: bg }}>
          <div className="px-5 py-6">
            <p className="text-sm md:text-base text-white/95 leading-relaxed">
              {details || 'Passionate about improving structured routine experiences. Click again to flip back.'}
            </p>
          </div>
        </div>
      </div>
    </button>
  )
}
