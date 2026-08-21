import HeroDecorations from '../components/HeroDecorations'
import HeroHeadline from '../components/HeroHeadline'
import Hero from '../components/Hero'
import ImageShowcase from '../components/ImageShowcase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import PageDecorations from '../components/PageDecorations'

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#5B0017]">
      <HeroDecorations />
      <div className="relative">
        <PageDecorations />
        <Navbar />
        <main>
          {/* Hero: headline, subtitle and calls to action */}
          <Hero />
          {/* Gallery: headline and food photography */}
          <HeroHeadline />
          {/* Customer testimonial */}
          <Testimonial />
          {/* Full-width banner with call to action */}
          <ImageShowcase />
        </main>
        <Footer />
      </div>
    </div>
  )
}
