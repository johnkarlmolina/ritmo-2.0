import { Link } from 'react-router-dom'
import phoneImg from './assets/ritmo-cp.png'

export default function Index() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to right, #61CCB2 0%, #61CCB2 50%, #2D7778 50%, #2D7778 100%)',
      }}
    >
      {/* Puzzle-like center squares */}
      <div
        className="pointer-events-none absolute rounded-xl"
        style={{
          width: '10rem',
          height: '10rem',
          backgroundColor: '#61CCB2',
          left: '50%',
          top: '40%',
          transform: 'translate(-40%, -50%)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
        }}
      />
      <div
        className="pointer-events-none absolute rounded-xl"
        style={{
          width: '10rem',
          height: '10rem',
          backgroundColor: '#2D7778',
          left: '50%',
          top: '66%',
          transform: 'translate(-60%, -50%)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          {/* Left: Heading, description, buttons */}
          <div className="md:pr-24">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
              <span className="inline-block">Empowering Daily</span><br />
              <span className="inline-block">Routines, supporting</span><br />
              <span className="inline-block">brighter days.</span>
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

          {/* Right: Image with shadow */}
          <div className="w-full md:pl-24">
            <div className="mx-auto w-full max-w-md">
              <img src={phoneImg} alt="Ritmo preview" className="w-full rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
