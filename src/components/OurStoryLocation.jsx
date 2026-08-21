import Reveal from './Reveal'

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" strokeLinejoin="round" />
    </svg>
  )
}

const details = [
  {
    icon: ClockIcon,
    title: 'Working Hours',
    lines: ['Sunday to Saturday 09:00 AM to 11:00 PM', 'Friday 02:00 PM to 1:00 AM'],
  },
  {
    icon: PinIcon,
    title: 'Location',
    lines: ['Seafront Road, Old Town,', 'Malindi, Kenya 80200'],
  },
  {
    icon: PhoneIcon,
    title: 'Contact us',
    lines: ['+254 712 345 678', 'hello@cocomalindi.com'],
  },
]

/**
 * Location / hours / contact section on the "Our Story" page.
 */
export default function OurStoryLocation() {
  return (
    <section className="relative overflow-hidden bg-[#243054]">
      <img
        src="/Rectangle.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 w-[622px] opacity-5"
      />
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
        <Reveal>
          <div className="max-w-md space-y-8 rounded-xl bg-[#5B0017] p-8 shadow-xl shadow-black/30 ring-1 ring-white/10 sm:p-10">
            {details.map((detail) => (
              <div key={detail.title} className="flex gap-5">
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#CC9D2F]/15 text-[#CC9D2F]">
                  <detail.icon />
                </span>
                <div>
                  <h3 className="font-cotorisBold text-lg text-[#CC9D2F]">{detail.title}</h3>
                  {detail.lines.map((line) => (
                    <p key={line} className="mt-1 font-inter text-[15px] leading-relaxed text-white/90">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <img
            src="/Map.png"
            alt="Map showing the location of Coco Restaurant in Malindi"
            loading="lazy"
            className="w-full rounded-xl object-cover shadow-xl shadow-black/40 ring-1 ring-white/10"
          />
        </Reveal>
      </div>
    </section>
  )
}
