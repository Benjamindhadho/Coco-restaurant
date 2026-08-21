/**
 * Decorative header flourishes for the menu page.
 * Purely ornamental: non-interactive and hidden from assistive tech.
 */
export default function MenuDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-48 overflow-hidden">
      <svg
        viewBox="0 0 65 56"
        fill="none"
        className="absolute left-6 top-24 hidden w-14 text-white/25 xl:block"
      >
        <path
          d="M0.104309 2.75812L5.90318 0.356101L8.30519 6.15497L14.1041 8.55698L11.702 14.3559L14.1041 20.1547L8.30519 22.5558L5.90318 28.3547L0.104309 25.9536M51.1057 54.9685L57.5423 48.532L63.9788 54.9685H51.1057Z"
          stroke="currentColor"
          strokeWidth="0.545"
        />
      </svg>
      <img
        src="/Rectangle(1).png"
        alt=""
        className="absolute -right-32 -top-10 w-[500px] opacity-5"
      />
    </div>
  )
}
