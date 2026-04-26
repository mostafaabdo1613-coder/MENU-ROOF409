"use client"

import { useState, useRef } from "react"
import { MenuHeader } from "@/components/menu/menu-header"
import { MenuSection } from "@/components/menu/menu-section"
import { CategoryNavigation } from "@/components/menu/category-navigation"
import { QRCodeModal } from "@/components/menu/qr-code-modal"
import { menuData } from "@/lib/menu-data"

export default function MenuPage() {
  const [showQR, setShowQR] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const scrollToSection = (categoryId: string) => {
    const element = sectionRefs.current[categoryId]
    if (element) {
      const headerOffset = 140
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <MenuHeader onShowQR={() => setShowQR(true)} />
      
      {/* Quick Navigation */}
      <CategoryNavigation 
        categories={menuData} 
        onCategoryClick={scrollToSection}
      />
      
      {/* All Sections */}
      <div className="pb-8">
        {menuData.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            ref={(el) => {
              sectionRefs.current[category.id] = el
            }}
          />
        ))}
      </div>
      
      {showQR && <QRCodeModal onClose={() => setShowQR(false)} />}
    </main>
  )
}
