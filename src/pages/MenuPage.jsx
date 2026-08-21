import MenuDecorations from '../components/MenuDecorations'
import MenuDishes from '../components/MenuDishes'
import MenuLocation from '../components/MenuLocation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MenuPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#5B0017]">
      <MenuDecorations />
      <div className="relative">
        <Navbar />
        <main>
          {/* Heading, filter tabs and dishes grid */}
          <MenuDishes />
          {/* Location, hours and contact */}
          <MenuLocation />
        </main>
        <Footer />
      </div>
    </div>
  )
}
