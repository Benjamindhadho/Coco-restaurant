/**
 * Decorative corner flourishes for the home page header area.
 * Purely ornamental: non-interactive and hidden from assistive tech.
 */
export default function PageDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden">
      <svg
        viewBox="0 0 70 60"
        fill="none"
        className="absolute left-6 top-40 hidden w-16 text-white/25 xl:block"
      >
        <path
          d="M0.111572 2.94992L6.31357 0.380917L8.88257 6.58292L15.0846 9.15192L12.5156 15.3539L15.0846 21.5559L8.88257 24.1239L6.31357 30.3259L0.111572 27.7579M54.6586 58.7899L61.5426 51.9059L68.4266 58.7899H54.6586Z"
          stroke="currentColor"
          strokeWidth="0.583"
        />
      </svg>
      <svg
        viewBox="0 0 76 76"
        fill="none"
        className="absolute right-6 top-40 hidden w-14 rotate-45 xl:block"
      >
        <rect x="3" y="3" width="70" height="70" stroke="#CC9D2F" strokeOpacity="0.35" strokeWidth="3" />
      </svg>
    </div>
  )
}
