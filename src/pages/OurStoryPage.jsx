import OurStoryDecorations from '../components/OurStoryDecorations'
import OurStoryIntro from '../components/OurStoryIntro'
import OurStoryLocation from '../components/OurStoryLocation'
import OurStoryMilestones from '../components/OurStoryMilestones'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function OurStoryPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#CC9D2F]">
      <OurStoryDecorations />
      <div className="relative">
        <Navbar variant="light" />
        <main>
          {/* Intro / story text */}
          <OurStoryIntro />
          {/* Milestones timeline */}
          <OurStoryMilestones />
          {/* Location, hours and contact */}
          <OurStoryLocation />
        </main>
        <Footer />
      </div>
    </div>
  )
}
