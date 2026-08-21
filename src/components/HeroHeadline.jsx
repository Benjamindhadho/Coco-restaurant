import Reveal from './Reveal'
import { IMAGES } from '../data/images'

const thumbnails = [
  { src: IMAGES.galleryThumb1, alt: 'Plated Swahili starter' },
  { src: IMAGES.galleryThumb2, alt: 'Chef specials' },
  { src: IMAGES.galleryThumb3, alt: 'Mishkaki skewers on the grill' },
]

/**
 * Gallery section: headline and food photography.
 */
export default function HeroHeadline() {
  return (
    <section className="px-6 pb-16 pt-2 lg:px-16 lg:pb-24 lg:pt-4">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-inter text-xs font-medium uppercase tracking-[0.3em] text-[#CC9D2F]">
            The Experience
          </p>
          <h2 className="mt-4 max-w-4xl font-cotorisBold text-[clamp(1.8rem,3.5vw,3rem)] leading-snug text-white">
            A distinctive dining destination on the Swahili coast
          </h2>
          <p className="mt-5 max-w-md font-inter text-lg font-light text-white/60">
            Experience the laid-back charm of old Malindi town.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          <Reveal className="group overflow-hidden rounded-xl ring-1 ring-white/10">
            <img
              src={IMAGES.galleryMain}
              alt="Traditional Swahili dish plating"
              className="h-full max-h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
            {thumbnails.map((thumb, index) => (
              <Reveal
                key={thumb.src}
                delay={index * 120}
                className="group overflow-hidden rounded-xl ring-1 ring-white/10"
              >
                <img
                  src={thumb.src}
                  alt={thumb.alt}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
