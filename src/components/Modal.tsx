import { useEffect } from 'react'

type ModalProps = {
  open: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ open, title, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative mx-4 w-full max-w-4xl">
        <div className="rounded-3xl border-4 border-[#2B8A7A] bg-white shadow-xl">
          <div className="px-6 py-5 border-b-2 border-[#2B8A7A]/30 flex items-center justify-center relative">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#2D7778] text-center w-full px-10">
              {title}
            </h2>
            <button
              type="button"
              className="absolute top-2 right-2 inline-flex items-center justify-center rounded-full w-9 h-9 text-[#2D7778] hover:bg-[#2D7778]/10"
              aria-label="Close"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div className="px-6 py-6 max-h-[80vh] overflow-auto text-gray-700 leading-relaxed">
            {children}
          </div>
          <div className="px-6 py-4 border-t-2 border-[#2B8A7A]/30 flex justify-end">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#61CCB2] text-white px-5 py-2.5 font-semibold shadow hover:opacity-90 transition-transform hover:-translate-y-0.5"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
