/**
 * Decorative background layer for dark pages.
 * Purely ornamental: non-interactive and hidden from assistive tech.
 */
export default function HeroDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <img
        src="/Rectangle.png"
        alt=""
        className="absolute -right-40 top-1/3 w-[622px] opacity-5"
      />
      <img
        src="/Rectangle(1).png"
        alt=""
        className="absolute -left-52 bottom-0 w-[710px] opacity-5"
      />
      <svg
        viewBox="0 0 91 91"
        fill="none"
        className="absolute right-10 top-24 h-20 w-20 text-white/20 lg:right-24"
      >
        <circle cx="45.5" cy="45.5" r="44.5" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="absolute left-10 top-[520px] hidden h-24 w-32 opacity-30 lg:block">
        <span className="absolute left-0 top-6 h-2.5 w-2.5 rounded-full bg-[#CC9D2F]"></span>
        <span className="absolute left-8 top-14 h-2.5 w-2.5 rounded-full bg-[#CC9D2F]"></span>
        <span className="absolute left-16 top-6 h-2.5 w-2.5 rounded-full bg-[#CC9D2F]"></span>
        <span className="absolute left-8 top-24 h-2.5 w-2.5 rounded-full bg-[#CC9D2F]"></span>
        <span className="absolute left-24 top-24 h-2.5 w-2.5 rounded-full bg-[#CC9D2F]"></span>
      </div>
    </div>
  )
}
