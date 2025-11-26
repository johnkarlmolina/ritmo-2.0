import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, #61CCB2 0%, #61CCB2 50%, #2D7778 50%, #2D7778 100%)',
      }}
    >
      {/* Puzzle-like center shapes */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: '9rem',
          height: '9rem',
          backgroundColor: '#61CCB2',
          left: '50%',
          top: '38%',
          transform: 'translate(-20%, -50%)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: '9rem',
          height: '9rem',
          backgroundColor: '#2D7778',
          left: '50%',
          top: '68%',
          transform: 'translate(-80%, -50%)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left: Heading, description, buttons */}
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Empowering Daily Routines, supporting brighter days.
            </h1>

            <p className="mt-6 text-white text-lg md:text-xl leading-relaxed text-justify">
              Ritmo short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/download"
                className="inline-flex items-center rounded-full border border-white bg-transparent px-6 py-3 text-white font-semibold shadow-sm hover:bg-white/10 transition-colors"
              >
                <span>Download Now</span>
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[#2D7778] font-semibold shadow-sm hover:bg-white/90 transition-colors"
              >
                <span>Watch Demo</span>
              </Link>
            </div>
          </div>

          {/* Right: Simple card instead of phone area */}
          <div className="w-full">
            <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-xl">
              <div className="space-y-4">
                <div className="h-4 w-2/3 bg-emerald-100 rounded"></div>
                <div className="grid gap-3">
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="text-sm text-gray-800">Sample Card Content</div>
                    <div className="text-xs text-gray-500">Supporting details</div>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="text-sm text-gray-800">Another Item</div>
                    <div className="text-xs text-gray-500">More details</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
