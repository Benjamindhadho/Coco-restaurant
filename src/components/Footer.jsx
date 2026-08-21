import { Link } from 'react-router-dom'

const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Our Menu', to: '/menu' },
  { label: 'Events', to: '/' },
]

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full bg-black/10 text-[#243054] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243054] hover:text-[#CC9D2F]"
    >
      {children}
    </a>
  )
}

/**
 * Multi-column site footer with brand, navigation, contact and socials.
 */
export default function Footer() {
  return (
    <footer className="bg-[#CC9D2F]">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Link to="/" aria-label="Coco home" className="inline-flex items-center gap-3">
            <span className="grid h-14 w-14 rotate-45 place-items-center rounded-sm bg-black transition-transform duration-500 hover:rotate-[135deg]">
              <span className="-rotate-45 font-cotorisBold text-xl text-white">C</span>
            </span>
            <span className="font-cotorisBold text-3xl tracking-wide text-[#5B0017]">Coco</span>
          </Link>
          <p className="mt-6 max-w-xs font-inter text-base leading-relaxed text-[#5B0017]/75">
            Fresh Swahili cuisine served with pride on the Malindi seafront,
            since 1998.
          </p>
          <div className="mt-7 flex items-center gap-3">
            <SocialIcon label="Twitter">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23 4.9c-.8.4-1.7.6-2.6.8a4.5 4.5 0 0 0 2-2.5c-.9.5-1.9.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2.5 3.7a4.5 4.5 0 0 0 1.4 6A4.4 4.4 0 0 1 1.8 9v.1a4.5 4.5 0 0 0 3.6 4.4c-.7.2-1.4.2-2 .1a4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.6a12.7 12.7 0 0 0 6.9 2c8.3 0 12.8-6.8 12.8-12.8v-.6c.9-.6 1.6-1.4 2.3-2.3Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.5H7.4V14h2.7v8h3.4Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </SocialIcon>
            <SocialIcon label="LinkedIn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer navigation">
          <h3 className="font-cotorisBold text-xl text-[#5B0017]">Explore</h3>
          <ul className="mt-6 space-y-3">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="group inline-flex items-center gap-2 font-inter text-base text-[#5B0017]/80 transition-colors hover:text-[#5B0017]"
                >
                  <span className="h-px w-4 bg-[#5B0017]/40 transition-all duration-300 group-hover:w-6 group-hover:bg-[#5B0017]"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-cotorisBold text-xl text-[#5B0017]">Visit Us</h3>
          <ul className="mt-6 space-y-3 font-inter text-base leading-relaxed text-[#5B0017]/80">
            <li>Seafront Road, Old Town, Malindi, Kenya 80200</li>
            <li>+254 712 345 678</li>
            <li>hello@cocomalindi.com</li>
            <li>Daily 09:00 AM &ndash; 11:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#5B0017]/15">
        <p className="mx-auto max-w-[1200px] px-6 py-6 text-center font-poppins text-sm text-[#5B0017]/70">
          &copy; 2021 Coco Restaurant | All rights reserved.
        </p>
      </div>
    </footer>
  )
}
