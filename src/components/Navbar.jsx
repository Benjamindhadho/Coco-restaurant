import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Our Menu', to: '/menu' },
]

/**
 * Sticky navigation bar with glassmorphism backdrop and a mobile menu.
 * variant "dark"  -> for dark/wine backgrounds (default)
 * variant "light" -> for light/gold backgrounds
 */
export default function Navbar({ variant = 'dark' }) {
  const [open, setOpen] = useState(false)
  const isDark = variant === 'dark'

  const brandColor = isDark ? 'text-[#CC9D2F]' : 'text-[#5B0017]'
  const linkColor = isDark
    ? 'text-white/80 hover:text-[#CC9D2F]'
    : 'text-[#5B0017]/80 hover:text-[#5B0017]'
  const underlineColor = isDark ? 'bg-[#CC9D2F]' : 'bg-[#5B0017]'
  const panelColor = isDark
    ? 'border-white/10 bg-[#5B0017]/95'
    : 'border-black/5 bg-[#CC9D2F]/95'
  const burgerColor = isDark ? 'text-white' : 'text-[#5B0017]'

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        isDark ? 'border-white/10 bg-[#5B0017]/85' : 'border-black/5 bg-[#CC9D2F]/90'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 lg:px-16">
        <Link to="/" className={`flex items-center gap-3 ${brandColor}`} onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 rotate-45 place-items-center rounded-sm border-2 border-current transition-transform duration-500 hover:rotate-[135deg]">
            <span className="-rotate-45 font-cotorisBold text-base leading-none">C</span>
          </span>
          <span className="font-cotorisBold text-2xl tracking-wide">Coco</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={`group relative font-inter text-sm tracking-wide transition-colors lg:text-base ${linkColor}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${underlineColor}`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md transition-colors hover:bg-white/10 md:hidden ${burgerColor}`}
        >
          <span className={`h-0.5 w-6 bg-current transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-current transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className={`border-t md:hidden ${panelColor}`}>
          <ul className="mx-auto max-w-[1400px] px-6 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-3 font-inter text-base tracking-wide transition-colors ${linkColor}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

