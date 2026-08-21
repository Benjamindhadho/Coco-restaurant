import Reveal from './Reveal'
import { IMAGES } from '../data/images'

function Star() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#CC9D2F" aria-hidden="true">
      <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 16.9 5.9 20.4l1.5-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  )
}

/**
 * Testimonial section: quote card next to a photo.
 */
export default function Testimonial() {
  return (
    <section className="px-6 py-16 lg:px-16 lg:py-24">
      <Reveal>
        <figure className="mx-auto grid max-w-[1330px] overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10 md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#5B0017] to-[#40000f] p-10 ring-1 ring-inset ring-white/5 lg:p-14 md:rounded-l-2xl">
            <svg aria-hidden="true" width="56" height="44" viewBox="0 0 56 44" fill="#CC9D2F" opacity="0.6">
              <path d="M0 44V26.4C0 11.8 8.4 2.5 22.6 0l2.8 6.9C17 9.4 12.6 14.4 12.2 21H23v23H0zm33 0V26.4C33 11.8 41.4 2.5 55.6 0l2.8 6.9C50 9.4 45.6 14.4 45.2 21H56v23H33z" />
            </svg>
            <blockquote className="mt-6 font-inter text-lg leading-relaxed text-white lg:text-[21px]">
              You can&apos;t go wrong with the coconut fish curry, I had it
              twice. The snapper was fresh off the boat and cooked perfectly —
              tender &amp; soft (usually reef fish can be a bit dry). I would
              definitely recommend it.
            </blockquote>
            <div className="mt-6 flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-black/10 pt-6">
              <img
                src={IMAGES.reviewerAvatar}
                alt="Portrait of Amina Omar"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-[#CC9D2F]/60"
              />
              <div>
                <p className="font-poppins text-base font-semibold text-white">Amina Omar</p>
                <p className="mt-0.5 text-xs text-[#CC9D2F]">Malindi, Kenya</p>
              </div>
            </figcaption>
          </div>

          <img
            src={IMAGES.testimonialDish}
            alt="Coconut fish curry served at Coco Restaurant"
            className="h-64 w-full object-cover md:h-full"
          />
        </figure>
      </Reveal>
    </section>
  )
}
