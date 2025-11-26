import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <section
      className="min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(to right, #61CCB2 0%, #61CCB2 50%, #2D7778 50%, #2D7778 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Heading, description, buttons */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
              Empowering Daily Routines, supporting brighter days.
            </h1>

            <p className="mt-6 text-white text-base sm:text-lg leading-relaxed text-justify">
              Ritmo short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/download"
                className="inline-flex items-center rounded-full border border-white bg-transparent px-5 py-2.5 text-white font-medium shadow-sm hover:bg-white/10 transition-colors"
              >
                <span>Download Now</span>
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-[#2D7778] font-medium shadow-sm hover:bg-white/90 transition-colors"
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
