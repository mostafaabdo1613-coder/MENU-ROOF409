"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MenuCategory } from "@/lib/menu-data"

interface CategoryNavigationProps {
  categories: MenuCategory[]
  onCategoryClick: (categoryId: string) => void
}

export function CategoryNavigation({ categories, onCategoryClick }: CategoryNavigationProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 10)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) {
      el.addEventListener("scroll", checkScroll)
      return () => el.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="sticky top-0 z-40 bg-background/98 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20">
      {/* MENU Title */}
      <div className="py-4 border-b border-border/30">
        <h2 className="text-center text-3xl font-bold tracking-[0.3em] text-primary">
          MENU
        </h2>
      </div>
      
      {/* Category Scroll */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full bg-gradient-to-l from-transparent to-background flex items-center justify-start pr-2"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
        
        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-full bg-gradient-to-r from-transparent to-background flex items-center justify-end pl-2"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
        )}
        
        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex gap-2 px-6 py-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className="flex-shrink-0 px-5 py-2.5 bg-card hover:bg-primary text-card-foreground hover:text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 border border-border hover:border-primary shadow-sm hover:shadow-md hover:shadow-primary/20"
            >
              {category.nameAr}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
