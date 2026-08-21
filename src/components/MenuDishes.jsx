import { useState } from 'react'
import Reveal from './Reveal'
import { IMAGES } from '../data/images'

const filters = ['All', 'Feast', 'Coffee', 'Cocktails', 'Dessert']

const dishes = [
  { name: 'Samaki wa Kupaka', img: IMAGES.dishes.samakiKupaka, category: 'Feast' },
  { name: 'Kuku Paka', img: IMAGES.dishes.kukuPaka, category: 'Feast' },
  { name: 'Pilau ya Nyama', img: IMAGES.dishes.pilauNyama, category: 'Feast' },
  { name: 'Mishkaki Skewers', img: IMAGES.dishes.mishkaki, category: 'Feast' },
  { name: 'Wali wa Nazi', img: IMAGES.dishes.waliNazi, category: 'Feast' },
  { name: 'Viazi Karai', img: IMAGES.dishes.viaziKarai, category: 'Feast' },
  { name: 'Pweza wa Nazi', img: IMAGES.dishes.pwezaNazi, category: 'Feast' },
  { name: 'Chai ya Tangawizi', img: IMAGES.dishes.chaiTangawizi, category: 'Coffee' },
  { name: 'Kahawa ya Mombasa', img: IMAGES.dishes.kahawaMombasa, category: 'Coffee' },
  { name: 'Madafu Breeze', img: IMAGES.dishes.madafuBreeze, category: 'Cocktails' },
  { name: 'Tamarind & Lime Cooler', img: IMAGES.dishes.tamarindCooler, category: 'Cocktails' },
  { name: 'Mahamri', img: IMAGES.dishes.mahamri, category: 'Dessert' },
  { name: 'Kaimati', img: IMAGES.dishes.kaimati, category: 'Dessert' },
  { name: 'Vitumbua', img: IMAGES.dishes.vitumbua, category: 'Dessert' },
]

/**
 * Menu page content: heading, working filter tabs, dish grid and "show more".
 */
export default function MenuDishes() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? dishes : dishes.filter((dish) => dish.category === active)

  return (
    <section className="mx-auto max-w-[1300px] px-6 pb-20 pt-8 lg:px-10">
      <Reveal>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-[0.3em] text-[#CC9D2F]">
              Our Menu
            </p>
            <h1 className="mt-4 font-cotorisBold text-[clamp(2.2rem,5vw,3.75rem)] text-white">
              Discover Our menu
            </h1>
          </div>
          <p className="max-w-md font-inter text-base leading-relaxed text-white/60">
            A wide selection of coastal classics, prepared by top Swahili chefs
            using the freshest catch and produce from Malindi.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-10 flex flex-wrap items-center gap-2 border-b border-white/10 pb-5"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2 font-inter text-sm tracking-wide transition-all duration-300 ${
                active === filter
                  ? 'bg-[#CC9D2F] font-semibold text-[#5B0017]'
                  : 'text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Dish grid */}
      {visible.length > 0 ? (
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((dish, index) => (
            <Reveal key={dish.name} delay={(index % 3) * 100}>
              <article className="group overflow-hidden rounded-xl bg-[#243054] shadow-lg shadow-black/30 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/50">
                <div className="overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    loading="lazy"
                    className="aspect-[379/253] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center justify-between px-7 py-6">
                  <h3 className="font-cotorisBold text-xl leading-7 text-white/90">
                    {dish.name}
                  </h3>
                  <span className="rounded-full bg-[#CC9D2F]/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#CC9D2F]">
                    {dish.category}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-16 rounded-xl border border-dashed border-white/20 py-16 text-center font-inter text-white/50">
          No dishes in this category yet — check back soon.
        </p>
      )}

      <Reveal className="mt-16 text-center">
        <button
          type="button"
          className="border-2 border-white px-10 py-4 font-cotorisBold text-lg text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#5B0017]"
        >
          Show more
        </button>
      </Reveal>
    </section>
  )
}
