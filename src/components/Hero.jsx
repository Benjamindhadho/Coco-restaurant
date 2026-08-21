import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { IMAGES } from '../data/images'

const stats = [
  { value: '1998', label: 'Established' },
  { value: '14+', label: 'Coastal dishes' },
  { value: 'Malindi', label: 'On the Indian Ocean' },
]

/**
 * Hero section: headline, subtitle and calls to action next to the main image.
 */
export default function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-10 lg:px-16 lg:pb-28 lg:pt-16">
      {/* soft gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#CC9D2F]/15 blur-3xl"
      ></div>

      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CC9D2F]/40 bg-[#CC9D2F]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#CC9D2F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#CC9D2F]"></span>
            Swahili Coast Kitchen
          </p>

          <h1 className="font-cotorisBold text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.08] text-white">
            Taste the authentic{' '}
            <span className="bg-gradient-to-r from-[#CC9D2F] to-[#FFB577] bg-clip-text text-transparent">
              flavours of Malindi
            </span>
          </h1>

          <p className="mt-7 max-w-md font-inter text-lg font-light leading-relaxed text-white/70">
            Fresh catch from the Indian Ocean and recipes steeped in Swahili
            tradition — serving you something beyond flavor.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 border-2 border-[#CC9D2F] px-8 py-3.5 font-cotorisBold text-lg text-[#CC9D2F] transition-all duration-300 hover:bg-[#CC9D2F] hover:text-[#5B0017]"
            >
              Explore Menu
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
            <Link to="/our-story" className="group relative inline-block">
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-[#CC9D2F]/60 transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5"></span>
              <span className="relative block bg-[#CC9D2F] px-8 py-3.5 font-cotorisBold text-lg text-[#5B0017] transition-colors duration-300 group-hover:bg-[#FFB577]">
                Our Venue
              </span>
            </Link>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-cotorisBold text-2xl text-[#CC9D2F]">{stat.value}</dd>
                <dd className="mt-1 max-w-[140px] text-sm text-white/50">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 91 91"
              fill="none"
              className="absolute -left-5 -top-5 h-20 w-20 text-[#CC9D2F]/50"
            >
              <circle cx="45.5" cy="45.5" r="44.5" stroke="currentColor" strokeWidth="2" />
            </svg>
            <img
              src={IMAGES.heroDish}
              alt="Signature Swahili dish served at Coco Restaurant"
              className="aspect-[763/534] h-auto w-full rounded-xl object-cover shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 left-6 hidden items-center gap-3 rounded-lg bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:flex">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#CC9D2F]/15 text-lg">
                🥥
              </span>
              <div>
                <p className="font-poppins text-sm font-semibold text-[#243054]">Ocean-Fresh Daily</p>
                <p className="text-xs text-[#243054]/60">Straight from Malindi's boats</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
