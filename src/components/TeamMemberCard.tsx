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
  const memberDetails = details || 'Passionate about improving structured routine experiences. Click again to flip back.'

  return (
    <button
      type="button"
      className={`flip-card feature-img-shadow shrink-0 w-60 h-96 transition-transform duration-300 hover:scale-105 ${flipped ? 'flipped' : ''}`}
      onClick={(e) => { e.stopPropagation(); setFlipped((f) => !f) }}
      aria-label={`${name} card; tap to flip`}
      aria-pressed={flipped}
    >
      <div
        className="flip-inner rounded-[200px] overflow-hidden transition-shadow duration-300"
        style={{ backgroundColor: bg }}
      >
        {/* Front */}
        <div className="flip-face flip-front flex flex-col items-center pt-16">
          <div className="flip-hint">FLIP</div>
          <div className="text-center mb-2 px-4 z-10">
            <h3 className="text-sm font-bold text-white leading-tight">{name}</h3>
            <p className="text-sm leading-tight" style={{ color: '#C8E6DD' }}>{role}</p>
          </div>
          <div className="w-60 h-60 rounded-full overflow-hidden shrink-0 mt-auto">
            <img
              src={img}
              alt={name}
              className="w-full h-full object-cover"
              width={240}
              height={240}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
        {/* Back: member details */}
        <div className="flip-face flip-back rounded-[200px] text-center" style={{ backgroundColor: bg }}>
          <div className="flip-back-content px-6 py-8 relative z-10 w-full">
            <div className="block text-sm md:text-base text-white leading-relaxed" style={{ opacity: 1, transform: 'none', visibility: 'visible' }}>
              {memberDetails}
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}