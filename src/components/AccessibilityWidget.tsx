import { useEffect, useState } from 'react'
import CircleLogo from '../assets/circle-logo.png'

const SCALE_CLASSES = ['','text-scale-1','text-scale-2','text-scale-3'] as const

type ScaleIndex = 0 | 1 | 2 | 3

export default function AccessibilityWidget() {
  const [scale, setScale] = useState<ScaleIndex>(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('ritmo:textScale')
    if (saved) {
      const n = Number(saved)
      if (n >= 0 && n <= 3) setScale(n as ScaleIndex)
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    SCALE_CLASSES.forEach(cls => { if (cls) html.classList.remove(cls) })
    if (SCALE_CLASSES[scale]) html.classList.add(SCALE_CLASSES[scale])
    window.localStorage.setItem('ritmo:textScale', String(scale))
  }, [scale])

  const cycleScale = () => setScale((s) => (s + 1 > 3 ? 0 : ((s + 1) as ScaleIndex)))

  return (
    <div className="fixed left-3 md:left-4 bottom-20 md:bottom-6 z-[1600]">
      <div className="relative">
        {/* Show logo button when modal is closed */}
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-white border-2 border-[#2D7778] w-14 h-14 shadow-md hover:border-[#61CCB2]"
            aria-expanded={open}
            aria-controls="accessibility-modal"
            title="Accessibility Menu"
          >
            <img src={CircleLogo} alt="Accessibility" className="w-9 h-9 object-contain" />
          </button>
        )}

        {/* Side modal positioned next to where the button sits */}
        {open && (
          <div
            role="dialog"
            aria-modal="true"
            id="accessibility-modal"
            className="fixed left-3 md:left-4 bottom-20 md:bottom-6 z-[2000]"
          >
            <div className="rounded-3xl bg-white shadow-xl border-2 border-[#61CCB2] w-[320px] md:w-[420px]">
              {/* Modal header */}
              <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-[#61CCB2]/30">
                <div className="text-[#2D7778] font-bold">Accessibility Menu</div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#E9FBF7] border border-[#61CCB2]/60 text-[#2D7778]"
                  aria-label="Close accessibility menu"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>
              </div>

              {/* Modal content: one tile (Bigger Text) styled per reference */}
              <div className="px-4 md:px-6 py-6 grid grid-cols-1 gap-6">
                <button
                  type="button"
                  onClick={cycleScale}
                  className="text-left rounded-2xl border-2 border-[#61CCB2] bg-white shadow-sm p-4 md:p-5 hover:bg-[#F4FBF9]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-[#2D7778] font-bold text-xl">T T</div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#E9FBF7] border border-[#61CCB2]/60 flex items-center justify-center">
                      <span className="text-[#2D7778] text-xs">✓</span>
                    </div>
                  </div>
                  <div className="mt-3 text-[#2D7778] font-extrabold text-base md:text-lg text-center">Bigger Text</div>
                  {/* Progress bars showing level: fill based on scale */}
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <span className={`inline-block h-1 w-12 rounded ${scale >= 1 ? 'bg-[#2D7778]' : 'bg-[#61CCB2]/40'}`} />
                    <span className={`inline-block h-1 w-12 rounded ${scale >= 2 ? 'bg-[#2D7778]' : 'bg-[#61CCB2]/40'}`} />
                    <span className={`inline-block h-1 w-12 rounded ${scale >= 3 ? 'bg-[#2D7778]' : 'bg-[#61CCB2]/40'}`} />
                  </div>
                </button>
              </div>

              {/* Modal footer */}
              <div className="px-4 md:px-6 py-4 border-t border-[#61CCB2]/30 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-[#61CCB2] text-white px-4 py-2 font-semibold shadow hover:opacity-90"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
