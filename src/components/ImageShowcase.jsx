import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { IMAGES } from '../data/images'

/**
 * Full-width banner with background image and a call to action.
 */
export default function ImageShowcase() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={IMAGES.bannerBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#5B0017]/90 via-[#5B0017]/60 to-[#5B0017]/90"></div>

      <Reveal className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:py-36">
        <p className="font-inter text-xs font-medium uppercase tracking-[0.3em] text-[#CC9D2F]">
          Our Kitchen
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl font-cotorisBold text-[clamp(1.8rem,4vw,3.25rem)] leading-snug text-white">
          A unique menu that captures the true taste of the Kenyan coast
        </h2>
        <Link
          to="/menu"
          className="group mt-12 inline-flex items-center gap-2 bg-[#CC9D2F] px-10 py-4 font-cotorisBold text-lg text-[#5B0017] shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFB577]"
        >
          View Our Menu
          <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </Link>
      </Reveal>
    </section>
  )
}
