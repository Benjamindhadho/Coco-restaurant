import Reveal from './Reveal'

const milestones = [
  { year: '1998', title: 'Milestone One' },
  { year: '2005', title: 'Milestone Two' },
  { year: '2012', title: 'Milestone Three' },
  { year: '2021', title: 'Milestone Four' },
]

/**
 * Timeline of milestones on the "Our Story" page.
 */
export default function OurStoryMilestones() {
  return (
    <section className="relative overflow-hidden bg-[#5B0017]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-[#CC9D2F]/10 blur-3xl"
      ></div>
      <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <p className="font-inter text-xs font-medium uppercase tracking-[0.3em] text-[#CC9D2F]">
            The Journey
          </p>
          <h2 className="mt-4 font-cotorisBold text-3xl text-white sm:text-4xl">
            Milestones Through The Years
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* connecting line (desktop) */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/15 lg:block"></div>
          <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {milestones.map((milestone, index) => (
              <li key={milestone.year}>
                <Reveal delay={index * 120} className="pt-8 lg:pt-0">
                  <div className="flex items-center gap-3">
                    <span className="h-3.5 w-3.5 shrink-0 rotate-45 bg-[#CC9D2F] shadow-[0_0_12px_rgba(204,157,47,0.6)]"></span>
                    <span className="hidden h-px flex-1 bg-white/15 lg:block"></span>
                  </div>
                  <p className="mt-6 font-poppins text-4xl font-semibold text-[#CC9D2F]">
                    {milestone.year}
                  </p>
                  <h3 className="mt-4 font-playfairDisplay text-lg font-bold text-white">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 font-poppins text-[15px] leading-relaxed text-white/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
