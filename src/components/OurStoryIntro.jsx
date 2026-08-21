import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { IMAGES } from '../data/images'

/**
 * Intro / story section of the "Our Story" page (gold background).
 */
export default function OurStoryIntro() {
  return (
    <section className="px-6 py-14 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-[0.3em] text-[#5B0017]/60">
              Since 1998
            </p>
            <h1 className="mt-4 font-cotorisBold text-[clamp(2.2rem,5vw,3.75rem)] leading-tight text-[#5B0017]">
              Our Story
            </h1>
            <p className="mt-5 max-w-md font-inter text-lg leading-relaxed text-[#5B0017]/85">
              We&rsquo;re proud leaders of Swahili coastal dining.
            </p>
            <div className="group mt-10">
              <img
                src={IMAGES.storyInterior}
                alt="Dining hall at Coco Restaurant"
                loading="lazy"
                className="h-64 w-auto rounded-lg object-cover shadow-lg shadow-black/20 ring-1 ring-black/10 transition-transform duration-500 group-hover:-translate-y-1 sm:h-80 lg:h-[420px]"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="lg:pt-2">
            <h2 className="font-cotorisBold text-2xl leading-snug text-[#FFB577] drop-shadow-sm lg:text-3xl">
              One of the best restaurants on the Kenyan coast.
            </h2>
            <p className="mt-8 font-inter text-lg leading-relaxed text-[#5B0017]/85 lg:text-[21px]">
              Your one stop for high-quality coastal feasts. Since 1998 we
              have served Malindi, proud of our town and its blend of
              African, Arab and Portuguese flavours — and we love sharing it
              with visitors from around the world.
            </p>
            <p className="mt-6 font-inter text-lg leading-relaxed text-[#5B0017]/85 lg:text-[21px]">
              We are perfectly positioned to give our guests an extraordinary
              dining experience unlike any they&rsquo;ve ever tasted. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              finibus mauris nec tincidunt varius. Ut sagittis, lorem at
              bibendum ornare, mauris neque venenatis justo, ut gravida mi
              neque eu lorem. Vestibulum auctor leo sit amet vulputate
              mollis. Curabitur ac lorem felis. Morbi ullamcorper maximus
              lorem.
            </p>
            <Link
              to="/menu"
              className="group mt-10 inline-flex items-center gap-2 border-2 border-[#5B0017] px-8 py-3.5 font-cotorisBold text-lg text-[#5B0017] transition-all duration-300 hover:bg-[#5B0017] hover:text-[#CC9D2F]"
            >
              Explore Our Menu
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
